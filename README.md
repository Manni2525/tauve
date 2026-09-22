# TAUVE Übungstest (3. Qualifikationsebene)

Eine sachliche Trainings- und Übungssimulation für 40 polizeiliche Situationsszenarien zur Vorbereitung auf den situativen Test der 3. Qualifikationsebene (TAUVE).

## Direkte Online-Nutzung (auch für Browser in the Box)

Das Programm kann ohne Download direkt im Webbrowser geöffnet werden:
**[https://manni2525.github.io/tauve/](https://manni2525.github.io/tauve/)**

*Ideal für Kollegen, die **Browser in the Box (BitBox)** nutzen – kein Entpacken, kein Dateitransfer nötig!*

---

## Offline-Nutzung / Datei-Weitergabe

Für die Weitergabe per E-Mail oder USB-Stick gibt es zwei Möglichkeiten:

1. **Einzelseite (Empfohlen): `TAUVE_Uebungstest_Einzelseite.html`**
   - Besteht aus einer einzigen Datei, in der alle Styles, Fragen und Skripte fest integriert sind.
   - Muss **nicht** entpackt werden und funktioniert auch dann, wenn Browser in the Box lokale Dateizugriffe blockiert.
   - Einfach diese eine `.html`-Datei an Kollegen verschicken.

2. **Modulare Version**:
   - Ordner mit `index.html`, `questions.js`, `app.js`, `style.css`.
   - Start per Doppelklick auf `start_quiz.bat` oder `index.html`.
   - *Wichtig bei ZIP-Versand:* Vor dem Öffnen muss die ZIP-Datei vollständig entpackt werden ("Alle extrahieren"), da Windows beim direkten Öffnen aus dem ZIP-Ordner die Skriptdateien nicht lädt.

---

## Enthaltene Funktionen

1. **Haftungsausschluss & Pflicht-Zustimmung**:
   - Bestätigung vor Beginn des Tests.
   - Privates Übungstool ohne offizielle Verbindung zu Prüfungsbehörden.

2. **40 Szenarien & 10 Kompetenzfelder**:
   - Originalgetreue Szenarien mit 4 Handlungsalternativen (A, B, C, D).
   - Abdeckung von Konfliktmanagement, Führungskompetenz, Belastbarkeit u. v. m.

3. **Zwei Bearbeitungsmodi**:
   - **Modus B (Rangfolge)**: Alternativen 1 bis 4 sortieren via Drag & Drop oder Pfeiltasten.
   - **Modus A (Ratingskala 1–7)**: Einzelbewertung jeder Alternative.
   - **Kombinierter Modus**: Abwechselnder Durchlauf beider Formate.

4. **Zeitbegrenzung & Zeitskala**:
   - 3:00 Minuten (180 Sekunden) pro Frage mit Countdown und Fortschrittsbalken.
   - Vorzeitiges Weitergehen jederzeit möglich.

5. **Auswertung & Review**:
   - Gesamtergebnis, Kompetenzprofile und detaillierter Abgleich mit der hinterlegten Musterlösung.

---

## Tests

```bash
npm test
```

Die Suite prüft den Fragenkatalog, die Rang- und Rating-Auswertung und dass der Weiter-Pfad die gemeinsame Auswertung verwendet.

---
*© Nowadnick*
