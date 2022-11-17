const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

// startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

scoreCounter = document.getElementById('score-counter');

hotkeys('q', () => {
    console.log("add score")
    scoreCounter.innerText = parseInt(scoreCounter.innerText) + 1;
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
