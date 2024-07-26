const playerConfigOverlay = document.getElementById('config-overlay');
const backDrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutPut = document.getElementById('config-error');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');

const cancelConfigBtn = document.getElementById('cancel-config-btn');

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelConfigBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);