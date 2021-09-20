const cacheName = 'pwa_template-v1';
const cacheContent = [
    '/PWA-Template/index.html',
    '/PWA-Template/icon.png',
    '/PWA-Template/public/app.js',
    '/PWA-Template/manifest.json',
    '/PWA-Template/README.md'
];

self.addEventListener("install", e => {
    console.log('[Service Worker] Install');
    e.waitUntil(async() => {
        const cache = await caches.open(cacheName);
        await cache.addAll(cacheContent);
    });
});
self.addEventListener("fetch", e =>{
    console.log(`intercep fetch request for: ${e.request.url}`);
});