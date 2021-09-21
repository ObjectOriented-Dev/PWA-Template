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
self.addEventListener("fetch", e =>{
    console.log(`intercep fetch request for: ${e.request.url}`);
});