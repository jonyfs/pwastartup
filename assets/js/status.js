var snackbarContainer = document.querySelector('#online-status-toast');

var handler = function(event) {
    
  };

function verifyStatus() {

    var condition = navigator.onLine ? "Live" : "Currently offline";

    var data = {
        message: 'Status: ' + condition,
        actionHandler: handler,
        actionText: 'Dismiss'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

window.addEventListener('online', verifyStatus);
window.addEventListener('offline', verifyStatus);