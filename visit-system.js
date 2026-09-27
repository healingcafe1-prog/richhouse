/* =============================================================
   OK복덕방 — 현장방문 예약 시스템 (visit-system.js)
   window.VisitSystem IIFE 모듈
   ============================================================= */
(function(w){
  'use strict';

  /* ── 내부 유틸 ── */
  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function store(k,v){ try{ if(v===undefined) return JSON.parse(localStorage.getItem('vs_'+k)||'null'); localStorage.setItem('vs_'+k,JSON.stringify(v)); }catch(e){ return null; } }
  function uid(){ return 'u_'+Date.now()+'_'+Math.random().toString(36).slice(2,7); }
  function genBook(){ return 'B'+Date.now().toString(36).toUpperCase().slice(-6); }

  /* ─────────────────────────────────────────────
     1. 유저 프로필 (이름·전화·이메일 필수)
  ───────────────────────────────────────────── */
  var PROFILE_KEY = 'profile';

  function getProfile(){ return store(PROFILE_KEY) || null; }
  function saveProfile(p){
    p.updatedAt = new Date().toISOString();
    if(!p.id) p.id = uid();
    if(!p.createdAt) p.createdAt = p.updatedAt;
    if(!p.trustScore) p.trustScore = 40;   // 신규 기본 40점
    if(!p.trustLevel) p.trustLevel = 'NEW';
    store(PROFILE_KEY, p);
    return p;
  }
  function profileComplete(p){
    return p && p.name && p.phone && p.email && p.idVerified;
  }

  /* ─────────────────────────────────────────────
     2. 신뢰도 시스템
  ───────────────────────────────────────────── */
  var TRUST_LEVELS = [
    { min:90, level:'SUPER',  label:'슈퍼 신뢰',  color:'#1B4F8A', bg:'#E8F0FB', icon:'⭐⭐⭐⭐⭐', desc:'검증된 최상위 신뢰 회원' },
    { min:75, level:'HIGH',   label:'높은 신뢰',  color:'#1B6B3A', bg:'#EDF8F1', icon:'⭐⭐⭐⭐',   desc:'다수 거래 완료, 높은 신뢰' },
    { min:55, level:'GOOD',   label:'신뢰 양호',  color:'#4A7F1F', bg:'#F4FBE8', icon:'⭐⭐⭐',     desc:'기본 인증 완료, 양호' },
    { min:35, level:'BASIC',  label:'기본 인증',  color:'#7A5300', bg:'#FFF8E1', icon:'⭐⭐',       desc:'프로필 등록 완료' },
    { min:0,  level:'NEW',    label:'신규 미인증', color:'#666',    bg:'#F4F4F4', icon:'⭐',         desc:'프로필 및 인증이 필요합니다' }
  ];

  function getTrustLevel(score){
    for(var i=0;i<TRUST_LEVELS.length;i++){
      if(score >= TRUST_LEVELS[i].min) return TRUST_LEVELS[i];
    }
    return TRUST_LEVELS[TRUST_LEVELS.length-1];
  }

  function calcTrustScore(p){
    var score = 0;
    if(!p) return 0;
    if(p.name)        score += 10;
    if(p.phone)       score += 15;
    if(p.email)       score += 10;
    if(p.idVerified)  score += 20; // 신분증 인증
    if(p.phoneVerified) score += 15; // 휴대폰 인증
    if(p.emailVerified) score += 5;  // 이메일 인증
    // 거래 이력 가산
    var visits = getMyBookings().filter(function(b){ return b.status === 'done'; });
    score += Math.min(15, visits.length * 3);
    // 노쇼 감점
    var noshows = getMyBookings().filter(function(b){ return b.status === 'noshow'; });
    score = Math.max(0, score - noshows.length * 10);
    return Math.min(100, score);
  }

  /* ─────────────────────────────────────────────
     3. 방문 일정 (매물 등록자가 등록)
  ───────────────────────────────────────────── */
  function getSlots(listingId){
    return store('slots_'+listingId) || [];
  }
  function saveSlots(listingId, slots){
    store('slots_'+listingId, slots);
  }
  function addSlot(listingId, slot){
    var slots = getSlots(listingId);
    slot.id = 'S'+Date.now().toString(36).toUpperCase();
    slot.bookedBy = null;
    slot.status = 'open'; // open | booked | cancelled
    slots.push(slot);
    saveSlots(listingId, slots);
    return slot;
  }
  function removeSlot(listingId, slotId){
    var slots = getSlots(listingId).filter(function(s){ return s.id !== slotId; });
    saveSlots(listingId, slots);
  }

  /* ─────────────────────────────────────────────
     4. 예약 (방문자가 예약)
  ───────────────────────────────────────────── */
  function getAllBookings(){
    return store('bookings') || [];
  }
  function getBookings(listingId){
    return getAllBookings().filter(function(b){ return b.listingId === listingId; });
  }
  function getMyBookings(){
    var p = getProfile();
    if(!p) return [];
    return getAllBookings().filter(function(b){ return b.visitorId === p.id; });
  }
  function getHostBookings(listingId){
    return getBookings(listingId);
  }

  function createBooking(listingId, slotId, visitor){
    var slots = getSlots(listingId);
    var slot = slots.filter(function(s){ return s.id === slotId; })[0];
    if(!slot || slot.status !== 'open') return { ok:false, msg:'이미 예약된 일정이거나 취소된 일정입니다.' };

    var booking = {
      id:         genBook(),
      listingId:  listingId,
      slotId:     slotId,
      slotDate:   slot.date,
      slotTime:   slot.time,
      visitorId:  visitor.id,
      visitorName:visitor.name,
      visitorPhone:visitor.phone,
      visitorEmail:visitor.email,
      purpose:    visitor.purpose || '',
      message:    visitor.message || '',
      status:     'pending',   // pending | confirmed | cancelled | done | noshow
      createdAt:  new Date().toISOString(),
      updatedAt:  new Date().toISOString()
    };

    // 슬롯 상태 업데이트
    slot.status = 'booked';
    slot.bookedBy = visitor.id;
    saveSlots(listingId, slots);

    // 예약 저장
    var all = getAllBookings();
    all.push(booking);
    store('bookings', all);
    return { ok:true, booking:booking };
  }

  function updateBookingStatus(bookingId, status){
    var all = getAllBookings();
    for(var i=0;i<all.length;i++){
      if(all[i].id === bookingId){
        all[i].status = status;
        all[i].updatedAt = new Date().toISOString();
        // 확인 시 신뢰도 업데이트
        if(status === 'done'){
          var p = getProfile();
          if(p){ p.trustScore = calcTrustScore(p); saveProfile(p); }
        }
        break;
      }
    }
    store('bookings', all);
  }

  function cancelBooking(bookingId){
    var all = getAllBookings();
    var booking = null;
    for(var i=0;i<all.length;i++){
      if(all[i].id === bookingId){ booking = all[i]; break; }
    }
    if(!booking) return;
    updateBookingStatus(bookingId, 'cancelled');
    // 슬롯 다시 open
    var slots = getSlots(booking.listingId);
    for(var j=0;j<slots.length;j++){
      if(slots[j].id === booking.slotId){
        slots[j].status = 'open';
        slots[j].bookedBy = null;
        break;
      }
    }
    saveSlots(booking.listingId, slots);
  }

  /* ─────────────────────────────────────────────
     5. UI 렌더러
  ───────────────────────────────────────────── */

  /* 신뢰 배지 */
  function renderTrustBadge(score, inline){
    var lv = getTrustLevel(score);
    var style = inline
      ? 'display:inline-flex;align-items:center;gap:5px;background:'+lv.bg+';color:'+lv.color+';border-radius:20px;padding:3px 10px;font-size:12px;font-weight:700;'
      : 'display:inline-flex;align-items:center;gap:6px;background:'+lv.bg+';color:'+lv.color+';border-radius:8px;padding:6px 12px;font-size:13px;font-weight:700;';
    return '<span style="'+style+'">'+lv.icon+' '+lv.label+' ('+score+'점)</span>';
  }

  /* 프로필 등록/수정 폼 */
  function renderProfileForm(mode){
    var p = getProfile() || {};
    var title = mode==='edit' ? '프로필 수정' : '본인 정보 등록';
    var html = '<div class="vs-modal-overlay" id="vs-profile-overlay">';
    html += '<div class="vs-modal">';
    html += '<div class="vs-modal-head"><span>👤 '+title+'</span><button class="vs-close" onclick="VisitSystem.closeProfileModal()">✕</button></div>';
    html += '<div class="vs-modal-body">';
    html += '<div class="vs-notice">✅ 이름·휴대폰·이메일은 <b>현장방문 예약 및 매물 등록</b>에 필수입니다. 등록자와 방문자 모두 서로의 정보를 확인할 수 있어 <b>신뢰 거래</b>가 이루어집니다.</div>';
    html += '<div class="vs-field"><label>이름 <span class="req">*</span></label><input id="vsp-name" type="text" placeholder="실명 입력 (예: 홍길동)" value="'+esc(p.name||'')+'"></div>';
    html += '<div class="vs-field"><label>휴대폰 번호 <span class="req">*</span></label>';
    html += '<div class="vs-input-row"><input id="vsp-phone" type="tel" placeholder="010-0000-0000" value="'+esc(p.phone||'')+'"><button class="vs-btn-sm" onclick="VisitSystem.sendPhoneCode()">인증번호 발송</button></div>';
    html += '<div id="vsp-phone-verify" style="display:none"><input id="vsp-phone-code" type="number" placeholder="인증번호 6자리" style="margin-top:6px"><button class="vs-btn-sm" onclick="VisitSystem.verifyPhoneCode()">확인</button></div>';
    html += '<div id="vsp-phone-ok" style="display:none;color:#1B6B3A;font-size:12px;margin-top:4px;">✅ 휴대폰 인증 완료</div>';
    html += '</div>';
    html += '<div class="vs-field"><label>이메일 <span class="req">*</span></label><input id="vsp-email" type="email" placeholder="example@email.com" value="'+esc(p.email||'')+'"></div>';
    html += '<div class="vs-field"><label>자기소개 <span style="color:#999;font-size:11px">(선택 — 신뢰도 향상에 도움)</span></label><textarea id="vsp-bio" placeholder="예: 내집마련을 준비 중인 직장인입니다." style="height:60px">'+esc(p.bio||'')+'</textarea></div>';
    html += '<div class="vs-field" style="background:#FFF8EC;border-radius:8px;padding:10px;font-size:12.5px;color:#7A5300;">';
    html += '📋 <b>신뢰도 향상 방법:</b><br>• 프로필 완성 +35점 · 휴대폰 인증 +15점 · 신분증 인증 +20점<br>• 방문 완료 1회당 +3점 · 노쇼(무단 미방문) 1회당 -10점';
    html += '</div>';
    html += '<button class="vs-btn" onclick="VisitSystem.saveProfileForm()">저장하기</button>';
    html += '</div></div></div>';
    return html;
  }

  /* 일정 등록 패널 (매물 등록 시) */
  function renderSlotPanel(listingId){
    var slots = getSlots(listingId);
    var html = '<div class="vs-slot-panel" id="vs-slot-panel-'+listingId+'">';
    html += '<div class="vs-slot-head">📅 구경 가능 일정 등록 <span style="color:#888;font-size:12px">방문자가 무료로 예약할 수 있습니다</span></div>';
    html += '<div class="vs-slot-notice">등록하신 일정에 맞춰 방문 희망자가 예약합니다. 예약이 확정되면 서로의 연락처를 공개합니다.</div>';

    /* 일정 추가 폼 */
    html += '<div class="vs-add-slot">';
    html += '<div class="vs-slot-row">';
    html += '<input type="date" id="vs-slot-date-'+listingId+'" min="'+new Date().toISOString().slice(0,10)+'">';
    html += '<select id="vs-slot-time-'+listingId+'">';
    var times = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
    for(var t=0;t<times.length;t++){ html += '<option>'+times[t]+'</option>'; }
    html += '</select>';
    html += '<select id="vs-slot-dur-'+listingId+'">';
    html += '<option value="30">30분</option><option value="60" selected>1시간</option><option value="90">1.5시간</option><option value="120">2시간</option>';
    html += '</select>';
    html += '<button class="vs-btn-sm" onclick="VisitSystem.addSlotUI(\''+listingId+'\')">+ 추가</button>';
    html += '</div>';
    html += '<div style="font-size:11.5px;color:#888;margin-top:4px;">날짜 · 시간 · 구경 소요시간을 선택하세요</div>';
    html += '</div>';

    /* 등록된 일정 목록 */
    html += '<div id="vs-slot-list-'+listingId+'">';
    html += renderSlotList(listingId, slots);
    html += '</div>';
    html += '</div>';
    return html;
  }

  function renderSlotList(listingId, slots){
    if(!slots || slots.length===0){
      return '<div style="color:#aaa;font-size:13px;padding:10px 0;">아직 등록된 일정이 없습니다.</div>';
    }
    var html = '<div class="vs-slot-items">';
    for(var i=0;i<slots.length;i++){
      var s = slots[i];
      var statusLabel = {open:'예약가능',booked:'예약완료',cancelled:'취소'}[s.status] || s.status;
      var statusColor = {open:'#1B6B3A',booked:'#B5482F',cancelled:'#999'}[s.status] || '#666';
      html += '<div class="vs-slot-item">';
      html += '<span class="vs-slot-date">'+esc(s.date)+' '+esc(s.time)+'</span>';
      html += '<span class="vs-slot-dur">'+esc(s.duration)+'분</span>';
      html += '<span style="color:'+statusColor+';font-size:12px;font-weight:700;">'+statusLabel+'</span>';
      if(s.status==='open'){
        html += '<button class="vs-btn-xs vs-del" onclick="VisitSystem.removeSlotUI(\''+listingId+'\',\''+s.id+'\')">삭제</button>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* 예약 모달 (방문자용) */
  function renderBookingModal(listingId, listingAddr){
    var slots = getSlots(listingId).filter(function(s){ return s.status==='open'; });
    var p = getProfile();
    var html = '<div class="vs-modal-overlay" id="vs-booking-overlay">';
    html += '<div class="vs-modal">';
    html += '<div class="vs-modal-head"><span>🏠 현장방문 예약</span><button class="vs-close" onclick="VisitSystem.closeBookingModal()">✕</button></div>';
    html += '<div class="vs-modal-body">';
    html += '<div style="font-size:13.5px;font-weight:700;color:var(--ink,#1a2740);margin-bottom:14px;">'+esc(listingAddr)+'</div>';

    if(!p || !profileComplete(p)){
      html += '<div class="vs-notice warn">⚠️ 현장방문 예약을 위해 <b>본인 정보(이름·전화·이메일·인증)</b>가 필요합니다.</div>';
      html += '<button class="vs-btn" onclick="VisitSystem.openProfileModal()">본인 정보 등록하기</button>';
    } else {
      /* 내 신뢰도 표시 */
      html += '<div style="margin-bottom:14px;">내 신뢰도: '+renderTrustBadge(p.trustScore||40, true)+'</div>';

      if(slots.length === 0){
        html += '<div class="vs-notice">현재 예약 가능한 일정이 없습니다. 등록자에게 직접 문의해 주세요.</div>';
      } else {
        html += '<div class="vs-field"><label>방문 일정 선택 <span class="req">*</span></label>';
        html += '<select id="vsbk-slot">';
        for(var i=0;i<slots.length;i++){
          html += '<option value="'+slots[i].id+'">'+slots[i].date+' '+slots[i].time+' ('+slots[i].duration+'분)</option>';
        }
        html += '</select></div>';
        html += '<div class="vs-field"><label>방문 목적 <span class="req">*</span></label>';
        html += '<select id="vsbk-purpose">';
        html += '<option value="매매검토">매매 검토</option>';
        html += '<option value="전세검토">전세 검토</option>';
        html += '<option value="월세검토">월세 검토</option>';
        html += '<option value="투자분석">투자 분석</option>';
        html += '<option value="단순구경">단순 구경</option>';
        html += '</select></div>';
        html += '<div class="vs-field"><label>등록자에게 전달할 메시지</label>';
        html += '<textarea id="vsbk-msg" placeholder="예: 아이 2명 동반 예정입니다. 주차 가능한지 확인 부탁드립니다." style="height:70px"></textarea></div>';
        /* 방문자 정보 미리보기 */
        html += '<div class="vs-info-preview">';
        html += '<div class="vs-ip-title">📋 등록자에게 공개되는 내 정보</div>';
        html += '<div class="vs-ip-row"><span>이름</span><b>'+esc(p.name)+'</b></div>';
        html += '<div class="vs-ip-row"><span>연락처</span><b>'+esc(p.phone)+'</b></div>';
        html += '<div class="vs-ip-row"><span>이메일</span><b>'+esc(p.email)+'</b></div>';
        html += '<div class="vs-ip-row"><span>신뢰도</span><b>'+getTrustLevel(p.trustScore||40).label+'</b></div>';
        html += '</div>';
        html += '<button class="vs-btn" onclick="VisitSystem.submitBooking(\''+listingId+'\')">예약 신청하기</button>';
      }
    }
    html += '</div></div></div>';
    return html;
  }

  /* 매물 상세의 방문 일정 표시 패널 (방문자용) */
  function renderVisitPanel(listing){
    var listingId = listing.id;
    var slots = getSlots(listingId).filter(function(s){ return s.status==='open'; });
    var bookings = getBookings(listingId);
    var confirmedCount = bookings.filter(function(b){ return b.status==='confirmed'||b.status==='done'; }).length;

    var html = '<div class="vs-visit-panel">';
    html += '<div class="vs-vp-head">';
    html += '<span>🏠 무료 현장방문 예약</span>';
    html += '<span class="vs-free-badge">중개비 없음</span>';
    html += '</div>';

    html += '<div class="vs-vp-desc">집을 직접 보고 결정하세요. <b>방문 비용 무료</b> — 예약 후 집주인과 직접 만납니다.</div>';

    /* 신뢰 통계 */
    html += '<div class="vs-trust-stats">';
    html += '<div class="vs-ts-item"><span class="vs-ts-num">'+slots.length+'</span><span class="vs-ts-label">예약가능 일정</span></div>';
    html += '<div class="vs-ts-item"><span class="vs-ts-num">'+confirmedCount+'</span><span class="vs-ts-label">이번달 방문완료</span></div>';
    html += '<div class="vs-ts-item"><span class="vs-ts-num">0원</span><span class="vs-ts-label">방문 비용</span></div>';
    html += '</div>';

    if(slots.length > 0){
      html += '<div class="vs-slot-preview">';
      var show = slots.slice(0,3);
      for(var i=0;i<show.length;i++){
        html += '<div class="vs-sp-item">'+
          '<span class="vs-sp-date">'+show[i].date+'</span>'+
          '<span class="vs-sp-time">'+show[i].time+'</span>'+
          '<span class="vs-sp-dur">'+show[i].duration+'분</span>'+
          '</div>';
      }
      if(slots.length > 3) html += '<div style="font-size:12px;color:#888;text-align:right">+ '+( slots.length-3)+'개 일정 더보기</div>';
      html += '</div>';
    } else {
      html += '<div style="font-size:13px;color:#aaa;padding:10px 0;">현재 예약 가능한 일정이 없습니다.</div>';
    }

    html += '<button class="vs-btn" id="vs-book-btn" onclick="VisitSystem.openBookingModal(\''+listingId+'\',\''+esc(listing.addr)+'\')">📅 방문 예약하기</button>';
    html += '<div style="font-size:11.5px;color:#aaa;margin-top:8px;text-align:center;">예약 시 이름·연락처가 등록자에게 공개됩니다</div>';
    html += '</div>';
    return html;
  }

  /* 등록자용 — 예약 현황 패널 */
  function renderHostPanel(listingId){
    var bookings = getBookings(listingId);
    if(bookings.length === 0) return '<div style="color:#aaa;font-size:13px;">아직 예약 신청이 없습니다.</div>';
    var html = '<div class="vs-host-panel">';
    html += '<div style="font-size:14px;font-weight:700;margin-bottom:12px;">📋 방문 예약 현황 ('+bookings.length+'건)</div>';
    for(var i=0;i<bookings.length;i++){
      var b = bookings[i];
      var sColor = {pending:'#7A5300',confirmed:'#1B6B3A',cancelled:'#999',done:'#1B4F8A',noshow:'#B5482F'}[b.status]||'#666';
      var sLabel = {pending:'검토중',confirmed:'확정',cancelled:'취소',done:'방문완료',noshow:'노쇼'}[b.status]||b.status;
      html += '<div class="vs-host-item">';
      html += '<div class="vs-hi-row"><b>'+esc(b.slotDate)+' '+esc(b.slotTime)+'</b><span style="color:'+sColor+';font-weight:700;font-size:12px;">'+sLabel+'</span></div>';
      html += '<div class="vs-hi-row"><span>방문자</span><b>'+esc(b.visitorName)+'</b></div>';
      html += '<div class="vs-hi-row"><span>연락처</span><b>'+esc(b.visitorPhone)+'</b></div>';
      html += '<div class="vs-hi-row"><span>목적</span><b>'+esc(b.purpose)+'</b></div>';
      if(b.message) html += '<div class="vs-hi-row vs-hi-msg"><span>메시지</span><span>'+esc(b.message)+'</span></div>';
      if(b.status==='pending'){
        html += '<div class="vs-hi-actions">';
        html += '<button class="vs-btn-sm" onclick="VisitSystem.confirmBooking(\''+b.id+'\')">✅ 확정</button>';
        html += '<button class="vs-btn-sm vs-del" onclick="VisitSystem.rejectBooking(\''+b.id+'\')">❌ 거절</button>';
        html += '</div>';
      }
      if(b.status==='confirmed'){
        html += '<div class="vs-hi-actions">';
        html += '<button class="vs-btn-sm" onclick="VisitSystem.doneBooking(\''+b.id+'\')">방문완료 처리</button>';
        html += '<button class="vs-btn-sm vs-del" onclick="VisitSystem.noshowBooking(\''+b.id+'\')">노쇼 처리</button>';
        html += '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* 마이페이지 — 내 예약 목록 */
  function renderMyBookings(){
    var bookings = getMyBookings();
    if(bookings.length === 0) return '<div style="color:#aaa;text-align:center;padding:20px 0;font-size:14px;">예약 내역이 없습니다.</div>';
    var html = '<div class="vs-my-bookings">';
    for(var i=0;i<bookings.length;i++){
      var b = bookings[i];
      var sColor = {pending:'#7A5300',confirmed:'#1B6B3A',cancelled:'#999',done:'#1B4F8A',noshow:'#B5482F'}[b.status]||'#666';
      var sLabel = {pending:'검토중',confirmed:'예약확정',cancelled:'취소됨',done:'방문완료',noshow:'노쇼'}[b.status]||b.status;
      html += '<div class="vs-my-item">';
      html += '<div class="vs-my-date">'+esc(b.slotDate)+' '+esc(b.slotTime)+'</div>';
      html += '<div class="vs-my-addr">'+esc(b.listingId)+'</div>';
      html += '<div class="vs-my-status" style="color:'+sColor+'">'+sLabel+'</div>';
      if(b.status==='pending'||b.status==='confirmed'){
        html += '<button class="vs-btn-xs vs-del" onclick="VisitSystem.cancelMyBooking(\''+b.id+'\')">예약 취소</button>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* ─────────────────────────────────────────────
     6. CSS 자동 삽입
  ───────────────────────────────────────────── */
  function injectStyles(){
    if(document.getElementById('vs-styles')) return;
    var css = [
      /* 모달 */
      '.vs-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px}',
      '.vs-modal{background:#fff;border-radius:16px;width:100%;max-width:500px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.25)}',
      '.vs-modal-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #eee;font-size:16px;font-weight:700;color:#1a2740}',
      '.vs-close{background:none;border:none;font-size:18px;cursor:pointer;color:#888;padding:4px}',
      '.vs-modal-body{padding:20px}',
      /* 폼 요소 */
      '.vs-field{margin-bottom:14px}',
      '.vs-field label{display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:5px}',
      '.vs-field input,.vs-field select,.vs-field textarea{width:100%;padding:9px 12px;border:1.5px solid #dde3ee;border-radius:8px;font-size:13.5px;box-sizing:border-box;outline:none;transition:border-color .2s}',
      '.vs-field input:focus,.vs-field select:focus,.vs-field textarea:focus{border-color:#3B6FD4}',
      '.vs-input-row{display:flex;gap:8px}',
      '.vs-input-row input{flex:1}',
      '.req{color:#c0392b}',
      /* 버튼 */
      '.vs-btn{width:100%;background:#1a2740;color:#fff;border:none;border-radius:10px;padding:12px;font-size:14.5px;font-weight:700;cursor:pointer;margin-top:8px;transition:background .2s}',
      '.vs-btn:hover{background:#243352}',
      '.vs-btn-sm{background:#f0f2f8;color:#1a2740;border:1.5px solid #dde3ee;border-radius:7px;padding:6px 12px;font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap}',
      '.vs-btn-sm:hover{background:#e4e8f4}',
      '.vs-btn-xs{background:transparent;border:1.5px solid #dde3ee;border-radius:6px;padding:3px 9px;font-size:11.5px;cursor:pointer;color:#666}',
      '.vs-del{border-color:#f5c6cb;color:#c0392b}',
      /* 공지/안내 */
      '.vs-notice{background:#EDF8F1;border-radius:8px;padding:10px 12px;font-size:12.5px;color:#1B6B3A;line-height:1.6;margin-bottom:14px}',
      '.vs-notice.warn{background:#FFF8E1;color:#7A5300}',
      /* 신뢰 정보 미리보기 */
      '.vs-info-preview{background:#F7F9FE;border-radius:10px;padding:12px;margin:12px 0;border:1.5px solid #dde3ee}',
      '.vs-ip-title{font-size:12px;font-weight:700;color:#666;margin-bottom:8px}',
      '.vs-ip-row{display:flex;justify-content:space-between;font-size:13px;padding:3px 0}',
      '.vs-ip-row span{color:#888}',
      /* 일정 패널 (등록자) */
      '.vs-slot-panel{background:#F7F9FE;border-radius:12px;padding:16px;margin:16px 0;border:1.5px solid #dde3ee}',
      '.vs-slot-head{font-size:14.5px;font-weight:700;color:#1a2740;margin-bottom:6px}',
      '.vs-slot-notice{font-size:12px;color:#888;margin-bottom:12px;line-height:1.5}',
      '.vs-add-slot{background:#fff;border-radius:8px;padding:12px;border:1.5px solid #dde3ee;margin-bottom:12px}',
      '.vs-slot-row{display:flex;gap:8px;flex-wrap:wrap}',
      '.vs-slot-row input,.vs-slot-row select{flex:1;min-width:110px;padding:7px 10px;border:1.5px solid #dde3ee;border-radius:7px;font-size:13px}',
      '.vs-slot-items{display:flex;flex-direction:column;gap:8px}',
      '.vs-slot-item{display:flex;align-items:center;gap:10px;background:#fff;border-radius:8px;padding:8px 12px;font-size:13px;border:1px solid #eee;flex-wrap:wrap}',
      '.vs-slot-date{font-weight:700;color:#1a2740}',
      '.vs-slot-dur{color:#888;font-size:12px}',
      /* 방문 패널 (방문자용 — 매물 상세) */
      '.vs-visit-panel{background:linear-gradient(135deg,#1a2740 0%,#243352 100%);border-radius:14px;padding:20px;color:#fff;margin:16px 0}',
      '.vs-vp-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;font-size:15px;font-weight:700}',
      '.vs-free-badge{background:#F5A623;color:#fff;border-radius:20px;padding:3px 10px;font-size:11.5px;font-weight:700}',
      '.vs-vp-desc{font-size:13px;color:rgba(255,255,255,.8);margin-bottom:14px;line-height:1.5}',
      '.vs-trust-stats{display:flex;gap:12px;margin-bottom:14px}',
      '.vs-ts-item{flex:1;background:rgba(255,255,255,.1);border-radius:8px;padding:8px;text-align:center}',
      '.vs-ts-num{display:block;font-size:20px;font-weight:800}',
      '.vs-ts-label{display:block;font-size:11px;color:rgba(255,255,255,.7);margin-top:2px}',
      '.vs-slot-preview{margin-bottom:14px}',
      '.vs-sp-item{display:flex;gap:10px;align-items:center;padding:7px 10px;background:rgba(255,255,255,.1);border-radius:8px;margin-bottom:6px;font-size:13px}',
      '.vs-sp-date{font-weight:700}',
      '.vs-sp-time{color:rgba(255,255,255,.8)}',
      '.vs-sp-dur{color:rgba(255,255,255,.6);font-size:12px}',
      '.vs-visit-panel .vs-btn{background:#F5A623;color:#1a2740;margin-top:4px}',
      '.vs-visit-panel .vs-btn:hover{background:#e8961a}',
      /* 예약 현황 (등록자) */
      '.vs-host-panel{display:flex;flex-direction:column;gap:10px}',
      '.vs-host-item{background:#f7f9fe;border-radius:10px;padding:12px 14px;border:1.5px solid #dde3ee;font-size:13px}',
      '.vs-hi-row{display:flex;justify-content:space-between;align-items:center;padding:2px 0}',
      '.vs-hi-row span:first-child{color:#888;min-width:60px}',
      '.vs-hi-msg{background:#fff;border-radius:6px;padding:6px 8px;margin-top:4px;font-size:12px}',
      '.vs-hi-actions{display:flex;gap:8px;margin-top:8px}',
      /* 내 예약 목록 */
      '.vs-my-bookings{display:flex;flex-direction:column;gap:10px}',
      '.vs-my-item{background:#f7f9fe;border-radius:10px;padding:12px 14px;border:1.5px solid #dde3ee;font-size:13px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}',
      '.vs-my-date{font-weight:700;color:#1a2740;min-width:120px}',
      '.vs-my-addr{flex:1;color:#555}',
      '.vs-my-status{font-size:12px;font-weight:700}'
    ].join('\n');
    var el = document.createElement('style');
    el.id = 'vs-styles';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ─────────────────────────────────────────────
     7. 인터랙션 핸들러 (window에 노출)
  ───────────────────────────────────────────── */
  var _curListingId = null;
  var _curListingAddr = null;
  var _phoneCode = null;

  function openProfileModal(mode){
    injectStyles();
    removeModal('vs-profile-overlay');
    document.body.insertAdjacentHTML('beforeend', renderProfileForm(mode||'new'));
  }
  function closeProfileModal(){
    removeModal('vs-profile-overlay');
  }
  function saveProfileForm(){
    var name  = (document.getElementById('vsp-name')||{}).value||'';
    var phone = (document.getElementById('vsp-phone')||{}).value||'';
    var email = (document.getElementById('vsp-email')||{}).value||'';
    var bio   = (document.getElementById('vsp-bio')||{}).value||'';
    if(!name.trim()){ vsToast('이름을 입력해주세요'); return; }
    if(!phone.trim()){ vsToast('휴대폰 번호를 입력해주세요'); return; }
    if(!email.trim()||email.indexOf('@')<0){ vsToast('올바른 이메일을 입력해주세요'); return; }
    var p = getProfile() || {};
    p.name = name.trim();
    p.phone = phone.trim();
    p.email = email.trim();
    p.bio = bio.trim();
    p.emailVerified = !!email.trim();
    if(!p.idVerified) p.idVerified = false;
    var saved = saveProfile(p);
    saved.trustScore = calcTrustScore(saved);
    saveProfile(saved);
    closeProfileModal();
    vsToast('✅ 프로필이 저장되었습니다. 신뢰도: '+saved.trustScore+'점');
    // 마이페이지 새로고침
    if(typeof renderProfileSection === 'function') renderProfileSection();
  }
  function sendPhoneCode(){
    var phone = (document.getElementById('vsp-phone')||{}).value||'';
    if(!phone.trim()){ vsToast('휴대폰 번호를 먼저 입력하세요'); return; }
    _phoneCode = Math.floor(100000 + Math.random()*900000).toString();
    var el = document.getElementById('vsp-phone-verify');
    if(el) el.style.display = '';
    // 실제 서비스에서는 SMS API 연동. 여기서는 시뮬레이션
    vsToast('📱 인증번호가 발송되었습니다 (데모: '+_phoneCode+')');
  }
  function verifyPhoneCode(){
    var input = (document.getElementById('vsp-phone-code')||{}).value||'';
    if(input === _phoneCode){
      var okEl = document.getElementById('vsp-phone-ok');
      if(okEl) okEl.style.display = '';
      var p = getProfile() || {};
      p.phoneVerified = true;
      saveProfile(p);
      vsToast('✅ 휴대폰 인증 완료');
    } else {
      vsToast('❌ 인증번호가 일치하지 않습니다');
    }
  }

  function addSlotUI(listingId){
    var dateEl = document.getElementById('vs-slot-date-'+listingId);
    var timeEl = document.getElementById('vs-slot-time-'+listingId);
    var durEl  = document.getElementById('vs-slot-dur-'+listingId);
    if(!dateEl||!timeEl||!durEl) return;
    var date = dateEl.value;
    var time = timeEl.value;
    var dur  = durEl.value;
    if(!date){ vsToast('날짜를 선택해주세요'); return; }
    addSlot(listingId, { date:date, time:time, duration:parseInt(dur) });
    var listEl = document.getElementById('vs-slot-list-'+listingId);
    if(listEl) listEl.innerHTML = renderSlotList(listingId, getSlots(listingId));
    vsToast('✅ 일정이 추가되었습니다');
  }
  function removeSlotUI(listingId, slotId){
    removeSlot(listingId, slotId);
    var listEl = document.getElementById('vs-slot-list-'+listingId);
    if(listEl) listEl.innerHTML = renderSlotList(listingId, getSlots(listingId));
    vsToast('일정이 삭제되었습니다');
  }

  function openBookingModal(listingId, addr){
    injectStyles();
    _curListingId = listingId;
    _curListingAddr = addr;
    removeModal('vs-booking-overlay');
    document.body.insertAdjacentHTML('beforeend', renderBookingModal(listingId, addr));
  }
  function closeBookingModal(){
    removeModal('vs-booking-overlay');
  }
  function submitBooking(listingId){
    var p = getProfile();
    if(!p||!profileComplete(p)){ vsToast('프로필 인증이 필요합니다'); return; }
    var slotEl   = document.getElementById('vsbk-slot');
    var purpEl   = document.getElementById('vsbk-purpose');
    var msgEl    = document.getElementById('vsbk-msg');
    if(!slotEl) return;
    var slotId  = slotEl.value;
    var purpose = purpEl ? purpEl.value : '';
    var message = msgEl ? msgEl.value : '';
    var result = createBooking(listingId, slotId, {
      id:p.id, name:p.name, phone:p.phone, email:p.email,
      purpose:purpose, message:message
    });
    if(result.ok){
      closeBookingModal();
      vsToast('✅ 예약 신청 완료! 예약번호: '+result.booking.id+'\n등록자 확인 후 연락드립니다.');
    } else {
      vsToast('❌ '+result.msg);
    }
  }
  function confirmBooking(bookingId){ updateBookingStatus(bookingId,'confirmed'); refreshHostPanel(); vsToast('✅ 예약을 확정했습니다. 방문자에게 알림이 발송됩니다.'); }
  function rejectBooking(bookingId){ cancelBooking(bookingId); refreshHostPanel(); vsToast('예약을 거절했습니다.'); }
  function doneBooking(bookingId){ updateBookingStatus(bookingId,'done'); refreshHostPanel(); vsToast('✅ 방문완료 처리되었습니다. 신뢰도가 상승했습니다!'); }
  function noshowBooking(bookingId){ updateBookingStatus(bookingId,'noshow'); refreshHostPanel(); vsToast('⚠️ 노쇼 처리되었습니다. 방문자 신뢰도가 감점됩니다.'); }
  function cancelMyBooking(bookingId){ cancelBooking(bookingId); vsToast('예약이 취소되었습니다.'); var el = document.getElementById('vs-my-list'); if(el) el.innerHTML = renderMyBookings(); }

  function refreshHostPanel(){
    var el = document.getElementById('vs-host-panel-wrap');
    if(el && _curListingId) el.innerHTML = renderHostPanel(_curListingId);
  }
  function removeModal(id){ var el = document.getElementById(id); if(el) el.remove(); }
  function vsToast(msg){
    if(typeof toast === 'function'){ toast(msg); return; }
    var t = document.createElement('div');
    t.style.cssText='position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1a2740;color:#fff;padding:10px 20px;border-radius:10px;z-index:9999;font-size:13px;max-width:90%;text-align:center;white-space:pre-wrap;';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function(){ t.remove(); }, 3000);
  }

  /* ─────────────────────────────────────────────
     8. Public API
  ───────────────────────────────────────────── */
  var VS = {
    // 데이터
    getProfile:        getProfile,
    saveProfile:       saveProfile,
    profileComplete:   profileComplete,
    calcTrustScore:    calcTrustScore,
    getTrustLevel:     getTrustLevel,
    getSlots:          getSlots,
    addSlot:           addSlot,
    removeSlot:        removeSlot,
    getBookings:       getBookings,
    getMyBookings:     getMyBookings,
    createBooking:     createBooking,
    // 렌더러
    renderTrustBadge:  renderTrustBadge,
    renderProfileForm: renderProfileForm,
    renderSlotPanel:   renderSlotPanel,
    renderVisitPanel:  renderVisitPanel,
    renderHostPanel:   renderHostPanel,
    renderMyBookings:  renderMyBookings,
    injectStyles:      injectStyles,
    // 핸들러
    openProfileModal:  openProfileModal,
    closeProfileModal: closeProfileModal,
    saveProfileForm:   saveProfileForm,
    sendPhoneCode:     sendPhoneCode,
    verifyPhoneCode:   verifyPhoneCode,
    addSlotUI:         addSlotUI,
    removeSlotUI:      removeSlotUI,
    openBookingModal:  openBookingModal,
    closeBookingModal: closeBookingModal,
    submitBooking:     submitBooking,
    confirmBooking:    confirmBooking,
    rejectBooking:     rejectBooking,
    doneBooking:       doneBooking,
    noshowBooking:     noshowBooking,
    cancelMyBooking:   cancelMyBooking
  };

  w.VisitSystem = VS;
})(window);
