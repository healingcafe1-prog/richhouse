/* ============================================================
   OK복덕방 Service Worker v3
   주식회사 아토미아 (Atomia Co., Ltd.)
   Network First — index.html은 항상 네트워크 우선
   ============================================================ */

const CACHE_VERSION = 'richhouse-v3';
const CACHE_URLS = [
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/og-image.png'
];

/* ── 설치: 핵심 정적 파일 선캐시 (index.html 제외) ── */
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(CACHE_URLS);
    })
  );
});

/* ── 활성화: 이전 버전 캐시 삭제 ── */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(k) { return k !== CACHE_VERSION; })
          .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* ── Fetch: Network First 전략 ── */
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);

  // 외부 도메인 (Leaflet CDN 등) — 그대로 통과
  if (url.origin !== self.location.origin) return;

  // index.html, / — 항상 네트워크 우선 (캐시 절대 사용 안 함)
  var pathname = url.pathname;
  if (pathname === '/' || pathname === '/index.html') {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match('/index.html');
      })
    );
    return;
  }

  // 나머지 정적 파일 — Cache First
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      var fetchPromise = fetch(event.request).then(function(response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match('/index.html');
      });
      return cached || fetchPromise;
    })
  );
});

/* ── 메시지: 강제 업데이트 ── */
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
