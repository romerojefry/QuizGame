var secondsLeft = 0
var timer;



function start() {
    secondLeft = 35
    document.getElementById("secondsLeft").innerHTML = secondsLeft;

    timer = setInterval(function(){
        secondsLeft--;
        document.getElementById("secondLeft").innerHTML = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    next()
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

//writing out my variable