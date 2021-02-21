//memory card game from https://github.com/JaeWong91/MS2-Marvel-Game

class Memory {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('attempts');
    }


    // At each start of game, the below will be executed
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 1000);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    hideCards() { //the hide card function
        this.cardsArray.forEach(card => {
            card.classList.remove('flip');
            card.classList.remove('matched');
        });
    }

    flipCard(card) { //the flip card function
        if (this.canFlipCard(card)) { //testing if 'card' can be flipped - if yes then...
            this.totalClicks++; //the number of total clicks increases by 1
            this.ticker.innerText = this.totalClicks; //the actual inner text of the "ticker" will equal the totalClicks (which will increase by 1 per click)
            card.classList.add('flip'); //each card clicked/flipped will have the "visible" class applied to it, hence flipping it

            if (this.cardToCheck) // if this.cardToCheck is NOT null then...
                this.checkForCardMatch(card); //function to check for card match will activate (passing the "card" parameter into it)
            else
                this.cardToCheck = card; //if this.cardToCheck IS null then "cardToCheck" becomes "card"
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1); //this will push the matched cards into the cards ARRAY!
        this.matchedCards.push(card2);
        if (this.matchedCards.length === this.cardsArray.length) {
            this.victory();
        }
    }

    cardMisMatch(card1, card2) { // here whenever a card is not matched, it will remove the "visible" class and flip the card back facing down
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            this.busy = false;
        }, 1000);
    }

    getCardType(card) {
        return card.getElementsByClassName('technique')[0].innerText; // [0] because its only one card-- this is checking the "card" class which is the block. within that block is the file source of the image, eg "assets/images/thor.png"
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }


    gameOver() {
        clearInterval(this.countDown);
        cardGame.classList.add('hide');
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory() {
        clearInterval(this.countDown);
        cardGame.classList.add('hide');
        document.getElementById('victory-text').classList.add('visible');
    }


    //SHUFFLE ALGORITHM  --- Fisher Yates algorithm -- taken from youtube
    shuffleCards() {
            for (let i = this.cardsArray.length - 1; i > 0; i--) {
                let randIndex = Math.floor(Math.random() * (i + 1));
                this.cardsArray[randIndex].style.order = i;
                this.cardsArray[i].style.order = randIndex;
            }
        }
        // here if the below statement is true, then the player can flip the card
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck; // This creates a boolean - here is if statement so if (! means is not) all 3 statements are all FALSE then the statement will be true.
    }
}

/* my array of aikido's techiniques */
const techniques = ['tenkan', 'shihonage', 'ikkyo', 'kotegaeshi', 'sankyo', 'nikkyo', 'iriminage', 'yonkyo', 'kokyunage', 'tenchinage', 'udeminage', 'uchikaiten', 'gokyo', 'jujigarami', 'kaiten'];

/* generate a random number */
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
};

/* generate an array with 6 couple of element from another array  */
function generatorTakeSixArray(arr) {
    let takeSix = [];
    for (let i = 0; i < 6; i++) {
        let randTech = randomIndex(arr);
        // check if in the takeSix array has the random technique selected
        if (takeSix.includes(arr[randTech])) {
            i--;
        } else {
            takeSix[i] = arr[randTech];
        }
    }
    return takeSix.concat(takeSix);
};


function innerCards() {
    const sixTech = generatorTakeSixArray(techniques);
    /* for each memory card insert an insert a front-face and an attribute differente */
    for (let i = 0; i < sixTech.length; i++) {
        let text = '<div class="front-face">' + '<p class="technique">' + sixTech[i] + "</p>" + "</div>" + '<img class="back-face" src="./assets/images/accademia-hirakudo.svg" alt="logo Hirakudo Academy">';
        cards[i].innerHTML = text;
    }
}


//global declarations in order for audio settings to function correctly
const cards = document.querySelectorAll(".memory-card");
const cardMenu = document.getElementById('card-menu');
const btns = Array.from(document.getElementsByClassName('start-game'));
const cardGame = document.getElementById('board');
const overlays = Array.from(document.getElementsByClassName('overlay-text'));
const memoryCards = Array.from(cards);
const game = new Memory(60, memoryCards);

function ready() {
    //Card game main menu
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            cardMenu.classList.add('hide');
            innerCards()
            cardGame.classList.remove('hide');
            game.startGame();
        });
    });
    //Overlay - restarts the game on click
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            innerCards()
            cardGame.classList.remove('hide');
            game.startGame();
        });
    });
    //Each card flip will play
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card); //here when you click on a card, it will be game.flipCard
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}