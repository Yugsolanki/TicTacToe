var player1Name = document.getElementById("player1-name");
var player2Name = document.getElementById("player2-name");
var player1Score = document.getElementById("player1-score");
var player1Score = document.getElementById("player1-score");
var curtain = document.getElementById('curtain');
curtain.style.display = 'grid';

var count = 3;
function anim() {
    if (count >= 0) {
        var timer = document.getElementById('timer');
        if (count === 0) {
            timer.innerHTML = 'START!'
        } else {
            timer.innerHTML = count;
        }
        count--;
        setTimeout(anim, 1000);
    }
    else {
        curtain.style.display = 'none';
    }
}
anim();

const box = document.querySelectorAll(".box");
var round = 1;
var xScore = 0;
var yScore = 0;
var player = 'X';
var gameOn = true;
var roundWon = false;
var board = ['', '', '', '', '', '', '', '', ''];
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

box.forEach((tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index))
});

function userAction(tile, index) {
    if (gameOn) {
        if (tile.innerHTML != 'X' && tile.innerHTML != 'O') {
            tile.innerHTML = player;
            board[index] = player;
        }
    }
    checkWinner();
    swapPlayer();
    
}

function swapPlayer() {
    player = player == 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningCombination[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            gameOn = false;
            break;
        }
    }

    if (roundWon) {
        declareAndRest()
    } else if (!board.includes('')) {
        drawAndRest(); 
    }
}

function declareAndRest() {
    if (player == 'X') {
        alert("X");
    } else {
        alert("O")
    }
    reset();
}

function drawAndRest() {
    alert('Draw');
    reset();
}

function reset() {
    
    board = ['', '', '', '', '', '', '', '', ''];
    box.forEach(tile => {
        tile.innerHTML = '';
    })


    gameOn = true;
    roundWon = false;
}