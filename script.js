const questions = [
    {
        question: "Wo beginnt ein Beweis über vollständige Induktion?",
        answers: [
            {
                answer: "Bei n = 0",
                key: 0
            },
            {
                answer: "Bei n = 1",
                key: 0
            },
            {
                answer: "Bei n = x, eben dort, ab wo wir es beweisen wollen.",
                key: 1
            },
            {
                answer: "Bei N = 0",
                key: 0
            }
        ]
    }
];

const display = {
    question: document.getElementById('displayQuestion').innerHTML
};

let a = document.getElementById('displayQuestion').innerHTML;

console.log(questions);

function ersteFrage() {
    document.getElementById('displayQuestion').innerHTML = questions[0].question;
    document.getElementById('displayAnswerA').innerHTML = questions[0].answers[0].answer;
    document.getElementById('displayAnswerB').innerHTML = questions[0].answers[1].answer;
    document.getElementById('displayAnswerC').innerHTML = questions[0].answers[2].answer;
    document.getElementById('displayAnswerD').innerHTML = questions[0].answers[3].answer;
};

const randomIndex = () => {
    let i = Math.floor((Math.random()*questions.length))%questions.length;
    return i;
}

const randomQuestion = () => {
    const i = randomIndex();
    document.getElementById('displayQuestion').innerHTML = questions[i].question;
    document.getElementById('displayAnswerA').innerHTML = questions[i].answers[0].answer;
    document.getElementById('displayAnswerB').innerHTML = questions[i].answers[1].answer;
    document.getElementById('displayAnswerC').innerHTML = questions[i].answers[2].answer;
    document.getElementById('displayAnswerD').innerHTML = questions[i].answers[3].answer;
}