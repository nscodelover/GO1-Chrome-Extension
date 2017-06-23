$(document).ready(function() {

  if(localStorage.getItem('logined') == 'true') {
		window.location = "../html/nonotes.html";
	} else {
		window.location = "../html/login.html";
	}

});
