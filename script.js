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

// Game Logic 

const letterArray = ['q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'];
const playerArray = [];
const gameArray = [];
let playerIndex = 0;
let round = 1; 

const onPress = (key, audio) => {
    let keyElement = document.getElementById(key);
    let audioElement = document.getElementById(audio);

    keyElement.classList.add('press');

    audioElement.currentTime = 0;
        audioElement.play();
        setTimeout(() => {
            keyElement.classList.remove('press');
        }, 200)

    playerArray.push(key);

    if (playerArray[playerIndex] === gameArray[playerIndex]) {
        ++playerIndex;
    } else {
        playerArray.length = 0;
        gameArray.length = 0;
        playerIndex = 0;
        round = 1;
        console.log('you failed')
    }

    if (playerArray[gameArray.length-1] === gameArray[gameArray.length-1]) {
        console.log(playerArray);
        playerIndex = 0;
        ++round;
        addScore();
        startGame(round);
    } 

}

const startGame = (num) => {

    playerArray.length = 0; 

    for (let i = num-1; i < num; i++ ) {
        let choose = Math.floor(Math.random() * 12);
        gameArray[i] = letterArray[choose];
        console.log(gameArray);
    }

    let i = 0;
    const gameArraySequencePlay = setInterval(() => {
        if (i < gameArray.length) {
            let index = gameArray[i];
            let keyElement = document.getElementById(index);
            console.log(keyElement);
            keyElement.classList.add('press');
           
            setTimeout(() => {
                keyElement.classList.remove('press');
            }, 1000);

            let audioElement = document.querySelector(`audio[data-key="${gameArray[i]}"]`);

            audioElement.currentTime = 0;
            audioElement.play();
            
            ++i;
        } else {
            clearInterval(gameArraySequencePlay);
            console.log(gameArray);
        }
    }, 3000)
}
