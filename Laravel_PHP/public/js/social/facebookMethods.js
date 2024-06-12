
function notAuthorizedFB(object) {
    return (object.hasOwnProperty('status') && object.status == 'not_authorized')?(true):(false);
}


function isConnectedFB(object) {
    return (object.hasOwnProperty('status') && object.status == 'connected')?(true):(false);
};


function fbEnsureInit(callback) {
    console.log('waiting');
    if(!window.fbApiInit) {
        setTimeout(function() {fbEnsureInit(callback);}, 50);
    } else {
        if(callback) {
            callback();
        }
    }
}