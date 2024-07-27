const gameData =[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

let editPlayer=0;
let activePlayer=0;
let currentRound =1;
let gameIsOver=false;


const players=[
    {
        name:'',
        Symbol:'X'
    },
    {
        name:'',
        Symbol:'O'
    }
]

const playerConfigOverlay = document.getElementById('config-overlay');
const backDrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutPut = document.getElementById('config-error');
const satrtNewGameBtn = document.getElementById('start-game-btn');
const gameArea = document.getElementById('active-game');
//const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');
const gameOverElement = document.getElementById('game-over');
const winnerName = document.getElementById('winner-name');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const activePlayerName = document.getElementById('active-player-name');
const cancelConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelConfigBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
satrtNewGameBtn.addEventListener('click',startNewGame);

// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click',selectGameField );