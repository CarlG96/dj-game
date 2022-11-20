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
mainSong.volume = 0.5
const ultraMayhemSong = document.getElementById('ultraMayhemSong');
ultraMayhemSong.volume = 0.3;
const ultraMayhemButton = document.getElementById('ultraMayhem');
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const gameButtons = document.getElementsByClassName('square');
const audio = document.createElement('audio');
const winText = document.getElementById('winText');
const loseText = document.getElementById('loseText');


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

const removeScore = () => {
    scoreCounter.innerText = 0;
}

const ultraMayhem = () => {
    if(musicPlaying) {
        ultraMayhemButton.innerText = `Chill out dude...`;
        ultraMayhemButton.classList.add('mayhem-colored', 'mayhem-rotate-medium');
        document.getElementById('lin-head').classList.add('mayhem-colored');
        document.getElementById('git-head').classList.add('mayhem-colored');
        let funkyButtons = document.querySelectorAll('.funky-animation');
        funkyButtons.forEach(funkyButton => {
            funkyButton.classList.add('mayhem-dance');
        });
        let gameBtns = document.querySelectorAll('.square');
        gameBtns.forEach(gameButton => {
            gameButton.classList.add('mayhem-rotate-fast');
        });
        document.getElementById('icon').classList.add('mayhem-colored');
        musicPlaying=false;
        ultraMayhemSong.pause();
        ultraMayhemSong.currentTime=0;
        mainSong.currentTime=0;
        mainSong.play();
    } else {
        ultraMayhemButton.innerText = `!!!ULTRAMAYHEM!!!`;
        ultraMayhemButton.classList.remove('mayhem-colored', 'mayhem-rotate-medium');
        document.getElementById('lin-head').classList.remove('mayhem-colored');
        document.getElementById('git-head').classList.remove('mayhem-colored');
        let funkyButtons = document.querySelectorAll('.funky-animation');
        funkyButtons.forEach(funkyButton => {
            funkyButton.classList.remove('mayhem-dance');
        });
        let gameBtns = document.querySelectorAll('.square');
        gameBtns.forEach(gameButton => {
            gameButton.classList.remove('mayhem-rotate-fast');
        });
        document.getElementById('icon').classList.remove('mayhem-colored');
        musicPlaying=true;
        mainSong.pause();
        mainSong.currentTime=0;
        ultraMayhemSong.currentTime=0;
        ultraMayhemSong.play();}

        restart();
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
let musicPlaying = true;
let playerInput = true;

const onPress = (key, audio) => {
    if(playerInput){
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
        
        // FAIL STATE
        loseSound.play();
        loseText.classList.remove('hide');
        setTimeout(() => {
            loseText.classList.add('hide');
        }, 2000);
        playerIndex = 0;
        playerArray.length = 0;
        gameArray.length = 0;
        round = 1;
        removeScore();
        return null;
    }

    if (playerArray[gameArray.length-1] === gameArray[gameArray.length-1]) {
        console.log(playerArray);
        winSound.play();
        winText.classList.remove('hide');
        setTimeout(() => {
            winText.classList.add('hide');
        }, 2000);
        playerIndex = 0;
        ++round;
        addScore();
        startGame(round);
    } 
}
}


const restart = () => {
    if(musicPlaying){
        ultraMayhemSong.pause();
        ultraMayhemSong.currentTime=0;
        mainSong.currentTime=0;
        mainSong.play();
    }
    else if(!musicPlaying){
        mainSong.pause();
        mainSong.currentTime=0;
        ultraMayhemSong.currentTime=0;
        ultraMayhemSong.play();
    }
    gameArray.length = 0;
    console.log(gameArray);
    playerIndex = 0;
    round = 1;
    removeScore();
    startGame(1);
}

const startGame = (num) => {
    playerInput=false;
    playerArray.length = 0; 

    for (let i = num-1; i < num; i++ ) {
        let choose = Math.floor(Math.random() * 12);
        gameArray[i] = letterArray[choose];
        console.log(gameArray);
    }

    //plays sequence
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
            playerInput = true;
            clearInterval(gameArraySequencePlay);
            console.log(gameArray);
        }
    }, 1500)
}

//hotkeys


hotkeys('q', () => {
if(playerInput){onPress('q', 'audioQ')}});
hotkeys('w', () => {
if(playerInput){onPress('w', 'audioW')}});
hotkeys('e', () => {
if(playerInput){onPress('e', 'audioE')}});
hotkeys('r', () => {
if(playerInput){onPress('r', 'audioR')}});
hotkeys('a', () => {
if(playerInput){onPress('a', 'audioA')}});
hotkeys('s', () => {
if(playerInput){onPress('s', 'audioS')}});
hotkeys('d', () => {
if(playerInput){onPress('d', 'audioD')}});
hotkeys('f', () => {
if(playerInput){onPress('f', 'audioF')}});
hotkeys('z', () => {
if(playerInput){onPress('z', 'audioZ')}});
hotkeys('x', () => {
if(playerInput){onPress('x', 'audioX')}});
hotkeys('c', () => {
if(playerInput){onPress('c', 'audioC')}});
hotkeys('v', () => {
if(playerInput){onPress('v', 'audioV')}});
