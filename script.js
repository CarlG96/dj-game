const popup = document.getElementById('instruc-popup');
const startButton = document.getElementById('start-game');

window.onload = popup



startButton.addEventListener('click', startGame);

function startGame() {
    popup.classList.add('hide');
}

// Function for circle buttons include sound effects
const audio = document.createElement('audio');

$("#button1").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/1.mp3');
    }
    audio.currentTime = 2;
    audio.play();
});

$("#button2").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/2.mp3');
    }
    audio.currentTime = 0;
    audio.play();

});

$("#button3").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/3.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button4").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/4.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button5").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/5.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button6").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/6.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button7").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/7.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button8").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/8.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button9").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/1.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button10").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/2.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button11").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/3.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button12").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/4.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button13").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/5.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});


$("#button14").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/6.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button15").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/7.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});

$("#button16").click(function () {
    if (audio.canPlayType('audio/mpeg')) {
        audio.setAttribute('src', 'sounds/8.mp3');
    }
    audio.currentTime = 0;
    audio.play();
});