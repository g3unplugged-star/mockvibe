// result-engine.js

const result = JSON.parse(localStorage.getItem('mockvibe_result'));
if (!result) location.href = 'index.html';

const { exam, section, score, total, answers } = result;

document.getElementById('score').innerText = `${score} / ${total}`;
document.getElementById('examInfo').innerText =
  `${exam.toUpperCase()} – ${section.toUpperCase()}`;

const accuracy = Math.round((score / total) * 100);
document.getElementById('accuracy').innerText = accuracy + '%';

fetch(`data/questions/${exam}.json`)
  .then(r => r.json())
  .then(data => {
    const qs = data.questions.filter(q => q.section === section).slice(0, total);
    const box = document.getElementById('solutions');

    qs.forEach((q, i) => {
      const div = document.createElement('div');
      const user = answers[q.id];
      div.innerHTML = `
        <p><strong>Q${i + 1}. ${q.question}</strong></p>
        <p>Your answer: <b>${user != null ? q.options[user] : 'Not Attempted'}</b></p>
        <p>Correct answer: <b>${q.options[q.answer]}</b></p>
        <p><em>${q.solution}</em></p>
        <hr>
      `;
      box.appendChild(div);
    });
  });

trackEvent('view_result', { exam, section, score });

