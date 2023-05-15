//config
const nMoves = 3;
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById('go-id');
const squareElement = document.getElementById('square-id');
const resultMessagenElement = document.getElementById('game-result');
const againButtonElement = document.getElementById('play-again-id');
//global variables
let count = 0;
//function
function game(){
    const color = inputElement.value;
    squareElement.style.backgroundColor = color;
    count++;
    if(count == nMoves){
        finishGame();
    }
    inputElement.value = '';
}
function startGame(){
    count = 0;
    inputElement.readOnly = false;
    goButtonElement.disabled = false;
    squareElement.style.backgroundColor = 'white';
    resultMessagenElement.innerHTML = '';
    againButtonElement.hidden = true;
}

function finishGame(){
    inputElement.readOnly = true;
    resultMessagenElement.innerHTML = 'Game is over';
    goButtonElement.disabled = true;
    againButtonElement.hidden = false;
}
//actions
goButtonElement.addEventListener('click', game);
againButtonElement.addEventListener('click', startGame);
startGame();
