const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}