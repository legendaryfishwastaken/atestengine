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
    },
    {
        question: "If a car is traveling at 60 miles per hour, how far will it travel in 2 hours?",
        options: ["100 miles", "120 miles", "140 miles", "160 miles"],
        answer: "120 miles"
    },
    {
        question: "If the area of a square is 49 square centimeters, what is the length of one side?",
        options: ["6 cm", "7 cm", "8 cm", "9 cm"],
        answer: "7 cm"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: "Au"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        answer: "1912"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "Which mammal can fly?",
        options: ["Bat", "Rat", "Cat", "Dog"],
        answer: "Bat"
    },
    {
        question: "What is the largest organ of the human body?",
        options: ["Skin", "Liver", "Heart", "Lung"],
        answer: "Skin"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        answer: "Nile"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["100°C", "0°C", "-100°C", "50°C"],
        answer: "100°C"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "C", "O2", "H2O"],
        answer: "O"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
        answer: "Carbon dioxide"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What is the formula for the area of a triangle?",
        options: ["A = πr^2", "A = bh", "A = 1/2bh", "A = s^2"],
        answer: "A = 1/2bh"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which element is commonly used in balloons to make them float?",
        options: ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
        answer: "Helium"
    },
    {
        question: "What is the process of a caterpillar turning into a butterfly called?",
        options: ["Metamorphosis", "Evaporation", "Respiration", "Fermentation"],
        answer: "Metamorphosis"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "Nb", "No", "Nm"],
        answer: "Na"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Skin", "Lung"],
        answer: "Skin"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sr"],
        answer: "Ag"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Platinum", "Graphite"],
        answer: "Diamond"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the formula for density?",
        options: ["D = m * v", "D = v / m", "D = m / v", "D = a * t"],
        answer: "D = m / v"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Perth", "Canberra"],
        answer: "Canberra"
    },
    {
        question: "What is the largest species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Kodiak Bear", "Black Bear"],
        answer: "Polar Bear"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lemon"],
        answer: "Avocado"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "Au", "Pb"],
        answer: "Fe"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "Ka", "Kt", "Kn"],
        answer: "K"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is the symbol for the element oxygen?",
        options: ["O", "Ox", "Og", "Ol"],
        answer: "O"
    },
    {
        question: "How many bones are in the human body?",
        options: ["206", "208", "210", "212"],
        answer: "206"
    },
    {
        question: "What is the process by which plants make their own food called?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Evaporation"],
        answer: "Photosynthesis"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Christopher Marlowe", "George Bernard Shaw", "Arthur Miller"],
        answer: "William Shakespeare"
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
