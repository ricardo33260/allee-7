// Allée 7 : fonctionne hors connexion une fois ouverte une première fois.
// Changer VERSION à chaque mise à jour du jeu pour que les appareils récupèrent la nouvelle version.
const VERSION = 'allee7-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Polices Google : réseau d'abord, copie en cache pour le hors-ligne.
  if (url.host.includes('fonts.googleapis.com') || url.host.includes('fonts.gstatic.com')) {
    e.respondWith(caches.open(VERSION).then(c => fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => c.match(req))));
    return;
  }
  if (url.origin !== location.origin) return;
  // Fichiers du jeu : réseau d'abord pour avoir la dernière version, cache si hors-ligne.
  e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req).then(m => m || caches.match('./index.html'))));
});
