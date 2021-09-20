self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./public", "./icon.png"]);
        })
    );
});
self.addEventListener("fetch", e =>{
    console.log(`intercep fetch request for: ${e.request.url}`);
});