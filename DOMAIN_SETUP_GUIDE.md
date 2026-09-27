# 🏠 복덕방.kr 도메인 연결 완전 가이드
## 카페24 DNS 유지 + GitHub Pages 방식

> **작성일**: 2026-09-27  
> **방식**: 네임서버 변경 없음 → 카페24 DNS CNAME만 추가  
> **대상**: healingcafe1-prog.github.io (GitHub Pages)

---

## ✅ 전체 흐름 요약

```
복덕방.kr (카페24 DNS 유지)
├── www.복덕방.kr  → CNAME → healingcafe1-prog.github.io
└── 복덕방.kr (루트) → A 레코드 → GitHub Pages IP 4개
```

---

## STEP 1: GitHub Pages 활성화

### 1-1. GitHub 저장소 설정
1. https://github.com/healingcafe1-prog/richhouse 접속
2. **Settings** 탭 클릭
3. 왼쪽 메뉴 → **Pages** 클릭
4. **Source** 섹션: `Deploy from a branch` 선택
5. **Branch**: `main` 선택, 폴더: `/ (root)` 선택
6. **Save** 클릭

### 1-2. Custom Domain 입력
1. Pages 설정 화면 → **Custom domain** 입력란
2. `xn--bn1bl1opra.kr` 입력 (복덕방.kr 퓨니코드)  
   ※ 한글 도메인 그대로 `복덕방.kr` 입력해도 됨
3. **Save** 클릭
4. **Enforce HTTPS** 체크박스 → 나중에 DNS 전파 후 활성화 가능

---

## STEP 2: 카페24 DNS 설정

> 카페24 관리자 → 도메인 관리 → DNS 레코드 관리

### 2-1. A 레코드 4개 추가 (루트 도메인용)

| 레코드 종류 | 호스트명 | 값 (IP) | TTL |
|------------|----------|---------|-----|
| A | @ (또는 공백) | 185.199.108.153 | 300 |
| A | @ (또는 공백) | 185.199.109.153 | 300 |
| A | @ (또는 공백) | 185.199.110.153 | 300 |
| A | @ (또는 공백) | 185.199.111.153 | 300 |

> **주의**: 기존에 다른 A 레코드가 있다면 삭제 후 추가  
> @ = 루트 도메인(복덕방.kr 자체)

### 2-2. CNAME 레코드 추가 (www용)

| 레코드 종류 | 호스트명 | 값 | TTL |
|------------|----------|-----|-----|
| CNAME | www | healingcafe1-prog.github.io | 300 |

> **기존 CNAME이 richhouse.pages.dev로 되어있다면** → 값을 `healingcafe1-prog.github.io`로 변경

---

## STEP 3: DNS 전파 확인 (10분~48시간)

```bash
# 터미널에서 확인 (맥/리눅스)
dig xn--bn1bl1opra.kr A
dig www.xn--bn1bl1opra.kr CNAME

# 온라인 도구
# https://dnschecker.org/#A/xn--bn1bl1opra.kr
# https://www.whatsmydns.net/#A/xn--bn1bl1opra.kr
```

### 정상 전파 시 출력 예시
```
xn--bn1bl1opra.kr.  300  IN  A  185.199.108.153
www.xn--bn1bl1opra.kr. 300 IN CNAME healingcafe1-prog.github.io.
```

---

## STEP 4: HTTPS 활성화

DNS 전파 완료 후 (보통 10분~1시간):
1. GitHub → Settings → Pages
2. **Enforce HTTPS** 체크박스 활성화
3. 초록색 체크마크 확인: "Your site is published at https://xn--bn1bl1opra.kr/"

---

## STEP 5: 접속 확인

| 주소 | 예상 결과 |
|------|-----------|
| http://복덕방.kr | → https://복덕방.kr (리다이렉트) |
| https://복덕방.kr | ✅ OK복덕방 메인 화면 |
| https://www.복덕방.kr | ✅ OK복덕방 메인 화면 |
| https://healingcafe1-prog.github.io/richhouse | GitHub Pages 기본 URL |

---

## ⚠️ 주의사항

### 카페24 DNS 유지 방식의 한계
- **루트 도메인 CNAME 불가**: 카페24 DNS는 `@`(루트)에 CNAME 불가 → **A 레코드로 대체**
- **GitHub Pages IP는 변경될 수 있음**: GitHub 공식 문서 확인 권장
  - 최신 IP: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### www 리다이렉트
- `www.복덕방.kr` → `복덕방.kr` 리다이렉트는 GitHub Pages에서 자동 처리
- 별도 설정 불필요

---

## 🔄 기존 Cloudflare 설정 정리 (선택사항)

> Cloudflare에 복덕방.kr 도메인을 추가했다면 제거 권장 (혼선 방지)

1. Cloudflare 대시보드 → 해당 도메인 선택
2. 왼쪽 메뉴 → **Overview** → 아래 스크롤
3. **Delete this zone** 클릭 (도메인 제거, 네임서버는 카페24 그대로 유지됨)

---

## 📊 현재 배포 상태

| 항목 | 상태 |
|------|------|
| GitHub main 브랜치 | ✅ 최신 (4008352) |
| CNAME 파일 | ✅ `xn--bn1bl1opra.kr` |
| 404.html (SPA 폴백) | ✅ 생성됨 |
| GitHub Pages 활성화 | ⏳ 수동 설정 필요 |
| 카페24 A 레코드 4개 | ⏳ 수동 추가 필요 |
| 카페24 www CNAME | ⏳ 수정 필요 (→ healingcafe1-prog.github.io) |
| HTTPS 인증서 | ⏳ DNS 전파 후 자동 발급 |

---

## 🆘 문제 해결

### "DNS check was unsuccessful" 오류 (GitHub Pages)
- DNS 전파가 아직 안 됨 → 30분~1시간 후 재시도
- 카페24 DNS에 A 레코드 4개 모두 추가됐는지 확인

### 사이트 접속 시 404 페이지
- CNAME 파일이 저장소 루트에 있는지 확인: `cat CNAME`
- GitHub Pages가 main 브랜치 배포로 설정됐는지 확인

### www는 되는데 루트가 안 됨
- 카페24 DNS에서 기존 A 레코드 충돌 확인
- A 레코드 4개 모두 삭제 후 재추가

### HTTPS 인증서 오류
- DNS 전파 완료 후 GitHub에서 자동 발급 (최대 24시간)
- Enforce HTTPS를 잠시 껐다가 다시 켜기
