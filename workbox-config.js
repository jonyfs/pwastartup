module.exports = {
  "globDirectory": "assets/",
  "globPatterns": [
    "index.html",
    "**/*.{css,png,js}"
  ],
  "swDest": "sw.js",
  "swSrc": "src-sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};