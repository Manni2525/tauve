const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { QUIZ_QUESTIONS } = require('../questions.js');
const { evaluateQuestion } = require('../quiz-logic.js');

const LETTERS = ['A', 'B', 'C', 'D'];

function ratingFromTarget(rankingArray) {
  const scores = {};
  scores[rankingArray[0]] = 1;
  scores[rankingArray[1]] = 3;
  scores[rankingArray[2]] = 5;
  scores[rankingArray[3]] = 7;
  return {
    A: scores.A,
    B: scores.B,
    C: scores.C,
    D: scores.D
  };
}

describe('Auswertung', () => {
  const sample = { rankingArray: ['C', 'D', 'A', 'B'] };

  it('vergibt im Modus B volle Punktzahl bei identischer Reihenfolge', () => {
    const result = evaluateQuestion(sample, 'B', null, ['C', 'D', 'A', 'B']);
    assert.equal(result.score, 6);
    assert.equal(result.maxScore, 6);
    assert.equal(result.percentage, 100);
    assert.equal(result.pairAnalysis.length, 6);
    assert.ok(result.pairAnalysis.every(pair => pair.isCorrect));
  });

  it('vergibt im Modus B null Punkte bei umgekehrter Reihenfolge', () => {
    const result = evaluateQuestion(sample, 'B', null, ['B', 'A', 'D', 'C']);
    assert.equal(result.score, 0);
    assert.equal(result.percentage, 0);
  });

  it('zählt im Modus B nur das vertauschte Paar als falsch', () => {
    const result = evaluateQuestion(sample, 'B', null, ['D', 'C', 'A', 'B']);
    assert.equal(result.score, 5);
    assert.equal(result.percentage, 83);
    const swapped = result.pairAnalysis.find(pair => pair.item1 === 'C' && pair.item2 === 'D');
    assert.equal(swapped.isCorrect, false);
  });

  it('vergibt im Modus A volle Punktzahl bei den Sollwerten 1, 3, 5 und 7', () => {
    const result = evaluateQuestion(sample, 'A', { C: 1, D: 3, A: 5, B: 7 }, null);
    assert.equal(result.score, 6);
    assert.equal(result.maxScore, 6);
    assert.equal(result.percentage, 100);
  });

  it('setzt fehlende Ratings im Modus A auf den Neutralwert 4', () => {
    const result = evaluateQuestion(sample, 'A', { A: null, B: null, C: null, D: null }, null);
    assert.equal(result.optionAnalysis.C.userVal, 4);
    assert.equal(result.optionAnalysis.C.itemScore, 0.75);
    assert.equal(result.optionAnalysis.D.itemScore, 1.25);
    assert.equal(result.score, 4);
    assert.equal(result.percentage, 67);
  });

  it('leitet eine fehlende rankingArray aus dem Ranking-Text ab', () => {
    const q = { ranking: 'B, C, A, D' };
    const result = evaluateQuestion(q, 'B', null, ['B', 'C', 'A', 'D']);
    assert.deepEqual(q.rankingArray, ['B', 'C', 'A', 'D']);
    assert.equal(result.percentage, 100);
  });

  it('wertet jede Katalogfrage in beiden Modi aus, ohne beim Weiter abzubrechen', () => {
    for (const q of QUIZ_QUESTIONS) {
      const rankingResult = evaluateQuestion(q, 'B', null, [...q.rankingArray]);
      assert.equal(rankingResult.percentage, 100, `Frage ${q.id} Modus B`);
      assert.equal(rankingResult.score, 6);

      const ratingResult = evaluateQuestion(q, 'A', ratingFromTarget(q.rankingArray), null);
      assert.equal(ratingResult.percentage, 100, `Frage ${q.id} Modus A`);
      assert.ok(ratingResult.percentage >= 0 && ratingResult.percentage <= 100);

      const partial = evaluateQuestion(q, 'B', null, LETTERS);
      assert.equal(partial.maxScore, 6);
      assert.ok(partial.score >= 0 && partial.score <= 6);
    }
  });
});
