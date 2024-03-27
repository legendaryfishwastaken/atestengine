const quiz = [
    {
        question: "What is 2 + 2?",
        options: ["4", "5", "6", "7"],
        answer: "4"
    },
    {
        question: "What is 10 * 5?",
        options: ["30", "40", "50", "60"],
        answer: "50"
    },
    {
        question: "What is the square root of 16?",
        options: ["2", "4", "8", "16"],
        answer: "4"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["100°C", "0°C", "-100°C", "50°C"],
        answer: "100°C"
    },
    {
        question: "What is 25 divided by 5?",
        options: ["2", "5", "10", "15"],
        answer: "5"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["I", "Ir", "Fe", "In"],
        answer: "Fe"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "What is 3 to the power of 2?",
        options: ["6", "9", "12", "15"],
        answer: "9"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        answer: "Au"
    },
    {
        question: "What is 5 times 4?",
        options: ["10", "15", "20", "25"],
        answer: "20"
    },
    {
        question: "What is 100 divided by 10?",
        options: ["10", "20", "30", "40"],
        answer: "10"
    },
    {
        question: "What is the square root of 64?",
        options: ["4", "6", "8", "10"],
        answer: "8"
    },
    {
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: "180°"
    },
    {
        question: "What is the chemical symbol for hydrogen?",
        options: ["Hg", "He", "H", "Ho"],
        answer: "H"
    },
    {
        question: "What is 4 times 3?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "C", "O2", "H2O"],
        answer: "O"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for helium?",
        options: ["He", "H", "Hu", "Hee"],
        answer: "He"
    },
    {
        question: "What is 50 divided by 2?",
        options: ["20", "25", "30", "35"],
        answer: "25"
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["C", "Ca", "Co", "Cb"],
        answer: "C"
    },
    {
        question: "What is 9 minus 3?",
        options: ["3", "4", "5", "6"],
        answer: "6"
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        options: ["Ni", "Na", "N", "Nb"],
        answer: "N"
    },
    {
        question: "What is 12 divided by 4?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sr"],
        answer: "Ag"
    },
    {
        question: "What is 15 plus 10?",
        options: ["20", "25", "30", "35"],
        answer: "25"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "Ka", "Kt", "Kn"],
        answer: "K"
    },
    {
        question: "What is 8 times 7?",
        options: ["48", "54", "56", "64"],
        answer: "56"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "Nb", "No", "Nm"],
        answer: "Na"
    },
    {
        question: "What is 2 to the power of 3?",
        options: ["4", "6", "8", "10"],
        answer: "8"
    },
    {
        question: "What is 18 divided by 3?",
        options: ["4", "5", "6", "7"],
        answer: "6"
    },
    {
        question: "What is the chemical symbol for magnesium?",
        options: ["Mg", "Ma", "Mo", "Me"],
        answer: "Mg"
    },
    {
        question: "What is 7 times 9?",
        options: ["56", "63", "64", "70"],
        answer: "63"
    },
    {
        question: "What is the chemical symbol for calcium?",
        options: ["Ca", "Ce", "C", "Cu"],
        answer: "Ca"
    },
    {
        question: "What is 24 divided by 6?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "What gets wet while drying?",
        options: ["Towel", "Umbrella", "Sun", "Rain"],
        answer: "Towel"
    },
    {
        question: "If all Bloops are Razzies, and some Razzies are Lazzies, then some Bloops are definitely Lazzies.",
        options: ["True","False"],
        answer: "False"
    }
]

const scoreMessages = {
    100: "You are very smart!",
    90: "Excellent!",
    80: "Great job!",
    70: "Good effort!",
    60: "Not bad!",
    50: "Keep practicing!",
    0: "You can do better!"
};

let score = 0;

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

function calculateScore() {
    const percentage = (score / quiz.length) * 100;
    for (let key in scoreMessages) {
        if (percentage >= parseInt(key)) {
            return scoreMessages[key];
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const form = document.getElementById('quizForm');
    form.innerHTML = '';

    shuffle(quiz);

    quiz.forEach((question, index) => {
        const fieldset = document.createElement('fieldset');
        fieldset.classList.add('question-fieldset');

        const legend = document.createElement('legend');
        legend.textContent = `Question ${index + 1}`;
        fieldset.appendChild(legend);

        const questionElement = document.createElement('div');
        questionElement.textContent = question.question;
        fieldset.appendChild(questionElement);

        const options = shuffle([...question.options]);
        options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            input.classList.add('option-input');
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            fieldset.appendChild(label);
        });

        form.appendChild(fieldset);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    submitButton.classList.add('submit-button');
    form.appendChild(submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        let index = 0;
        for (let entry of formData.entries()) {
            checkAnswer(entry[1], quiz[index].answer);
            index++;
        }
        const scoreMessage = calculateScore();
        alert(scoreMessage);
    });
}

displayQuestion();
