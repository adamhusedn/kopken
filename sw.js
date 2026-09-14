// Service worker minimal untuk PWA install eligibility
const CACHE_NAME = 'jasdor-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Pass-through fetch (online-first, no caching strategy yang complex)
// Ini cukup untuk meet PWA install criteria
self.addEventListener('fetch', (e) => {
  // Default browser behavior
});
