importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

console.log('service worker config');

workbox.precaching.precacheAndRoute([]);

workbox.strategies.cacheFirst()
workbox.strategies.networkFirst()