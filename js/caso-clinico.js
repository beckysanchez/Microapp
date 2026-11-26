let pathogen = null;
let q1Answered = false;
let q2Answered = false;

document.addEventListener('DOMContentLoaded', () => {
  pathogen = getCurrentPathogen();
  initStep1();
});

function initStep1() {
  document.getElementById('vignette-text').textContent = pathogen.vignette;
  document.getElementById('q1-question').textContent = pathogen.q1Question;
  renderOptions(1, null);
}

function renderOptions(step, selectedIdx) {
  const options = step === 1 ? pathogen.q1Options : pathogen.q2Options;
  const correctIdx = step === 1 ? pathogen.q1Correct : pathogen.q2Correct;
  const container = document.getElementById(`q${step}-options`);
  const isAnswered = selectedIdx !== null;

  container.innerHTML = options.map((opt, i) => {
    let cls = '';
    let icon = '';
    if (isAnswered) {
      if (i === correctIdx) { cls = 'correct'; icon = '✓'; }
      else if (i === selectedIdx) { cls = 'wrong'; icon = '✕'; }
    }
    return `
      <button class="option-btn ${cls}" onclick="answerQuestion(${step}, ${i})" ${isAnswered ? 'disabled' : ''}>
        <span>${opt}</span>
        <span>${icon}</span>
      </button>
    `;
  }).join('');
}

function answerQuestion(step, idx) {
  if (step === 1 && !q1Answered) {
    q1Answered = true;
    renderOptions(1, idx);
    const isCorrect = idx === pathogen.q1Correct;
    document.getElementById('q1-feedback-area').innerHTML = `
      <div class="card-feedback ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? pathogen.q1FeedbackCorrect : pathogen.q1FeedbackIncorrect}
      </div>
      <button class="action-btn" onclick="goToStep2()">Continuar al Diagnóstico</button>
    `;
  } else if (step === 2 && !q2Answered) {
    q2Answered = true;
    renderOptions(2, idx);
    const isCorrect = idx === pathogen.q2Correct;
    document.getElementById('q2-feedback-area').innerHTML = `
      <div class="card-feedback ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? pathogen.q2FeedbackCorrect : pathogen.q2FeedbackIncorrect}
      </div>
      <a href="reporte-laboratorio.html" class="action-btn" style="text-decoration:none; text-align:center; display:block;">Ver Reporte de Laboratorio</a>
    `;
  }
}

function goToStep2() {
  document.getElementById('step-1-container').style.display = 'none';
  document.getElementById('step-2-container').style.display = 'flex';
  document.getElementById('caso-header-title').textContent = 'Caso Clínico (Paso 2)';
  
  document.getElementById('reveal-text').textContent = pathogen.reveal;
  document.getElementById('q2-question').textContent = pathogen.q2Question;
  renderOptions(2, null);
}
