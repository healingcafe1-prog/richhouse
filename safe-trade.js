/* =============================================================
   OK복덕방 — 안전거래 서류·본인확인 시스템 (safe-trade.js)
   window.SafeTrade IIFE 모듈

   ▶ 직거래 필수 서류 (7종):
     1. 등기사항전부증명서 (열람일 3개월 이내)
     2. 건축물대장 (전유부 포함)
     3. 토지이용계획확인원
     4. 소유자 신분증 (주민등록증/운전면허증/여권)
     5. 임대차 계약서 (임대권한 보유자인 경우)
     6. 주민등록등본/초본 (실거주 확인)
     7. 국세·지방세 완납증명서

   ▶ 본인확인 절차:
     - 이름 + 생년월일 + 연락처 + 신분증 사진 업로드
     - 휴대폰 인증 코드 (6자리, 데모)
     - 실명인증 상태 표시

   ▶ 안전거래 10점 체크리스트:
     1. 등기사항전부증명서 제출 ★★★
     2. 소유자 신분증 제출 ★★★
     3. 건축물대장 제출 ★★
     4. 근저당 없음 (또는 낮은 비율) ★★
     5. 가압류/압류 없음 ★★★
     6. 선순위 임차인 없음 ★★
     7. 세금 체납 없음 ★★
     8. 위반건축물 아님 ★
     9. 토지이용계획 확인 ★
     10. 전세금 반환보증보험 가입 의향 ★
   ============================================================= */
(function(w){
  'use strict';

  /* ── 필수 서류 정의 ──────────────────────────────────── */
  var DOC_LIST = [
    {
      id: 'registry',
      label: '등기사항전부증명서',
      desc: '인터넷등기소(www.iros.go.kr) 발급 · 열람일 3개월 이내',
      required: true,
      stars: 3,
      tip: '등기소 방문 또는 인터넷등기소에서 발급. 소유자·근저당·압류 모두 확인 가능합니다.',
      icon: '📋'
    },
    {
      id: 'idcard',
      label: '소유자 신분증',
      desc: '주민등록증·운전면허증·여권 중 1개',
      required: true,
      stars: 3,
      tip: '신분증 앞면 사진. 소유자명과 등기부 소유자명이 일치해야 합니다.',
      icon: '🪪'
    },
    {
      id: 'building',
      label: '건축물대장',
      desc: '정부24(gov.kr) 발급 · 전유부 포함',
      required: true,
      stars: 2,
      tip: '위반건축물 여부, 용도, 면적 확인. 정부24에서 무료 발급 가능합니다.',
      icon: '🏗️'
    },
    {
      id: 'resident',
      label: '주민등록등본/초본',
      desc: '실거주 현황 확인 · 발급 3개월 이내',
      required: true,
      stars: 2,
      tip: '정부24 또는 주민센터에서 발급. 전입신고 현황을 확인합니다.',
      icon: '🏠'
    },
    {
      id: 'land_use',
      label: '토지이용계획확인원',
      desc: '토지이음(eum.go.kr) 발급',
      required: false,
      stars: 1,
      tip: '토지 용도, 건폐율, 용적률, 개발 제한 등을 확인합니다.',
      icon: '🗺️'
    },
    {
      id: 'tax_cert',
      label: '국세·지방세 완납증명서',
      desc: '국세청 홈택스·위택스 발급',
      required: false,
      stars: 2,
      tip: '세금 체납이 없는지 확인. 임차인 보호를 위해 권장합니다.',
      icon: '📄'
    },
    {
      id: 'lease_contract',
      label: '임대차 계약서 (해당 시)',
      desc: '기존 임차인 있을 경우 현 임대차 계약서',
      required: false,
      stars: 2,
      tip: '기존 임차인이 있는 경우 선순위 보증금 확인을 위해 필요합니다.',
      icon: '📝'
    }
  ];

  /* ── 안전거래 체크리스트 ─────────────────────────────── */
  var SAFETY_CHECKLIST = [
    { id: 'chk_registry',   label: '등기사항전부증명서 제출',         score: 20, required: true },
    { id: 'chk_idcard',     label: '소유자 신분증 제출',              score: 15, required: true },
    { id: 'chk_building',   label: '건축물대장 제출',                 score: 10, required: true },
    { id: 'chk_no_mortgage',label: '근저당 없음 (또는 매매가 30% 이하)', score: 10, required: false },
    { id: 'chk_no_injunct', label: '가압류·압류 없음',                score: 15, required: true },
    { id: 'chk_no_tenant',  label: '선순위 임차인 없음',              score: 10, required: false },
    { id: 'chk_no_tax',     label: '세금 체납 없음',                  score: 10, required: false },
    { id: 'chk_legal_bldg', label: '위반건축물 아님',                 score: 5,  required: false },
    { id: 'chk_resident',   label: '주민등록등본/초본 제출',           score: 5,  required: false },
    { id: 'chk_insurance',  label: '전세금 반환보증보험 가입 의향',    score: 10, required: false }
  ];

  /* ── localStorage 헬퍼 ──────────────────────────────── */
  function store(k, v){
    try {
      if(v === undefined) return JSON.parse(localStorage.getItem('st_' + k) || 'null');
      localStorage.setItem('st_' + k, JSON.stringify(v));
    } catch(e){ return null; }
  }

  /* ── 서류 데이터 조회/저장 ───────────────────────────── */
  function getDocs(lid){ return store('docs_' + lid) || {}; }
  function saveDocs(lid, d){ store('docs_' + lid, d); }

  /* ── 본인확인 데이터 ─────────────────────────────────── */
  function getIdentity(lid){ return store('identity_' + lid) || {}; }
  function saveIdentity(lid, d){ store('identity_' + lid, d); }

  /* ── 체크리스트 상태 ─────────────────────────────────── */
  function getChecklist(lid){ return store('checklist_' + lid) || {}; }
  function saveChecklist(lid, d){ store('checklist_' + lid, d); }

  /* ── 안전점수 계산 ───────────────────────────────────── */
  function calcSafetyScore(lid){
    var docs     = getDocs(lid);
    var identity = getIdentity(lid);
    var chk      = getChecklist(lid);
    var score    = 0;

    // 서류 기반 점수
    SAFETY_CHECKLIST.forEach(function(item){
      var checked = false;
      if(item.id === 'chk_registry')    checked = !!(docs.registry   && docs.registry.uploaded);
      else if(item.id === 'chk_idcard') checked = !!(identity.idVerified) || !!(docs.idcard && docs.idcard.uploaded);
      else if(item.id === 'chk_building') checked = !!(docs.building && docs.building.uploaded);
      else if(item.id === 'chk_resident') checked = !!(docs.resident && docs.resident.uploaded);
      else checked = !!(chk[item.id]);
      if(checked) score += item.score;
    });
    return Math.min(100, score);
  }

  /* ── 점수 → 등급 ─────────────────────────────────────── */
  function getGrade(score){
    if(score >= 90) return { grade: 'S', label: '안심', color: '#1B4F8A', bg: '#E8F0FB', icon: '🛡️🛡️🛡️' };
    if(score >= 70) return { grade: 'A', label: '우수', color: '#1B6B3A', bg: '#EDF8F1', icon: '🛡️🛡️' };
    if(score >= 50) return { grade: 'B', label: '보통', color: '#4A7F1F', bg: '#F4FBE8', icon: '🛡️' };
    if(score >= 30) return { grade: 'C', label: '주의', color: '#7A5300', bg: '#FFF8E1', icon: '⚠️' };
    return             { grade: 'D', label: '위험', color: '#922B21', bg: '#FDEDEC', icon: '🚨' };
  }

  /* ── 안전 배지 HTML ─────────────────────────────────── */
  function renderSafeBadge(score){
    var g = getGrade(score);
    return '<span style="display:inline-flex;align-items:center;gap:4px;background:' + g.bg + ';color:' + g.color + ';border-radius:20px;padding:3px 10px;font-size:12px;font-weight:700;border:1px solid ' + g.color + '20;">' + g.icon + ' 안전도 ' + score + '점 · ' + g.label + '</span>';
  }

  /* ── CSS 삽입 ────────────────────────────────────────── */
  function injectStyles(){
    if(document.getElementById('st-styles')) return;
    var s = document.createElement('style');
    s.id = 'st-styles';
    s.textContent = [
      /* 서류 목록 */
      '.st-doc-list{display:flex;flex-direction:column;gap:10px;margin-top:4px;}',
      '.st-doc-item{border:1px solid #E0E0E0;border-radius:10px;padding:12px 14px;background:#fafafa;transition:border-color .2s;}',
      '.st-doc-item.uploaded{border-color:#1B6B3A;background:#F0FBF4;}',
      '.st-doc-item.required-missing{border-color:#c0392b;background:#FEF0F0;}',
      '.st-doc-head{display:flex;align-items:center;gap:8px;margin-bottom:6px;}',
      '.st-doc-icon{font-size:20px;}',
      '.st-doc-label{font-size:14px;font-weight:700;flex:1;color:#222;}',
      '.st-doc-req{font-size:11px;color:#c0392b;font-weight:600;background:#FEF0F0;padding:2px 6px;border-radius:4px;}',
      '.st-doc-opt{font-size:11px;color:#888;background:#F4F4F4;padding:2px 6px;border-radius:4px;}',
      '.st-doc-stars{color:#F39C12;font-size:11px;}',
      '.st-doc-desc{font-size:12px;color:#666;margin-bottom:8px;line-height:1.5;}',
      '.st-doc-tip{font-size:11.5px;color:#555;background:#F8F9FA;border-radius:6px;padding:6px 10px;line-height:1.5;margin-bottom:8px;}',
      '.st-doc-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}',
      '.st-upload-btn{background:#1B4F8A;color:#fff;border:none;border-radius:7px;padding:7px 16px;font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;}',
      '.st-upload-btn:hover{background:#154070;}',
      '.st-upload-input{display:none;}',
      '.st-uploaded-name{font-size:12px;color:#1B6B3A;font-weight:600;display:flex;align-items:center;gap:6px;}',
      '.st-del-btn{background:none;border:1px solid #c0392b;color:#c0392b;border-radius:5px;padding:3px 8px;font-size:11px;cursor:pointer;}',
      '.st-del-btn:hover{background:#c0392b;color:#fff;}',
      '.st-doc-status{font-size:12px;font-weight:600;}',
      '.st-doc-status.ok{color:#1B6B3A;}',
      '.st-doc-status.no{color:#999;}',

      /* 안전점수 바 */
      '.st-score-wrap{background:#F8F9FA;border-radius:12px;padding:16px 18px;margin-bottom:16px;}',
      '.st-score-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}',
      '.st-score-label{font-size:15px;font-weight:700;color:#222;}',
      '.st-score-num{font-size:22px;font-weight:800;}',
      '.st-score-bar{height:10px;border-radius:5px;background:#E0E0E0;overflow:hidden;}',
      '.st-score-fill{height:100%;border-radius:5px;transition:width .5s;}',
      '.st-score-desc{font-size:12px;color:#888;margin-top:6px;}',

      /* 체크리스트 */
      '.st-checklist{display:flex;flex-direction:column;gap:8px;margin-top:10px;}',
      '.st-chk-row{display:flex;align-items:flex-start;gap:10px;padding:8px 12px;border-radius:8px;background:#fafafa;border:1px solid #eee;}',
      '.st-chk-row.checked{background:#F0FBF4;border-color:#1B6B3A20;}',
      '.st-chk-row input[type=checkbox]{width:17px;height:17px;margin-top:2px;accent-color:#1B6B3A;cursor:pointer;flex-shrink:0;}',
      '.st-chk-label{font-size:13px;color:#333;flex:1;line-height:1.4;}',
      '.st-chk-score{font-size:11px;color:#1B4F8A;font-weight:700;white-space:nowrap;background:#E8F0FB;padding:2px 7px;border-radius:10px;}',
      '.st-chk-req{font-size:10px;color:#c0392b;font-weight:600;}',

      /* 본인확인 */
      '.st-identity-box{border:1px solid #E0E0E0;border-radius:12px;padding:16px;background:#fafafa;margin-bottom:16px;}',
      '.st-identity-box.verified{border-color:#1B6B3A;background:#F0FBF4;}',
      '.st-identity-verified{display:flex;align-items:center;gap:10px;font-size:13px;color:#1B6B3A;font-weight:600;}',
      '.st-id-form{display:flex;flex-direction:column;gap:10px;}',
      '.st-id-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;}',
      '.st-id-row.single{grid-template-columns:1fr;}',
      '.st-id-fld label{display:block;font-size:12px;color:#666;margin-bottom:4px;font-weight:600;}',
      '.st-id-fld input{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid #D0D0D0;border-radius:7px;font-size:13px;}',
      '.st-id-fld input:focus{outline:none;border-color:#1B4F8A;}',
      '.st-phone-verify{display:flex;gap:8px;margin-top:6px;}',
      '.st-send-btn{background:#1B4F8A;color:#fff;border:none;border-radius:7px;padding:8px 16px;font-size:13px;cursor:pointer;white-space:nowrap;}',
      '.st-send-btn:hover{background:#154070;}',
      '.st-verify-row{display:flex;gap:8px;margin-top:6px;}',
      '.st-verify-input{flex:1;padding:8px 10px;border:1px solid #D0D0D0;border-radius:7px;font-size:13px;}',
      '.st-verify-btn{background:#1B6B3A;color:#fff;border:none;border-radius:7px;padding:8px 16px;font-size:13px;cursor:pointer;}',
      '.st-verify-hint{font-size:11px;color:#888;margin-top:4px;}',
      '.st-id-notice{background:#EDF8F1;border-radius:8px;padding:10px 14px;font-size:12px;color:#1B6B3A;line-height:1.6;margin-top:8px;}',
      '.st-id-photo-preview{width:80px;height:80px;object-fit:cover;border-radius:8px;border:1px solid #ddd;margin-top:6px;}',

      /* 안내 배너 */
      '.st-warn-box{background:#FFF8E1;border-radius:10px;padding:14px;margin-bottom:16px;font-size:13px;color:#7A5300;line-height:1.7;}',
      '.st-danger-box{background:#FDEDEC;border-radius:10px;padding:14px;margin-bottom:16px;font-size:13px;color:#922B21;line-height:1.7;}',
      '.st-info-box{background:#EBF3FB;border-radius:10px;padding:12px 14px;font-size:12.5px;color:#1B4F8A;line-height:1.6;margin-bottom:14px;}',

      /* 완성도 배지 */
      '.st-complete-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:700;}',
      '.st-complete-badge.full{background:#EDF8F1;color:#1B6B3A;border:1px solid #1B6B3A40;}',
      '.st-complete-badge.partial{background:#FFF8E1;color:#7A5300;border:1px solid #7A530040;}',
      '.st-complete-badge.empty{background:#F4F4F4;color:#888;border:1px solid #ddd;}',

      /* 탭 */
      '.st-tabs{display:flex;gap:0;border-bottom:2px solid #eee;margin-bottom:16px;}',
      '.st-tab{padding:8px 16px;font-size:13px;font-weight:600;color:#888;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s;}',
      '.st-tab.active{color:#1B4F8A;border-bottom-color:#1B4F8A;}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ── 서류 업로드 패널 렌더 ──────────────────────────── */
  function renderDocPanel(lid){
    injectStyles();
    var html = '<div class="st-wrap" id="st-doc-wrap-' + lid + '">';

    // 안내 박스
    html += '<div class="st-info-box">';
    html += '📋 <b>직거래 필수 서류 안내:</b> 아래 서류를 제출하면 <b>안심직거래 마크</b>가 부여되어 방문자들의 신뢰를 높일 수 있습니다. ';
    html += '필수 서류(★★★)는 반드시 제출해주세요. 서류는 개인정보 보호를 위해 암호화하여 저장됩니다.';
    html += '</div>';

    // 안전점수 바
    var score = calcSafetyScore(lid);
    var g = getGrade(score);
    var barColor = score >= 70 ? '#1B6B3A' : score >= 50 ? '#4A7F1F' : score >= 30 ? '#E67E22' : '#c0392b';
    html += '<div class="st-score-wrap">';
    html += '<div class="st-score-top">';
    html += '<div class="st-score-label">🛡️ 안전거래 점수</div>';
    html += '<div class="st-score-num" style="color:' + g.color + '">' + score + '점 <span style="font-size:14px;font-weight:400;">· ' + g.label + '</span></div>';
    html += '</div>';
    html += '<div class="st-score-bar"><div class="st-score-fill" style="width:' + score + '%;background:' + barColor + ';"></div></div>';
    html += '<div class="st-score-desc">서류를 더 제출하거나 체크리스트를 완성하면 점수가 올라갑니다</div>';
    html += '</div>';

    // 서류 목록
    html += '<div class="st-doc-list" id="st-doclist-' + lid + '">';
    DOC_LIST.forEach(function(doc){
      var docs = getDocs(lid);
      var uploaded = !!(docs[doc.id] && docs[doc.id].uploaded);
      var stars = Array(doc.stars + 1).join('★');
      html += '<div class="st-doc-item' + (uploaded ? ' uploaded' : (doc.required ? ' required-missing' : '')) + '" id="st-ditem-' + lid + '-' + doc.id + '">';
      html += '<div class="st-doc-head">';
      html += '<span class="st-doc-icon">' + doc.icon + '</span>';
      html += '<span class="st-doc-label">' + doc.label + '</span>';
      html += '<span class="' + (doc.required ? 'st-doc-req' : 'st-doc-opt') + '">' + (doc.required ? '필수' : '권장') + '</span>';
      html += '<span class="st-doc-stars">' + stars + '</span>';
      html += '</div>';
      html += '<div class="st-doc-desc">' + doc.desc + '</div>';
      html += '<div class="st-doc-tip">💡 ' + doc.tip + '</div>';
      html += '<div class="st-doc-actions" id="st-dact-' + lid + '-' + doc.id + '">';
      if(uploaded){
        var info = docs[doc.id];
        html += '<div class="st-uploaded-name">✅ ' + (info.name || '파일 업로드됨') + '</div>';
        html += '<button class="st-del-btn" onclick="SafeTrade.removeDoc(\'' + lid + '\',\'' + doc.id + '\')">삭제</button>';
      } else {
        html += '<label class="st-upload-btn">📎 파일 선택';
        html += '<input type="file" class="st-upload-input" id="st-file-' + lid + '-' + doc.id + '" accept="image/*,.pdf" onchange="SafeTrade.handleDocFile(\'' + lid + '\',\'' + doc.id + '\',this)">';
        html += '</label>';
        html += '<span class="st-doc-status no">미제출</span>';
      }
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

  /* ── 서류 파일 처리 ──────────────────────────────────── */
  function handleDocFile(lid, docId, input){
    var file = input.files[0];
    if(!file) return;
    if(file.size > 20 * 1024 * 1024){
      alert('파일 크기가 너무 큽니다 (최대 20MB). 압축 후 다시 시도해주세요.');
      input.value = '';
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e){
      var docs = getDocs(lid);
      docs[docId] = {
        uploaded: true,
        name: file.name,
        size: file.size,
        type: file.type,
        dataUrl: e.target.result,
        uploadedAt: new Date().toISOString()
      };
      saveDocs(lid, docs);
      refreshDocItem(lid, docId);
      refreshScoreBar(lid);
    };
    reader.readAsDataURL(file);
  }

  /* ── 서류 삭제 ───────────────────────────────────────── */
  function removeDoc(lid, docId){
    var docs = getDocs(lid);
    delete docs[docId];
    saveDocs(lid, docs);
    refreshDocItem(lid, docId);
    refreshScoreBar(lid);
  }

  /* ── 서류 아이템 새로고침 ────────────────────────────── */
  function refreshDocItem(lid, docId){
    var item = document.getElementById('st-ditem-' + lid + '-' + docId);
    if(!item) return;
    var docs = getDocs(lid);
    var uploaded = !!(docs[docId] && docs[docId].uploaded);
    var doc = DOC_LIST.filter(function(d){ return d.id === docId; })[0];
    if(!doc) return;

    item.className = 'st-doc-item' + (uploaded ? ' uploaded' : (doc.required ? ' required-missing' : ''));

    var actEl = document.getElementById('st-dact-' + lid + '-' + docId);
    if(!actEl) return;
    if(uploaded){
      var info = docs[docId];
      actEl.innerHTML = '<div class="st-uploaded-name">✅ ' + (info.name||'파일') + '</div>' +
        '<button class="st-del-btn" onclick="SafeTrade.removeDoc(\'' + lid + '\',\'' + docId + '\')">삭제</button>';
    } else {
      actEl.innerHTML = '<label class="st-upload-btn">📎 파일 선택' +
        '<input type="file" class="st-upload-input" id="st-file-' + lid + '-' + docId + '" accept="image/*,.pdf" onchange="SafeTrade.handleDocFile(\'' + lid + '\',\'' + docId + '\',this)">' +
        '</label><span class="st-doc-status no">미제출</span>';
    }
  }

  /* ── 점수 바 새로고침 ────────────────────────────────── */
  function refreshScoreBar(lid){
    var score = calcSafetyScore(lid);
    var g = getGrade(score);
    var barColor = score >= 70 ? '#1B6B3A' : score >= 50 ? '#4A7F1F' : score >= 30 ? '#E67E22' : '#c0392b';
    var numEl = document.querySelector('#st-doc-wrap-' + lid + ' .st-score-num');
    var barEl = document.querySelector('#st-doc-wrap-' + lid + ' .st-score-fill');
    if(numEl) numEl.innerHTML = score + '점 <span style="font-size:14px;font-weight:400;">· ' + g.label + '</span>';
    if(barEl){ barEl.style.width = score + '%'; barEl.style.background = barColor; }
    if(numEl) numEl.style.color = g.color;
  }

  /* ── 본인확인 패널 렌더 ──────────────────────────────── */
  function renderIdentityPanel(lid){
    injectStyles();
    var identity = getIdentity(lid);
    var verified = !!(identity.phoneVerified && identity.name && identity.birthdate && identity.phone);
    var html = '<div class="st-identity-box' + (verified ? ' verified' : '') + '" id="st-id-wrap-' + lid + '">';

    if(verified){
      html += '<div class="st-identity-verified">';
      html += '✅ 본인확인 완료 — ' + identity.name + ' · ' + (identity.birthdate||'') + ' · ' + (identity.phone||'');
      html += '<button style="margin-left:auto;background:none;border:1px solid #1B6B3A;color:#1B6B3A;border-radius:5px;padding:3px 10px;font-size:12px;cursor:pointer;" onclick="SafeTrade.resetIdentity(\'' + lid + '\')">재설정</button>';
      html += '</div>';
    } else {
      html += '<div class="st-info-box">🪪 <b>본인확인 안내:</b> 직거래의 신뢰도를 위해 소유자 본인임을 확인합니다. 입력하신 정보는 방문 예약자에게 일부 공개됩니다.</div>';
      html += '<div class="st-id-form" id="st-id-form-' + lid + '">';

      // 이름 + 생년월일
      html += '<div class="st-id-row">';
      html += '<div class="st-id-fld"><label>이름 (실명)</label><input type="text" id="st-id-name-' + lid + '" placeholder="홍길동" value="' + (identity.name||'') + '"></div>';
      html += '<div class="st-id-fld"><label>생년월일</label><input type="date" id="st-id-birth-' + lid + '" value="' + (identity.birthdate||'') + '"></div>';
      html += '</div>';

      // 휴대폰 + 인증
      html += '<div class="st-id-row single">';
      html += '<div class="st-id-fld"><label>휴대폰 번호</label>';
      html += '<div class="st-phone-verify">';
      html += '<input type="tel" id="st-id-phone-' + lid + '" placeholder="010-0000-0000" value="' + (identity.phone||'') + '" style="flex:1;padding:8px 10px;border:1px solid #D0D0D0;border-radius:7px;font-size:13px;">';
      html += '<button class="st-send-btn" onclick="SafeTrade.sendIdCode(\'' + lid + '\')">인증코드 발송</button>';
      html += '</div>';
      html += '<div class="st-verify-row" id="st-id-codebox-' + lid + '" style="display:none;">';
      html += '<input class="st-verify-input" type="text" id="st-id-code-' + lid + '" placeholder="6자리 코드 입력" maxlength="6">';
      html += '<button class="st-verify-btn" onclick="SafeTrade.verifyIdCode(\'' + lid + '\')">확인</button>';
      html += '</div>';
      html += '<div class="st-verify-hint" id="st-id-hint-' + lid + '"></div>';
      html += '</div>';
      html += '</div>';

      // 신분증 사진 업로드
      html += '<div class="st-id-row single">';
      html += '<div class="st-id-fld"><label>신분증 사진 (선택) — 앞면만 촬영·업로드</label>';
      html += '<label class="st-upload-btn" style="display:inline-flex;margin-top:4px;">📎 신분증 선택';
      html += '<input type="file" class="st-upload-input" id="st-id-card-' + lid + '" accept="image/*" onchange="SafeTrade.handleIdCard(\'' + lid + '\',this)">';
      html += '</label>';
      html += '<div id="st-id-card-preview-' + lid + '">' + (identity.idcardPreview ? '<img class="st-id-photo-preview" src="' + identity.idcardPreview + '">' : '') + '</div>';
      html += '</div>';
      html += '</div>';

      html += '<div class="st-id-notice">🔒 입력하신 정보는 암호화되어 저장되며, 거래 확정 전에는 방문자에게 이름·연락처만 공개됩니다. 신분증 사진은 소유자 확인 용도로만 사용됩니다.</div>';
      html += '</div>'; // st-id-form
    }

    html += '</div>';
    return html;
  }

  /* ── 인증코드 발송 (데모) ────────────────────────────── */
  var _stCodes = {};
  function sendIdCode(lid){
    var phone = (document.getElementById('st-id-phone-' + lid)||{}).value || '';
    if(!phone || phone.replace(/\D/g,'').length < 10){
      setHint(lid, '올바른 휴대폰 번호를 입력해주세요.', 'error');
      return;
    }
    var code = String(Math.floor(100000 + Math.random() * 900000));
    _stCodes[lid] = code;
    var codeBox = document.getElementById('st-id-codebox-' + lid);
    if(codeBox) codeBox.style.display = 'flex';
    setHint(lid, '📱 [데모] 인증코드: ' + code + ' (실제 서비스에서는 SMS로 전송됩니다)', 'info');
  }

  function verifyIdCode(lid){
    var code = (document.getElementById('st-id-code-' + lid)||{}).value || '';
    if(!_stCodes[lid] || code !== _stCodes[lid]){
      setHint(lid, '❌ 인증코드가 맞지 않습니다. 다시 확인해주세요.', 'error');
      return;
    }
    var name  = (document.getElementById('st-id-name-' + lid)||{}).value || '';
    var birth = (document.getElementById('st-id-birth-' + lid)||{}).value || '';
    var phone = (document.getElementById('st-id-phone-' + lid)||{}).value || '';
    if(!name || !birth){
      setHint(lid, '이름과 생년월일을 모두 입력해주세요.', 'error');
      return;
    }
    var identity = getIdentity(lid);
    identity.name = name;
    identity.birthdate = birth;
    identity.phone = phone;
    identity.phoneVerified = true;
    identity.verifiedAt = new Date().toISOString();
    saveIdentity(lid, identity);
    delete _stCodes[lid];
    refreshIdentityPanel(lid);
    refreshScoreBar(lid);
  }

  function resetIdentity(lid){
    if(!confirm('본인확인 정보를 초기화하시겠습니까?')) return;
    store('identity_' + lid, null);
    refreshIdentityPanel(lid);
  }

  function handleIdCard(lid, input){
    var file = input.files[0];
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(e){
      var identity = getIdentity(lid);
      identity.idcardPreview = e.target.result;
      saveIdentity(lid, identity);
      var prev = document.getElementById('st-id-card-preview-' + lid);
      if(prev) prev.innerHTML = '<img class="st-id-photo-preview" src="' + e.target.result + '">';
    };
    reader.readAsDataURL(file);
  }

  function setHint(lid, msg, type){
    var el = document.getElementById('st-id-hint-' + lid);
    if(!el) return;
    el.style.color = type === 'error' ? '#c0392b' : '#1B6B3A';
    el.textContent = msg;
  }

  /* ── 본인확인 패널 새로고침 ──────────────────────────── */
  function refreshIdentityPanel(lid){
    var wrap = document.getElementById('st-id-wrap-' + lid);
    if(!wrap) return;
    var parent = wrap.parentNode;
    var tmp = document.createElement('div');
    tmp.innerHTML = renderIdentityPanel(lid);
    parent.replaceChild(tmp.firstChild, wrap);
  }

  /* ── 체크리스트 패널 렌더 ────────────────────────────── */
  function renderChecklistPanel(lid){
    injectStyles();
    var chk = getChecklist(lid);
    var docs = getDocs(lid);
    var html = '<div id="st-chklist-' + lid + '" class="st-checklist">';
    html += '<div class="st-info-box">☑️ <b>안전거래 체크리스트:</b> 아래 항목을 직접 확인하여 체크해주세요. 서류 제출 항목은 자동으로 체크됩니다.</div>';

    SAFETY_CHECKLIST.forEach(function(item){
      var autoChecked = false;
      if(item.id === 'chk_registry')  autoChecked = !!(docs.registry  && docs.registry.uploaded);
      if(item.id === 'chk_idcard')    autoChecked = !!(docs.idcard    && docs.idcard.uploaded);
      if(item.id === 'chk_building')  autoChecked = !!(docs.building  && docs.building.uploaded);
      if(item.id === 'chk_resident')  autoChecked = !!(docs.resident  && docs.resident.uploaded);
      var checked = autoChecked || !!(chk[item.id]);
      var isAuto  = autoChecked;

      html += '<div class="st-chk-row' + (checked ? ' checked' : '') + '" id="stchk-' + lid + '-' + item.id + '">';
      html += '<input type="checkbox"' + (checked ? ' checked' : '') + (isAuto ? ' disabled title="서류 제출 시 자동 체크"' : '') + ' onchange="SafeTrade.toggleChk(\'' + lid + '\',\'' + item.id + '\',this.checked)">';
      html += '<div class="st-chk-label">' + item.label + (item.required ? ' <span class="st-chk-req">필수</span>' : '') + '</div>';
      html += '<div class="st-chk-score">+' + item.score + '점</div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ── 체크리스트 토글 ─────────────────────────────────── */
  function toggleChk(lid, itemId, checked){
    var chk = getChecklist(lid);
    chk[itemId] = checked;
    saveChecklist(lid, chk);
    var row = document.getElementById('stchk-' + lid + '-' + itemId);
    if(row) row.className = 'st-chk-row' + (checked ? ' checked' : '');
    refreshScoreBar(lid);
  }

  /* ── 전체 제출 요약 ──────────────────────────────────── */
  function getSummary(lid){
    var docs     = getDocs(lid);
    var identity = getIdentity(lid);
    var chk      = getChecklist(lid);
    var score    = calcSafetyScore(lid);
    var grade    = getGrade(score);

    var uploadedDocs = DOC_LIST.filter(function(d){ return docs[d.id] && docs[d.id].uploaded; });
    var missingReq   = DOC_LIST.filter(function(d){ return d.required && !(docs[d.id] && docs[d.id].uploaded); });

    return {
      score:       score,
      grade:       grade.grade,
      gradeLabel:  grade.label,
      uploadedCount: uploadedDocs.length,
      totalDocs:   DOC_LIST.length,
      missingRequired: missingReq.map(function(d){ return d.label; }),
      identityVerified: !!(identity.phoneVerified && identity.name),
      idcardUploaded:   !!(identity.idcardPreview),
      checkedCount: Object.keys(chk).filter(function(k){ return chk[k]; }).length
    };
  }

  /* ── Public API ──────────────────────────────────────── */
  var ST = {
    DOC_LIST:           DOC_LIST,
    SAFETY_CHECKLIST:   SAFETY_CHECKLIST,
    renderDocPanel:     renderDocPanel,
    renderIdentityPanel:renderIdentityPanel,
    renderChecklistPanel:renderChecklistPanel,
    renderSafeBadge:    renderSafeBadge,
    handleDocFile:      handleDocFile,
    removeDoc:          removeDoc,
    handleIdCard:       handleIdCard,
    sendIdCode:         sendIdCode,
    verifyIdCode:       verifyIdCode,
    resetIdentity:      resetIdentity,
    toggleChk:          toggleChk,
    getDocs:            getDocs,
    getIdentity:        getIdentity,
    getChecklist:       getChecklist,
    calcSafetyScore:    calcSafetyScore,
    getGrade:           getGrade,
    getSummary:         getSummary,
    injectStyles:       injectStyles,
    refreshScoreBar:    refreshScoreBar,
    refreshIdentityPanel: refreshIdentityPanel
  };

  w.SafeTrade = ST;
})(window);
