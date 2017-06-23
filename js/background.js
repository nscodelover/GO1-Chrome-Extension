'use strict';

chrome.runtime.onInstalled.addListener(function(details){
    chrome.storage.local.clear();
});

// set extension icon when extension is reloaded.
if(localStorage.getItem('logined') == 'true') {
    chrome.browserAction.setIcon({path: '../images/icon_default.png'});
} else {
    chrome.browserAction.setIcon({path: '../images/icon_go1.png'});
}

// chrome.browserAction.onClicked.addListener(function() {
// 	if(localStorage.getItem('logined') == 'true') {
// 		chrome.windows.create({'url': '../html/nonotes.html', 'type': 'popup'}, function(window) {
//    		});
// 	} else {
// 		chrome.windows.create({'url': '../html/login.html', 'type': 'popup'}, function(window) {
//    		});
// 	}
// });