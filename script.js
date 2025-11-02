const questions = [
  {
    question: "Your ideal date night?",
    options: ["Candlelit dinner", "Netflix & chill", "Dance party", "Sad poetry reading"],
    results: ["Romantic dreamer 💖", "Cozy cuddler 🛋", "Wild heart 🔥", "Sensitive soul 🌧"]
  },
  {
    question: "Pick a love anthem:",
    options: ["Lana Del Rey", "Sade", "Doja Cat", "Olivia Rodrigo"],
    results: ["Melancholy muse 🎶", "Smooth operator 🎷", "Flirt queen 👑", "Heartbreak hero 💔"]
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultModal = document.getElementById("result-modal");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => showResult(q.results[i]);
    optionsEl.appendChild(btn);
  });
}

function showResult(result) {
  resultTitle.textContent = "FlirtBack Mode Activated 💘";
  resultMessage.textContent = result;
  resultModal.classList.remove("hidden");
}

nextBtn.onclick = () => {
  resultModal.classList.add("hidden");
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
};

document.querySelectorAll("#mood-toggle button").forEach(btn => {
  btn.onclick = () => {
    document.body.className = btn.dataset.mood;
  };
});

loadQuestion();