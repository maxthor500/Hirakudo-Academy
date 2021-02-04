$(document).ready(function() {

    /* script to expand sidebar and display the span inside */
    $('.sidebar-btn').click(function() {
        $('.link-text').toggleClass('active');
        $('.sidebar').toggleClass('expand');
    });

    /* dark-mode */
    $('.themify').click(function() {
        let switchSelector = ['body', 'nav', 'a', '.checkbtn', '.navbar-nav', '.btn', 'h1', '.sidebar', 'img']

        for (let i = 0; i < switchSelector.length; i++) {
            $(switchSelector[i]).toggleClass('dark-mode');
        }

        /* swap images */
        if ($('img').hasClass('dark-mode')) {
            document.getElementById("logo").src = './assets/images/accademia-hirakudo-white.svg';
            document.getElementById('hero-image').src = './assets/images/japan-white.svg';
        } else {
            document.getElementById("logo").src = './assets/images/accademia-hirakudo.svg';
            document.getElementById('hero-image').src = './assets/images/japan.svg';
        }

    });

});