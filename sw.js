var CACHE_NAME = 'pwastartp';
var CACHE_VERSION = '1.0.0';

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);

    var urls = [

        '/',
        '/assets/css/styles.css',
        '/assets/icons/Icon-57.png',
        '/assets/icons/Icon-60.png',
        '/assets/icons/Icon-72.png',
        '/assets/icons/Icon-76.png',
        '/assets/icons/Icon-96.png',
        '/assets/icons/Icon-114.png',
        '/assets/icons/Icon-144.png',
        '/assets/icons/Icon-152.png',
        '/assets/icons/Icon-180.png',
        '/assets/icons/Icon-192.png',
        '/assets/icons/Icon-512.png',
        '/bower_components/material-design-lite/material.min.js',
        '/assets/js/analytics.js',
        '/assets/js/app.js',
        '/assets/js/status.js',
        '/manifest.json'
        //"https://fonts.googleapis.com/icon?family=Material+Icons",
        //"https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.blue-light_blue.min.css"
    ];

    urls = urls.map(function(url) {
        return new Request(url, { mode: 'no-cors' });
    });

    event.waitUntil(
        caches
        .open(CACHE_NAME + '-v' + CACHE_VERSION)
        .then(function(cache) {
            return cache.addAll(urls);
        })
    );

    console.log('[Service Worker] installed.', event);
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
    var currentCacheName = CACHE_NAME + '-v' + CACHE_VERSION;
    caches.keys().then(function(cacheNames) {

        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (cacheName.indexOf(CACHE_NAME) == -1) {
                    return;
                }

                if (cacheName != currentCacheName) {
                    return caches.delete(cacheName);
                }
            })
        );
    });
    console.log('[Service Worker] Actived.', event);

});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something ....', event);

    var request = event.request;
    var url = new URL(request.url);
    var validSubsections = [
        'create', 'details', 'edit', ''
    ];

    var subsection = /^\/([^\/]*)/.exec(url.pathname)[1];

    event.respondWith(

        // Check the cache for a hit.
        caches.match(request).then(function(response) {

            // If we have a response return it.
            if (response)
                return response;

            // Otherwise return index.html file.
            if (validSubsections.indexOf(subsection) >= 0)
                return caches.match('/');

            // We may get requests for analytics so
            // do a very dumb check for that.
            if (url.host.indexOf('voice') === -1)
                return fetch(request);

            // And worst case we fire out a not found.
            return new Response('Sorry, not found');
        })
    );

    console.log('[Service Worker] Fetched.', event);
});