const cacheName = 'pwa_template-v1';
const cacheContent = [
    './index.html',
    './icon.png',
    './public/app.js',
    './manifest.json',
    './README.md'
];


self.addEventListener("install", e => {
    console.log('[Service Worker] Install');
    const cacheUp = async() => {
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(cacheContent);
        }); 
    }
    e.waitUntil(cacheUp());
});
self.addEventListener("fetch", (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });