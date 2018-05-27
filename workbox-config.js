module.exports = {
    "globDirectory": "./",
    "globPatterns": [
        "index.html",
        "version.json",
        "assets/**/*.{css,png,js}",
        "pages/**/*.html"
    ],
    "swSrc": "src-sw.js",
    "swDest": "sw.js",
    "globIgnores": [
        "workbox-config.js"
    ]
};