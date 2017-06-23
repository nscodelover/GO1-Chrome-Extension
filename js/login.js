$(document).ready(function() {

    $(window).load(function() {
        $('#registerform').hide();
    });

    document.loginform.onsubmit = function() {
        var useremail = document.getElementById("useremail").value;
        var password = document.getElementById("password").value;

        if (useremail == null || useremail == "") {
            alert("Please enter the username.");
            return false;
        }
        
        if (password == null || password == "") {
            alert("Please enter the password.");
            return false;
        }

        var sampleUserEmail = "test@go1.com"; 
        var samplePassword = "123";

        if ((useremail == sampleUserEmail) && (password == samplePassword)) {
            localStorage.setItem('logined', 'true');
            chrome.browserAction.setIcon({path: '../images/icon_default.png'});
            window.location = "../html/nonotes.html";
            return false;
        } else {
            // alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
    }

    document.registerform.onsubmit = function() {
        var username = document.getElementById("username").value;
        var useremail = document.getElementById("useremail").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
    }

    $('#register-btn').click(function() {
        $('#registerform').show();
        $('#loginform').hide();
    });

    $('#back-login').click(function() {
        window.location = "../html/login.html";
    });

    $('#forgot').click(function() {
        window.location = "../html/forgot.html";
    });
});
