












const questions = [     // Ein Array, welches die einzelnen Fragen als Objekte speichert.
    {                   // Die Fragen werden als Objektke implementiert, wobei die Frage im question value 
        // als string gespeichert ist, und die Antwortmöglichkeiten im answers value als Array.
        question: "Wo beginnt ein Beweis über vollständige Induktion?",
        answers: [      // Dieses Array beinhaltet die Antworten, welcher stets als Objekte mit answer und key value
            // implementiert werden. Im answer value wird die Antwort als String gespeichert, 
            // im key value wird die zugehörige Punktzahl gespeichert. 1 für eine korrekte Antwort,
            // 0 für eine falsche.
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
    },
    {
        question: "Warum ist die DHBW die beste duale Hochschule?",
        answers: [
            {
                answer: "Na weil!",
                key: 1
            },
            {
                answer: "Ist sie doch gar nicht!",
                key: 0
            },
            {
                answer: "Ich möchte Toastbrot!",
                key: 1
            },
            {
                answer: "Das Leben ist kein Tanzverein!",
                key: 0
            }
        ]
    },
    {
        question: "Wer war Tim Berners-Lee?",
        answers: [
            {
                answer: "Eine Koriphäe der Cryptoentwicklung",
                key: 0
            },
            {
                answer: "Ein Profirennsportler",
                key: 0
            },
            {
                answer: "Der \"Erfinder\" des Internets",
                key: 1
            },
            {
                answer: "Kennt man ihn?",
                key: 0
            }
        ]
    }
];



const numOfQuestions = 10;      // Die Anzahl der Fragen, nachder das Quiz vorbei ist.

let pointCounter = 0;           // Zwei einfache Counter, welche zählen, wie viele Fragen bereits bearbeitet wurden,
let questionCounter = 0;        // und wie viele davon richtig beantwortet wurden.
let visibleQuestion = 0;        // Index der gerade angezeigten Frage

console.log(questions);



const randomIndex = () => {     // Bestimmt einen random Array-Index, damit eine zufällige Frage als
    // nächstes ausgewählt wird
    let i = Math.floor((Math.random() * questions.length)) % questions.length;
    return i;
}

const randomQuestion = () => {  // Lädt beim aufrufen eine zufällige neue Frage.
    const i = randomIndex();
    visibleQuestion = i;
    mixArray(questions[i].answers);
    document.getElementById('displayQuestion').innerHTML = questions[i].question;
    document.getElementById('displayAnswerA').innerHTML = questions[i].answers[0].answer;
    document.getElementById('displayAnswerB').innerHTML = questions[i].answers[1].answer;
    document.getElementById('displayAnswerC').innerHTML = questions[i].answers[2].answer;
    document.getElementById('displayAnswerD').innerHTML = questions[i].answers[3].answer;

    document.getElementById('Anzahl').innerHTML = questionCounter;













}

const firstChoice = () => {     // Wird eine Antwort angeklickt, so wird anhand des answers.key value
    // der Punktestand angepasst.
    questionCounter++;
    pointCounter += questions[visibleQuestion].answers[0].key;
    (questionCounter >= numOfQuestions) && ending();
};

const secondChoice = () => {
    questionCounter++;
    pointCounter += questions[visibleQuestion].answers[1].key;
    (questionCounter >= numOfQuestions) && ending();
};

const thirdChoice = () => {
    questionCounter++;
    pointCounter += questions[visibleQuestion].answers[2].key;
    (questionCounter >= numOfQuestions) && ending();
};

const fourthChoice = () => {
    questionCounter++;
    pointCounter += questions[visibleQuestion].answers[3].key;
    (questionCounter >= numOfQuestions) && ending();
};

// Diese Funktion nimmt ein beliebig großes Array und vermischt die Elemente zufällig.
const mixArray = (arr) => {
    const mixer = Math.floor((Math.random() * 1000)) % arr.length;
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[(Math.floor(i + mixer / 2) + 1) % arr.length]] = [arr[(Math.floor(i + mixer / 2) + 1) % arr.length], arr[i]];
    }
}

// Grundinitialisierung der Antwortarrays, bevor die erste Frage gestellt wird, um die Antwortmöglichkeiten zu mischen.
const initializingRandomPlacedQuestions = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        mixArray(arr[i].answers);
    }
}

const starting = () => {    // Diese Funktion startet das Quiz, blendet den Startbildschirm aus und lädt die erste Frage.
    initializingRandomPlacedQuestions(questions);
    randomQuestion();
    document.getElementById('welcome').style.display = "none";
    document.getElementById('playing').style.display = "block";
    document.getElementById('aftermatch').style.display = "none";
}

const ending = () => {      // Diese Funktion beendet das Quiz, sie wird aufgerufen, sobald der QuestionCounter >= numOfQuestions ist.
    document.getElementById('numPoints').innerHTML = pointCounter;
    document.getElementById('numQuestions').innerHTML = questionCounter;
    pointCounter = questionCounter = 0;
    document.getElementById('playing').style.display = "none";
    document.getElementById('aftermatch').style.display = "block";
}

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];      // Ein Array zum Testen der Array-Vertauschung.








