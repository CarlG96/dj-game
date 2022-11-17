const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

window.onload = popup



startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

// Music notes paralax
let bg = document.querySelector('.parallax');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

});