const cacheName = 'pwa_template-v1';
const cacheContent = [
    '/index.html',
    '/icon.png',
    '/public/app.js',
    '/manifest.json',
    '/README.md'
];

self.addEventListener("install", e => {
    console.log('[Service Worker] Install');
    e.waitUntil(async() => {
        caches.open(cacheName).then(function(cache){
            cache.addAll(cacheContent);
        }); 
    });
});
self.addEventListener("fetch", e =>{
    console.log(`intercep fetch request for: ${e.request.url}`);
});