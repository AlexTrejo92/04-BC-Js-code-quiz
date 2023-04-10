// List of variables that select different html elements

var timerCounter = document.querySelector('.timer');
var startBtn = document.getElementById('startBtn');
startBtn.addEventListener("click", startQuiz);
var hideCont = document.querySelector('.content');
var questionSection = document.getElementById('questionSection');
var timer;
var timerCount;
var questionIndex = 0;
var message = document.getElementById('wrong-right')
var score;

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
    console.log('The StartQuiz function has been activated');
    timerCount = 75;
    startTimer();
    hideCont.classList.add('hidden');
    questionSection.classList.remove("hidden");
    showQuestion();
}

// When timer runs out, it stops the quiz and shows a sumbit highscore form.
function startTimer() {
timer = setInterval(function() {
    timerCount--;
    timerCounter.textContent = timerCount;
    if (timerCount ===0 || questionIndex >= 4) {
        clearInterval(timer)
        endQuiz();
    }
}, 1000);
console.log('The startTimer function has been activated');
}



function showQuestion() {
    // This line adds content to the h2 tag on the HTML and changes it according to the questions inside the Object called 'Questions'
    var questionEl = document.getElementById("questionText");
    var qArray = questions[questionIndex];
    questionEl.textContent = qArray.questionText;
    questionEl.className = 'questionStyle';
    // This loop creates 4 different buttons based on the choices key within the 'Questions' object.
    for (var i = 0; i < questions[questionIndex].options.length; i++) {
    var choices = document.getElementById("choices");
    choices = document.createElement('button');
    choices.innerText = questions[questionIndex].options[i];
    choices.setAttribute("value:", questions[questionIndex].options[i])
    document.body.children[2].children[1].appendChild(choices);
    choices.className = 'choicesBtn';
    }
console.log('The showQuestion function has been activated');
    // This loop creates an event listener to the buttons created via javascript
    var choicesButtons = document.querySelectorAll('.choicesBtn');
    for (var i = 0; i <choicesButtons.length; i++){
        choicesButtons[i].addEventListener("click", checkAnswer);
    }
    console.log(questionIndex);
    if (questionIndex >= 3 || timerCount<=0) {
    endQuiz();
    } else {
    nextQuestion();  
    }
    return;
}


// This function validates the user selection of choices and checks if it is the correct answer.
function checkAnswer() {
    var currentQuestionData = questions[questionIndex];
    if (this.innerText === currentQuestionData.correctAnswer) {
        message.textContent = 'CORRECT!'
    } else {
        timerCount -=10;
        message.textContent = 'WRONG!'
    }

    questionIndex = questionIndex+1
    console.log(questionIndex);
    console.log('The checkAnswer function has been activated');
    // setTimeout(nextQuestion, 1000);
    if (questionIndex >= 4 || timerCount<=0) {
        endQuiz();
    } else {
    nextQuestion();
    }
    return;
}

// This function changes the actual question for the next
function nextQuestion() {
    console.log('The nextQuestion function has been activated')
    if (questionIndex <= questions[questionIndex].length || timerCount>0) {
    // message.textContent = '';
    var questionEl = document.getElementById("questionText");
    questionEl.textContent = questions[questionIndex].questionText;
    var choicesButtons = document.querySelectorAll('.choicesBtn');

// These lines of code replace the original text of the created buttons, but only to the next question
    // choicesButtons[0].innerText = questions[1].options[0];
    // choicesButtons[1].innerText = questions[1].options[1];
    // choicesButtons[2].innerText = questions[1].options[2];
    // choicesButtons[3].innerText = questions[1].options[3];

console.log(questions[questionIndex].options.length);

for (var i = 0; i < questions[questionIndex].options.length; i++) {
    // var choices = document.getElementById("choices");
    choicesButtons.innerText = questions[questionIndex].options[i];
    // choices.setAttribute("value:", questions[questionIndex].options[i])
    // document.body.children[2].children[1].appendChild(choices);
    // choices.className = 'choicesBtn';
    }



    // checkAnswer();
} else {
    endQuiz();
    }
}


function endQuiz() {
    score = timerCount;
    console.log(score);
    console.log('The endQuiz function has been activated');
    var ending = document.getElementById('questionSection');
    ending.classList.add('hidden');
    var message = document.getElementById('wrong-right');
    message.classList.add('hidden');
    var endScreen = document.getElementById('endQuiz');
    endScreen.classList.remove('hidden')
    var printScore = document.getElementById('finalScore')
    printScore.textContent = score;


//     endScreen.textContent = 'Thanks for playing';
//     score = timerCount;
// document.body.appendChild(endScreen);
}

// function endGame() {
//     if (questionIndex <= 3 &| timerCount>0)
// }

    // Code to assign the class questionsBtn to the appended buttons so the styles are applied


    /* Code to create an if statement that will decrease the time counter in case of a wrong choice and creates an underline with the WRONG! text,
    in case of correct choice display an underline and CORRECT! text, keeps the counter at the same time. The selection should pause the counter and 
    also play a sound when its correct */

// Code to redirect the user to a highscores HTML file that stores the data for the highscores

// Code to create a submit form that will store the highscores results with a score of the time remaining.
