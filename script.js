const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');
const restartButton = document.getElementById('restart');
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
let scoreCounter = document.getElementById('score-counter');

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;
let win = true;

function clearColor(){

}

function one(){
    if(noise){
        audioQ.play()
    }
    noise = true;
    buttonHandler('q')
};
function two(){
    if(noise){
        audioW.play()
    }
    noise = true;
    buttonHandler('w')

};
function three(){
    if(noise){
        audioE.play()
    }
    noise = true;
    buttonHandler('e')
};

function four(){
    if(noise){
        audioR.play()
    }
    noise = true;
    buttonHandler('r')

};
function five(){
    if(noise){
        audioA.play()
    }
    noise = true;
    buttonHandler('a')
};
function six(){
    if(noise){
        audioS.play()
    }
    noise = true;
    buttonHandler('s')
};
function seven(){
    if(noise){
        audioD.play()
    }
    noise = true;
    buttonHandler('d')
};
function eight(){
    if(noise){
        audioF.play()
    }
    noise = true;
    buttonHandler('f')
};
function nine(){
    if(noise){
        audioZ.play()
    }
    noise = true;
    buttonHandler('z')
};
function ten(){
    if(noise){
        audioX.play()
    }
    noise = true;
    buttonHandler('x')
};
function eleven(){
    if(noise){
        audioC.play()
    }
    noise = true;
    buttonHandler('c')
};
function twelve(){
    if(noise){
        audioV.play()
    }
    noise = true;
    buttonHandler('v')
};

function gameTurn(){
    on = false
    if(flash == turn){
        clearInterval(intervalId);
        compTurn = false;
        on = true;
    }
    if(compTurn){
        setTimeout(()=>{
            if(order[flash] == 1) one();
            if(order[flash] == 2) two();
            if(order[flash] == 3) three();
            if(order[flash] == 4) four();
            if(order[flash] == 5) five();
            if(order[flash] == 6) six();
            if(order[flash] == 7) seven();
            if(order[flash] == 8) eight();
            if(order[flash] == 9) nine();
            if(order[flash] == 10) ten();
            if(order[flash] == 11) eleven();
            if(order[flash] == 12) twelve();
            flash++; 
        }, 200)
    }
}

function playGame(){
    win = false;
    order = []
    playerOrder = []
    flash = 0
    intervalId = 0
    turn = 1
    scoreCounter.innerText = 1;
    good = true
    for(var i=0 ; i < turn ;i++){
        order.push(Math.floor(Math.random() * 12 + 1))
    }
    compTurn= true
    intervalId = setInterval(gameTurn, 800)

}

startButton.addEventListener('click', (event) =>{
    order = []
    playerOrder = []
    turn = 0
    on = true
    win = true
    if(win){
        playGame();
    };
})

restartButton.addEventListener('click', (event) =>{
    order = []
    playerOrder = []
    turn = 0
    compTurn = 0
    on = true
    win = true
    clearInterval(intervalId)
    if(win){
        playGame();
    };
})


// parralax for music notes
// let bg = document.querySelector('.parallax');
// window.addEventListener('mousemove', function (e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

// });




// startButton.addEventListener('click', startGame);


// function startGame() {
//     popup.classList.add('hide');
// }

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

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transition', removeTransition));

function removeTransition(event) {
    
     this.classList.remove('press');
  }

  function buttonHandler (key) {
    play(key);
  }

  function play(key) {
    var keyElement = document.querySelector(`.key[id="${key}"]`); 
    var audioElement = document.querySelector(`audio[data-key="${key}"]`);
    keyElement.classList.add('press');
    audioElement.currentTime = 0;
    audioElement.play();
    setInterval(() => {
        keyElement.classList.remove('press');
    }, 200)
}

window.onkeydown = (event) => {
    console.log("jou poes")
    var key = keymap[event.keyCode];
    if (key) {
      play(key);
    }
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
