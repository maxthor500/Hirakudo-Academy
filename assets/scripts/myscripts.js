$(document).ready(function() {

    /* script to expand sidebar and display the span inside */
    $('.sidebar-btn').click(function() {
        $('.link-text').toggleClass('active');
        $('.sidebar').toggleClass('expand');
    });

    /* dark-mode */
    $('.themify').click(function() {
        // Get the value of the "dark" item from the local storage on every click
        setDarkMode = localStorage.getItem('dark-mode');

        if (setDarkMode !== "on") {
            darkMode();
            // Set the value of the item to "on" when dark mode is on
            setDarkMode = localStorage.setItem('dark-mode', 'on');
        } else {
            darkMode();
            // Set the value of the item to "null" when dark mode if off
            setDarkMode = localStorage.setItem('dark-mode', null);
        }
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

const darkMode = () => {
    const switchSelector = ['body', 'nav', 'a', '.checkbtn', '.navbar-nav', '.btn', 'h1', '.sidebar', 'img', '.modal-content', '.close', '.calendar-container', '.calendar', '.container-fluid', '.memory-game', '.front-face', '#card-menu', '.card-game-info', '.info', '.overlay-text', '.send-btn'];
    /* toggle dark-mode to every elements */
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
}

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark-mode');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}