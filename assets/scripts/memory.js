/* my array of aikido's techiniques */
const technique = ['tenkan', 'shihonage', 'ikkyo', 'kotegaeshi', 'sankyo', 'nikkyo', 'iriminage', 'yonkyo', 'kokyunage', 'tenchinage', 'udeminage', 'uchikaiten', 'gokyo', 'jujigarami', 'kaiten'];

/* generate a random number */
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
};

/* generate an array with 6 couple of element from another array  */
function generatorTakeSixArray(arr) {
    let takeSix = [];
    for (let i = 0; i < 6; i++) {
        let randTech = randomIndex(arr);
        console.log(randTech);
        // check if in the takeSix array has the random technique selected
        if (takeSix.includes(arr[randTech])) {
            i--;
        } else {
            takeSix[i] = arr[randTech];
        }
    }
    return takeSix.concat(takeSix);
};

const sixTech = generatorTakeSixArray(technique);
const cardsSelector = document.querySelectorAll(".memory-card");

/* for each memory card insert an insert a front-face and an attribute differente */
for (let i = 0; i < sixTech.length; i++) {
    let text = '<div class="front-face">' + '<p class="technique">' + sixTech[i] + "</p>" + "</div>" + '<img class="back-face" src="./assets/images/accademia-hirakudo.svg" alt="logo Hirakudo Academy">';
    cardsSelector[i].innerHTML = text;
    cardsSelector[i].setAttribute("data-framework", sixTech[i]);
}

/* memory game from freeCodeCamp.org youtube channel */

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    };
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
};

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? disableCards() : unFlipCards();
};

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
};

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
};

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
};

shuffle();