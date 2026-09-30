const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { createRandomOrder } = require('../quiz-logic.js');

describe('Zufällige Fragenreihenfolge', () => {
  it('erzeugt eine vollständige Permutation aller Indizes von 0 bis N-1', () => {
    const order = createRandomOrder(40);
    assert.equal(order.length, 40);
    assert.deepEqual([...order].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i));
  });

  it('erzeugt bei wiederholtem Aufruf unterschiedliche Abfolgen', () => {
    const run1 = createRandomOrder(40);
    const run2 = createRandomOrder(40);
    assert.equal(run1.length, 40);
    assert.equal(run2.length, 40);
    assert.notDeepEqual(run1, run2, 'Zwei Durchläufe sollten nicht die identische Reihenfolge haben');
  });

  it('funktioniert deterministisch mit vorgegebenem Pseudozufallsgenerator', () => {
    let seed = 42;
    function pseudoRandom() {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    }
    const order1 = createRandomOrder(10, pseudoRandom);
    seed = 42;
    const order2 = createRandomOrder(10, pseudoRandom);
    assert.deepEqual(order1, order2);
    assert.equal(order1.length, 10);
  });
});
