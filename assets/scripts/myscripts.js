$(document).ready(function() {

    /* script to expand sidebar and display the span inside */
    $('.sidebar-btn').click(function() {
        $('.link-text').toggleClass('active');
        $('.sidebar').toggleClass('expand');
    });

});