module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "index.html",
    "assets/**/*.{css,png,js}",
    "pages/**/*.html"
  ],
  "swDest": "sw.js",
  "swSrc": "src-sw.js",
  "globIgnores": [
    "workbox-config.js"
  ]
}; 