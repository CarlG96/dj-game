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

// function for adding score, currently unused

const addScore = () => {
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
}

//hotkey functions

hotkeys('space', () => {
    mainSong.play();
})

//button press functions, should be made into single function instead of twelve

hotkeys('q', () => {
    audioQ.play();
    gameButtons[0].classList.add('press');
    setTimeout(() => {
        gameButtons[0].classList.remove('press');
    }, 100);
   
})

hotkeys('w', () => {
    audioW.play();
    gameButtons[1].classList.add('press');
    setTimeout(() => {
        gameButtons[1].classList.remove('press');
    }, 100);
})

hotkeys('e', () => {
    audioE.play();
    gameButtons[2].classList.add('press');
    setTimeout(() => {
        gameButtons[2].classList.remove('press');
    }, 100);
})

hotkeys('r', () => {
    audioR.play();
    gameButtons[3].classList.add('press');
    setTimeout(() => {
        gameButtons[3].classList.remove('press');
    }, 100);
})

hotkeys('a', () => {
    audioA.play(); 
    gameButtons[4].classList.add('press');
    setTimeout(() => {
        gameButtons[4].classList.remove('press');
    }, 100); 
})

hotkeys('s', () => {
    audioS.play();
    gameButtons[5].classList.add('press');
    setTimeout(() => {
        gameButtons[5].classList.remove('press');
    }, 100);
})

hotkeys('d', () => {
    audioD.play();
    gameButtons[6].classList.add('press');
    setTimeout(() => {
        gameButtons[6].classList.remove('press');
    }, 100);
})

hotkeys('f', () => {
    audioF.play();
    gameButtons[7].classList.add('press');
    setTimeout(() => {
        gameButtons[7].classList.remove('press');
    }, 100);
})

hotkeys('z', () => {
    audioZ.play();
    gameButtons[8].classList.add('press');
    setTimeout(() => {
        gameButtons[8].classList.remove('press');
    }, 100);
})

hotkeys('x', () => {
    audioX.play();
    gameButtons[9].classList.add('press');
    setTimeout(() => {
        gameButtons[9].classList.remove('press');
    }, 100);
})

hotkeys('c', () => {
    audioC.play();
    gameButtons[10].classList.add('press');
    setTimeout(() => {
        gameButtons[10].classList.remove('press');
    }, 100);
})

hotkeys('v', () => {
    audioV.play();
    gameButtons[11].classList.add('press');
    setTimeout(() => {
        gameButtons[11].classList.remove('press');
    }, 100);
})
