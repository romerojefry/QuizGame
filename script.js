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
];
//writing out my variable