// V11.0.5 service worker: network-first with a 2.5 s fallback to cache, so a weak signal at the site never stalls app start.
const CACHE='cuatung-lighting-v11.0.5-shell';
const ASSETS=['./','./index.html','./style.css','./app.js','./config.js','./manifest.json','./assets/logo.png','./assets/icon-192x192.png','./assets/icon-512x512.png','./assets/apple-touch-icon.png','./assets/favicon-32.png'];
const NET_TIMEOUT_MS=2500;
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const req=event.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const network=fetch(req,{cache:'no-store'}).then(res=>{if(res&&res.ok)cache.put(req,res.clone()).catch(()=>{});return res});
    const timeout=new Promise(resolve=>setTimeout(()=>resolve(null),NET_TIMEOUT_MS));
    const fast=await Promise.race([network.catch(()=>null),timeout]);
    if(fast)return fast;
    const cached=(await cache.match(req,{ignoreSearch:true}))||(req.mode==='navigate'?await cache.match('./index.html'):null);
    if(cached){event.waitUntil(network.catch(()=>{}));return cached}
    try{return await network}catch(_){return (await cache.match('./index.html'))||Response.error()}
  })());
});
