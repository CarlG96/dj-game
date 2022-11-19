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

// startButton.addEventListener('click', startGame);

function startGame() {
    module.classList.add('hide');
    // starts key sequence
    to_sequence()
}

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

let keyButton = ["q", "w", "e", "r"]; // add hotkeys here
let sequence = [];

function to_sequence() {
    let choose = Math.floor(Math.random() * 4);
    document.getElementById(keyButton[choose]).classList.add('press');
    
    console.log('we are cooking');

    setTimeout( () => {
        document.getElementById(keyButton[choose]).classList.remove('press');
    }, 300);
}

const press = 0;

function game(){
    if(document.activeElement.id==store[press]) {
        if(press == store.length-1) {
            console('correct')
            sequence();
        }
        else {
            press++
            console.log('im adding to sequence')
        }
    }
    else {
        alert('Your Failed');

        // game restart function here 
    }
    return;
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
