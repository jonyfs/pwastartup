(function() {
    'use strict';

    //check for support
    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }

    //var dbPromise = idb.open('pwastartupdb', 1);

})();