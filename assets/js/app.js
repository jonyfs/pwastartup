if ("serviceWorker" in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then(function () {
                // Registration was successful
                console.log("ServiceWorker registration successful: ");
            })
            .catch(function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            });
    });
}