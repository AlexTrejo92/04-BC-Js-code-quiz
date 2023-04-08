
// List of variables that select different html elements

var timerCounter = document.querySelector('.timer');
var startBtn = document.getElementById('startBtn');
startBtn.addEventListener("click", startQuiz);
var hideCont = document.querySelector('.content');
var questionSection = document.getElementById('questionSection');
var timer;
var timerCount = 20;
var headerSelection = document.querySelectorAll("h1");
var questionIndex = 0;


// This is an object that holds all of the Questions and possible answers for the quiz
var questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings","2. booleans","3. alerts", "4. numbers"],
        correctAnswer: "3. alerts",
    },
    {
        questionText: "The condition in an if / else statement is enclosed within _______.",
        options: ["1. quotes","2. curly brackets","3. parentheses", "4. square brackets"],
        correctAnswer: "2. curly brackets",
    },
    {
        questionText: "Arrays in JavaScript can be used to store _______.",
        options: ["1. numbers and strings","2. other arrays","3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above",
    },
    {
        questionText: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["1. commas","2. curly brackets","3. quotes", "4. parentheses"],
        correctAnswer: "3. quotes", 
    }
]

// This function initializes the counter and hides the main section so that the questions are displayed
function startQuiz() {
    timerCount = 20;
    startTimer();
    hideCont.classList.add('hidden');
    questionSection.classList.remove("hidden");
    runGame();
}

function startTimer() {
timer = setInterval(function() {
    timerCount--;
    timerCounter.textContent = timerCount;
    if (timerCount ===0) {
        clearInterval(timer);
    }
}, 1000);
}
// When timer runs out, it should stop the quiz (or runGame function?) and show a sumbit highscore form.

function runGame() {
// This line adds content to the h2 tag on the HTML and changes it according to the questions inside the Object called 'Questions'
    var questionEl = document.getElementById("questionText");
    questionEl.textContent = questions[questionIndex].questionText

    var choices = document.getElementById("choices");
// This loop creates 4 different buttons based on the choices key within the 'Questions' object.
for (var i = 0; i < questions[questionIndex].options.length; i++) {
    choices = document.createElement('button');
    choices.textContent = questions[questionIndex].options[i];
    document.body.appendChild(choices);
    choices.className = 'choicesBtn';
    }

var choicesBtns = document.querySelectorAll(".choicesBtn")
console.log(choicesBtns);
console.log(typeof choicesBtns);

choicesBtns.addEventListener("click", validation); 

function validation() {
    if (userSelection === questions[questionIndex].correctAnswer) {
        console.log('correct!')
    } else {
        console.log('incorrect')
    }
}
}

function nextQuestion() {
    console.log('this');
    console.log('is');
    console.log('a test');
};

// choices.addEventListener("click", validation);

// }


// function endGame() {
//     console.log('THE GAME HAS ENDED');
// }

// if (timerCount ===0) {
//     endGame();
// }

// function validation() {
//     if 
// }


// if 

// // tag.addEventListener("click", console.log('hello world'));

// }

    // var tag = document.createElement(firstquestion);
    // tag.textContent = "This is a Question";
    // document.body.appendChild(tag);
    // tag.className = 'questionStyle';

    // var tag = document.createElement(questionOptions);
    // tag.textContent = "this is a button option 1";
    // document.body.appendChild(tag);
    // tag.className = 'questionsBtn';

    // Code to assign the class questionsBtn to the appended buttons so the styles are applied


    /* Code to create an if statement that will decrease the time counter in case of a wrong choice and creates an underline with the WRONG! text,
    in case of correct choice display an underline and CORRECT! text, keeps the counter at the same time. The selection should pause the counter and 
    also play a sound when its correct */


// function wrongChoice() {
//     timerCount-15;
// }
// Code to redirect the user to a highscores HTML file that stores the data for the highscores

// Code to create a submit form that will store the highscores results with a score of the time remaining.


// function rightChoice();


// tag.addEventListener("click", wrongChoice);
// tag.addEventListener("click", rightChoice);


// tag.textContent = "Commonly used data types DO NOT include:";

// console.log(choices)