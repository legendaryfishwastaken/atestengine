const quiz = [
    {
        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
        options: ["10", "12", "14", "16"],
        answer: "10"
    },
    {
        question: "If all Bloops are Razzies, and some Razzies are Lazzies, then some Bloops are definitely Lazzies. (True/False)?",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What comes next in the series: 1, 1, 2, 3, 5, 8, ...?",
        options: ["10", "11", "13", "21"],
        answer: "13"
    },
    {
        question: "Which of the following words is spelled correctly?",
        options: ["Necessary", "Neccessary", "Necesary", "Necesssary"],
        answer: "Necessary"
    },
    {
        question: "Read the following passage:\n\nJohn has six cats. All but two of them ran away. How many cats does John have left?",
        options: ["2", "4", "6", "None, John doesn't have any cats left"],
        answer: "6"
    },
    {
        question: "If 2x + 5 = 17, what is the value of x?",
        options: ["6", "7", "8", "9"],
        answer: "6"
    },
    {
        question: "Which of the following numbers is the smallest: -1, -0.5, -1.5, -0.1?",
        options: ["-1", "-0.5", "-1.5", "-0.1"],
        answer: "-1.5"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `Your Score: ${score}/${quiz.length}`;
}
