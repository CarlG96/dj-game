const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

window.onload = popup

startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}