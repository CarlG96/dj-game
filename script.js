const startButton = document.getElementById('start-game');
const module = document.getElementById('instructions');
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
// let bg = document.querySelector('.parallax');
// window.addEventListener('mousemove', function (e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

// });

scoreCounter = document.getElementById('score-counter');

// function for adding score, currently unused

const addScore = () => {
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
}

//hotkey functions

// hotkeys('space', () => {
//     mainSong.play();
// })

// onclick events on gameButtons referenced in html

const keymap = {
    81: "q",
    87: "w",
    69: "e",
    82: "r",
    65: "a",
    83: "s",
    68: "d",
    70: "f",
    90: "z",
    88: "x",
    67: "c",
    86: "v"
}

// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// function removeTransition(event) {
    
//      this.classList.remove('press');
//   }

//   function buttonHandler (key) {
//     play(key);
//   }

//   function play(key) {
//     var keyElement = document.querySelector(`.key[id="${key}"]`); 
//     var audioElement = document.querySelector(`audio[data-key="${key}"]`);
    
//     keyElement.classList.add('press');
//     audioElement.currentTime = 0;
//     audioElement.play();
//     setInterval(() => {
//         keyElement.classList.remove('press');
//     }, 200)
// }

// window.onkeydown = (event) => {
//     var key = keymap[event.keyCode];
//     if (key) {
//       play(key);
//     }
//   }

// // Main song on load 

// window.onload= function (){
//     document.getElementById("songload").play();
//   }

// Game Logic 

const letterArray = ['q', 'w', 'e', 'r'];
const playerArray = [];
const gameArray = [];

const onPress = (key, audio) => {
    let keyElement = document.getElementById(key);
    let audioElement = document.getElementById(audio);

    keyElement.classList.add('press');

    audioElement.currentTime = 0;
        audioElement.play();
        setInterval(() => {
            keyElement.classList.remove('press');
        }, 200)

    playerArray.push(key);
    console.log(playerArray);
}

const startGame = () => {
    for (let i = 0; i < 5; i++ ) {
        let choose = Math.floor(Math.random() * 4);
        gameArray[i] = letterArray[choose];
        console.log(gameArray);
    }

    let i = 0;
    setInterval(() => {
        let keyElement = document.getElementById(gameArray[i]);
        keyElement.classList.add('press');
        let audioElement = document.querySelector(`audio[data-key="${gameArray[i]}"]`);

        audioElement.currentTime = 0;
        audioElement.play();
        setInterval(() => {
            keyElement.classList.remove('press');
        }, 200)
        ++i;
    }, 3000)
}









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
