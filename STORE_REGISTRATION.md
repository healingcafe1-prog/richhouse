# OK복덕방 — 검색엔진·앱스토어 등록 가이드

> 최종 업데이트: 2026-09-27

---

## 📋 전체 등록 체크리스트

| 플랫폼 | 방식 | 상태 | 담당 URL |
|--------|------|------|----------|
| **구글 서치콘솔** | HTML 메타태그 | ⏳ 인증코드 교체 필요 | https://search.google.com/search-console |
| **네이버 웹마스터도구** | HTML 메타태그 + 파일 | ⏳ 인증코드 교체 필요 | https://searchadvisor.naver.com |
| **다음/카카오** | HTML 메타태그 | ⏳ 인증코드 교체 필요 | https://webmaster.daum.net |
| **구글 플레이** | TWA (PWA 래핑) | ⏳ 준비 완료, 등록 필요 | https://play.google.com/console |
| **안드로이드 홈화면** | PWA (manifest.json) | ✅ 완료 | — |
| **iOS Safari** | PWA (apple-touch-icon) | ✅ 완료 | — |

---

## 1️⃣ 구글 서치콘솔 (Google Search Console)

### 목적
- 구글 검색 결과에 사이트 노출
- 색인 요청, 검색 성능 분석, 구조화데이터 리치결과 확인

### 등록 절차
1. https://search.google.com/search-console 접속
2. **속성 추가** → URL 접두어 방식 선택
3. 도메인 입력: `https://xn--bn1bl1opra.kr`
4. **HTML 태그** 탭 선택 → content 값 복사
5. `index.html` 아래 줄 수정 (REPLACE_GOOGLE_VERIFICATION_CODE → 실제 코드):
   ```html
   <meta name="google-site-verification" content="실제코드입력">
   ```
6. 배포 후 **확인** 클릭
7. **Sitemaps** 메뉴 → Sitemap URL 등록:
   ```
   https://xn--bn1bl1opra.kr/sitemap.xml
   ```

### 추가 작업 (등록 후)
- **URL 검사** → 홈 URL 색인 요청
- **리치 결과 테스트**: https://search.google.com/test/rich-results
  - URL: `https://xn--bn1bl1opra.kr/` 입력 → FAQ·LocalBusiness·SoftwareApp 확인

---

## 2️⃣ 네이버 웹마스터도구 (Search Advisor)

### 목적
- 네이버 검색 결과에 사이트 노출
- 네이버 블로그 공유 시 OG 이미지 정상 표시

### 등록 절차

#### 방법 A — HTML 메타태그 (권장)
1. https://searchadvisor.naver.com 접속 (네이버 로그인 필요)
2. **사이트 등록** → `https://xn--bn1bl1opra.kr` 입력
3. **HTML 태그** 선택 → content 값 복사
4. `index.html` 수정:
   ```html
   <meta name="naver-site-verification" content="실제코드입력">
   ```
5. 배포 후 **소유 확인** 클릭

#### 방법 B — HTML 파일 업로드
1. 네이버에서 발급한 파일명 확인 (예: `naver1234567890abcdef.html`)
2. 현재 더미 파일 `naverXXXXXXXXXXXXXXXX.html`을 실제 파일명으로 교체:
   ```bash
   mv naverXXXXXXXXXXXXXXXX.html naver실제파일명.html
   echo "naver-site-verification: naver실제파일명.html" > naver실제파일명.html
   ```
3. 배포 후 네이버에서 **소유 확인** 클릭

### 추가 작업 (등록 후)
- **사이트맵 제출**: `https://xn--bn1bl1opra.kr/sitemap.xml`
- **RSS/Atom 피드** 등록 (선택)
- **콘텐츠 최적화** 탭 확인

---

## 3️⃣ 다음/카카오 검색 (Daum Webmaster)

### 등록 절차
1. https://webmaster.daum.net 접속
2. 사이트 등록 → `https://xn--bn1bl1opra.kr`
3. 인증 코드 발급 → `index.html` 수정:
   ```html
   <meta name="daumoa" content="실제코드입력">
   ```
4. 사이트맵 등록: `https://xn--bn1bl1opra.kr/sitemap.xml`

---

## 4️⃣ 안드로이드 — PWA 홈화면 추가 (즉시 사용 가능)

### 현재 지원 상태 ✅
- `manifest.json` 완성 (13종 아이콘: 16~512px)
- Service Worker 등록 (`sw.js`)
- `theme-color`, `mobile-web-app-capable` 메타태그 완비
- `maskable` 아이콘 (`icon-512-maskable.png`) 포함

### 사용자 홈화면 추가 방법
1. 크롬 브라우저로 `https://xn--bn1bl1opra.kr` 접속
2. 주소창 오른쪽 **"홈 화면에 추가"** 배너 탭
3. 또는 메뉴(⋮) → **앱 설치** 선택

---

## 5️⃣ 구글 플레이 스토어 — TWA 등록

### TWA (Trusted Web Activity) 란?
PWA를 네이티브 APK로 래핑하여 구글 플레이에 등록하는 방식.  
별도 네이티브 코드 없이 웹 앱을 앱스토어에 올릴 수 있습니다.

### 준비된 것들 ✅
- `manifest.json` — 완성 (아이콘·스크린샷·shortcuts 포함)
- `/.well-known/assetlinks.json` — 파일 위치 준비됨 (SHA256 지문 입력 필요)
- 앱 패키지명: `kr.co.atomia.richhouse`

### STEP 1 — 개발 환경 설정
```bash
# Node.js, Java JDK 17+ 필요
npm install -g @bubblewrap/cli

# 프로젝트 초기화
bubblewrap init --manifest https://xn--bn1bl1opra.kr/manifest.json

# 질문 응답 가이드:
# Domain: xn--bn1bl1opra.kr
# Application ID: kr.co.atomia.richhouse
# Application name: OK복덕방
# Short name: OK복덕방
# Version: 1.0
# Version code: 1
# Orientation: portrait
# Launcher name: OK복덕방
# Theme color: #14213D
# Background color: #14213D
```

### STEP 2 — APK 빌드
```bash
bubblewrap build
# 생성: app-release-signed.apk
```

### STEP 3 — assetlinks.json 완성

빌드 후 생성된 SHA256 지문을 확인:
```bash
keytool -list -v -keystore android.keystore
# 출력에서 "SHA256:" 값 복사
```

`.well-known/assetlinks.json` 수정:
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "kr.co.atomia.richhouse",
    "sha256_cert_fingerprints": [
      "AA:BB:CC:DD:EE:FF:..."  ← 실제 SHA256 지문 입력
    ]
  }
}]
```

### STEP 4 — 구글 플레이 콘솔 등록
1. https://play.google.com/console 접속
2. **앱 만들기** 클릭
3. 앱 정보 입력:

| 항목 | 값 |
|------|-----|
| 앱 이름 | OK복덕방 |
| 기본 언어 | 한국어 |
| 앱 유형 | 앱 |
| 유료/무료 | 무료 |

4. **기본 스토어 등록정보** 작성:

```
앱 이름: OK복덕방 — 전국 부동산 통합비교

짧은 설명 (80자):
매매·전세·월세·직거래·법원경매를 주소 하나로 한눈에 비교하는 부동산 플랫폼

자세한 설명 (4000자):
OK복덕방은 전국의 아파트·상가·토지·단독주택·원룸 매물을 매매·전세·월세·
직거래·법원경매 유형별로 한눈에 비교할 수 있는 부동산 통합 플랫폼입니다.

[주요 기능]
✅ 전국 33개+ 실매물 직거래 검색
✅ 법원경매 물건 감정가·최저입찰가·유찰횟수 조회
✅ 실거래가 시세 조회
✅ 사진 최대 20장 + 동영상 매물 등록
✅ 직거래 안전거래 시스템 (서류·본인확인·체크리스트)
✅ 무료 현장방문 예약
✅ 부동산 대출 계산기
✅ 공인중개사 센터

[직거래 안전거래]
등기사항전부증명서·건축물대장·신분증 등 7종 서류 검증
소유자 본인확인 SMS 인증
10항목 안전체크리스트 (0~100점 안전점수)
S·A·B·C·D 5등급 안전등급 표시

[개발사]
주식회사 아토미아 | 충청북도 청주시 상당구 중앙로 43
대표 전화: 043-225-8582
이메일: help@atomia.co.kr
```

5. **그래픽 자료** 업로드:
   - 앱 아이콘: `icons/icon-512.png` (512×512px)
   - 피처드 그래픽: `og-image.png` (1200×630px → 1024×500px으로 리사이즈 필요)
   - 스크린샷: 폰 화면 캡처 2장 이상 (1080×1920px 권장)

6. **콘텐츠 등급** 설문 완료 (부동산 앱 → 전체 이용가)
7. **APK/AAB 업로드** → 내부 테스트 → 프로덕션 출시

---

## 6️⃣ 현재 파일 구조 (등록 준비 완료)

```
/home/user/webapp/
├── index.html                    ← 메타태그·OG·JSON-LD 완비
├── manifest.json                 ← PWA 완성 (13종 아이콘)
├── sw.js                         ← Service Worker
├── sitemap.xml                   ← 41개 URL (매물 33개 포함)
├── robots.txt                    ← 구글봇·네이버봇 허용
├── og-image.png                  ← SNS 공유 이미지 (1200×630)
├── icons/
│   ├── icon-16.png               ← Favicon
│   ├── icon-32.png               ← Favicon
│   ├── icon-48.png               ← Windows/Linux
│   ├── icon-72.png               ← Android LDPI
│   ├── icon-96.png               ← Android MDPI
│   ├── icon-128.png              ← Chrome Web Store
│   ├── icon-144.png              ← Windows Tile / IE
│   ├── icon-152.png              ← iPad 레티나
│   ├── icon-180.png              ← iPhone 6+ / Apple Touch
│   ├── icon-192.png              ← Android / PWA 필수
│   ├── icon-384.png              ← Android XXXHDPI
│   ├── icon-512.png              ← 구글 플레이 / PWA 필수
│   └── icon-512-maskable.png     ← Android 적응형 아이콘
├── .well-known/
│   └── assetlinks.json           ← TWA SHA256 지문 (입력 필요)
├── naverXXXXXXXXXXXXXXXX.html   ← 네이버 인증 (파일명 교체 필요)
└── google-site-verification-REPLACE.html  ← 구글 인증 (코드 교체 필요)
```

---

## 7️⃣ 인증 코드 교체 Quick Guide

### index.html에서 교체할 3줄

```html
<!-- 구글: REPLACE_GOOGLE_VERIFICATION_CODE → 실제 코드 -->
<meta name="google-site-verification" content="REPLACE_GOOGLE_VERIFICATION_CODE">

<!-- 네이버: REPLACE_NAVER_VERIFICATION_CODE → 실제 코드 -->
<meta name="naver-site-verification" content="REPLACE_NAVER_VERIFICATION_CODE">

<!-- 다음: REPLACE_DAUM_VERIFICATION_CODE → 실제 코드 -->
<meta name="daumoa" content="REPLACE_DAUM_VERIFICATION_CODE">
```

### 네이버 파일 방식 사용 시

```bash
cd /home/user/webapp

# 1. 실제 파일명으로 교체 (naverXXX → 네이버에서 발급한 실제 파일명)
mv naverXXXXXXXXXXXXXXXX.html naver{실제코드}.html
echo "naver-site-verification: naver{실제코드}.html" > naver{실제코드}.html

# 2. git add + commit + push
git add naver{실제코드}.html
git commit -m "feat: 네이버 웹마스터도구 인증 파일 등록"
git push -f origin genspark_ai_developer
```

---

*OK복덕방 | 주식회사 아토미아 | help@atomia.co.kr*
