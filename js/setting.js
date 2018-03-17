$(document).ready(function() {
    $('#discussion').click(function(e) {
        window.location = "../html/nonotes.html";
    });

    $('#notification').click(function(e) {
        window.location = "../html/notification.html";
    });

    $('#signout').click(function() {
        localStorage.setItem('logined', 'false');
        chrome.browserAction.setIcon({path: '../images/icon_go1.png'});
        window.location = "../html/login.html";
        return false;
    });      
});
