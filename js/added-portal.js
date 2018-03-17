$(document).ready(function() {

    $(window).load(function() {
        $('#add-course-btn').hide();
        $('#nothanks-btn').show();
    });

    $('#nothanks-btn').click(function(e) {
        window.location = "../html/nonotes.html";
    });

    $('#add-course-btn').click(function(e) {
        window.location = "../html/import-course.html";
    });

    $('.check--label').click(function() {
        var checkboxes = document.getElementsByClassName('hidden-box');

        $('#add-course-btn').show();
        $('#nothanks-btn').hide();  
    });
});
