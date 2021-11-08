let quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));

startGame();
askQuantityCards();

function askQuantityCards() {
    
    while (validateGame()) {
        quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));
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
}

let firstCard = null; 
let secondCard = null;
let cardsUp = 0;
let rounds = 0;
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
        alert(`você ganhou com ${rounds} jogadas `);
    }
}