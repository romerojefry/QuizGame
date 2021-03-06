var secondsLeft = 0;
var timer;
var score = 0;
var questions = -1;


//to start a timer
function start() {
    secondsLeft = 35
    document.getElementById("secondsLeft").innerHTML = secondsLeft;

    timer = setInterval(function(){
        secondsLeft--;
        document.getElementById("secondsLeft").innerHTML = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    game()
}

//setting store to keep track of score
function placeScore() {
    localStorage.setItem("you're score", score) 
    grabScore();
}

function grabScore(){
    var quizContent = "<h1>" + localStorage.getItem("highscore") + "<h1>";

    document.getElementById("bodyQuiz").innerHTML = quizRender
}

//resetting the quiz

function resetQuiz() {
    clearInterval(timer);
    score = 0;
    questions = -1;
    secondsLeft = 0
    timer = null;

    document.getElementById("secs left").innerHTML = secondsLeft;
}
// my questions
var myQuestions = [
    {
        question: "What color is blueberry jam?",
        answers: {
            a: 'purple',
            b: 'red',
            c: 'blue'
        },
        correctAnswer: 'a'
    },
    {
        question: "Is tomato a fruit?",
        anwsers: {
            a: 'true',
            b: 'false',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the captial of Thailand",
        anwsers: {
            a: 'Manila',
            b: 'Bangkok!',
            c: 'Jakarta',
        },
        correctAnwser: 'b'
    },
    {
        question: "Which country was first to the reach space?",
        anwsers: {
            a: 'USA',
            b: 'China',
            c: 'Russia',
        },
        correctAnswer: 'c'
    },
    {
        question: "Is Australia a country or contient?",
        anwsers: {
            a: 'contient',
            b: 'country',
            c: 'both',
        },
        correctAnswer: 'c'
    }
];

function game() {
    questions++;

    if(questions > myQuestions.length - 1){
        endGame();
        return;
    }

    var quizRender = "<h2>" + myQuestions[questions].title+ "<h2>"

    for(var buttonLoop = 0; buttonLoop < myQuestions[questions].choices.length; buttonLoop++){
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", myQuestions[questions].choices[buttonLoop]);
        if (myQuestions[questions].choices[buttonLoop] == myQuestions[questions].answers) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizRender += buttonCode
    }

    document.getElementById("quizBody").innerHTML = quizRender;
}