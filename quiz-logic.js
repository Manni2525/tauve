// Reine Auswertung ohne DOM, damit Browser und Node dieselben Regeln nutzen.
(function (factory) {
  var api = factory();
  var root = typeof globalThis !== 'undefined' ? globalThis : window;
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.QuizLogic = api;
})(function () {
  function targetRankingOf(q) {
    if (Array.isArray(q.rankingArray) && q.rankingArray.length > 0) {
      return q.rankingArray;
    }
    if (typeof q.ranking === 'string' && q.ranking.trim()) {
      q.rankingArray = q.ranking.split(',').map(function (part) {
        return part.trim();
      });
      return q.rankingArray;
    }
    return [];
  }

  function evaluateQuestion(q, mode, userRating, userRanking) {
    var targetRanking = targetRankingOf(q);
    if (!targetRanking.length || (mode === 'B' && !Array.isArray(userRanking))) {
      return {
        mode: mode,
        score: 0,
        maxScore: mode === 'B' ? 6 : 6,
        percentage: 0,
        pairAnalysis: [],
        optionAnalysis: {},
        targetRanking: targetRanking,
        userRanking: userRanking || [],
        userRating: userRating || {}
      };
    }

    if (mode === 'B') {
      var pairsCorrect = 0;
      var totalPairs = 6;
      var pairAnalysis = [];

      for (var i = 0; i < targetRanking.length; i++) {
        for (var j = i + 1; j < targetRanking.length; j++) {
          var item1 = targetRanking[i];
          var item2 = targetRanking[j];
          var userPos1 = userRanking.indexOf(item1);
          var userPos2 = userRanking.indexOf(item2);
          var isCorrect = userPos1 < userPos2;

          if (isCorrect) pairsCorrect++;
          pairAnalysis.push({
            item1: item1,
            item2: item2,
            targetOrder: item1 + ' vor ' + item2,
            userOrder: isCorrect ? item1 + ' vor ' + item2 : item2 + ' vor ' + item1,
            isCorrect: isCorrect
          });
        }
      }

      return {
        mode: 'B',
        score: pairsCorrect,
        maxScore: totalPairs,
        percentage: Math.round((pairsCorrect / totalPairs) * 100),
        pairAnalysis: pairAnalysis,
        targetRanking: targetRanking,
        userRanking: userRanking
      };
    }

    var targetScores = {};
    targetScores[targetRanking[0]] = 1;
    targetScores[targetRanking[1]] = 3;
    targetScores[targetRanking[2]] = 5;
    targetScores[targetRanking[3]] = 7;

    var totalPoints = 0;
    var maxPoints = 6.0;
    var optionAnalysis = {};
    var letters = ['A', 'B', 'C', 'D'];

    letters.forEach(function (letter) {
      var uVal = userRating[letter] !== null ? userRating[letter] : 4;
      var tVal = targetScores[letter];
      var diff = Math.abs(uVal - tVal);
      var itemScore = Math.max(0, 1.5 - (diff * 0.25));
      totalPoints += itemScore;

      optionAnalysis[letter] = {
        userVal: uVal,
        targetVal: tVal,
        diff: diff,
        itemScore: itemScore
      };
    });

    return {
      mode: 'A',
      score: parseFloat(totalPoints.toFixed(2)),
      maxScore: maxPoints,
      percentage: Math.round((totalPoints / maxPoints) * 100),
      optionAnalysis: optionAnalysis,
      targetRanking: targetRanking,
      userRating: userRating
    };
  }

  return { evaluateQuestion: evaluateQuestion };
});
