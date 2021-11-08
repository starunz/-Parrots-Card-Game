let quantityCard = Number(prompt('Com quantas cartas deseja jogar? (entre 4 e 14) 🙂'));

let firstCard = null; 
let secondCard = null;
let cardsUp = 0;
let rounds = 0;
let clock = 0;
let idClock;

startGame();
askQuantityCards();

function askQuantityCards() {
    while (validateGame()) {
        quantityCard = Number(prompt('Com quantas cartas deseja jogar? (entre 4 e 14) 🙂'));
    }
}

function validateGame() {
    if (quantityCard < 4 || quantityCard > 14 || (quantityCard % 2) === 1 || isNaN(quantityCard)) {
        return true;
    }
    return false;
}

function handOutCards(cards) {
    const board = document.querySelector('.game-board');

    for (let i = 0; i < cards.length; i ++) {
        const card = `<li class="card" onclick="flipCard(this)">
            <div class='front-face face'>
                <img src='img/front.png'>
            </div>
            <div class='back-face face'>
                <img src='img/${cards[i]}parrot.gif'>
            </div>
        </li>`;

        board.innerHTML += card;
    }
}

function raflleCards(typesCards, cards) {
    for (let i = 0; i < (quantityCard / 2); i++) {
        const parrots = typesCards[i];
        cards.push(parrots);
        cards.push(parrots);
    }

    cards.sort(comparator); 
}

function comparator() { 
	return Math.random() - 0.5
}


function startGame() {
    const typesCards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']; 
    const cards = [];

    raflleCards(typesCards, cards);
    handOutCards(cards);
    startClock();
}

function startClock() {
    idClock = setInterval(() => {
        clock ++;
        document.querySelector('.clock span').innerHTML = clock;
    }, 1000);
}

function flipCard(clickedCard) {

    rounds ++;
    if (clickedCard.classList.contains('flip')) {
        return;
    }
    if (secondCard !== null) {
        return;
    }
    if (firstCard === null) {
        firstCard = clickedCard;
    }
    else {
        secondCard = clickedCard;

        if (firstCard.innerHTML === secondCard.innerHTML) {
            cardsUp += 2;
            resetCard();
            checkGameEnd();
        }
        else {
            setTimeout(untapCard, 1000);
        }
    }

    clickedCard.classList.add('flip');
}

function untapCard() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCard();
}

function resetCard() {
    firstCard = null;
    secondCard = null;
}

function checkGameEnd() {
    if (cardsUp === quantityCard) {
        clearInterval(idClock);
        setTimeout(scoreboard, 1000);
    }
}

function scoreboard() {
    alert(`você ganhou com ${rounds} jogadas e em ${clock} segundos 👏🏻`);
    playAgain();
}

function playAgain() {
    const playAgain = prompt('Deseja jogar de novo? 🙃');

    if (playAgain === 'sim') {
       window.location.reload();
    }
}