# 복덕방.kr 도메인 연결 가이드 (카페24 기준)
> OK복덕방 — 카페24 등록 도메인 → Cloudflare Pages 연결

---

## 📋 도메인 기본 정보

| 항목 | 값 |
|------|-----|
| 한글 도메인 | 복덕방.kr |
| 퓨니코드 (ASCII) | xn--bn1bl1opra.kr |
| 도메인 등록기관 | 카페24 (cafe24.com) |
| 연결 대상 | Cloudflare Pages — richhouse.pages.dev |

---

## ⚡ 연결 방식 선택

카페24에서 도메인을 등록한 경우 **두 가지 방식** 중 하나를 선택합니다.

| 방식 | 특징 | 추천 |
|------|------|------|
| **방식 A** — 카페24 DNS에서 CNAME 추가 | 카페24 네임서버 유지, DNS만 추가 | ✅ 간단·빠름 |
| **방식 B** — Cloudflare 네임서버로 변경 | 전체 DNS를 Cloudflare로 이관 | CDN·보안 강화 원할 때 |

---

## ✅ 방식 A — 카페24 DNS에서 CNAME 추가 (권장)

> 카페24 네임서버를 그대로 쓰면서 Cloudflare Pages로만 연결합니다.
> 네임서버 전파 대기 없이 **즉시 적용** 가능합니다.

### STEP A-1. 카페24 도메인 DNS 관리 접속

1. [https://www.cafe24.com](https://www.cafe24.com) 로그인
2. 상단 메뉴: **나의 서비스 관리** → **도메인 관리** → **DNS 관리**
3. `복덕방.kr` (또는 `xn--bn1bl1opra.kr`) 도메인 선택 → **DNS 관리** 버튼 클릭

### STEP A-2. CNAME 레코드 추가

DNS 관리 화면에서 **별칭(CNAME)** 탭 선택 → **CNAME 추가** 클릭:

| 구분 | 입력값 |
|------|--------|
| 호스트 (이름) | `@` (또는 비워두기 — 루트 도메인) |
| 별칭값 (값) | `richhouse.pages.dev` |
| TTL | 300 (또는 기본값) |

> ⚠️ **주의**: 카페24는 루트 도메인(`@`)에 CNAME을 지원하지 않을 수 있습니다.
> 루트 CNAME이 안 된다면 **A 레코드** 방식으로 대체합니다.

#### 루트 CNAME 불가 시 — A 레코드 대체

Cloudflare Pages의 IP를 직접 등록합니다 (Pages IP는 고정이 아니므로 비권장).
이 경우 **방식 B(네임서버 이관)** 를 사용하는 것이 훨씬 안정적입니다.

### STEP A-3. www 서브도메인 추가 (선택)

| 구분 | 입력값 |
|------|--------|
| 호스트 | `www` |
| 별칭값 | `richhouse.pages.dev` |
| TTL | 300 |

### STEP A-4. Cloudflare Pages — 커스텀 도메인 등록

1. [https://dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → `richhouse` 프로젝트
2. **Custom domains** 탭 → **Set up a custom domain** 클릭
3. 도메인 입력: `xn--bn1bl1opra.kr` → **Continue**
4. "CNAME 레코드가 이미 있습니다" 확인 → **Activate domain**

> DNS 전파 후 자동으로 SSL 인증서가 발급됩니다 (최대 10분).

---

## 🌐 방식 B — Cloudflare 네임서버로 전환

> 더 강력한 CDN·WAF·분석 기능을 원할 때 사용합니다.
> **네임서버 전파에 24~48시간** 소요될 수 있습니다.

### STEP B-1. Cloudflare에 도메인 추가

1. [https://dash.cloudflare.com](https://dash.cloudflare.com) → **Add a Site** 클릭
2. 도메인 입력: `xn--bn1bl1opra.kr` → **Add site**
3. 플랜 선택: **Free** → Continue
4. 기존 DNS 레코드 스캔 결과 확인 (자동 가져오기)
5. **Cloudflare 네임서버 2개 복사** (예시):
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
   ※ 실제값은 Cloudflare 화면에서 확인

### STEP B-2. 카페24에서 네임서버 변경

1. [https://www.cafe24.com](https://www.cafe24.com) 로그인
2. **나의 서비스 관리** → **도메인 관리** → **네임서버 변경**
3. `복덕방.kr` 선택 → **네임서버 직접 입력** 선택
4. 기존 카페24 네임서버 삭제 후 Cloudflare NS 2개 입력:

   ```
   1차 네임서버: ns1.cloudflare.com  (Cloudflare 제공값 입력)
   2차 네임서버: ns2.cloudflare.com  (Cloudflare 제공값 입력)
   ```

5. **저장** → 전파 대기 (최대 48시간, 보통 1~4시간)

### STEP B-3. Cloudflare DNS에서 CNAME 추가

네임서버 전파 확인 후 Cloudflare 대시보드 → **DNS** 탭:

| 타입 | 이름 | 내용 | 프록시 |
|------|------|------|--------|
| CNAME | `@` (루트) | `richhouse.pages.dev` | 🟠 프록시 ON |
| CNAME | `www` | `xn--bn1bl1opra.kr` | 🟠 프록시 ON |

### STEP B-4. Cloudflare Pages — 커스텀 도메인 등록

방식 A의 STEP A-4와 동일합니다.

### STEP B-5. SSL/TLS 설정

Cloudflare 대시보드 → **SSL/TLS** → **Overview**:
- 암호화 모드: **Full (strict)** ← 반드시 이 값으로
- **Edge Certificates** → **Always Use HTTPS**: ON
- **Automatic HTTPS Rewrites**: ON

---

## 🔍 연결 확인 방법

```bash
# DNS 전파 확인 (터미널)
nslookup xn--bn1bl1opra.kr 8.8.8.8
dig xn--bn1bl1opra.kr CNAME +short

# 예상 결과 (방식 A/B 공통)
# xn--bn1bl1opra.kr → richhouse.pages.dev
```

또는 브라우저에서:
- `https://복덕방.kr` → OK복덕방 메인 ✅
- `https://xn--bn1bl1opra.kr` → OK복덕방 메인 ✅
- `https://www.복덕방.kr` → 메인 (www CNAME 등록 시) ✅

온라인 확인 도구: https://dnschecker.org/#CNAME/xn--bn1bl1opra.kr

---

## 📋 GitHub → Cloudflare Pages 배포 연결

도메인 연결 전 **GitHub 저장소가 Cloudflare Pages에 배포**되어 있어야 합니다.

1. [https://dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → **Create a project**
2. **Connect to Git** → GitHub 계정 연결 → `richhouse` 저장소 선택
3. 빌드 설정:
   ```
   Branch:            main
   Build command:     (비워두기 — 정적 사이트)
   Build output dir:  /  (루트)
   ```
4. **Save and Deploy** → 자동 배포 완료 후 `richhouse.pages.dev` 확인

---

## 🚨 카페24 자주 겪는 문제

### Q. 카페24에서 루트(@) CNAME이 안 됨
**A.** 카페24는 루트 도메인 CNAME을 지원하지 않는 경우가 있습니다.  
→ **방식 B(네임서버 이관)** 로 전환하면 Cloudflare에서 CNAME Flattening으로 해결됩니다.

### Q. 네임서버 변경 후 카페24 이메일·호스팅이 끊김
**A.** 네임서버 이관 전 기존 MX·A 레코드를 Cloudflare DNS에 먼저 입력해 두어야 합니다.  
카페24의 기존 DNS 레코드를 **미리 메모**하고 Cloudflare에 동일하게 등록하세요.

### Q. "도메인이 이미 Cloudflare에 있습니다" 오류
**A.** 다른 Cloudflare 계정에 등록된 경우입니다. support.cloudflare.com 에 문의하세요.

### Q. SSL 인증서 발급 중 오류
**A.** DNS 전파가 완료된 후 Cloudflare Pages에서 **Retry** 버튼을 클릭하세요.

### Q. 사이트 접속 시 404 Not Found
**A.** `_redirects` 파일의 `/* /index.html 200` 규칙이 적용되었는지 확인.  
Pages 프로젝트를 재배포(Retry deployment)하세요.

---

## 📁 관련 파일

| 파일 | 역할 |
|------|------|
| `_headers` | Cloudflare Pages HTTP 보안·캐시 헤더 |
| `_redirects` | SPA 해시라우팅 폴백 (`/* → /index.html 200`) |
| `sitemap.xml` | 검색엔진 URL 맵 (`복덕방.kr` 기준) |
| `robots.txt` | 크롤러 정책 + Sitemap 위치 |
| `manifest.json` | PWA 메타데이터 (short_name: OK복덕방) |

---

## ⏱️ 예상 소요 시간

| 방식 | DNS 전파 | SSL 발급 | 총 소요 |
|------|---------|---------|---------|
| 방식 A (카페24 DNS 유지) | 즉시~1시간 | 5~10분 | **약 1시간** |
| 방식 B (Cloudflare NS 이관) | 1~48시간 | 5~10분 | **최대 48시간** |

---

*최종 업데이트: 2026-08-28 | OK복덕방 (주식회사 아토미아)*
