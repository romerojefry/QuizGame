var secondsLeft = 30

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timerInterval.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    },1000);
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