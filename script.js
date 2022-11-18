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
const audio = document.createElement('audio');

// parralax for music notes
let bg = document.querySelector('.parallax');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

});

window.onload = popup



startButton.addEventListener('click', startGame);


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

// circle sounds

$("#button1").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/1.mp3');
    }
    audio.currentTime = 2;
    audio.play();
});

$("#button2").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/2.mp3');
    }
    audio.currentTime = 0;
    audio.play();

});

$("#button3").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/3.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button4").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/4.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button5").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/5.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button6").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/6.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button7").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/7.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button8").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/8.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button9").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/1.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button10").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/2.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button11").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/3.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button12").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/4.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button13").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/5.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});


$("#button14").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/6.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button15").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/7.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button16").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'assets/c_sounds/8.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});
