$(document).ready(function() {

    $(window).load(function() {
        
    });

    document.forgotform.onsubmit = function() {
        var useremail = document.getElementById("useremail").value;
        
    }

    $('#return-login').click(function() {
        window.location = "../html/login.html";
    });
});
