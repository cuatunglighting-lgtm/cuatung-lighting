const CACHE='cuatung-v7-20261006-01';
const CORE=['./','./index.html','./config.js?v=2026100601','./style.css?v=2026100601','./app.js?v=2026100601','./manifest.json?v=2026100601','./assets/logo.jpg?v=2026100601','./assets/logo-icon.png?v=2026100601','./assets/favicon-32.png?v=2026100601','./assets/apple-touch-icon.png?v=2026100601'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cuatung-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;if(e.request.method!=='GET')return;
  const networkFirst=e.request.mode==='navigate'||/\.(js|css|json)$/.test(u.pathname)||u.pathname.endsWith('/config.js');
  if(networkFirst){e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));}
  else e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const copy=x.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return x})));
});
