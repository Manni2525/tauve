// app.js - Controller für den TAUVE Übungstest

const TIME_LIMIT_SECONDS = 180; // 3 Minuten pro Frage
const STORAGE_KEY = 'tauve_uebungstest_state_v2';

// Sichere Speicher-Hilfsfunktionen für restriktive Umgebungen (z. B. Browser in the Box)
const safeStorage = {
  get: function(key) {
    try {
      return (typeof window !== 'undefined' && window.localStorage) ? window.localStorage.getItem(key) : null;
    } catch (e) {
      console.warn("Speicherzugriff eingeschränkt (BitBox/Sandbox-Modus):", e);
      return null;
    }
  },
  set: function(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem(key, val);
    } catch (e) {
      // Still ignorieren, falls im Sandbox-Modus gesperrt
    }
  },
  remove: function(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) window.localStorage.removeItem(key);
    } catch (e) {
      // Still ignorieren
    }
  }
};

// State
let state = {
  currentQuestionIndex: 0,
  activeMode: 'B',           // 'A' (Rating 1-7), 'B' (Ranking 1-4), 'MIXED'
  selectedModeForStart: 'B', // default selected mode on start screen
  timeRemaining: TIME_LIMIT_SECONDS,
  timerInterval: null,
  answers: [],               // Stores answers for each question
  isCompleted: false
};

// Current question temporary inputs
let currentRating = { A: null, B: null, C: null, D: null };
let currentRankingOrder = ['A', 'B', 'C', 'D'];

// DOM Elements
const screenWelcome = document.getElementById('screen-welcome');
const screenQuiz = document.getElementById('screen-quiz');
const screenResults = document.getElementById('screen-results');

const timerCountdownEl = document.getElementById('timer-countdown');
const timeScaleBarEl = document.getElementById('time-scale-bar');
const questionCounterEl = document.getElementById('question-counter');
const competenceTagsEl = document.getElementById('competence-tags');
const scenarioTextEl = document.getElementById('scenario-text');
const modeInstructionTextEl = document.getElementById('mode-instruction-text');

const containerRatingMode = document.getElementById('container-rating-mode');
const containerRankingMode = document.getElementById('container-ranking-mode');
const ratingOptionsListEl = document.getElementById('rating-options-list');
const rankingListEl = document.getElementById('ranking-list');

const btnNextQuestion = document.getElementById('btn-next-question');
const progressPercentHeader = document.getElementById('quiz-header-progress');

const checkboxConsent = document.getElementById('checkbox-disclaimer-consent');
const btnStartQuiz = document.getElementById('btn-start-quiz');

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  setupStartScreen();
  setupEventListeners();
  checkSavedProgress();
});

// Setup Start Screen Mode Selection Cards & Disclaimer Consent
function setupStartScreen() {
  const modeCards = document.querySelectorAll('.mode-option');
  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      modeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.selectedModeForStart = card.dataset.mode;
    });
  });

  // Disclaimer Checkbox Toggle
  if (checkboxConsent && btnStartQuiz) {
    checkboxConsent.addEventListener('change', () => {
      btnStartQuiz.disabled = !checkboxConsent.checked;
    });
  }

  btnStartQuiz.addEventListener('click', () => {
    if (!checkboxConsent.checked) return;
    startQuiz(state.selectedModeForStart);
  });
}

// Check if there is existing saved progress
function checkSavedProgress() {
  const saved = safeStorage.get(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.answers && parsed.answers.length > 0 && !parsed.isCompleted) {
        showResumeBanner(parsed);
      }
    } catch (e) {
      console.error("Konnte gespeicherten Stand nicht laden:", e);
    }
  }
}

function showResumeBanner(savedState) {
  const banner = document.getElementById('resume-banner');
  if (banner) {
    banner.style.display = 'block';
    const resumeBtn = document.getElementById('btn-resume-quiz');
    const dismissBtn = document.getElementById('btn-dismiss-resume');

    resumeBtn.onclick = () => {
      state = savedState;
      banner.style.display = 'none';
      showScreen('quiz');
      loadQuestion(state.currentQuestionIndex);
    };

    dismissBtn.onclick = () => {
      safeStorage.remove(STORAGE_KEY);
      banner.style.display = 'none';
    };
  }
}

function setupEventListeners() {
  btnNextQuestion.type = 'button';
  btnNextQuestion.addEventListener('click', (event) => {
    event.preventDefault();
    handleNextQuestion(false);
  });

  document.getElementById('btn-restart-quiz').addEventListener('click', () => {
    if (confirm("Möchten Sie den Test wirklich neu starten? Ihr bisheriger Durchlauf wird zurückgesetzt.")) {
      resetQuiz();
    }
  });

  document.getElementById('btn-print-results').addEventListener('click', () => {
    window.print();
  });
}

function showScreen(screenName) {
  screenWelcome.classList.remove('active');
  screenQuiz.classList.remove('active');
  screenResults.classList.remove('active');

  if (screenName === 'welcome') screenWelcome.classList.add('active');
  if (screenName === 'quiz') screenQuiz.classList.add('active');
  if (screenName === 'results') screenResults.classList.add('active');
}

// Start Quiz with chosen mode
function startQuiz(mode) {
  state.activeMode = mode;
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.isCompleted = false;

  showScreen('quiz');
  loadQuestion(0);
}

// Reset Quiz
function resetQuiz() {
  clearInterval(state.timerInterval);
  safeStorage.remove(STORAGE_KEY);
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.isCompleted = false;

  if (checkboxConsent) {
    checkboxConsent.checked = false;
    btnStartQuiz.disabled = true;
  }

  showScreen('welcome');
  const banner = document.getElementById('resume-banner');
  if (banner) banner.style.display = 'none';
}

// Save to LocalStorage
function saveProgress() {
  safeStorage.set(STORAGE_KEY, JSON.stringify(state));
}

// Load Question by Index
function loadQuestion(index) {
  const q = QUIZ_QUESTIONS[index];
  if (!q) return;

  // Reset Timer
  startTimer();

  // Determine current mode for this question
  let currentMode = state.activeMode;
  if (state.activeMode === 'MIXED') {
    currentMode = (index % 2 === 0) ? 'B' : 'A';
  }

  // Header meta
  questionCounterEl.textContent = `Frage ${q.id} von ${QUIZ_QUESTIONS.length}`;
  progressPercentHeader.textContent = `${Math.round((index / QUIZ_QUESTIONS.length) * 100)}% abgeschlossen`;

  competenceTagsEl.innerHTML = '';
  q.kompetenzen.forEach(comp => {
    const span = document.createElement('span');
    span.className = 'tag-badge';
    span.textContent = comp;
    competenceTagsEl.appendChild(span);
  });

  scenarioTextEl.textContent = q.szenario;

  // Render question by mode
  if (currentMode === 'A') {
    renderRatingMode(q);
  } else {
    renderRankingMode(q);
  }

  // Update Next Button State
  updateNextButtonState(currentMode);
  saveProgress();
  revealCurrentQuestion();
}

function revealCurrentQuestion() {
  const screen = document.getElementById('screen-quiz');
  if (screen) screen.style.overflowAnchor = 'none';
  window.scrollTo(0, 0);
  if (questionCounterEl) questionCounterEl.scrollIntoView(true);
}

// ---------------------------------------------------------------------------
// MODE A: Ratingskala (1 bis 7)
// ---------------------------------------------------------------------------
function renderRatingMode(q) {
  containerRatingMode.style.display = 'block';
  containerRankingMode.style.display = 'none';

  modeInstructionTextEl.innerHTML = `<strong>Modus A (Ratingskala):</strong> Bewerten Sie jede der 4 Handlungsoptionen auf der Skala von <strong>1</strong> (<em>"würde mich ganz bestimmt so verhalten"</em>) bis <strong>7</strong> (<em>"würde mich ganz bestimmt nicht so verhalten"</em>).`;

  ratingOptionsListEl.innerHTML = '';
  currentRating = { A: null, B: null, C: null, D: null };

  const optionLetters = ['A', 'B', 'C', 'D'];

  optionLetters.forEach(letter => {
    const text = q.optionen[letter];
    const itemCard = document.createElement('div');
    itemCard.className = 'rating-option-item';
    itemCard.id = `rating-item-${letter}`;

    itemCard.innerHTML = `
      <div class="option-text-container">
        <div class="option-letter-badge">${letter}</div>
        <div class="option-desc">${escapeHtml(text)}</div>
      </div>
      <div class="likert-scale-wrapper">
        <div class="scale-legend">
          <span>1 = Ganz bestimmt so</span>
          <span>4 = Neutral</span>
          <span>7 = Ganz bestimmt nicht so</span>
        </div>
        <div class="scale-buttons-row">
          ${[1, 2, 3, 4, 5, 6, 7].map(val => `
            <button type="button" class="scale-btn" data-letter="${letter}" data-value="${val}">
              ${val}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    ratingOptionsListEl.appendChild(itemCard);
  });

  // Attach button clicks
  ratingOptionsListEl.querySelectorAll('.scale-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const letter = btn.dataset.letter;
      const value = parseInt(btn.dataset.value, 10);

      currentRating[letter] = value;

      const row = btn.parentElement;
      row.querySelectorAll('.scale-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const card = document.getElementById(`rating-item-${letter}`);
      if (card) card.classList.add('completed');

      updateNextButtonState('A');
    });
  });
}

// ---------------------------------------------------------------------------
// MODE B: Rangfolge (1 bis 4 sortieren)
// ---------------------------------------------------------------------------
function renderRankingMode(q) {
  containerRatingMode.style.display = 'none';
  containerRankingMode.style.display = 'block';

  modeInstructionTextEl.innerHTML = `<strong>Modus B (Rangfolge):</strong> Bringen Sie die 4 Alternativen in eine Rangfolge von <strong>Rang 1 (Beste Option)</strong> bis <strong>Rang 4 (Schlechteste Option)</strong>.`;

  currentRankingOrder = ['A', 'B', 'C', 'D'];
  renderRankingList(q);
}

function renderRankingList(q) {
  rankingListEl.innerHTML = '';

  currentRankingOrder.forEach((letter, index) => {
    const text = q.optionen[letter];
    const li = document.createElement('div');
    li.className = 'ranking-item';
    li.draggable = true;
    li.dataset.index = index;
    li.dataset.letter = letter;

    li.innerHTML = `
      <div class="drag-handle" title="Ziehen zum Verschieben">:::</div>
      <div class="rank-badge-slot">
        <span>${index + 1}.</span>
      </div>
      <div class="ranking-content">
        <span class="ranking-letter">Option ${letter}</span>
        <span class="ranking-text">${escapeHtml(text)}</span>
      </div>
      <div class="ranking-actions">
        <button type="button" class="btn-move btn-move-up" title="Nach oben" ${index === 0 ? 'disabled' : ''}>▲</button>
        <button type="button" class="btn-move btn-move-down" title="Nach unten" ${index === 3 ? 'disabled' : ''}>▼</button>
      </div>
    `;

    // Move Up/Down buttons
    const btnUp = li.querySelector('.btn-move-up');
    const btnDown = li.querySelector('.btn-move-down');

    btnUp.addEventListener('click', (e) => {
      e.stopPropagation();
      moveRankingItem(index, index - 1);
    });

    btnDown.addEventListener('click', (e) => {
      e.stopPropagation();
      moveRankingItem(index, index + 1);
    });

    setupDragAndDrop(li);
    rankingListEl.appendChild(li);
  });
}

function moveRankingItem(fromIndex, toIndex) {
  if (toIndex < 0 || toIndex >= currentRankingOrder.length) return;
  const item = currentRankingOrder.splice(fromIndex, 1)[0];
  currentRankingOrder.splice(toIndex, 0, item);
  const q = QUIZ_QUESTIONS[state.currentQuestionIndex];
  renderRankingList(q);
}

let draggedItem = null;

function setupDragAndDrop(el) {
  el.addEventListener('dragstart', (e) => {
    draggedItem = el;
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });

  el.addEventListener('dragend', () => {
    el.classList.remove('dragging');
    draggedItem = null;
    document.querySelectorAll('.ranking-item').forEach(i => i.classList.remove('drag-over'));
  });

  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    el.classList.add('drag-over');
  });

  el.addEventListener('dragleave', () => {
    el.classList.remove('drag-over');
  });

  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    if (!draggedItem || draggedItem === el) return;

    const fromIndex = parseInt(draggedItem.dataset.index, 10);
    const toIndex = parseInt(el.dataset.index, 10);

    moveRankingItem(fromIndex, toIndex);
  });
}

// ---------------------------------------------------------------------------
// Validation & Next Question Handling
// ---------------------------------------------------------------------------
function updateNextButtonState(mode) {
  if (mode === 'A') {
    const allRated = ['A', 'B', 'C', 'D'].every(k => currentRating[k] !== null);
    btnNextQuestion.disabled = false;
    if (!allRated) {
      btnNextQuestion.textContent = `Antwort unvollständig (Weiter)`;
    } else {
      btnNextQuestion.textContent = `Antwort einreichen & Weiter`;
    }
  } else {
    btnNextQuestion.disabled = false;
    btnNextQuestion.textContent = `Reihenfolge bestätigen & Weiter`;
  }
}

function handleNextQuestion(isTimeOut = false) {
  const q = QUIZ_QUESTIONS[state.currentQuestionIndex];
  let currentMode = state.activeMode;
  if (state.activeMode === 'MIXED') {
    currentMode = (state.currentQuestionIndex % 2 === 0) ? 'B' : 'A';
  }

  // If in Mode A and not all items are rated, warn user unless time ran out
  if (!isTimeOut && currentMode === 'A') {
    const unrated = ['A', 'B', 'C', 'D'].filter(k => currentRating[k] === null);
    if (unrated.length > 0) {
      if (!confirm(`Sie haben Option ${unrated.join(', ')} noch nicht bewertet. Möchten Sie trotzdem zur nächsten Frage fortfahren?`)) {
        return;
      }
    }
  }

  // Calculate score for this question. A scoring error must not trap the user on this question.
  let evaluation;
  try {
    evaluation = evaluateQuestion(q, currentMode, currentRating, currentRankingOrder);
  } catch (err) {
    console.error('Auswertung fehlgeschlagen, Wechsel zur nächsten Frage:', err);
    evaluation = {
      mode: currentMode,
      score: 0,
      maxScore: 6,
      percentage: 0,
      error: String(err && err.message ? err.message : err)
    };
  }

  // Store answer record
  state.answers[state.currentQuestionIndex] = {
    questionId: q.id,
    mode: currentMode,
    userRating: { ...currentRating },
    userRanking: [...currentRankingOrder],
    timeSpent: TIME_LIMIT_SECONDS - state.timeRemaining,
    timeOut: isTimeOut,
    score: evaluation.score,
    maxScore: evaluation.maxScore,
    percentage: evaluation.percentage,
    details: evaluation
  };

  saveProgress();

  if (state.currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
    state.currentQuestionIndex++;
    loadQuestion(state.currentQuestionIndex);
  } else {
    finishQuiz();
  }
}

// ---------------------------------------------------------------------------
// Scoring Algorithms
// ---------------------------------------------------------------------------
function evaluateQuestion(q, mode, userRating, userRanking) {
  return QuizLogic.evaluateQuestion(q, mode, userRating, userRanking);
}

// ---------------------------------------------------------------------------
// Timer Implementation (3 Minutes / 180s)
// ---------------------------------------------------------------------------
function startTimer() {
  clearInterval(state.timerInterval);
  state.timeRemaining = TIME_LIMIT_SECONDS;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerUI();

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      handleNextQuestion(true);
    }
  }, 1000);
}

function updateTimerUI() {
  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  timerCountdownEl.textContent = timeFormatted;

  const pct = (state.timeRemaining / TIME_LIMIT_SECONDS) * 100;
  timeScaleBarEl.style.width = `${pct}%`;

  timerCountdownEl.classList.remove('warning', 'danger');
  timeScaleBarEl.classList.remove('warning', 'danger');

  if (state.timeRemaining <= 30) {
    timerCountdownEl.classList.add('danger');
    timeScaleBarEl.classList.add('danger');
  } else if (state.timeRemaining <= 60) {
    timerCountdownEl.classList.add('warning');
    timeScaleBarEl.classList.add('warning');
  }
}

// ---------------------------------------------------------------------------
// Results & Evaluation Screen
// ---------------------------------------------------------------------------
function finishQuiz() {
  clearInterval(state.timerInterval);
  state.isCompleted = true;
  saveProgress();
  showScreen('results');
  renderResults();
}

function renderResults() {
  let totalScore = 0;
  let totalMaxScore = 0;
  const compScores = {};

  state.answers.forEach((ans, idx) => {
    const q = QUIZ_QUESTIONS[idx];
    totalScore += ans.score;
    totalMaxScore += ans.maxScore;

    q.kompetenzen.forEach(comp => {
      if (!compScores[comp]) {
        compScores[comp] = { score: 0, maxScore: 0, count: 0 };
      }
      compScores[comp].score += ans.score;
      compScores[comp].maxScore += ans.maxScore;
      compScores[comp].count++;
    });
  });

  const totalPercentage = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

  // UI
  document.getElementById('result-total-percent').textContent = `${totalPercentage}%`;
  document.getElementById('result-points-text').textContent = `${totalScore.toFixed(1)} / ${totalMaxScore} Punkte`;

  const verdictEl = document.getElementById('result-verdict-title');
  const verdictDescEl = document.getElementById('result-verdict-desc');

  if (totalPercentage >= 85) {
    verdictEl.textContent = "Überdurchschnittliches Ergebnis";
    verdictDescEl.textContent = "Ihre Entscheidungen und Priorisierungen weisen eine sehr hohe Übereinstimmung mit den hinterlegten Referenzentscheidungen auf.";
  } else if (totalPercentage >= 70) {
    verdictEl.textContent = "Solides / Anforderungsgerechtes Ergebnis";
    verdictDescEl.textContent = "Die meisten Situationen wurden den polizeilichen Handlungsleitlinien entsprechend beurteilt.";
  } else if (totalPercentage >= 55) {
    verdictEl.textContent = "Mittleres Ergebnis (Entwicklungspotenzial)";
    verdictDescEl.textContent = "In mehreren taktischen oder führungsbezogenen Lagen wichen Ihre Einschätzungen von der Referenz-Rangfolge ab.";
  } else {
    verdictEl.textContent = "Deutlicher Nachbereitungsbedarf";
    verdictDescEl.textContent = "Nutzen Sie die detaillierte Auswertung unten, um die Referenz-Rangfolgen und Handlungsalternativen zu rekapitulieren.";
  }

  renderCompetencies(compScores);
  renderReviewList();
}

function renderCompetencies(compScores) {
  const compGrid = document.getElementById('competence-grid');
  compGrid.innerHTML = '';

  const sortedComps = Object.keys(compScores).sort();

  sortedComps.forEach(comp => {
    const data = compScores[comp];
    const pct = data.maxScore > 0 ? Math.round((data.score / data.maxScore) * 100) : 0;

    let barColor = '#3b82f6';
    if (pct >= 80) barColor = '#10b981';
    else if (pct < 60) barColor = '#f59e0b';

    const card = document.createElement('div');
    card.className = 'competence-item';
    card.innerHTML = `
      <div class="comp-header">
        <span>${comp}</span>
        <span style="color: ${barColor}">${pct}%</span>
      </div>
      <div class="comp-bar-bg">
        <div class="comp-bar-fill" style="width: ${pct}%; background-color: ${barColor};"></div>
      </div>
      <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 0.35rem;">
        ${data.score.toFixed(1)} / ${data.maxScore} Pkt. (${data.count} Fragen)
      </div>
    `;
    compGrid.appendChild(card);
  });
}

function renderReviewList() {
  const reviewContainer = document.getElementById('review-list');
  reviewContainer.innerHTML = '';

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const ans = state.answers[idx];
    if (!ans) return;

    const item = document.createElement('div');
    item.className = 'review-item';

    let tagClass = 'high';
    if (ans.percentage < 50) tagClass = 'low';
    else if (ans.percentage < 80) tagClass = 'med';

    const targetRankingFormatted = q.ranking;
    let userFormatted = '';

    if (ans.mode === 'B') {
      userFormatted = ans.userRanking.join(', ');
    } else {
      userFormatted = ['A', 'B', 'C', 'D'].map(k => `${k}: ${ans.userRating[k] || '-'}`).join(' | ');
    }

    item.innerHTML = `
      <div class="review-header" id="rev-head-${idx}">
        <div class="review-q-title">
          <span class="question-pill">#${q.id}</span>
          <span>${q.szenario.substring(0, 80)}...</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="review-score-tag ${tagClass}">${ans.percentage}% (${ans.score}/${ans.maxScore} Pkt)</span>
          <span style="font-size: 0.75rem; color: var(--text-dim);">&#9662;</span>
        </div>
      </div>
      <div class="review-body" id="rev-body-${idx}">
        <div class="review-scenario">
          <strong>Szenario:</strong> ${escapeHtml(q.szenario)}
        </div>
        <div style="margin-bottom: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
          <strong>Kompetenzen:</strong> ${q.kompetenzen.join(', ')}
        </div>
        
        <div class="review-comparison-grid">
          <div class="review-column">
            <h4>Ihre Eingabe (${ans.mode === 'B' ? 'Reihenfolge' : 'Ratingskala'})</h4>
            <div style="margin-bottom: 0.5rem; font-weight: 700; color: #93c5fd;">
              ${userFormatted}
            </div>
            ${renderOptionDetails(q, ans)}
          </div>
          
          <div class="review-column">
            <h4>Hinterlegte Referenzlösung</h4>
            <div style="margin-bottom: 0.5rem; font-weight: 700; color: #34d399;">
              ${targetRankingFormatted}
            </div>
            <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.45;">
              ${q.rankingArray.map((letter, rank) => `
                <div class="comparison-list-item">
                  <span style="font-weight:700; color:#34d399;">Rang ${rank + 1} (${letter}):</span>
                  <span>${escapeHtml(q.optionen[letter])}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const header = item.querySelector(`#rev-head-${idx}`);
    const body = item.querySelector(`#rev-body-${idx}`);
    header.addEventListener('click', () => {
      const isOpen = body.classList.contains('open');
      if (isOpen) {
        body.classList.remove('open');
        header.classList.remove('open');
      } else {
        body.classList.add('open');
        header.classList.add('open');
      }
    });

    reviewContainer.appendChild(item);
  });
}

function renderOptionDetails(q, ans) {
  if (ans.mode === 'B') {
    return ans.userRanking.map((letter, rank) => `
      <div class="comparison-list-item">
        <span style="font-weight:700; color:#93c5fd;">Rang ${rank + 1} (${letter}):</span>
        <span>${escapeHtml(q.optionen[letter])}</span>
      </div>
    `).join('');
  } else {
    return ['A', 'B', 'C', 'D'].map(letter => {
      const val = ans.userRating[letter] || 'Keine Angabe';
      return `
        <div class="comparison-list-item">
          <span style="font-weight:700; color:#93c5fd;">Option ${letter} (Wert: ${val}):</span>
          <span>${escapeHtml(q.optionen[letter])}</span>
        </div>
      `;
    }).join('');
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
