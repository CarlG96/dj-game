const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');
const audioQ = document.getElementById('audioQ');
const audioW = document.getElementById('audioW');
const audioE = document.getElementById('audioE');
const audioR = document.getElementById('audioR');
const audioA = document.getElementById('audioA');
const audioS = document.getElementById('audioS');
const audioD = document.getElementById('audioD');
const audioF = document.getElementById('audioF');
const audioZ = document.getElementById('audioZ');
const audioX = document.getElementById('audioX');
const audioC = document.getElementById('audioC');
const audioV = document.getElementById('audioV');

// startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

scoreCounter = document.getElementById('score-counter');

const addScore = () => {
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
}

hotkeys('q', () => {
    audioQ.play();
})

hotkeys('w', () => {
    audioW.play();
})

hotkeys('e', () => {
    audioE.play();
})

hotkeys('r', () => {
    audioF.play();
})

hotkeys('a', () => {
    audioA.play();  
})

hotkeys('s', () => {
    audioS.play();
})

hotkeys('d', () => {
    audioD.play();
})

hotkeys('f', () => {
    audioF.play();
})

hotkeys('z', () => {
    audioZ.play();
})

hotkeys('x', () => {
    audioX.play();
})

hotkeys('c', () => {
    audioC.play();
})

hotkeys('v', () => {
    audioV.play();
})
