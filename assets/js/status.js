var snackbarContainer = document.querySelector('#online-status-toast');

function verifyStatus() {

    var condition = navigator.onLine ? "Live" : "Currently offline";

    snackbarContainer.style.backgroundColor = navigator.onLine ? "green" : "red";

    var data = {
        message: 'Status: ' + condition
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);

    if ( navigator.onLine ){
        const title = 'Badge Notification';
        const options = {
          icon: '/assets/icons/Icon-128.png'
        };
        registration.showNotification(title, options);
    }
    
}

window.addEventListener('online', verifyStatus);
window.addEventListener('offline', verifyStatus);