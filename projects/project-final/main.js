const questions = [
  {
    question: "Which type of grass is most commonly used in lawns around the world?",
    options: ["Wheatgrass","Kentucky Bluegrass", "Bamboo", "Lemongrass"],
    answer: 1,
  },
  {
    question: "What role does grass play in the ecosystem?",
    options: ["Produces oxygen"," Prevents soil erosion","Provides food for herbivores","All of the above"],
    answer: 3,
  },
  {
    question: "Which of these is NOT a type of grass?",
    options: ["Ryegrass","Fescue","Mint","Bermuda"],
    answer: 2,
  },
  {
    question: "What gives grass its green color?",
    options: ["Glucose","Chlorophyll","Oxygen","Water"],
    answer: 1,
  },
  {
    question: "Which crop, classified as a grass, feeds more people worldwide than any other?",
    options: ["Corn","Wheat","Rice","Barley"],
    answer: 2,
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const scoreText = document.getElementById("score-text");
  const nextButton = document.getElementById("next-button");

  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  scoreText.textContent = `Score: ${score}`;
  optionsContainer.innerHTML = "";
  selectedAnswer = null;
  nextButton.disabled = true;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.textContent = opt;
    btn.onclick = () => {
      selectedAnswer = idx;
      document.querySelectorAll(".option-button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      nextButton.disabled = false;
    };
    optionsContainer.appendChild(btn);
  });
}

function showFinalMessage() {
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const scoreText = document.getElementById("score-text");
  const nextButton = document.getElementById("next-button");
  const resetButton = document.getElementById("reset-button");

  questionText.textContent = "Quiz complete!";
  optionsContainer.innerHTML = "";
  if (score === questions.length) {
    scoreText.textContent = `Perfect! ${score}/${questions.length} — Click the grass 🌿`;
  } else if (score >= 4) {
    scoreText.textContent = `Great job! ${score}/${questions.length} — You still have to try again to touch the grass.`;
  } else {
    scoreText.textContent = `${score}/${questions.length} — You have to try again to touch the grass.`;
  }

  nextButton.style.display = "none";
  resetButton.style.display = "block";
}

document.getElementById("next-button").onclick = () => {
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showFinalMessage();
  } else {
    loadQuestion();
  }
};

document.getElementById("start-button").onclick = () => {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("next-button").style.display = "block";
  loadQuestion();
};

document.getElementById("reset-button").onclick = () => {
  score = 0;
  currentQuestion = 0;
  selectedAnswer = null;
  document.getElementById("reset-button").style.display = "none";
  document.getElementById("next-button").style.display = "block";
  loadQuestion();
};

window.onload = () => {
  document.getElementById("next-button").style.display = "none";
  document.getElementById("reset-button").style.display = "none";
};


document.body.addEventListener("click", function (e) {
    // Don't trigger if clicking on a button thing
    const isInteractive = e.target.closest("#quiz-container, button");
    if (!isInteractive) {
      const message = document.getElementById("grass-message");
      message.style.display = "block";
      
      // goes out after 3 sec
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    }
  });
  
