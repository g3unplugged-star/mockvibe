// test-engine.js

let QUESTIONS = [];
let CURRENT = 0;
let ANSWERS = {};
let TIMER = null;
let TIME_LEFT = 0;

const params = new URLSearchParams(location.search);
const exam = params.get('exam');
const section = params.get('section');
const mode = params.get('mode');
const year = params.get('year');

async function loadTest() {
  let data;

  if (mode === 'pyq') {
    data = await fetch(`data/previous-papers/${exam}/${year}.json`).then(r => r.json());
    QUESTIONS = data.questions;
    TIME_LEFT = data.pattern.totalTime * 60;
    document.getElementById('testTitle').innerText =
      `${data.exam} ${year} (Previous Year Paper)`;
  } else {
    data = await fetch(`data/questions/${exam}.json`).then(r => r.json());
    QUESTIONS = data.questions.filter(q => q.section === section).slice(0, 25);
    TIME_LEFT = 60 * 60;
    document.getElementById('testTitle').innerText =
      `${exam.toUpperCase()} – ${section.toUpperCase()}`;
  }

  buildPalette();
  loadQuestion();
  startTimer();

  trackEvent('test_start', { exam, section, mode });
}

function loadQuestion() {
  const q = QUESTIONS[CURRENT];
  document.getElementById('qno').innerText =
    `Question ${CURRENT + 1} of ${QUESTIONS.length}`;
  document.getElementById('question').innerText = q.question;

  const optBox = document.getElementById('options');
  optBox.innerHTML = '';

  q.options.forEach((opt, i) => {
    const d = document.createElement('div');
    d.className = 'option';
    if (ANSWERS[q.id] === i) d.classList.add('selected');
    d.innerText = opt;
    d.onclick = () => selectOption(q.id, i);
    optBox.appendChild(d);
  });
}

function selectOption(id, index) {
  ANSWERS[id] = index;
  updatePalette();
  loadQuestion();
  trackEvent('question_attempt', { exam, section, qid: id });
}

function nextQuestion() {
  if (CURRENT < QUESTIONS.length - 1) {
    CURRENT++;
    loadQuestion();
  }
}

function buildPalette() {
  const p = document.getElementById('palette');
  p.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const b = document.createElement('button');
    b.innerText = i + 1;
    b.onclick = () => {
      CURRENT = i;
      loadQuestion();
    };
    p.appendChild(b);
  });
}

function updatePalette() {
  document.querySelectorAll('#palette button').forEach((b, i) => {
    if (ANSWERS[QUESTIONS[i].id] != null) {
      b.className = 'answered';
    }
  });
}

function startTimer() {
  TIMER = setInterval(() => {
    TIME_LEFT--;
    const m = Math.floor(TIME_LEFT / 60);
    const s = TIME_LEFT % 60;
    document.getElementById('time').innerText =
      `${m}:${s.toString().padStart(2, '0')}`;

    if (TIME_LEFT <= 0) submitTest();
  }, 1000);
}

function submitTest() {
  clearInterval(TIMER);

  let score = 0;
  QUESTIONS.forEach(q => {
    if (ANSWERS[q.id] === q.answer) score++;
  });

  localStorage.setItem('mockvibe_result', JSON.stringify({
    exam,
    section,
    score,
    total: QUESTIONS.length,
    answers: ANSWERS
  }));

  trackEvent('test_submit', { exam, section, score });
  location.href = 'result.html';
}

window.onload = loadTest;

