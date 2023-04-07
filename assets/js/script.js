console.log ('first Test');

var timerCounter = document.querySelector('.timer');

var startBtn = document.querySelector(".startBtn");

var hideCont = document.querySelector('.content');

var timer;

var timerCount = 20;

var firstquestion = 'h1';

var questionOptions = 'button';

var headerSelection = document.querySelectorAll("h1")

var btnSelection = document.querySelectorAll('button')

var questionIndex = 0;

var questions = [
    {
        questionText: "Question1",
        options: ["red","blue","green"],
        correctAnswer: "blue",
    },
    {
        questionText: "Question2",
        options: ["red","blue","green"],
        correctAnswer: "blue",
    },
    {
        questionText: "Question3",
        options: ["red","blue","green"],
        correctAnswer: "blue",
    },
]

function startQuiz() {
    timerCount = 20;
    startTimer();
    hideCont.setAttribute('style', 'display: none');
    runGame();
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
// When timer runs out, it should stop the quiz (or runGame function?) and show a sumbit highscore form.

function runGame() {
    var questionEl = document.getElementById("questionText");
    console.log(questions[1].questionText);
    questionEl.textContent = questions[questionIndex].questionText

    var qArray = questions[questionIndex];

for (var i = 0; i < qArray.options.length; i++) {
var tag = document.createElement(questionOptions);
tag.textContent = qArray.options[i];
document.body.appendChild(tag);
tag.className = 'questionStyle';
}

    // var tag = document.createElement(firstquestion);
    // tag.textContent = "This is a Question";
    // document.body.appendChild(tag);
    // tag.className = 'questionStyle';

    // var tag = document.createElement(questionOptions);
    // tag.textContent = "this is a button option 1";
    // document.body.appendChild(tag);
    // tag.className = 'questionsBtn';

    // var tag = document.createElement(questionOptions);
    // tag.textContent = "this is a button option 2";
    // document.body.appendChild(tag);
    // tag.className = 'questionsBtn';

    // var tag = document.createElement(questionOptions);
    // tag.textContent = "this is a button option 3";
    // document.body.appendChild(tag);
    // tag.className = 'questionsBtn';

    // var tag = document.createElement(questionOptions);
    // tag.textContent = "this is a button option 4";
    // document.body.appendChild(tag);
    // tag.className = 'questionsBtn';

    // Code to assign the class questionsBtn to the appended buttons so the styles are applied


    /* Code to create an if statement that will decrease the time counter in case of a wrong choice and creates an underline with the WRONG! text,
    in case of correct choice display an underline and CORRECT! text, keeps the counter at the same time. The selection should pause the counter and 
    also play a sound when its correct */
}

// function wrongChoice() {
//     timerCount-15;
// }
// Code to redirect the user to a highscores HTML file that stores the data for the highscores

// Code to create a submit form that will store the highscores results with a score of the time remaining.


// function rightChoice();

startBtn.addEventListener("click", startQuiz);
// tag.addEventListener("click", wrongChoice);
// tag.addEventListener("click", rightChoice);


// tag.textContent = "Commonly used data types DO NOT include:";