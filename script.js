let quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));

function askQuantityCards() {
    quantityCard = Number(prompt('Com quantas cartas deseja jogar? 🙂'));
}
askQuantityCards();

function validateGame() {
    if (quantityCard < 4 || quantityCard > 14 || (quantityCard % 2) === 1 || isNaN(quantityCard)) {
        return true;
    }
    return false;
}

validateGame();