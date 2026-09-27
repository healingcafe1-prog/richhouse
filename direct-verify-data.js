// direct-verify-data.js — 직거래 안심 샘플 데이터 (관리자 검증 완료)
// 실제 서비스에서는 관리자 심사 후 이 데이터가 채워집니다

(function(){
  if(typeof DirectVerify === 'undefined') return;
  // 이미 데이터가 있으면 덮어쓰지 않음 (localStorage 우선)
  function initIfEmpty(lid, fn){
    var k = 'ok_direct_verify_' + lid;
    if(!localStorage.getItem(k)) fn();
  }
  function initDocsIfEmpty(lid, fn){
    var k = 'ok_direct_docs_' + lid;
    if(!localStorage.getItem(k)) fn();
  }

  // 검증 데이터
    initIfEmpty('L001', function(){DirectVerify.saveVerifyData('L001', {"ownerName": "김오송", "ownerMismatch": false, "mortgageRatio": 35, "mortgageCount": 1, "hasInjunction": false, "isIllegalBuilding": false, "jeonseRatio": 65, "hasPriorTenant": false, "hasTaxLien": false, "ownershipMonths": 36, "insuranceRisk": false, "selfReported": false, "adminVerified": true, "reportedAt": "2026-08-19T00:00:00+09:00"});});
  initIfEmpty('L003', function(){DirectVerify.saveVerifyData('L003', {"ownerName": "박세종", "ownerMismatch": false, "mortgageRatio": 0, "mortgageCount": 0, "hasInjunction": false, "isIllegalBuilding": false, "jeonseRatio": 0, "hasPriorTenant": false, "hasTaxLien": false, "ownershipMonths": 60, "insuranceRisk": false, "selfReported": false, "adminVerified": true, "reportedAt": "2026-08-19T00:00:00+09:00"});});
  initIfEmpty('L005', function(){DirectVerify.saveVerifyData('L005', {"ownerName": "이봉명", "ownerMismatch": false, "mortgageRatio": 68, "mortgageCount": 2, "hasInjunction": false, "isIllegalBuilding": false, "jeonseRatio": 0, "hasPriorTenant": false, "hasTaxLien": false, "ownershipMonths": 8, "insuranceRisk": false, "selfReported": false, "adminVerified": true, "reportedAt": "2026-08-19T00:00:00+09:00"});});
  initIfEmpty('L008', function(){DirectVerify.saveVerifyData('L008', {"ownerName": "최내수", "ownerMismatch": false, "mortgageRatio": 55, "mortgageCount": 2, "hasInjunction": true, "isIllegalBuilding": false, "jeonseRatio": 88, "hasPriorTenant": true, "hasTaxLien": false, "ownershipMonths": 6, "insuranceRisk": true, "selfReported": false, "adminVerified": true, "reportedAt": "2026-08-19T00:00:00+09:00"});});

  // 서류 데이터 (샘플)
    initDocsIfEmpty('L001', function(){DirectVerify.saveDocs('L001', {"registry": {"uploaded": true, "fileName": "등기사항전부증명서_L001.pdf", "fileSize": 245000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "id_card": {"uploaded": true, "fileName": "신분증_L001.jpg", "fileSize": 180000, "fileType": "image/jpeg", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "building_reg": {"uploaded": true, "fileName": "건축물대장_L001.pdf", "fileSize": 120000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "consent_form": {"uploaded": true, "fileName": "직거래동의서_L001.pdf", "fileSize": 80000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}});});
  initDocsIfEmpty('L003', function(){DirectVerify.saveDocs('L003', {"registry": {"uploaded": true, "fileName": "등기사항전부증명서_L003.pdf", "fileSize": 260000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "id_card": {"uploaded": true, "fileName": "신분증_L003.jpg", "fileSize": 195000, "fileType": "image/jpeg", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "building_reg": {"uploaded": true, "fileName": "건축물대장_L003.pdf", "fileSize": 130000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "ownership_cert": {"uploaded": true, "fileName": "소유확인서_L003.pdf", "fileSize": 95000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "tax_cert": {"uploaded": true, "fileName": "납세증명서_L003.pdf", "fileSize": 88000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "consent_form": {"uploaded": true, "fileName": "직거래동의서_L003.pdf", "fileSize": 82000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}});});
  initDocsIfEmpty('L005', function(){DirectVerify.saveDocs('L005', {"registry": {"uploaded": true, "fileName": "등기사항전부증명서_L005.pdf", "fileSize": 240000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "id_card": {"uploaded": true, "fileName": "신분증_L005.jpg", "fileSize": 175000, "fileType": "image/jpeg", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "pending"}, "building_reg": {"uploaded": true, "fileName": "건축물대장_L005.pdf", "fileSize": 115000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "approved"}, "consent_form": {"uploaded": true, "fileName": "직거래동의서_L005.pdf", "fileSize": 78000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "pending"}});});
  initDocsIfEmpty('L008', function(){DirectVerify.saveDocs('L008', {"registry": {"uploaded": true, "fileName": "등기사항전부증명서_L008.pdf", "fileSize": 250000, "fileType": "application/pdf", "uploadedAt": "2026-08-19T00:00:00+09:00", "status": "pending"}, "id_card": {"uploaded": false}, "building_reg": {"uploaded": false}, "consent_form": {"uploaded": false}});});

  console.log('[OK복덕방] 직거래 검증 샘플 데이터 초기화 완료');
})();
