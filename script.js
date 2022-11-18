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
const mainSong = document.getElementById('mainSong');
const gameButtons = document.getElementsByClassName('square');



// startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

scoreCounter = document.getElementById('score-counter');

const addScore = () => {
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
}

hotkeys('space', () => {
    mainSong.play();
})

hotkeys('q', () => {
    audioQ.play();
    gameButtons[0].classList.add('press');
    setTimeout(() => {
        gameButtons[0].classList.remove('press');
    }, 150);
   
})

hotkeys('w', () => {
    audioW.play();
    gameButtons[1].classList.add('press');
    setTimeout(() => {
        gameButtons[1].classList.remove('press');
    }, 150);
})

hotkeys('e', () => {
    audioE.play();
    gameButtons[2].classList.add('press');
    setTimeout(() => {
        gameButtons[2].classList.remove('press');
    }, 150);
})

hotkeys('r', () => {
    audioR.play();
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
