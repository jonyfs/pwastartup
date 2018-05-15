importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

console.log('service worker config');

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "eab11b8b5e880f8b1aa2ecd5b732f2fa"
  },
  {
    "url": "assets/css/styles.css",
    "revision": "87b61a07dc9054624db81d363260e0c4"
  },
  {
    "url": "assets/icons/Icon-100.png",
    "revision": "7acca8de9576ccb0e447cabec59f141d"
  },
  {
    "url": "assets/icons/Icon-1024.png",
    "revision": "7d7cb17d450f6c0549499c9107bc32e2"
  },
  {
    "url": "assets/icons/Icon-114.png",
    "revision": "9420c595ffac2afc7cf685ebca931b5a"
  },
  {
    "url": "assets/icons/Icon-120.png",
    "revision": "26dc139511dc2c6d2724ce1c1073a235"
  },
  {
    "url": "assets/icons/Icon-128.png",
    "revision": "8ee8df4e1709507fbad699f2df212bee"
  },
  {
    "url": "assets/icons/Icon-144.png",
    "revision": "955e29d8db8d142c750e92be6d9a65a8"
  },
  {
    "url": "assets/icons/Icon-152.png",
    "revision": "14e8370e9b7c9e56cfa1bc0edb6d1d04"
  },
  {
    "url": "assets/icons/Icon-16.png",
    "revision": "e91a22968ac384938611f799b713dd7d"
  },
  {
    "url": "assets/icons/Icon-167.png",
    "revision": "f884ed216d9b39b35d153072a757bd66"
  },
  {
    "url": "assets/icons/Icon-172.png",
    "revision": "7afdc2b1d0a13b1637158d893db1834f"
  },
  {
    "url": "assets/icons/Icon-180.png",
    "revision": "0c060f03812af436d6e9b83c4c54792e"
  },
  {
    "url": "assets/icons/Icon-192.png",
    "revision": "fff91e55c6c0d933d93464823f1b2b9f"
  },
  {
    "url": "assets/icons/Icon-196.png",
    "revision": "bb11c2eb9509b2110b9fce0440b70d1c"
  },
  {
    "url": "assets/icons/Icon-20.png",
    "revision": "b8997da9eb53511801b10d3547c1d6e2"
  },
  {
    "url": "assets/icons/Icon-256.png",
    "revision": "849396e77f2d0ec1fec636c4de5a927f"
  },
  {
    "url": "assets/icons/Icon-29.png",
    "revision": "c426fc4f53760626a5c8ed424962f661"
  },
  {
    "url": "assets/icons/Icon-32.png",
    "revision": "82501f1128c201dfcac942011d0a879b"
  },
  {
    "url": "assets/icons/Icon-36.png",
    "revision": "bc3403fc559bd5b1200c5bbb51cccffc"
  },
  {
    "url": "assets/icons/Icon-40.png",
    "revision": "591fa469928a2b7b31ca81c5ec2538db"
  },
  {
    "url": "assets/icons/Icon-48.png",
    "revision": "82bd9f46aab715dfc2b0d18ba146afe2"
  },
  {
    "url": "assets/icons/Icon-50.png",
    "revision": "bad21254e52119401e86e255fec10855"
  },
  {
    "url": "assets/icons/Icon-512.png",
    "revision": "6c1d335e58abed8853cee9379e27c9ad"
  },
  {
    "url": "assets/icons/Icon-55.png",
    "revision": "fbdee9266d31c6c9e0f5444ae9b1e4de"
  },
  {
    "url": "assets/icons/Icon-57.png",
    "revision": "e14857851b4d5e9215b3c864897394f8"
  },
  {
    "url": "assets/icons/Icon-58.png",
    "revision": "95683ad8012eb916dc5aff66e7a8ee4c"
  },
  {
    "url": "assets/icons/Icon-60.png",
    "revision": "c27c7ba6f7838a194432c188e97e6fe2"
  },
  {
    "url": "assets/icons/Icon-64.png",
    "revision": "0b9ed4c0de8844a5c49545ab8d5332ed"
  },
  {
    "url": "assets/icons/Icon-72.png",
    "revision": "6810c0f9a7c47a33f9d6825b3eaf52f4"
  },
  {
    "url": "assets/icons/Icon-76.png",
    "revision": "dc84d227cc5ff248c28bf97b0b73f9ec"
  },
  {
    "url": "assets/icons/Icon-80.png",
    "revision": "63395c29570b7fd87ba6be666cfe4d1f"
  },
  {
    "url": "assets/icons/Icon-87.png",
    "revision": "f93da469c7e5eeb1965d9f19b91d06e5"
  },
  {
    "url": "assets/icons/Icon-88.png",
    "revision": "4617087dec864cb3298b8f6ef2f84466"
  },
  {
    "url": "assets/icons/Icon-96.png",
    "revision": "f37a3a9729f3003dc98009177ef93968"
  },
  {
    "url": "assets/js/analytics.js",
    "revision": "831cc12a629fb08bda10206ca4044183"
  },
  {
    "url": "assets/js/app.js",
    "revision": "927e3e14517d24b2359047115a75b4f5"
  },
  {
    "url": "assets/js/status.js",
    "revision": "8f5c0733c79056ceb5a5189b13f7ec86"
  },
  {
    "url": "pages/404.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "pages/offline.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);

workbox.routing.registerRoute(
    /(.*)articles(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  const articleHandler = workbox.strategies.networkFirst({
    cacheName: 'pwastartup-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
      })
    ]
  });
  
  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args);
  });  
