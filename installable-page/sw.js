const CACHE_NAME = 'v1';

const cacheFiles = [
    './images/lds.png',
    './images/mxz.png',
    './images/mdi.png',
    './images/yzr.png',
    './index.html',
    './main.js',
    './style.css',
    './mxz.ico'
];

self.addEventListener("install", (e) => {
    console.log('installing service worker now...');
    e.waitUntil(
        (async() => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(cacheFiles)
        })()
    )
});

self.addEventListener("fetch", (e) => {
    console.log('fetching the resources that you want to get');
    e.respondWith(
        (async() => {
            const r = await caches.match(e.request);
            if(r) return r;
            const response = await fetch(e.request);
            const cache = await caches.open(CACHE_NAME);
            await cache.put(e.request, response.clone());
            return response;
        })()
    )
})