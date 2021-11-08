let quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));

function askQuantityCards() {
    
    while (validateGame()) {
        quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));
    }
}
askQuantityCards();

function validateGame() {
    if (quantityCard < 4 || quantityCard > 14 || (quantityCard % 2) === 1 || isNaN(quantityCard)) {
        return true;
    }
    return false;
}

function handOutCards() {
    const board = document.querySelector('.game-board');

    //aqui ficará o for para por as cartas no tabuleiro, mas elas tem que ser sorteadas antes de ir para o tabuleiro
}

function startGame() {
    
    const typesCards = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']; 
    const Cards = []; //as cartas sorteadas virão para esse array 
}