// Minimal service worker — required by browsers for PWA installability.
// This app relies on Firebase for live data, so we intentionally do NOT
// cache API/database calls. We only pass requests straight through.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
