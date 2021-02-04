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


const buttonIds = ["userBtn", "mapBtn", "calendarBtn", "envelopeBtn", "whoBtn", "whereBtn", "whenBtn", "howBtn"];

for (let i = 0; i < buttonIds.length; i++) {
    // Get the button that opens the modal
    const btn = document.getElementById(buttonIds[i]);
    let modal;
    let span;
    if (i == 0 || i == 4) {
        // Get the modal
        modal = document.getElementById("description");
        // Get the <span> element that closes the modal
        span = document.getElementsByClassName("close")[0];
    } else if (i == 1 || i == 5) {
        // Get the modal
        modal = document.getElementById("map");
        // Get the <span> element that closes the modal
        span = document.getElementsByClassName("close")[1];
    } else if (i == 2 || i == 6) {
        // Get the modal
        modal = document.getElementById("calendar");
        // Get the <span> element that closes the modal
        span = document.getElementsByClassName("close")[2];
    } else if (i == 3 || i == 7) {
        // Get the modal
        modal = document.getElementById("mail");
        // Get the <span> element that closes the modal
        span = document.getElementsByClassName("close")[3];
    };

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    modal.addEventListener('click', event => {
        if (event.target.className === 'modal') {
            if (modal) {
                modal.style.display = "none";
            }
        }
    })
};