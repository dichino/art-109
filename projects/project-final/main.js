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
    scoreText.textContent = `Perfect! ${score}/${questions.length} — You cloud have clicked the grass the whole time 🌿`;
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
    document.getElementById("clown_final").volume = 0.5;
    const clownAudio = document.getElementById("clown_final");

    const isInteractive = e.target.closest("#quiz-container, .option-button, #start-button, #next-button, #reset-button");
    if (!isInteractive) {
        clownAudio.play();
    }

    if (!isInteractive) {
      const message = document.getElementById("grass-message");
      message.style.display = "block";      
      // goes out after 3 sec
      setTimeout(() => {
        message.style.display = "none";
      }, 10000);
    }
  });
  

const backgroundAudio1 = document.getElementById("background1-audio");
backgroundAudio1.volume = 0.2; 

const backgroundAudio2 = document.getElementById("background2-audio");
backgroundAudio2.volume = 0.2; 

  const clickSound = document.getElementById('click-sound');


// Get all bttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0; // rewinding 
    clickSound.play();
  });
});

//inscurance for the usic
const playBackgroundMusic = () => {
  document.getElementById("background1-audio").play();
  document.getElementById("background2-audio").play();

  document.body.removeEventListener("click", playBackgroundMusic);
};

document.body.addEventListener("click", playBackgroundMusic);





