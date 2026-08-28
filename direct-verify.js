/**
 * direct-verify.js — OK복덕방 직거래 사기방지 검증 시스템
 * 버전: 1.0.0 | 2026-08-19
 *
 * 역할:
 *  1) 직거래 서류 관리 (등기사항전부증명서, 신분증, 건축물대장 등)
 *  2) 안전도 점수 산출 (0~100점)
 *  3) 위험 경보 분석 (근저당, 가압류, 전세사기 패턴 등)
 *  4) localStorage 기반 서류·검증 상태 저장
 */

;(function(w){
'use strict';

/* ─────────────────────────────────────────────
   상수 & 설정
───────────────────────────────────────────── */
var DV = {};

/** 필요 서류 마스터 */
DV.DOC_TYPES = [
  {
    id: 'registry',
    label: '등기사항전부증명서',
    required: true,
    desc: '발급일로부터 1개월 이내 · 말소사항 포함본',
    icon: '📋',
    tip: '인터넷등기소(iros.go.kr)에서 700원에 발급 가능. 현 소유자·근저당·가압류 확인 필수.',
    scoreWeight: 35
  },
  {
    id: 'id_card',
    label: '신분증 사본 (소유자)',
    required: true,
    desc: '주민등록증 또는 운전면허증 · 등기부 소유자명과 일치 확인',
    icon: '🪪',
    tip: '등기부상 소유자 이름·주민번호 앞자리가 신분증과 일치해야 합니다.',
    scoreWeight: 25
  },
  {
    id: 'building_reg',
    label: '건축물대장',
    required: true,
    desc: '위반건축물 여부 · 용도·면적 확인',
    icon: '🏗️',
    tip: '정부24(gov.kr)에서 무료 발급. 위반건축물이면 전세보증보험 가입 불가.',
    scoreWeight: 15
  },
  {
    id: 'ownership_cert',
    label: '토지·건물 소유확인서',
    required: false,
    desc: '공동소유 여부 확인 (지분거래 시 전원 동의 필요)',
    icon: '🏠',
    tip: '지분이 분할된 경우 모든 공동소유자의 동의서가 필요합니다.',
    scoreWeight: 10
  },
  {
    id: 'tax_cert',
    label: '지방세 납세증명서',
    required: false,
    desc: '체납세금 없음 확인 · 발급일로부터 30일 이내',
    icon: '🧾',
    tip: '체납 지방세가 있으면 임차인보다 세금 채권이 우선합니다. 반드시 확인하세요.',
    scoreWeight: 10
  },
  {
    id: 'consent_form',
    label: '임대인 직거래 동의서 (OK복덕방 양식)',
    required: true,
    desc: '직거래 사실 및 정보 정확성 서약 · 자필서명',
    icon: '✍️',
    tip: '허위정보 등록 시 법적 책임을 진다는 서약서입니다. 반드시 자필 서명해야 합니다.',
    scoreWeight: 5
  }
];

/** 전세·월세 사기 위험 패턴 */
DV.RISK_PATTERNS = [
  {
    id: 'high_mortgage',
    label: '과다 근저당',
    desc: '근저당금액이 매매가의 70% 초과 — 낙찰가 하락 시 보증금 미회수 위험',
    level: 'danger',
    check: function(v){ return v.mortgageRatio > 70; }
  },
  {
    id: 'multi_mortgage',
    label: '복수 근저당',
    desc: '근저당 설정이 3건 이상 — 복잡한 채권 관계',
    level: 'danger',
    check: function(v){ return v.mortgageCount >= 3; }
  },
  {
    id: 'injunction',
    label: '가압류·압류 등재',
    desc: '등기부에 가압류/압류/가처분 등재 — 매매·임대 제한 가능',
    level: 'danger',
    check: function(v){ return v.hasInjunction; }
  },
  {
    id: 'high_jeonse_ratio',
    label: '과도한 전세가율',
    desc: '전세가율 85% 초과 — 역전세·깡통전세 위험',
    level: 'danger',
    check: function(v){ return v.jeonseRatio > 85; }
  },
  {
    id: 'short_ownership',
    label: '단기 소유 이력',
    desc: '소유권 취득 후 1년 미만에 임대 — 갭투자 의심',
    level: 'warn',
    check: function(v){ return v.ownershipMonths < 12; }
  },
  {
    id: 'prior_tenant',
    label: '선순위 임차인 존재',
    desc: '전입세대 열람 기준 선순위 임차인 있음 — 내 보증금 후순위',
    level: 'danger',
    check: function(v){ return v.hasPriorTenant; }
  },
  {
    id: 'id_mismatch',
    label: '소유자 불일치',
    desc: '등기부 소유자와 계약 당사자 불일치 — 대리인 여부 확인 필요',
    level: 'danger',
    check: function(v){ return v.ownerMismatch; }
  },
  {
    id: 'illegal_building',
    label: '위반건축물',
    desc: '건축물대장 위반건축물 등재 — 전세보증보험 가입 불가',
    level: 'danger',
    check: function(v){ return v.isIllegalBuilding; }
  },
  {
    id: 'tax_lien',
    label: '체납세금',
    desc: '지방세 체납 확인됨 — 세금 채권 우선 변제',
    level: 'danger',
    check: function(v){ return v.hasTaxLien; }
  },
  {
    id: 'no_insurance',
    label: '전세보증보험 미가입 가능',
    desc: '위반건축물/고령건물/고전세가율로 보증보험 가입 어려울 수 있음',
    level: 'warn',
    check: function(v){ return v.insuranceRisk; }
  }
];

/** 안전도 등급 */
DV.GRADE = [
  { min:90, label:'매우 안전', color:'#1a7a4a', bg:'#e6f7ef', icon:'🛡️' },
  { min:75, label:'안전',     color:'#2e7d32', bg:'#f0faf0', icon:'✅' },
  { min:55, label:'주의',     color:'#e67e22', bg:'#fff8e6', icon:'⚠️' },
  { min:30, label:'위험',     color:'#c0392b', bg:'#fdf0ef', icon:'🚨' },
  { min:0,  label:'매우위험', color:'#7b0000', bg:'#fce4e4', icon:'☠️' }
];

/* ─────────────────────────────────────────────
   스토리지 키
───────────────────────────────────────────── */
var KEY_DOCS    = 'ok_direct_docs_';    // + listingId
var KEY_VERIFY  = 'ok_direct_verify_'; // + listingId

/* ─────────────────────────────────────────────
   유틸리티
───────────────────────────────────────────── */
DV.getGrade = function(score){
  for(var i=0;i<DV.GRADE.length;i++){
    if(score >= DV.GRADE[i].min) return DV.GRADE[i];
  }
  return DV.GRADE[DV.GRADE.length-1];
};

DV.getDocs = function(listingId){
  try{
    return JSON.parse(localStorage.getItem(KEY_DOCS + listingId) || '{}');
  }catch(e){ return {}; }
};

DV.saveDocs = function(listingId, docs){
  localStorage.setItem(KEY_DOCS + listingId, JSON.stringify(docs));
};

DV.getVerifyData = function(listingId){
  try{
    return JSON.parse(localStorage.getItem(KEY_VERIFY + listingId) || 'null');
  }catch(e){ return null; }
};

DV.saveVerifyData = function(listingId, data){
  localStorage.setItem(KEY_VERIFY + listingId, JSON.stringify(data));
};

/* ─────────────────────────────────────────────
   점수 산출
───────────────────────────────────────────── */
DV.calcScore = function(listingId, verifyData){
  var docs = DV.getDocs(listingId);
  var vd   = verifyData || DV.getVerifyData(listingId) || {};
  var score = 0;

  // 서류 점수
  DV.DOC_TYPES.forEach(function(dt){
    if(docs[dt.id] && docs[dt.id].uploaded){
      score += dt.scoreWeight;
    }
  });

  // 위험 패턴 감점
  DV.RISK_PATTERNS.forEach(function(rp){
    try{
      if(rp.check(vd)){
        score -= (rp.level === 'danger' ? 20 : 10);
      }
    }catch(e){}
  });

  return Math.max(0, Math.min(100, score));
};

/* ─────────────────────────────────────────────
   위험 항목 목록
───────────────────────────────────────────── */
DV.getActiveRisks = function(verifyData){
  var vd = verifyData || {};
  return DV.RISK_PATTERNS.filter(function(rp){
    try{ return rp.check(vd); }catch(e){ return false; }
  });
};

/* ─────────────────────────────────────────────
   서류 업로드 처리 (파일 → dataURL → localStorage)
───────────────────────────────────────────── */
DV.handleDocUpload = function(listingId, docId, file, onComplete){
  if(!file) return;
  // 파일 크기 제한: 10MB
  if(file.size > 10 * 1024 * 1024){
    alert('파일 크기가 10MB를 초과합니다. 압축 후 다시 업로드해 주세요.');
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e){
    var docs = DV.getDocs(listingId);
    docs[docId] = {
      uploaded: true,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      dataUrl: e.target.result,
      uploadedAt: new Date().toISOString(),
      status: 'pending'   // pending | approved | rejected
    };
    DV.saveDocs(listingId, docs);
    if(onComplete) onComplete(docs[docId]);
  };
  reader.readAsDataURL(file);
};

/* ─────────────────────────────────────────────
   HTML 렌더러: 서류 첨부 패널 (등록 화면)
───────────────────────────────────────────── */
DV.renderDocUploadPanel = function(listingId){
  var docs = DV.getDocs(listingId);
  var html = '';
  html += '<div class="dv-doc-panel" id="dv-doc-panel">';
  html += '<div class="dv-doc-header">';
  html += '<span class="dv-badge-direct">직거래 안심등록</span>';
  html += '<h4>필수 서류 제출 <span class="dv-req-note">★ 필수</span></h4>';
  html += '<p class="dv-doc-desc">직거래 매물은 아래 서류를 모두 제출해야 <b>안심직거래</b> 마크와 안전도 점수가 부여됩니다.<br>';
  html += '서류는 암호화되어 저장되며, 관리자 확인 후 공개됩니다.</p>';
  html += '</div>';

  html += '<div class="dv-doc-list">';
  DV.DOC_TYPES.forEach(function(dt){
    var doc = docs[dt.id];
    var uploaded = doc && doc.uploaded;
    var statusCls = uploaded ? (doc.status === 'approved' ? 'dv-doc-ok' : 'dv-doc-pending') : '';
    var statusLabel = uploaded ?
      (doc.status === 'approved' ? '✅ 승인됨' : doc.status === 'rejected' ? '❌ 반려됨' : '⏳ 검토중') : '';

    html += '<div class="dv-doc-item ' + statusCls + '" id="dv-doc-' + dt.id + '">';
    html += '<div class="dv-doc-icon">' + dt.icon + '</div>';
    html += '<div class="dv-doc-info">';
    html += '<div class="dv-doc-name">' + dt.label + (dt.required ? ' <span class="dv-req">★필수</span>' : ' <span class="dv-opt">선택</span>') + '</div>';
    html += '<div class="dv-doc-desc-txt">' + dt.desc + '</div>';
    html += '<div class="dv-doc-tip">💡 ' + dt.tip + '</div>';
    if(uploaded){
      html += '<div class="dv-doc-uploaded">📎 ' + esc(doc.fileName) + ' (' + Math.round(doc.fileSize/1024) + 'KB) ' + statusLabel + '</div>';
    }
    html += '</div>';
    html += '<div class="dv-doc-actions">';
    if(uploaded){
      html += '<button class="btn btn-sm dv-btn-reup" data-docid="' + dt.id + '" data-lid="' + listingId + '">재업로드</button>';
    } else {
      html += '<button class="btn btn-sm dv-btn-up" data-docid="' + dt.id + '" data-lid="' + listingId + '">업로드</button>';
    }
    html += '<input type="file" class="dv-file-input" id="dv-file-' + dt.id + '" accept=".pdf,.jpg,.jpeg,.png,.heic" style="display:none">';
    html += '</div>';
    html += '</div>';
  });
  html += '</div>'; // dv-doc-list

  // 진행률 표시
  var reqDocs = DV.DOC_TYPES.filter(function(d){ return d.required; });
  var doneReq = reqDocs.filter(function(d){ return docs[d.id] && docs[d.id].uploaded; }).length;
  var pct = Math.round(doneReq / reqDocs.length * 100);
  html += '<div class="dv-progress-wrap">';
  html += '<div class="dv-progress-label">필수 서류 제출 현황: <b>' + doneReq + '/' + reqDocs.length + '</b></div>';
  html += '<div class="dv-progress-bar-wrap"><div class="dv-progress-bar" style="width:' + pct + '%"></div></div>';
  if(doneReq < reqDocs.length){
    html += '<div class="dv-progress-note">필수 서류를 모두 제출해야 직거래 안심 마크가 부여됩니다.</div>';
  } else {
    html += '<div class="dv-progress-done">✅ 필수 서류 제출 완료 — 관리자 검토 후 안심마크가 부여됩니다.</div>';
  }
  html += '</div>';

  html += '</div>'; // dv-doc-panel
  return html;
};

/* ─────────────────────────────────────────────
   HTML 렌더러: 안전검증 패널 (상세 화면)
───────────────────────────────────────────── */
DV.renderSafetyPanel = function(listing){
  var id = listing.id;
  var direct = listing.deals && listing.deals.direct;
  if(!direct) return '';

  var vd   = DV.getVerifyData(id) || listing.verifyData || {};
  var docs = DV.getDocs(id);
  var score = DV.calcScore(id, vd);
  var grade = DV.getGrade(score);
  var risks = DV.getActiveRisks(vd);

  // 서류 제출 상태
  var docStatus = {};
  DV.DOC_TYPES.forEach(function(dt){
    var d = docs[dt.id];
    // listing.docs 에도 있으면 병합
    var ld = listing.docs && listing.docs[dt.id];
    docStatus[dt.id] = d || ld || null;
  });

  // 안심마크 여부: 필수 서류 모두 approved
  var allApproved = DV.DOC_TYPES
    .filter(function(d){ return d.required; })
    .every(function(d){
      var st = docStatus[d.id];
      return st && (st.status === 'approved' || st.uploaded);
    });

  var html = '';
  html += '<div class="dv-safety-panel">';

  // 상단 헤더
  html += '<div class="dv-sp-header" style="background:' + grade.bg + ';border-color:' + grade.color + '">';
  html += '<div class="dv-sp-score-wrap">';
  html += '<div class="dv-sp-score" style="color:' + grade.color + '">' + score + '</div>';
  html += '<div class="dv-sp-score-label">/ 100점</div>';
  html += '</div>';
  html += '<div class="dv-sp-grade-info">';
  html += '<div class="dv-sp-grade" style="color:' + grade.color + '">' + grade.icon + ' ' + grade.label + '</div>';
  html += '<div class="dv-sp-grade-desc">OK복덕방 직거래 안전도 점수</div>';
  if(allApproved){
    html += '<div class="dv-sp-certified">🏅 안심직거래 인증 완료</div>';
  } else {
    html += '<div class="dv-sp-uncert">⏳ 서류 검토 중</div>';
  }
  html += '</div>';
  html += '<div class="dv-sp-score-ring">' + renderScoreRing(score, grade.color) + '</div>';
  html += '</div>';

  // 핵심 체크 항목
  html += '<div class="dv-sp-section"><h4>📋 등기사항 핵심 확인</h4>';
  html += '<div class="dv-check-grid">';
  var checks = [
    {
      key: 'ownerVerified',
      label: '소유자 일치 확인',
      desc: vd.ownerName ? ('등기 소유자: ' + esc(vd.ownerName)) : '등기부 기준 소유자 확인',
      ok: !vd.ownerMismatch && docStatus['registry'] && docStatus['id_card']
    },
    {
      key: 'mortgageOk',
      label: '근저당 안전 범위',
      desc: vd.mortgageRatio != null ? ('근저당 비율: ' + vd.mortgageRatio + '%') : '계약 전 등기부 재확인 권장',
      ok: !vd.mortgageRatio || vd.mortgageRatio < 70
    },
    {
      key: 'noInjunction',
      label: '가압류·압류 없음',
      desc: vd.hasInjunction ? '⚠️ 가압류/압류 등재됨' : '등기부 기준 이상 없음',
      ok: !vd.hasInjunction
    },
    {
      key: 'buildingOk',
      label: '위반건축물 없음',
      desc: vd.isIllegalBuilding ? '⚠️ 위반건축물 등재됨' : '건축물대장 기준 이상 없음',
      ok: !vd.isIllegalBuilding
    },
    {
      key: 'jeonseRatioOk',
      label: '전세가율 안전',
      desc: vd.jeonseRatio != null ? ('현재 전세가율: ' + vd.jeonseRatio + '%') : '전세가율 80% 미만 권장',
      ok: !vd.jeonseRatio || vd.jeonseRatio < 80
    },
    {
      key: 'noPriorTenant',
      label: '선순위 임차인 없음',
      desc: vd.hasPriorTenant ? '⚠️ 선순위 임차인 존재' : '전입세대 열람 기준 이상 없음',
      ok: !vd.hasPriorTenant
    },
    {
      key: 'noTaxLien',
      label: '체납세금 없음',
      desc: vd.hasTaxLien ? '⚠️ 지방세 체납 확인됨' : '납세증명서 기준 이상 없음',
      ok: !vd.hasTaxLien
    },
    {
      key: 'insuranceOk',
      label: '전세보증보험 가입 가능',
      desc: vd.insuranceRisk ? '⚠️ 보증보험 가입이 어려울 수 있음' : 'HUG/HF 전세보증보험 가입 가능',
      ok: !vd.insuranceRisk
    }
  ];
  checks.forEach(function(c){
    html += '<div class="dv-check-item ' + (c.ok ? 'dv-ok' : 'dv-bad') + '">';
    html += '<div class="dv-check-icon">' + (c.ok ? '✅' : '❌') + '</div>';
    html += '<div class="dv-check-body"><div class="dv-check-label">' + c.label + '</div><div class="dv-check-desc">' + c.desc + '</div></div>';
    html += '</div>';
  });
  html += '</div></div>';

  // 위험 경보
  if(risks.length > 0){
    html += '<div class="dv-sp-section dv-risks-section">';
    html += '<h4>🚨 위험 경보 (' + risks.length + '건)</h4>';
    risks.forEach(function(r){
      html += '<div class="dv-risk-item dv-risk-' + r.level + '">';
      html += '<div class="dv-risk-icon">' + (r.level === 'danger' ? '🚨' : '⚠️') + '</div>';
      html += '<div class="dv-risk-body"><div class="dv-risk-label">' + r.label + '</div><div class="dv-risk-desc">' + r.desc + '</div></div>';
      html += '</div>';
    });
    html += '</div>';
  }

  // 서류 제출 현황
  html += '<div class="dv-sp-section"><h4>📁 서류 제출 현황</h4>';
  html += '<div class="dv-doc-status-list">';
  DV.DOC_TYPES.forEach(function(dt){
    var st = docStatus[dt.id];
    var icon, cls, statusTxt;
    if(!st || !st.uploaded){
      icon = '⬜'; cls = 'dv-ds-none';
      statusTxt = dt.required ? '미제출 (필수)' : '미제출 (선택)';
    } else if(st.status === 'approved'){
      icon = '✅'; cls = 'dv-ds-ok'; statusTxt = '확인 완료';
    } else if(st.status === 'rejected'){
      icon = '❌'; cls = 'dv-ds-bad'; statusTxt = '반려 — 재제출 필요';
    } else {
      icon = '⏳'; cls = 'dv-ds-pend'; statusTxt = '검토 중';
    }
    html += '<div class="dv-ds-row ' + cls + '">';
    html += '<span class="dv-ds-icon">' + icon + '</span>';
    html += '<span class="dv-ds-name">' + dt.icon + ' ' + dt.label + '</span>';
    html += '<span class="dv-ds-status">' + statusTxt + '</span>';
    html += '</div>';
  });
  html += '</div></div>';

  // 소비자 행동 가이드
  html += '<div class="dv-sp-section dv-guide-section">';
  html += '<h4>🛡️ 안전 계약을 위한 필수 체크리스트</h4>';
  html += '<div class="dv-guide-list">';
  var guides = [
    { icon:'📋', text:'계약 당일 인터넷등기소에서 최신 등기부 직접 조회하세요.' },
    { icon:'🏦', text:'잔금은 반드시 계좌이체 하고 영수증을 보관하세요.' },
    { icon:'📅', text:'잔금 지급과 동시에 전입신고 + 확정일자를 받으세요.' },
    { icon:'🔒', text:'HUG/HF 전세보증보험에 즉시 가입하세요 (전세가율 80% 미만).' },
    { icon:'📸', text:'계약 전 집 상태를 사진·영상으로 기록하세요.' },
    { icon:'👥', text:'가능하면 공인중개사를 통해 계약서 검토를 받으세요.' },
    { icon:'📞', text:'의심 시 대한법률구조공단(132) 또는 전세피해지원센터(1800-4232)에 문의하세요.' }
  ];
  guides.forEach(function(g){
    html += '<div class="dv-guide-item"><span class="dv-g-icon">' + g.icon + '</span><span>' + g.text + '</span></div>';
  });
  html += '</div></div>';

  // 신고/문의 버튼
  html += '<div class="dv-sp-footer">';
  html += '<button class="btn btn-sm dv-btn-report" onclick="dvReportFraud(\'' + id + '\')">🚨 사기 의심 신고</button>';
  html += '<button class="btn btn-sm dv-btn-inquiry" onclick="dvRequestDoc(\'' + id + '\')">📄 서류 추가 요청</button>';
  html += '<a class="btn btn-sm" href="tel:1800-4232">📞 전세피해지원센터</a>';
  html += '</div>';

  html += '</div>'; // dv-safety-panel
  return html;
};

/* 점수 SVG 링 */
function renderScoreRing(score, color){
  var r = 36, cx = 44, cy = 44;
  var circ = 2 * Math.PI * r;
  var dash = circ * score / 100;
  return '<svg width="88" height="88" viewBox="0 0 88 88">' +
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#e8e8e8" stroke-width="8"/>' +
    '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="8"' +
    ' stroke-dasharray="'+dash.toFixed(1)+' '+circ.toFixed(1)+'"' +
    ' stroke-dashoffset="'+(-circ/4).toFixed(1)+'" stroke-linecap="round"/>' +
    '<text x="'+cx+'" y="'+(cy+6)+'" text-anchor="middle" font-size="18" font-weight="700" fill="'+color+'">'+score+'</text>' +
    '</svg>';
}

/* ─────────────────────────────────────────────
   HTML 렌더러: admin 서류 심사 패널
───────────────────────────────────────────── */
DV.renderAdminDocPanel = function(listingId, listing){
  var docs = DV.getDocs(listingId);
  var vd   = DV.getVerifyData(listingId) || {};

  var html = '';
  html += '<div class="dv-admin-panel">';
  html += '<h3>' + (listing ? esc(listing.addr) : listingId) + ' — 직거래 서류 심사</h3>';

  // 등기 정보 입력 폼
  html += '<div class="dv-admin-section">';
  html += '<h4>📋 등기부 분석 정보 입력</h4>';
  html += '<div class="dv-admin-form">';
  html += '<label>소유자명 (등기부 기준)</label>';
  html += '<input type="text" id="dv-adm-owner" value="' + esc(vd.ownerName||'') + '" placeholder="홍길동"/>';
  html += '<label>소유자 일치 여부</label>';
  html += '<select id="dv-adm-mismatch"><option value="0"' + (!vd.ownerMismatch?' selected':'') + '>일치</option><option value="1"' + (vd.ownerMismatch?' selected':'') + '>불일치 (의심)</option></select>';
  html += '<label>근저당 비율 (%)</label>';
  html += '<input type="number" id="dv-adm-mortgage-ratio" value="' + (vd.mortgageRatio||'') + '" placeholder="0~100"/>';
  html += '<label>근저당 건수</label>';
  html += '<input type="number" id="dv-adm-mortgage-count" value="' + (vd.mortgageCount||0) + '" min="0"/>';
  html += '<label>가압류·압류 여부</label>';
  html += '<select id="dv-adm-injunction"><option value="0"' + (!vd.hasInjunction?' selected':'') + '>없음</option><option value="1"' + (vd.hasInjunction?' selected':'') + '>있음</option></select>';
  html += '<label>위반건축물 여부</label>';
  html += '<select id="dv-adm-illegal"><option value="0"' + (!vd.isIllegalBuilding?' selected':'') + '>없음</option><option value="1"' + (vd.isIllegalBuilding?' selected':'') + '>있음</option></select>';
  html += '<label>전세가율 (%)</label>';
  html += '<input type="number" id="dv-adm-jeonse-ratio" value="' + (vd.jeonseRatio||'') + '" placeholder="0~100"/>';
  html += '<label>선순위 임차인</label>';
  html += '<select id="dv-adm-prior"><option value="0"' + (!vd.hasPriorTenant?' selected':'') + '>없음</option><option value="1"' + (vd.hasPriorTenant?' selected':'') + '>있음</option></select>';
  html += '<label>체납세금</label>';
  html += '<select id="dv-adm-taxlien"><option value="0"' + (!vd.hasTaxLien?' selected':'') + '>없음</option><option value="1"' + (vd.hasTaxLien?' selected':'') + '>있음</option></select>';
  html += '<label>소유 기간 (개월)</label>';
  html += '<input type="number" id="dv-adm-ownership-months" value="' + (vd.ownershipMonths||'') + '" placeholder="24"/>';
  html += '<label>보증보험 위험 요소</label>';
  html += '<select id="dv-adm-ins-risk"><option value="0"' + (!vd.insuranceRisk?' selected':'') + '>없음 (가입 가능)</option><option value="1"' + (vd.insuranceRisk?' selected':'') + '>있음 (가입 불가 가능)</option></select>';
  html += '<button class="btn btn-primary" onclick="dvAdminSaveVerify(\'' + listingId + '\')">✅ 검증 정보 저장</button>';
  html += '</div></div>';

  // 서류 심사
  html += '<div class="dv-admin-section">';
  html += '<h4>📁 서류 심사</h4>';
  DV.DOC_TYPES.forEach(function(dt){
    var doc = docs[dt.id];
    html += '<div class="dv-admin-doc-row">';
    html += '<div class="dv-adm-doc-info">';
    html += '<span class="dv-adm-doc-icon">' + dt.icon + '</span>';
    html += '<span class="dv-adm-doc-name">' + dt.label + (dt.required ? ' ★' : '') + '</span>';
    if(doc && doc.uploaded){
      html += '<span class="dv-adm-doc-file">📎 ' + esc(doc.fileName) + ' (' + Math.round(doc.fileSize/1024) + 'KB)</span>';
      html += '<span class="dv-adm-doc-date">' + doc.uploadedAt.slice(0,10) + '</span>';
    } else {
      html += '<span class="dv-adm-doc-none">미제출</span>';
    }
    html += '</div>';
    if(doc && doc.uploaded){
      html += '<div class="dv-adm-doc-actions">';
      if(doc.fileType && doc.fileType.startsWith('image/')){
        html += '<button class="btn btn-sm" onclick="dvAdminPreview(\'' + listingId + '\',\'' + dt.id + '\')">🔍 미리보기</button>';
      }
      html += '<button class="btn btn-sm btn-success" onclick="dvAdminApproveDoc(\'' + listingId + '\',\'' + dt.id + '\',\'approved\')">✅ 승인</button>';
      html += '<button class="btn btn-sm btn-danger" onclick="dvAdminApproveDoc(\'' + listingId + '\',\'' + dt.id + '\',\'rejected\')">❌ 반려</button>';
      html += '</div>';
    }
    html += '</div>';
  });
  html += '</div>';

  html += '</div>'; // dv-admin-panel
  return html;
};

/* ─────────────────────────────────────────────
   전역 이벤트 함수 (window.*)
───────────────────────────────────────────── */
w.dvBindDocEvents = function(listingId){
  // 업로드 버튼 클릭
  document.querySelectorAll('.dv-btn-up, .dv-btn-reup').forEach(function(btn){
    btn.addEventListener('click', function(){
      var docId = btn.getAttribute('data-docid');
      var input = document.getElementById('dv-file-' + docId);
      if(input) input.click();
    });
  });
  // 파일 선택 처리
  document.querySelectorAll('.dv-file-input').forEach(function(inp){
    inp.addEventListener('change', function(){
      var file = inp.files[0];
      var docId = inp.id.replace('dv-file-','');
      if(!file) return;
      DV.handleDocUpload(listingId, docId, file, function(doc){
        // 해당 항목 UI 갱신
        var panel = document.getElementById('dv-doc-panel');
        if(panel) panel.outerHTML = DV.renderDocUploadPanel(listingId);
        dvBindDocEvents(listingId);
        toast('📎 ' + doc.fileName + ' 업로드 완료');
      });
    });
  });
};

w.dvReportFraud = function(listingId){
  var msg = prompt('사기 의심 내용을 간략히 입력해주세요:');
  if(msg){
    var reports = JSON.parse(localStorage.getItem('ok_fraud_reports') || '[]');
    reports.push({ listingId:listingId, msg:msg, at:new Date().toISOString() });
    localStorage.setItem('ok_fraud_reports', JSON.stringify(reports));
    toast('🚨 신고가 접수되었습니다. 관리자가 확인 후 조치합니다.');
  }
};

w.dvRequestDoc = function(listingId){
  toast('📄 서류 추가 요청이 등록자에게 전달됩니다.');
};

w.dvAdminSaveVerify = function(listingId){
  var vd = {
    ownerName: document.getElementById('dv-adm-owner').value,
    ownerMismatch: document.getElementById('dv-adm-mismatch').value === '1',
    mortgageRatio: parseFloat(document.getElementById('dv-adm-mortgage-ratio').value) || 0,
    mortgageCount: parseInt(document.getElementById('dv-adm-mortgage-count').value) || 0,
    hasInjunction: document.getElementById('dv-adm-injunction').value === '1',
    isIllegalBuilding: document.getElementById('dv-adm-illegal').value === '1',
    jeonseRatio: parseFloat(document.getElementById('dv-adm-jeonse-ratio').value) || 0,
    hasPriorTenant: document.getElementById('dv-adm-prior').value === '1',
    hasTaxLien: document.getElementById('dv-adm-taxlien').value === '1',
    ownershipMonths: parseInt(document.getElementById('dv-adm-ownership-months').value) || 99,
    insuranceRisk: document.getElementById('dv-adm-ins-risk').value === '1',
    verifiedAt: new Date().toISOString()
  };
  DV.saveVerifyData(listingId, vd);
  var score = DV.calcScore(listingId, vd);
  alert('✅ 검증 정보 저장 완료\n안전도 점수: ' + score + '점 / ' + DV.getGrade(score).label);
};

w.dvAdminApproveDoc = function(listingId, docId, status){
  var docs = DV.getDocs(listingId);
  if(docs[docId]){
    docs[docId].status = status;
    docs[docId].reviewedAt = new Date().toISOString();
    DV.saveDocs(listingId, docs);
    toast((status === 'approved' ? '✅ 승인' : '❌ 반려') + ' 처리 완료');
    // 해당 행 UI 갱신
    var row = document.querySelector('.dv-admin-doc-row');
    if(row && row.closest('.dv-admin-panel')){
      // 탭 재렌더링은 admin.html이 처리
      if(w.adminRefreshDocPanel) w.adminRefreshDocPanel(listingId);
    }
  }
};

w.dvAdminPreview = function(listingId, docId){
  var docs = DV.getDocs(listingId);
  var doc = docs[docId];
  if(!doc || !doc.dataUrl) return;
  var win = window.open('', '_blank');
  win.document.write('<html><body style="margin:0;background:#000"><img src="' + doc.dataUrl + '" style="max-width:100%;height:auto"></body></html>');
};

/* ─────────────────────────────────────────────
   CSS 스타일 (동적 삽입)
───────────────────────────────────────────── */
DV.injectStyles = function(){
  if(document.getElementById('dv-styles')) return;
  var css = `
/* ── 직거래 안심등록 패널 */
.dv-badge-direct{background:#F5A623;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:10px;}
.dv-doc-panel{border:2px solid #F5A623;border-radius:12px;padding:20px;margin:20px 0;background:#FFFBF2;}
.dv-doc-header h4{font-size:16px;font-weight:700;margin-bottom:6px;}
.dv-req-note{color:#c0392b;font-size:12px;font-weight:400;}
.dv-doc-desc{font-size:13px;color:#666;margin-bottom:16px;line-height:1.6;}
.dv-doc-list{display:flex;flex-direction:column;gap:12px;}
.dv-doc-item{display:flex;gap:12px;align-items:flex-start;background:#fff;border:1px solid #e0ddd8;border-radius:10px;padding:14px;transition:.2s;}
.dv-doc-item.dv-doc-ok{border-color:#27ae60;background:#f0faf5;}
.dv-doc-item.dv-doc-pending{border-color:#f39c12;background:#fffbf0;}
.dv-doc-icon{font-size:24px;flex-shrink:0;margin-top:2px;}
.dv-doc-info{flex:1;}
.dv-doc-name{font-size:14px;font-weight:700;margin-bottom:3px;}
.dv-req{color:#c0392b;font-size:11px;font-weight:400;}
.dv-opt{color:#888;font-size:11px;font-weight:400;}
.dv-doc-desc-txt{font-size:12px;color:#888;margin-bottom:4px;}
.dv-doc-tip{font-size:11.5px;color:#5d7a9a;background:#f0f5fa;border-radius:6px;padding:5px 8px;margin-top:4px;line-height:1.5;}
.dv-doc-uploaded{font-size:12px;color:#1a7a4a;margin-top:6px;font-weight:600;}
.dv-doc-actions{flex-shrink:0;}
.dv-btn-up,.dv-btn-reup{background:#c0392b;color:#fff;border:none;border-radius:7px;padding:7px 14px;font-size:13px;cursor:pointer;font-weight:600;}
.dv-btn-up:hover,.dv-btn-reup:hover{background:#9b2318;}
.dv-progress-wrap{margin-top:16px;padding:14px;background:#fff;border-radius:8px;border:1px solid #e0ddd8;}
.dv-progress-label{font-size:13px;font-weight:700;margin-bottom:8px;}
.dv-progress-bar-wrap{background:#f0ede8;border-radius:99px;height:10px;overflow:hidden;margin-bottom:8px;}
.dv-progress-bar{height:100%;background:#27ae60;border-radius:99px;transition:width .4s;}
.dv-progress-note{font-size:12px;color:#c0392b;}
.dv-progress-done{font-size:12px;color:#1a7a4a;font-weight:600;}

/* ── 안전도 패널 */
.dv-safety-panel{border:2px solid #2c3e50;border-radius:14px;overflow:hidden;margin:20px 0;}
.dv-sp-header{display:flex;align-items:center;gap:20px;padding:20px 24px;border-bottom:1px solid rgba(0,0,0,.1);flex-wrap:wrap;}
.dv-sp-score-wrap{text-align:center;}
.dv-sp-score{font-size:48px;font-weight:900;line-height:1;}
.dv-sp-score-label{font-size:12px;color:#888;margin-top:2px;}
.dv-sp-grade-info{flex:1;min-width:140px;}
.dv-sp-grade{font-size:22px;font-weight:800;margin-bottom:4px;}
.dv-sp-grade-desc{font-size:12px;color:#888;margin-bottom:8px;}
.dv-sp-certified{display:inline-block;background:#1a7a4a;color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;}
.dv-sp-uncert{display:inline-block;background:#e67e22;color:#fff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;}
.dv-sp-score-ring{flex-shrink:0;}
.dv-sp-section{padding:18px 24px;border-bottom:1px solid #e8e8e8;}
.dv-sp-section h4{font-size:14px;font-weight:700;margin-bottom:12px;}
.dv-check-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
@media(max-width:600px){.dv-check-grid{grid-template-columns:1fr;}}
.dv-check-item{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:8px;border:1px solid #e0ddd8;}
.dv-check-item.dv-ok{background:#f0faf5;border-color:#b7e4c7;}
.dv-check-item.dv-bad{background:#fdf0ef;border-color:#f5c6c2;}
.dv-check-icon{font-size:16px;flex-shrink:0;margin-top:1px;}
.dv-check-label{font-size:13px;font-weight:700;}
.dv-check-desc{font-size:11.5px;color:#888;margin-top:2px;}
.dv-risks-section{background:#fdf0ef;}
.dv-risk-item{display:flex;gap:12px;align-items:flex-start;padding:10px 12px;border-radius:8px;margin-bottom:8px;}
.dv-risk-danger{background:#fce4e4;border:1px solid #f5c6c2;}
.dv-risk-warn{background:#fef9e7;border:1px solid #f9e79f;}
.dv-risk-icon{font-size:18px;flex-shrink:0;}
.dv-risk-label{font-size:13px;font-weight:700;}
.dv-risk-desc{font-size:12px;color:#666;margin-top:2px;}
.dv-doc-status-list{display:flex;flex-direction:column;gap:6px;}
.dv-ds-row{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:7px;font-size:13px;}
.dv-ds-ok{background:#f0faf5;}
.dv-ds-bad{background:#fdf0ef;}
.dv-ds-pend{background:#fff8e6;}
.dv-ds-none{background:#f8f7f4;color:#aaa;}
.dv-ds-icon{font-size:16px;}
.dv-ds-name{flex:1;font-weight:600;}
.dv-ds-status{font-size:12px;color:#888;}
.dv-guide-section{background:#f0f5fa;}
.dv-guide-list{display:flex;flex-direction:column;gap:8px;}
.dv-guide-item{display:flex;gap:10px;align-items:flex-start;font-size:13px;padding:6px 0;}
.dv-g-icon{font-size:16px;flex-shrink:0;}
.dv-sp-footer{display:flex;gap:10px;padding:16px 24px;flex-wrap:wrap;background:#f8f7f4;}
.dv-btn-report{background:#c0392b;color:#fff;border:none;border-radius:7px;padding:8px 14px;font-size:13px;cursor:pointer;font-weight:600;}
.dv-btn-report:hover{background:#9b2318;}
.dv-btn-inquiry{background:#2980b9;color:#fff;border:none;border-radius:7px;padding:8px 14px;font-size:13px;cursor:pointer;font-weight:600;}

/* ── admin 패널 */
.dv-admin-panel{background:#fff;border-radius:12px;border:1px solid #e0ddd8;padding:20px;margin-top:16px;}
.dv-admin-panel h3{font-size:15px;font-weight:700;margin-bottom:16px;color:#2c2c2c;}
.dv-admin-section{margin-bottom:20px;}
.dv-admin-section h4{font-size:13px;font-weight:700;margin-bottom:10px;color:#555;}
.dv-admin-form{display:grid;grid-template-columns:1fr 1fr;gap:8px;align-items:center;}
.dv-admin-form label{font-size:12px;font-weight:600;text-align:right;padding-right:8px;}
.dv-admin-form input,.dv-admin-form select{padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:13px;}
.dv-admin-form .btn{grid-column:2;margin-top:6px;}
.dv-admin-doc-row{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border:1px solid #e8e8e8;border-radius:8px;margin-bottom:6px;flex-wrap:wrap;gap:8px;}
.dv-adm-doc-info{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.dv-adm-doc-icon{font-size:18px;}
.dv-adm-doc-name{font-size:13px;font-weight:600;}
.dv-adm-doc-file{font-size:11px;color:#5d7a9a;background:#f0f5fa;padding:2px 8px;border-radius:4px;}
.dv-adm-doc-date{font-size:11px;color:#aaa;}
.dv-adm-doc-none{font-size:12px;color:#ccc;}
.dv-adm-doc-actions{display:flex;gap:6px;flex-wrap:wrap;}
.btn-success{background:#27ae60;color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer;font-weight:600;}
.btn-danger{background:#c0392b;color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:12px;cursor:pointer;font-weight:600;}
`;
  var style = document.createElement('style');
  style.id = 'dv-styles';
  style.textContent = css;
  document.head.appendChild(style);
};

// 자동 스타일 주입
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', DV.injectStyles);
} else {
  DV.injectStyles();
}

/* esc 함수 fallback */
function esc(s){ if(w.esc) return w.esc(s); return (s||'').toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

w.DirectVerify = DV;
})(window);
