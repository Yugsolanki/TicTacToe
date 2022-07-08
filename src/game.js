var player1NameBox = document.getElementById("player1-name");
var player2NameBox = document.getElementById("player2-name");
var player1ScoreBox = document.getElementById("player1-score");
var player2ScoreBox = document.getElementById("player2-score");
var quitBtn = document.getElementById("quit");
var curtain = document.getElementById('curtain');
var timer = document.getElementById('timer');
var winnerBox = document.getElementById('winner');
var roundsShow = document.getElementById('number-rounds');
curtain.style.display = 'grid';


const box = document.querySelectorAll(".box");
var round = 1;
var player1Score = 0;
var player2Score = 0;
var player = 'X';
var gameOn = false;
var roundWon = false;
var gameOver = false;
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


let rounds = localStorage.getItem('rounds');
let player1Name = localStorage.getItem('player1');
let player2Name = localStorage.getItem('player2');
console.log(player1Name, player2Name);
player1NameBox.innerHTML = player1Name;
player2NameBox.innerHTML = player2Name;
roundsShow.innerHTML = `Round ${round} of ${rounds}`;
player1ScoreBox.innerHTML = player1Score;
player2ScoreBox.innerHTML = player2Score;

var count = 3;
function anim() {
    if (count >= 0) {
        if (count === 0) {
            timer.innerHTML = 'START!'
        } else {
            timer.innerHTML = count;
        }
        count--;
        setTimeout(anim, 1000);
    }
    else {
        timer.style.display = 'none'
        curtain.style.display = 'none';
    }
}
anim();

function playGame() {

    box.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index))
    });

    function userAction(tile, index) {
        if (tile.innerHTML != 'X' && tile.innerHTML != 'O') {
            tile.innerHTML = player;
            board[index] = player;
            checkWinner();
            swapPlayer(); 
        }
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
        } 
        if (!board.includes('')) {
            drawAndRest(); 
        }
    }
    round++;
    console.log(round);
}

function declareAndRest() {
    if (player == 'X') {
        player1Score++;
        player1ScoreBox.innerHTML = player1Score;
        curtain.style.display = 'grid';
        winnerBox.style.display = 'block';
        winnerBox.innerHTML = `Winner! <br> ${player}`;

        setTimeout(function() {
            curtain.style.display = 'none';
            winnerBox.style.display = 'none';
            reset();
        }, 3000);
    } else {
        player2Score++;
        player2ScoreBox.innerHTML = player2Score;
        curtain.style.display = 'grid';
        winnerBox.style.display = 'block';
        winnerBox.innerHTML = `Winner! <br> ${player}`;

        setTimeout(function() {
            curtain.style.display = 'none';
            winnerBox.style.display = 'none';
            reset();
        }, 3000);   
    }
}

function drawAndRest() {
    
    setTimeout(function() {
        curtain.style.display = 'grid';
        winnerBox.style.display = 'block';
        winnerBox.innerHTML = `DRAW`;
    }, 3000);
    reset();
}

function reset() {
    
    board = ['', '', '', '', '', '', '', '', ''];
    box.forEach(tile => {
        tile.innerHTML = '';
    })

    roundWon = false;
}

if (round <= rounds) {
    gameOn = true;
    if (gameOn) {
        playGame();
    }
} else if (round > rounds){
    gameOn = false;
    curtain.style.display = 'grid';
    winnerBox.style.display = 'block';
}
    
    quitBtn.addEventListener('click', ()=>{
        localStorage.clear();
    })


