const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

// startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

const gameButtons = document.getElementsByClassName('square');
for(let i=0; i < gameButtons.length; ++i){
    gameButtons[i].addEventListener('keydown', () => {
        console.log(`Hello World ${[i]}`);
    } )
}

const gameStart = () => {
    
}



const gameArray = [];
const playerArray = [];


hotkeys('q', () => {
    
})

hotkeys('w', () => {
    
})

hotkeys('e', () => {
    
})

hotkeys('r', () => {
    
})

hotkeys('a', () => {
    
})

hotkeys('s', () => {
    
})

hotkeys('d', () => {
    
})

hotkeys('f', () => {
    
})

hotkeys('z', () => {
    
})

hotkeys('x', () => {
    
})

hotkeys('c', () => {
    
})

hotkeys('v', () => {
    
})
