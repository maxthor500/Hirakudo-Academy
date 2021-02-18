$(document).ready(function() {

    /* script to expand sidebar and display the span inside */
    $('.sidebar-btn').click(function() {
        $('.link-text').toggleClass('active');
        $('.sidebar').toggleClass('expand');
    });

    /* dark-mode */
    $('.themify').click(function() {
        const switchSelector = ['body', 'nav', 'a', '.checkbtn', '.navbar-nav', '.btn', 'h1', '.sidebar', 'img', '.modal-content', '.close']

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
        };

    });

});

function openModal(id) {
    // Get the modal
    let modal = document.getElementById(id);
    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    modal.addEventListener('click', event => {
        if (event.target.className === 'modal') {
            if (modal) {
                modal.style.display = "none";
            }
        }
    });
};

function closeModal(id, index) {
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[index];
    let modal = document.getElementById(id);
    modal.style.display = "none";
}