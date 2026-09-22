const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

function read(name) {
  return fs.readFileSync(path.join(root, name), 'utf8');
}

describe('Seitenaufbau', () => {
  it('lädt die Auswertung vor dem Quiz-Controller', () => {
    const html = read('index.html');
    const questionsAt = html.indexOf('src="questions.js"');
    const logicAt = html.indexOf('src="quiz-logic.js"');
    const appAt = html.indexOf('src="app.js"');
    assert.ok(questionsAt !== -1 && logicAt !== -1 && appAt !== -1);
    assert.ok(questionsAt < logicAt && logicAt < appAt);
  });

  it('reicht die Antwort beim Weiter an die gemeinsame Auswertung weiter', () => {
    const app = read('app.js');
    assert.match(app, /QuizLogic\.evaluateQuestion\s*\(/);
    assert.match(app, /function handleNextQuestion/);
  });
});
