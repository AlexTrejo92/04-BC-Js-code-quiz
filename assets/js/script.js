console.log ('first Test');

var timerCounter = document.querySelector('.timer');

var startBtn = document.querySelector(".startBtn");

var hideCont = document.querySelector('.content');

var timer;

var timerCount = 60;

function startQuiz() {
    timerCount = 60;
    startTimer()
    hideCont.setAttribute('style', 'display: none');
}

function startTimer() {
timer = setInterval(function() {
    timerCount--;
    timerCounter.textContent = timerCount;
    if (timerCount >=0) {
        console.log('test1');
    }
    if (timerCount ===0) {
        clearInterval(timer);
    }
}, 1000);
}

startBtn.addEventListener("click", startQuiz);