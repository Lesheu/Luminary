// Служебный файл для установки игры как приложения. Ничего не кэширует:
// игра всегда загружается свежей версией.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
