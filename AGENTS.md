# Anweisungen für Agents

Dieses Repository ist der TAUVE-Übungstest: statische Seiten (`index.html`, `questions.js`, `quiz-logic.js`, `app.js`). Die Auswertung steckt in `quiz-logic.js` und wird mit Node getestet.

## Tests vor Commit und Push

- Vor jedem Commit und vor jedem Push `npm test` im Repository-Root ausführen.
- Nur committen und pushen, wenn die Tests erfolgreich durchlaufen.
- Schlagen Tests fehl, den Fehler zuerst beheben und `npm test` erneut ausführen.
- Tests, Commit oder Push auslassen nur, wenn der User das ausdrücklich verlangt.
- Geänderte Auswertungs- oder Fragenlogik mit einem Test absichern, der das Verhalten festhält.

```bash
npm test
```
