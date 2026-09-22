const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { QUIZ_QUESTIONS } = require('../questions.js');

const LETTERS = ['A', 'B', 'C', 'D'];

describe('Fragenkatalog', () => {
  it('enthält 40 Szenarien', () => {
    assert.equal(QUIZ_QUESTIONS.length, 40);
  });

  it('hat eindeutige, fortlaufende IDs', () => {
    const ids = QUIZ_QUESTIONS.map(q => q.id);
    assert.deepEqual(ids, Array.from({ length: 40 }, (_, i) => i + 1));
  });

  it('liefert für jede Frage Szenario, Kompetenzen und vier Optionen', () => {
    for (const q of QUIZ_QUESTIONS) {
      assert.equal(typeof q.szenario, 'string');
      assert.ok(q.szenario.trim().length > 0, `Frage ${q.id} ohne Szenario`);
      assert.ok(Array.isArray(q.kompetenzen) && q.kompetenzen.length > 0, `Frage ${q.id} ohne Kompetenzen`);
      for (const letter of LETTERS) {
        assert.equal(typeof q.optionen[letter], 'string', `Frage ${q.id} Option ${letter}`);
        assert.ok(q.optionen[letter].trim().length > 0, `Frage ${q.id} Option ${letter} ist leer`);
      }
    }
  });

  it('parst die Musterlösung in rankingArray, damit Weiter auswerten kann', () => {
    for (const q of QUIZ_QUESTIONS) {
      const parsed = q.ranking.split(',').map(s => s.trim());
      assert.deepEqual(q.rankingArray, parsed, `Frage ${q.id}: rankingArray fehlt oder weicht ab`);
      assert.equal(q.rankingArray.length, 4, `Frage ${q.id}`);
      assert.deepEqual([...q.rankingArray].sort(), [...LETTERS], `Frage ${q.id} ist keine Permutation von A–D`);
    }
  });
});
