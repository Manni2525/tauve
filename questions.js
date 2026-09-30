// questions.js - TAUVE Übungstest (3. Qualifikationsebene)
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Als Dienststellenleiter erfahren Sie, dass ein Angehöriger Ihrer Dienststelle bei einer Einsatzfahrt mit Sondersignalen ein kleines Mädchen überfahren hat. Das Mädchen ist sehr schwer verletzt, der Polizeibeamte unverletzt. Die medizinische Versorgung des Kindes ist bereits eingeleitet. Wie verhalten Sie sich?",
    "optionen": {
      "A": "Ich übergebe die Dienstgeschäfte an meinen Stellvertreter und fahre selbst zur Unfallstelle. Dort versuche ich den Beamten von der Öffentlichkeit abzuschirmen und seine Betreuung zu organisieren. Außerdem benachrichtige ich die Eltern des Kindes persönlich. Wenn irgendwie möglich, gewähre ich dem Beamten für die nächsten Tage Dienstbefreiung. Im Anschluss an den Einsatz fahre ich selbst ins Krankenhaus zum verletzten Mädchen.",
      "B": "Ich beauftrage meinen Stellvertreter, die anfallenden Aufgaben zu übernehmen. Dann fahre ich selbst zur Unfallstelle und schirme zunächst den Beamten von der Öffentlichkeit ab. Ich organisiere für ihn eine professionelle Betreuung und gebe ihm möglichst für einige Tage dienstfrei. Außerdem sorge ich dafür, dass die Verständigung der Eltern des Kindes durchgeführt wird. Nach Beendigung des Einsatzes fahre ich wieder zur Dienststelle.",
      "C": "Sobald ich am Unfallort angekommen bin, schirme ich den Beamten von äußeren Einflüssen ab. Ich organisiere eine Betreuung für ihn und versuche ihn für einige Tage vom Dienst zu befreien. Ich sorge außerdem dafür, dass die Eltern des Mädchens informiert werden. Nach dem Einsatz fahre ich zurück zur Dienststelle.",
      "D": "Ich fahre selbst zur Unfallstelle, kümmere mich um den betroffenen Beamten und biete ihm meine Unterstützung an. Ich sorge dafür, dass er von der Öffentlichkeit abgeschirmt ist. Für die nächsten Tage stelle ich ihn vom Außendienst frei. Dann sorge ich dafür, dass die Eltern des schwer verletzten Mädchens informiert werden. Schließlich kehre ich zur Dienststelle zurück."
    },
    "A": "Ich übergebe die Dienstgeschäfte an meinen Stellvertreter und fahre selbst zur Unfallstelle. Dort versuche ich den Beamten von der Öffentlichkeit abzuschirmen und seine Betreuung zu organisieren. Außerdem benachrichtige ich die Eltern des Kindes persönlich. Wenn irgendwie möglich, gewähre ich dem Beamten für die nächsten Tage Dienstbefreiung. Im Anschluss an den Einsatz fahre ich selbst ins Krankenhaus zum verletzten Mädchen.",
    "B": "Ich beauftrage meinen Stellvertreter, die anfallenden Aufgaben zu übernehmen. Dann fahre ich selbst zur Unfallstelle und schirme zunächst den Beamten von der Öffentlichkeit ab. Ich organisiere für ihn eine professionelle Betreuung und gebe ihm möglichst für einige Tage dienstfrei. Außerdem sorge ich dafür, dass die Verständigung der Eltern des Kindes durchgeführt wird. Nach Beendigung des Einsatzes fahre ich wieder zur Dienststelle.",
    "C": "Sobald ich am Unfallort angekommen bin, schirme ich den Beamten von äußeren Einflüssen ab. Ich organisiere eine Betreuung für ihn und versuche ihn für einige Tage vom Dienst zu befreien. Ich sorge außerdem dafür, dass die Eltern des Mädchens informiert werden. Nach dem Einsatz fahre ich zurück zur Dienststelle.",
    "D": "Ich fahre selbst zur Unfallstelle, kümmere mich um den betroffenen Beamten und biete ihm meine Unterstützung an. Ich sorge dafür, dass er von der Öffentlichkeit abgeschirmt ist. Für die nächsten Tage stelle ich ihn vom Außendienst frei. Dann sorge ich dafür, dass die Eltern des schwer verletzten Mädchens informiert werden. Schließlich kehre ich zur Dienststelle zurück.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 2,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "In Ihrer Dienstgruppe gibt es einen besonders ehrgeizigen, selbstständigen Beamten und einen eher trägen, unselbstständigen Beamten. Ein komplexer Schwerpunkteinsatz steht an und Sie müssen die operativen Aufgaben verteilen.",
    "optionen": {
      "A": "Ich wende situatives Führen an: Dem ehrgeizigen Beamten übertrage ich mit Vertrauensvorschuss verantwortungsvolle Aufgaben. Den trägen Beamten steuere ich mit klaren Anweisungen und enger Kontrolle.",
      "B": "Ich teile beiden Beamten exakt die gleichen Aufgaben zu, um niemanden zu bevorzugen und absolute formelle Gleichbehandlung im Team zu gewährleisten.",
      "C": "Ich gebe dem ehrgeizigen Beamten die Hauptarbeit, da ich weiß, dass es dann fehlerfrei funktioniert, und lasse den trägen Kollegen Innendienst machen.",
      "D": "Ich überlasse es den beiden, die Aufgaben unter sich aufzuteilen, um als Vorgesetzter Konflikten aus dem Weg zu gehen."
    },
    "A": "Ich wende situatives Führen an: Dem ehrgeizigen Beamten übertrage ich mit Vertrauensvorschuss verantwortungsvolle Aufgaben. Den trägen Beamten steuere ich mit klaren Anweisungen und enger Kontrolle.",
    "B": "Ich teile beiden Beamten exakt die gleichen Aufgaben zu, um niemanden zu bevorzugen und absolute formelle Gleichbehandlung im Team zu gewährleisten.",
    "C": "Ich gebe dem ehrgeizigen Beamten die Hauptarbeit, da ich weiß, dass es dann fehlerfrei funktioniert, und lasse den trägen Kollegen Innendienst machen.",
    "D": "Ich überlasse es den beiden, die Aufgaben unter sich aufzuteilen, um als Vorgesetzter Konflikten aus dem Weg zu gehen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 3,
    "rolle": "Normaler Beamter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Bei einem Einsatz „Häusliche Gewalt“ sind Sie der ranghöchste Beamte vor Ort. Hinter einer verschlossenen Tür schreit ein weibliches Opfer in vermeintlicher Todesangst. Sie lassen die Tür eintreten. Später erklärt die Frau, der Einsatz sei unnötig gewesen.",
    "optionen": {
      "A": "Ich bedaure die Fehleinschätzung, stehe aber zu meiner in der Akutsituation getroffenen Entscheidung, kann diese nachvollziehbar erläutern und übernehme die volle Verantwortung.",
      "B": "Ich rechtfertige die Maßnahme primär damit, dass die Einsatzzentrale die Lage dramatischer gemeldet hat, weise aber auf die Präventivpflicht hin.",
      "C": "Ich zweifle an meiner Befähigung, entschuldige mich mehrfach unterwürfig bei der Frau und biete an, den Schaden an der Tür privat zu zahlen.",
      "D": "Ich weise die Kollegen an, den Bericht so zu schönen, dass unser Handeln rechtlich absolut zwingend wirkt, auch wenn es übertrieben ist."
    },
    "A": "Ich bedaure die Fehleinschätzung, stehe aber zu meiner in der Akutsituation getroffenen Entscheidung, kann diese nachvollziehbar erläutern und übernehme die volle Verantwortung.",
    "B": "Ich rechtfertige die Maßnahme primär damit, dass die Einsatzzentrale die Lage dramatischer gemeldet hat, weise aber auf die Präventivpflicht hin.",
    "C": "Ich zweifle an meiner Befähigung, entschuldige mich mehrfach unterwürfig bei der Frau und biete an, den Schaden an der Tür privat zu zahlen.",
    "D": "Ich weise die Kollegen an, den Bericht so zu schönen, dass unser Handeln rechtlich absolut zwingend wirkt, auch wenn es übertrieben ist.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 4,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Eine Kollegin äußert im Pausenraum eine meinungsstarke, politisch äußerst fragwürdige Ansicht zu einer Bevölkerungsgruppe, mit der es oft Einsätze gibt. Die anderen Kollegen schweigen betreten.",
    "optionen": {
      "A": "Ich beziehe offen Stellung und stelle meine eigene, rechtsstaatliche Position der Meinung der Kollegin sachlich, aber unmissverständlich entgegen.",
      "B": "Ich weise sie später unter vier Augen darauf hin, dass solche Äußerungen problematisch sind, halte mich aber in der Gruppe zurück, um die Stimmung nicht zu vergiften.",
      "C": "Ich ignoriere die Aussage demonstrativ und verlasse wortlos den Raum, um meine Missbilligung durch Abwesenheit auszudrücken.",
      "D": "Ich lache leise mit, um in der eingeschworenen Dienstgruppe nicht als moralisierender Spielverderber zu gelten."
    },
    "A": "Ich beziehe offen Stellung und stelle meine eigene, rechtsstaatliche Position der Meinung der Kollegin sachlich, aber unmissverständlich entgegen.",
    "B": "Ich weise sie später unter vier Augen darauf hin, dass solche Äußerungen problematisch sind, halte mich aber in der Gruppe zurück, um die Stimmung nicht zu vergiften.",
    "C": "Ich ignoriere die Aussage demonstrativ und verlasse wortlos den Raum, um meine Missbilligung durch Abwesenheit auszudrücken.",
    "D": "Ich lache leise mit, um in der eingeschworenen Dienstgruppe nicht als moralisierender Spielverderber zu gelten.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 5,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Nach einem Umbau Ihrer Dienststelle erhalten Sie den Auftrag, einen Vorschlag auszuarbeiten, wie die neuen Büroräume aufgeteilt werden. Sie müssen sich dabei auch selbst ein Zimmer zuteilen.",
    "optionen": {
      "A": "Ich beziehe alle Betroffenen ein, hole mir Anregungen, stelle meine eigenen Interessen zurück und erarbeite ein für das gesamte Team tragfähiges Ergebnis.",
      "B": "Ich plane sachlich rein nach Dienstgrad und Dienstalter, ohne die Kollegen vorher zu fragen, da Diskussionen die Entscheidungsfindung nur verzögern.",
      "C": "Ich sichere mir das beste Büro als Ausgleich für den Planungsaufwand und verteile den Rest der Zimmer nach logischen Kriterien.",
      "D": "Ich delegiere die Aufgabe an einen jüngeren Kollegen, da mir das Konfliktpotenzial bei der Raumverteilung zu hoch ist."
    },
    "A": "Ich beziehe alle Betroffenen ein, hole mir Anregungen, stelle meine eigenen Interessen zurück und erarbeite ein für das gesamte Team tragfähiges Ergebnis.",
    "B": "Ich plane sachlich rein nach Dienstgrad und Dienstalter, ohne die Kollegen vorher zu fragen, da Diskussionen die Entscheidungsfindung nur verzögern.",
    "C": "Ich sichere mir das beste Büro als Ausgleich für den Planungsaufwand und verteile den Rest der Zimmer nach logischen Kriterien.",
    "D": "Ich delegiere die Aufgabe an einen jüngeren Kollegen, da mir das Konfliktpotenzial bei der Raumverteilung zu hoch ist.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 6,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Ein angehaltener Autofahrer wirft Ihnen bei einer Verkehrskontrolle völlig grundlos Schikane vor und behauptet, Sie sollten lieber echte Verbrecher fangen.",
    "optionen": {
      "A": "Ich kontrolliere meine Emotionen, thematisiere beruhigend seine wahrgenommene Bedürfnislage und erkläre sachlich unsere polizeilichen Absichten.",
      "B": "Ich ignoriere seine Vorwürfe komplett, reagiere nicht auf seine Aussagen und spule mein Standardprogramm kühl und distanziert ab.",
      "C": "Ich erhebe die Stimme, unterbreche ihn scharf und drohe ihm sofort mit einer Anzeige wegen Beleidigung, falls er nicht kooperiert.",
      "D": "Ich breche die Kontrolle augenblicklich ab und lasse ihn weiterfahren, um einer verbalen Eskalation aus dem Weg zu gehen."
    },
    "A": "Ich kontrolliere meine Emotionen, thematisiere beruhigend seine wahrgenommene Bedürfnislage und erkläre sachlich unsere polizeilichen Absichten.",
    "B": "Ich ignoriere seine Vorwürfe komplett, reagiere nicht auf seine Aussagen und spule mein Standardprogramm kühl und distanziert ab.",
    "C": "Ich erhebe die Stimme, unterbreche ihn scharf und drohe ihm sofort mit einer Anzeige wegen Beleidigung, falls er nicht kooperiert.",
    "D": "Ich breche die Kontrolle augenblicklich ab und lasse ihn weiterfahren, um einer verbalen Eskalation aus dem Weg zu gehen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 7,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Sie treffen als Einsatzleiter eine taktische Fehlentscheidung, die den Ablauf verzögert, aber zu keinem Schaden führt.",
    "optionen": {
      "A": "Ich reflektiere den Fehler kritisch, übernehme vor der Mannschaft die Verantwortung und analysiere im Team, was wir daraus lernen können.",
      "B": "Ich hake den Vorfall in der Nachbesprechung schnell ab, da glücklicherweise niemand ernsthaft zu Schaden gekommen ist.",
      "C": "Ich rechtfertige die Fehlentscheidung intensiv mit unklaren Vorabinformationen, um als Führungskraft keinen Gesichtsverlust zu erleiden.",
      "D": "Ich verbiete dem Team, den taktischen Fehler im Nachgang weiter zu thematisieren, und gehe sofort zum Tagesgeschäft über."
    },
    "A": "Ich reflektiere den Fehler kritisch, übernehme vor der Mannschaft die Verantwortung und analysiere im Team, was wir daraus lernen können.",
    "B": "Ich hake den Vorfall in der Nachbesprechung schnell ab, da glücklicherweise niemand ernsthaft zu Schaden gekommen ist.",
    "C": "Ich rechtfertige die Fehlentscheidung intensiv mit unklaren Vorabinformationen, um als Führungskraft keinen Gesichtsverlust zu erleiden.",
    "D": "Ich verbiete dem Team, den taktischen Fehler im Nachgang weiter zu thematisieren, und gehe sofort zum Tagesgeschäft über.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 8,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Es gibt einen schwelenden, lautstarken Konflikt in Ihrer Dienstgruppe bezüglich der Übernahme ungeliebter Vorgänge.",
    "optionen": {
      "A": "Ich suche aktiv das Gespräch, analysiere die Ursachen der Unzufriedenheit und zeige Kompromissbereitschaft für eine faire, gemeinsame Lösung.",
      "B": "Ich warte zunächst ab, ob sich der Konflikt von selbst durch die Gruppendynamik löst, bevor ich als Vorgesetzter formal eingreife.",
      "C": "Ich ordne die Zuteilung per striktem Losverfahren an, um jede weitere Diskussion sofort im Keim zu ersticken.",
      "D": "Ich gebe den Kollegen nach, die am lautesten meckern, um Ruhe in die Dienstgruppe zu bringen."
    },
    "A": "Ich suche aktiv das Gespräch, analysiere die Ursachen der Unzufriedenheit und zeige Kompromissbereitschaft für eine faire, gemeinsame Lösung.",
    "B": "Ich warte zunächst ab, ob sich der Konflikt von selbst durch die Gruppendynamik löst, bevor ich als Vorgesetzter formal eingreife.",
    "C": "Ich ordne die Zuteilung per striktem Losverfahren an, um jede weitere Diskussion sofort im Keim zu ersticken.",
    "D": "Ich gebe den Kollegen nach, die am lautesten meckern, um Ruhe in die Dienstgruppe zu bringen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 9,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Wegen eines extrem hohen Krankenstandes ist die Arbeitsbelastung in Ihrer Dienstgruppe seit Wochen enorm hoch.",
    "optionen": {
      "A": "Ich bleibe ruhig, aktiviere meine Ressourcen, organisiere die Abläufe um und zeige meinem Team, dass ich auch unter Druck handlungsfähig bleibe.",
      "B": "Ich ordne pauschal Überstunden an und erwarte, dass alle ohne Murren mitziehen, da die polizeiliche Lage es erfordert.",
      "C": "Ich pflichte dem Team bei und schimpfe gemeinsam mit ihnen lautstark über das Versagen der Behördenleitung beim Personalmanagement.",
      "D": "Ich melde mich präventiv dauerhaft krank, da ich dem Druck nicht standhalte und einen Burnout befürchte."
    },
    "A": "Ich bleibe ruhig, aktiviere meine Ressourcen, organisiere die Abläufe um und zeige meinem Team, dass ich auch unter Druck handlungsfähig bleibe.",
    "B": "Ich ordne pauschal Überstunden an und erwarte, dass alle ohne Murren mitziehen, da die polizeiliche Lage es erfordert.",
    "C": "Ich pflichte dem Team bei und schimpfe gemeinsam mit ihnen lautstark über das Versagen der Behördenleitung beim Personalmanagement.",
    "D": "Ich melde mich präventiv dauerhaft krank, da ich dem Druck nicht standhalte und einen Burnout befürchte.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 10,
    "rolle": "Normaler Beamter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Sie sollen einen aufgebrachten Bürger zu einem komplexen Nachbarschaftsstreit befragen.",
    "optionen": {
      "A": "Ich drücke mich verständlich aus, passe mein Sprachniveau an, stelle gezielte Fragen und höre aktiv zu, um den Sachverhalt zu strukturieren.",
      "B": "Ich lasse ihn ausreden, verzichte aber auf Rückfragen, um den Vorgang schnellstmöglich in die Akte aufnehmen zu können.",
      "C": "Ich verwende bewusst juristische Fachbegriffe, um meine polizeiliche Autorität zu untermauern und ihn zu beruhigen.",
      "D": "Ich überlasse meinem Partner das Reden, da mir strukturierte Gespräche mit unruhigen Bürgern schwerfallen."
    },
    "A": "Ich drücke mich verständlich aus, passe mein Sprachniveau an, stelle gezielte Fragen und höre aktiv zu, um den Sachverhalt zu strukturieren.",
    "B": "Ich lasse ihn ausreden, verzichte aber auf Rückfragen, um den Vorgang schnellstmöglich in die Akte aufnehmen zu können.",
    "C": "Ich verwende bewusst juristische Fachbegriffe, um meine polizeiliche Autorität zu untermauern und ihn zu beruhigen.",
    "D": "Ich überlasse meinem Partner das Reden, da mir strukturierte Gespräche mit unruhigen Bürgern schwerfallen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 11,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Sie müssen zwei Beamte für eine äußerst unbeliebte Bewachungsaufgabe einteilen. Einen der Beamten mögen Sie privat sehr, den anderen eher nicht.",
    "optionen": {
      "A": "Ich lasse persönliche Sympathien völlig außen vor und entscheide rein objektiv nach Verfügbarkeit und gerechter Aufgabenrotation.",
      "B": "Ich teile beide gemeinsam ein, damit es formell gerecht aussieht, auch wenn es taktisch nicht zwingend notwendig ist.",
      "C": "Ich teile den unbeliebten Kollegen ein und begründe es vage damit, dass der andere letzte Woche schon viel geleistet hat.",
      "D": "Ich übernehme die ungeliebte Aufgabe kurzerhand selbst, um niemandem in der Dienstgruppe auf die Füße zu treten."
    },
    "A": "Ich lasse persönliche Sympathien völlig außen vor und entscheide rein objektiv nach Verfügbarkeit und gerechter Aufgabenrotation.",
    "B": "Ich teile beide gemeinsam ein, damit es formell gerecht aussieht, auch wenn es taktisch nicht zwingend notwendig ist.",
    "C": "Ich teile den unbeliebten Kollegen ein und begründe es vage damit, dass der andere letzte Woche schon viel geleistet hat.",
    "D": "Ich übernehme die ungeliebte Aufgabe kurzerhand selbst, um niemandem in der Dienstgruppe auf die Füße zu treten.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 12,
    "rolle": "Normaler Beamter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Ihr langjähriger Streifenpartner übernimmt bei jeder Personenkontrolle sofort dominant das Wort und lässt Sie wie einen Praktikanten aussehen.",
    "optionen": {
      "A": "Ich spreche das Thema sachlich auf der Wache an, schildere meine Wahrnehmung und vereinbare eine klare Rollenverteilung für künftige Kontrollen.",
      "B": "Ich falle ihm bei der nächsten Kontrolle vor dem Bürger hart ins Wort und übernehme dominant die Führung, um ein Zeichen zu setzen.",
      "C": "Ich schalte auf stur, steige bei Kontrollen gar nicht mehr aus dem Auto aus und überlasse ihm die gesamte Arbeit.",
      "D": "Ich gehe heimlich zum Dienstgruppenleiter, beschwere mich massiv über seine Arroganz und verlange einen neuen Partner."
    },
    "A": "Ich spreche das Thema sachlich auf der Wache an, schildere meine Wahrnehmung und vereinbare eine klare Rollenverteilung für künftige Kontrollen.",
    "B": "Ich falle ihm bei der nächsten Kontrolle vor dem Bürger hart ins Wort und übernehme dominant die Führung, um ein Zeichen zu setzen.",
    "C": "Ich schalte auf stur, steige bei Kontrollen gar nicht mehr aus dem Auto aus und überlasse ihm die gesamte Arbeit.",
    "D": "Ich gehe heimlich zum Dienstgruppenleiter, beschwere mich massiv über seine Arroganz und verlange einen neuen Partner.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 13,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Während der Nachtschicht nimmt Ihr Kollege bei einem lokalen Bäcker kostenlos belegte Brötchen an ('Geht aufs Haus für die Polizei').",
    "optionen": {
      "A": "Ich weise den Kollegen unter vier Augen auf die Compliance-Regeln zur Vorteilsnahme hin und fordere ihn auf, dies künftig zu unterlassen.",
      "B": "Ich bestelle ebenfalls etwas und nehme es kostenlos an, um vor dem Bäcker nicht als undankbar zu erscheinen.",
      "C": "Ich bezahle demonstrativ den vollen Preis für sein Essen mit und mache ihm vor dem Bäcker eine laute Szene.",
      "D": "Ich schreibe nach Schichtende sofort eine heimliche Meldung an die interne Ermittlung wegen des Verdachts der Bestechlichkeit."
    },
    "A": "Ich weise den Kollegen unter vier Augen auf die Compliance-Regeln zur Vorteilsnahme hin und fordere ihn auf, dies künftig zu unterlassen.",
    "B": "Ich bestelle ebenfalls etwas und nehme es kostenlos an, um vor dem Bäcker nicht als undankbar zu erscheinen.",
    "C": "Ich bezahle demonstrativ den vollen Preis für sein Essen mit und mache ihm vor dem Bäcker eine laute Szene.",
    "D": "Ich schreibe nach Schichtende sofort eine heimliche Meldung an die interne Ermittlung wegen des Verdachts der Bestechlichkeit.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 14,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Es laufen zeitgleich eine Ruhestörung, ein Ladendiebstahl (Täter festgehalten) und ein schwerer Verkehrsunfall auf. Sie haben nur zwei Streifen frei.",
    "optionen": {
      "A": "Ich priorisiere den Verkehrsunfall als höchsten Schutzgut-Einsatz, entsende beide Streifen dorthin und kommuniziere die Verzögerung an die anderen Mitteiler.",
      "B": "Ich entsende eine Streife zur Ruhestörung und eine zum Ladendieb. Den Verkehrsunfall lasse ich durch Nachbardienststellen anfahren.",
      "C": "Ich fahre als DGL selbst zur Ruhestörung, um Ressourcen zu sparen, und schicke die Streifen zu den anderen Einsätzen.",
      "D": "Ich schicke jeweils einen Beamten alleine zu den drei Einsätzen, um überall Präsenz zu zeigen."
    },
    "A": "Ich priorisiere den Verkehrsunfall als höchsten Schutzgut-Einsatz, entsende beide Streifen dorthin und kommuniziere die Verzögerung an die anderen Mitteiler.",
    "B": "Ich entsende eine Streife zur Ruhestörung und eine zum Ladendieb. Den Verkehrsunfall lasse ich durch Nachbardienststellen anfahren.",
    "C": "Ich fahre als DGL selbst zur Ruhestörung, um Ressourcen zu sparen, und schicke die Streifen zu den anderen Einsätzen.",
    "D": "Ich schicke jeweils einen Beamten alleine zu den drei Einsätzen, um überall Präsenz zu zeigen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 15,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Ein lebenserfahrener, aber dienstgradniederer Beamter hinterfragt vor der geschlossenen Einheit lautstark Ihre Einsatztaktik.",
    "optionen": {
      "A": "Ich höre den Einwand kurz an, entscheide dann sachlich über Anpassung oder Beibehaltung der Taktik und kläre die Art der Kritik im Nachgang.",
      "B": "Ich stelle sofort unmissverständlich klar, dass ich das Sagen habe, und dulde keinerlei Widerworte vor der Mannschaft.",
      "C": "Ich übergebe ihm kurzerhand die Einsatzleitung, da er offensichtlich mehr operative Erfahrung besitzt.",
      "D": "Ich ignoriere seinen Einwurf komplett und funke meine Befehle an ihn vorbei direkt an die Trupps."
    },
    "A": "Ich höre den Einwand kurz an, entscheide dann sachlich über Anpassung oder Beibehaltung der Taktik und kläre die Art der Kritik im Nachgang.",
    "B": "Ich stelle sofort unmissverständlich klar, dass ich das Sagen habe, und dulde keinerlei Widerworte vor der Mannschaft.",
    "C": "Ich übergebe ihm kurzerhand die Einsatzleitung, da er offensichtlich mehr operative Erfahrung besitzt.",
    "D": "Ich ignoriere seinen Einwurf komplett und funke meine Befehle an ihn vorbei direkt an die Trupps.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 16,
    "rolle": "Normaler Beamter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Nach einer missglückten Reanimation eines Kindes ist Ihr Streifenpartner auf der Rückfahrt extrem angespannt und zittert.",
    "optionen": {
      "A": "Ich akzeptiere seine verbale Grenze im Moment, übernehme die Einsatzführung und biete ihm später auf der Wache behutsam ein Gespräch an.",
      "B": "Ich zwinge ihn sofort auf dem Hof der Dienststelle, sich krankzumelden und mit der Polizeiseelsorge zu telefonieren.",
      "C": "Ich mache zynische Witze über den Einsatzort (Galgenhumor), um die Stimmung im Fahrzeug aufzulockern.",
      "D": "Ich ignoriere sein Zittern komplett, da in unserem Beruf jeder mit solchen Dingen alleine klarkommen muss."
    },
    "A": "Ich akzeptiere seine verbale Grenze im Moment, übernehme die Einsatzführung und biete ihm später auf der Wache behutsam ein Gespräch an.",
    "B": "Ich zwinge ihn sofort auf dem Hof der Dienststelle, sich krankzumelden und mit der Polizeiseelsorge zu telefonieren.",
    "C": "Ich mache zynische Witze über den Einsatzort (Galgenhumor), um die Stimmung im Fahrzeug aufzulockern.",
    "D": "Ich ignoriere sein Zittern komplett, da in unserem Beruf jeder mit solchen Dingen alleine klarkommen muss.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 17,
    "rolle": "Normaler Beamter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Ein offensichtlich obdachloser Mann hat eine Dose Suppe (1,50 €) gestohlen. Der Filialleiter tobt und besteht beharrlich auf einer Strafanzeige.",
    "optionen": {
      "A": "Ich nehme den Sachverhalt objektiv auf, behandle den Täter respektvoll und schildere im Bericht die Lebensumstände für die Staatsanwaltschaft.",
      "B": "Ich weigere mich wegen Geringfügigkeit, zahle die Suppe privat und lasse den Mann gehen.",
      "C": "Ich beschimpfe den Filialleiter vor den Kunden wegen seiner Unmenschlichkeit in diesem Bagatellfall.",
      "D": "Ich lege dem Obdachlosen zur Abschreckung vor den Kunden Handschellen an, um Härte zu demonstrieren."
    },
    "A": "Ich nehme den Sachverhalt objektiv auf, behandle den Täter respektvoll und schildere im Bericht die Lebensumstände für die Staatsanwaltschaft.",
    "B": "Ich weigere mich wegen Geringfügigkeit, zahle die Suppe privat und lasse den Mann gehen.",
    "C": "Ich beschimpfe den Filialleiter vor den Kunden wegen seiner Unmenschlichkeit in diesem Bagatellfall.",
    "D": "Ich lege dem Obdachlosen zur Abschreckung vor den Kunden Handschellen an, um Härte zu demonstrieren.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 18,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Sie sichern ein ausgebranntes Unfallwrack ab. Ein älterer Mann weint am Flatterband: 'Das ist das Auto meines Sohnes!' Sie wissen sicher, dass das Kennzeichen nicht stimmt.",
    "optionen": {
      "A": "Ich gehe empathisch auf ihn zu, teile ihm beruhigend mit, dass es definitiv nicht das Fahrzeug ist, und begleite ihn kurz aus dem Gefahrenbereich.",
      "B": "Ich erteile ihm sofort einen strengen Platzverweis wegen Störung der polizeilichen Maßnahmen.",
      "C": "Ich ignoriere ihn komplett, da es nicht meine primäre Aufgabe ist, mich um unbeteiligte Passanten zu kümmern.",
      "D": "Ich lasse ihn nah an das Wrack heran, damit er sich selbst mit eigenen Augen davon überzeugen kann."
    },
    "A": "Ich gehe empathisch auf ihn zu, teile ihm beruhigend mit, dass es definitiv nicht das Fahrzeug ist, und begleite ihn kurz aus dem Gefahrenbereich.",
    "B": "Ich erteile ihm sofort einen strengen Platzverweis wegen Störung der polizeilichen Maßnahmen.",
    "C": "Ich ignoriere ihn komplett, da es nicht meine primäre Aufgabe ist, mich um unbeteiligte Passanten zu kümmern.",
    "D": "Ich lasse ihn nah an das Wrack heran, damit er sich selbst mit eigenen Augen davon überzeugen kann.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 19,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Eine Bürgerinitiative wirft Ihren Beamten in der Presse Polizeigewalt vor. Ihre interne Prüfung ergab jedoch, dass der Einsatz absolut rechtmäßig war.",
    "optionen": {
      "A": "Ich stelle mich bei einer öffentlichen Stellungnahme uneingeschränkt vor meine Beamten und verteidige die Verhältnismäßigkeit gegen den Druck.",
      "B": "Ich bitte die Politik um Entschuldigung und versetze die Beamten intern, um den Druck von der Behörde zu nehmen.",
      "C": "Ich gebe kein Statement ab und hoffe, dass das Thema medial schnell in Vergessenheit gerät.",
      "D": "Ich schiebe die Verantwortung öffentlich auf den Einsatzleiter vor Ort ab, da ich nicht im Dienst war."
    },
    "A": "Ich stelle mich bei einer öffentlichen Stellungnahme uneingeschränkt vor meine Beamten und verteidige die Verhältnismäßigkeit gegen den Druck.",
    "B": "Ich bitte die Politik um Entschuldigung und versetze die Beamten intern, um den Druck von der Behörde zu nehmen.",
    "C": "Ich gebe kein Statement ab und hoffe, dass das Thema medial schnell in Vergessenheit gerät.",
    "D": "Ich schiebe die Verantwortung öffentlich auf den Einsatzleiter vor Ort ab, da ich nicht im Dienst war.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 20,
    "rolle": "Normaler Beamter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Sie haben vergessen, eine wichtige Zeugenvernehmung fristgerecht weiterzuleiten. Der zuständige Staatsanwalt ruft extrem wütend bei Ihnen an.",
    "optionen": {
      "A": "Ich gebe den Fehler sofort offen zu, entschuldige mich für die Schlamperei und versichere, die Akte unverzüglich nachzureichen.",
      "B": "Ich behaupte, das IT-System habe gehangen und die digitale Akte sei auf dem Weg verloren gegangen.",
      "C": "Ich schiebe die Schuld auf einen jungen Kollegen, der die Akte angeblich falsch abgelegt hat.",
      "D": "Ich lege auf, melde mich krank und lasse meinen Streifenpartner die Rückrufe bearbeiten."
    },
    "A": "Ich gebe den Fehler sofort offen zu, entschuldige mich für die Schlamperei und versichere, die Akte unverzüglich nachzureichen.",
    "B": "Ich behaupte, das IT-System habe gehangen und die digitale Akte sei auf dem Weg verloren gegangen.",
    "C": "Ich schiebe die Schuld auf einen jungen Kollegen, der die Akte angeblich falsch abgelegt hat.",
    "D": "Ich lege auf, melde mich krank und lasse meinen Streifenpartner die Rückrufe bearbeiten.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 21,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Eine frisch ausgebildete Beamtin postet grenzwertige Videos (Tänze) in Uniform auf Social Media, was intern zu Beschwerden führt.",
    "optionen": {
      "A": "Ich führe ein Sensibilisierungsgespräch über das Neutralitätsgebot und fordere sie verbindlich auf, kritische Videos zu löschen.",
      "B": "Ich erteile ihr sofort ein weisungsgebundenes Verbot jeglicher Social Media Nutzung in Uniform unter Androhung von Disziplinarmaßnahmen.",
      "C": "Ich leite den Account anonym an die Pressestelle weiter, damit diese den Konflikt übernimmt.",
      "D": "Ich like die Videos, um einen guten Draht zur jungen Generation aufzubauen."
    },
    "A": "Ich führe ein Sensibilisierungsgespräch über das Neutralitätsgebot und fordere sie verbindlich auf, kritische Videos zu löschen.",
    "B": "Ich erteile ihr sofort ein weisungsgebundenes Verbot jeglicher Social Media Nutzung in Uniform unter Androhung von Disziplinarmaßnahmen.",
    "C": "Ich leite den Account anonym an die Pressestelle weiter, damit diese den Konflikt übernimmt.",
    "D": "Ich like die Videos, um einen guten Draht zur jungen Generation aufzubauen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 22,
    "rolle": "Normaler Beamter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Ein Bürger reicht eine Dienstaufsichtsbeschwerde gegen Ihren Partner ein. Sie wissen, dass das Verhalten Ihres Partners tatsächlich grenzwertig grob war. Sie werden vernommen.",
    "optionen": {
      "A": "Ich sage objektiv und wahrheitsgemäß aus, suche aber vorher das Gespräch mit meinem Partner, um ihm meine geplante Aussage offen mitzuteilen.",
      "B": "Ich decke meinen Partner zu 100% und behaupte, das Handeln sei absolut gerechtfertigt gewesen (Korpsgeist).",
      "C": "Ich mache von meinem Aussageverweigerungsrecht Gebrauch oder behaupte, mich nicht zu erinnern.",
      "D": "Ich belaste meinen Partner schwerer als nötig, um mich selbst maximal zu distanzieren."
    },
    "A": "Ich sage objektiv und wahrheitsgemäß aus, suche aber vorher das Gespräch mit meinem Partner, um ihm meine geplante Aussage offen mitzuteilen.",
    "B": "Ich decke meinen Partner zu 100% und behaupte, das Handeln sei absolut gerechtfertigt gewesen (Korpsgeist).",
    "C": "Ich mache von meinem Aussageverweigerungsrecht Gebrauch oder behaupte, mich nicht zu erinnern.",
    "D": "Ich belaste meinen Partner schwerer als nötig, um mich selbst maximal zu distanzieren.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 23,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Eine völlig aufgelöste Mutter meldet nachts ihre 15-jährige Tochter als vermisst. Es gibt keine Hinweise auf eine Straftat.",
    "optionen": {
      "A": "Ich nehme die Sorge ernst, erfasse sachlich alle Personalien, leite Routineüberprüfungen ein und berate die Mutter ohne unrealistische Versprechungen.",
      "B": "Ich wimmle sie sachlich ab und erkläre, dass sie in frühestens 24 Stunden wiederkommen soll.",
      "C": "Ich alarmiere sofort den Hubschrauber, um die Mutter psychologisch zu beruhigen.",
      "D": "Ich ignoriere sie im Wachraum, da ich einen Bericht schreiben muss, und hoffe auf einen anderen Kollegen."
    },
    "A": "Ich nehme die Sorge ernst, erfasse sachlich alle Personalien, leite Routineüberprüfungen ein und berate die Mutter ohne unrealistische Versprechungen.",
    "B": "Ich wimmle sie sachlich ab und erkläre, dass sie in frühestens 24 Stunden wiederkommen soll.",
    "C": "Ich alarmiere sofort den Hubschrauber, um die Mutter psychologisch zu beruhigen.",
    "D": "Ich ignoriere sie im Wachraum, da ich einen Bericht schreiben muss, und hoffe auf einen anderen Kollegen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 24,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Bei der Übernahme stellen Sie fest, dass die Vorgängerschicht den Streifenwagen extrem dreckig und mit leerem Tank hinterlassen hat.",
    "optionen": {
      "A": "Ich rufe den Fahrzeugführer direkt an, schildere sachlich das Problem und kündige an, bei Wiederholung den DGL einzuschalten.",
      "B": "Ich putze das Auto wortlos, um des lieben Friedens willen keinen Streit mit der anderen Schicht anzufangen.",
      "C": "Ich lasse die Kaffeeflecken absichtlich für unsere Nachfolger so, aus Prinzip.",
      "D": "Ich brülle den DGL der Vorgängerschicht an und weigere mich, das Fahrzeug zu übernehmen."
    },
    "A": "Ich rufe den Fahrzeugführer direkt an, schildere sachlich das Problem und kündige an, bei Wiederholung den DGL einzuschalten.",
    "B": "Ich putze das Auto wortlos, um des lieben Friedens willen keinen Streit mit der anderen Schicht anzufangen.",
    "C": "Ich lasse die Kaffeeflecken absichtlich für unsere Nachfolger so, aus Prinzip.",
    "D": "Ich brülle den DGL der Vorgängerschicht an und weigere mich, das Fahrzeug zu übernehmen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 25,
    "rolle": "Normaler Beamter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Sie spüren in der Mitte einer 12-Stunden-Nachtschicht am Steuer eine massive Übermüdung (Sekundenschlaf-Gefahr).",
    "optionen": {
      "A": "Ich kommuniziere dies offen an meinen Partner, fahre rechts ran und bitte ihn zu fahren oder mache eine Kurzpause.",
      "B": "Ich fahre tapfer weiter, da ich vor meinem Kollegen keine Schwäche zeigen will.",
      "C": "Ich trinke hastig Energydrinks und fahre aggressiver, weil mich das Adrenalin wachhält.",
      "D": "Ich schlafe heimlich zwei Stunden auf einem Waldweg, ohne der Zentrale Bescheid zu geben."
    },
    "A": "Ich kommuniziere dies offen an meinen Partner, fahre rechts ran und bitte ihn zu fahren oder mache eine Kurzpause.",
    "B": "Ich fahre tapfer weiter, da ich vor meinem Kollegen keine Schwäche zeigen will.",
    "C": "Ich trinke hastig Energydrinks und fahre aggressiver, weil mich das Adrenalin wachhält.",
    "D": "Ich schlafe heimlich zwei Stunden auf einem Waldweg, ohne der Zentrale Bescheid zu geben.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 26,
    "rolle": "Normaler Beamter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Bei einer Verkehrskontrolle droht ein alkoholisierter lokaler Politiker massiv mit Konsequenzen für Ihre Karriere.",
    "optionen": {
      "A": "Ich bleibe vollkommen unbeeindruckt, führe die Maßnahme formell korrekt durch und halte die Drohung in einem Vermerk fest.",
      "B": "Ich belasse es bei einer strengen mündlichen Verwarnung, um mir und der Behörde Ärger zu ersparen.",
      "C": "Ich werfe ihm lautstark Amtsmissbrauch vor und drücke ihn unnötig hart in den Streifenwagen.",
      "D": "Ich rufe verängstigt meinen Dienststellenleiter an und frage, ob ich wirklich Blut abnehmen darf."
    },
    "A": "Ich bleibe vollkommen unbeeindruckt, führe die Maßnahme formell korrekt durch und halte die Drohung in einem Vermerk fest.",
    "B": "Ich belasse es bei einer strengen mündlichen Verwarnung, um mir und der Behörde Ärger zu ersparen.",
    "C": "Ich werfe ihm lautstark Amtsmissbrauch vor und drücke ihn unnötig hart in den Streifenwagen.",
    "D": "Ich rufe verängstigt meinen Dienststellenleiter an und frage, ob ich wirklich Blut abnehmen darf.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 27,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Zwei Beamte wollen zwingend an Heiligabend Urlaub haben. Die Mindeststärke lässt nur einen zu. Die Stimmung kippt.",
    "optionen": {
      "A": "Ich lade beide zu einem Gespräch ein, moderiere die Lösungsfindung und strebe anhand der Vorjahreslisten einen fairen Kompromiss an.",
      "B": "Ich würfle die Entscheidung vor versammelter Mannschaft öffentlich aus, um objektiv zu wirken.",
      "C": "Ich streiche kurzerhand beiden den Urlaub, da sie sich nicht einigen können.",
      "D": "Ich gebe dem Beamten frei, der am längsten auf der Dienststelle ist."
    },
    "A": "Ich lade beide zu einem Gespräch ein, moderiere die Lösungsfindung und strebe anhand der Vorjahreslisten einen fairen Kompromiss an.",
    "B": "Ich würfle die Entscheidung vor versammelter Mannschaft öffentlich aus, um objektiv zu wirken.",
    "C": "Ich streiche kurzerhand beiden den Urlaub, da sie sich nicht einigen können.",
    "D": "Ich gebe dem Beamten frei, der am längsten auf der Dienststelle ist.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 28,
    "rolle": "Normaler Beamter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Ein stadtbekannter Querulant will zum fünften Mal eine abstruse Anzeige wegen 'Gedankenkontrolle' erstatten.",
    "optionen": {
      "A": "Ich bleibe sachlich, erkläre konsequent, dass es kein Straftatbestand ist, fertige einen Aktenvermerk und weise ihn dann bestimmt ab.",
      "B": "Ich schmeiße ihn sofort und wortlos mit Nachdruck aus der Dienststelle.",
      "C": "Ich nehme eine formelle Anzeige auf, auch wenn es eine Stunde dauert, um ihn ruhigzustellen.",
      "D": "Ich versuche ihn sofort wegen Eigengefährdung zwangseinweisen zu lassen."
    },
    "A": "Ich bleibe sachlich, erkläre konsequent, dass es kein Straftatbestand ist, fertige einen Aktenvermerk und weise ihn dann bestimmt ab.",
    "B": "Ich schmeiße ihn sofort und wortlos mit Nachdruck aus der Dienststelle.",
    "C": "Ich nehme eine formelle Anzeige auf, auch wenn es eine Stunde dauert, um ihn ruhigzustellen.",
    "D": "Ich versuche ihn sofort wegen Eigengefährdung zwangseinweisen zu lassen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 29,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Ein fachlich exzellenter Top-Ermittler tritt Bürgern gegenüber extrem arrogant auf. Sie müssen das jährliche Beurteilungsgespräch führen.",
    "optionen": {
      "A": "Ich lobe seine Erfolge, spreche das Auftreten anhand konkreter Beispiele klar an und erarbeite verbindliche Entwicklungsziele.",
      "B": "Ich konzentriere mich ausschließlich auf seine menschlichen Defizite und rede ihm heftig ins Gewissen.",
      "C": "Ich bewerte ihn in allen Punkten mit Bestnote, da seine Aufklärungsquote zu wichtig ist.",
      "D": "Ich delegiere das Gespräch an meinen Stellvertreter, um dem Konflikt aus dem Weg zu gehen."
    },
    "A": "Ich lobe seine Erfolge, spreche das Auftreten anhand konkreter Beispiele klar an und erarbeite verbindliche Entwicklungsziele.",
    "B": "Ich konzentriere mich ausschließlich auf seine menschlichen Defizite und rede ihm heftig ins Gewissen.",
    "C": "Ich bewerte ihn in allen Punkten mit Bestnote, da seine Aufklärungsquote zu wichtig ist.",
    "D": "Ich delegiere das Gespräch an meinen Stellvertreter, um dem Konflikt aus dem Weg zu gehen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 30,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Ein Kollege, der bald in die Nachtschicht startet, trinkt auf einer privaten Feier hörbar angetrunken sein drittes Bier.",
    "optionen": {
      "A": "Ich ziehe ihn diskret zur Seite, fordere ihn auf, sich krankzumelden, und kündige an, bei Antritt den DGL zu informieren.",
      "B": "Ich mische mich nicht ein, da es seine private Verantwortung ist und ich kein Spielverderber sein will.",
      "C": "Ich rufe heimlich den Dienststellenleiter an und sorge für einen Alkoholtest beim Antritt.",
      "D": "Ich lasse ihm heimlich nur noch alkoholfreies Bier ausschenken, damit er wieder nüchtern wird."
    },
    "A": "Ich ziehe ihn diskret zur Seite, fordere ihn auf, sich krankzumelden, und kündige an, bei Antritt den DGL zu informieren.",
    "B": "Ich mische mich nicht ein, da es seine private Verantwortung ist und ich kein Spielverderber sein will.",
    "C": "Ich rufe heimlich den Dienststellenleiter an und sorge für einen Alkoholtest beim Antritt.",
    "D": "Ich lasse ihm heimlich nur noch alkoholfreies Bier ausschenken, damit er wieder nüchtern wird.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 31,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Die DGL fordert Sie unter vier Augen auf, die Leistung eines Kollegen zu bewerten, der oft herablassend über eben diese DGL lästert.",
    "optionen": {
      "A": "Ich bewerte rein objektiv die fachliche Leistung auf Streife und lasse das Geläster unerwähnt.",
      "B": "Ich erzähle der DGL detailliert von den ständigen Lästereien, um ihm die Beförderung zu verbauen.",
      "C": "Ich präsentiere den Kollegen als absoluten Musterbeamten, um ihn zu schützen.",
      "D": "Ich weigere mich kategorisch, Aussagen über die Leistung eines Kollegen zu machen."
    },
    "A": "Ich bewerte rein objektiv die fachliche Leistung auf Streife und lasse das Geläster unerwähnt.",
    "B": "Ich erzähle der DGL detailliert von den ständigen Lästereien, um ihm die Beförderung zu verbauen.",
    "C": "Ich präsentiere den Kollegen als absoluten Musterbeamten, um ihn zu schützen.",
    "D": "Ich weigere mich kategorisch, Aussagen über die Leistung eines Kollegen zu machen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 32,
    "rolle": "Normaler Beamter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Männliche Kollegen machen in der Teeküche hinter dem Rücken Ihrer einzigen weiblichen Streifenpartnerin sexistische Bemerkungen.",
    "optionen": {
      "A": "Ich schreite sofort ein, benenne das Verhalten als unkollegial und fordere sie auf, dies umgehend zu unterlassen.",
      "B": "Ich lache leise mit, um in der 'Männerrunde' der Schicht dazuzugehören.",
      "C": "Ich erzähle der Kollegin ungefiltert, wer was über sie gesagt hat, damit sie gewarnt ist.",
      "D": "Ich schreibe eine anonyme E-Mail an den Gleichstellungsbeauftragten, ohne selbst Farbe zu bekennen."
    },
    "A": "Ich schreite sofort ein, benenne das Verhalten als unkollegial und fordere sie auf, dies umgehend zu unterlassen.",
    "B": "Ich lache leise mit, um in der 'Männerrunde' der Schicht dazuzugehören.",
    "C": "Ich erzähle der Kollegin ungefiltert, wer was über sie gesagt hat, damit sie gewarnt ist.",
    "D": "Ich schreibe eine anonyme E-Mail an den Gleichstellungsbeauftragten, ohne selbst Farbe zu bekennen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 33,
    "rolle": "Normaler Beamter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Sie leiden seit Wochen unter stressbedingten Schlafproblemen, sind reizbar und haben im Dienst fast Ihre Waffe liegenlassen.",
    "optionen": {
      "A": "Ich wende mich vertrauensvoll an den DGL oder Polizeiarzt und bitte präventiv um Unterstützung (z.B. Innendienst).",
      "B": "Ich besorge mir rezeptfreie Schlafmittel, um den Dienstbetrieb irgendwie weiter aufrechtzuerhalten.",
      "C": "Ich kompensiere durch hohen Kaffeekonsum und verheimliche meine Probleme vor allen.",
      "D": "Ich melde mich dauerhaft krank, teile der Dienststelle aber nie die wahren Gründe mit."
    },
    "A": "Ich wende mich vertrauensvoll an den DGL oder Polizeiarzt und bitte präventiv um Unterstützung (z.B. Innendienst).",
    "B": "Ich besorge mir rezeptfreie Schlafmittel, um den Dienstbetrieb irgendwie weiter aufrechtzuerhalten.",
    "C": "Ich kompensiere durch hohen Kaffeekonsum und verheimliche meine Probleme vor allen.",
    "D": "Ich melde mich dauerhaft krank, teile der Dienststelle aber nie die wahren Gründe mit.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 34,
    "rolle": "Normaler Beamter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Ein Raubopfer weint ununterbrochen und zittert am Boden. Eine Täterbeschreibung für die Ringfahndung wäre essenziell.",
    "optionen": {
      "A": "Ich hocke mich zu ihr, spreche beruhigend auf sie ein und stelle erst danach behutsam die wichtigsten Fragen für die Erstmeldung.",
      "B": "Ich fordere sie bestimmt auf, sich zusammenzureißen, da der Täter sonst entkommt.",
      "C": "Ich verzichte komplett auf Befragungen und übergebe sie wortlos dem Rettungsdienst.",
      "D": "Ich versuche sie durch Witze aufzumuntern, bevor ich nach dem Täter frage."
    },
    "A": "Ich hocke mich zu ihr, spreche beruhigend auf sie ein und stelle erst danach behutsam die wichtigsten Fragen für die Erstmeldung.",
    "B": "Ich fordere sie bestimmt auf, sich zusammenzureißen, da der Täter sonst entkommt.",
    "C": "Ich verzichte komplett auf Befragungen und übergebe sie wortlos dem Rettungsdienst.",
    "D": "Ich versuche sie durch Witze aufzumuntern, bevor ich nach dem Täter frage.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 35,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Ihr Partner holt nach einer harten Verfolgung mit dem Stiefel aus, um einem bereits fixierten Täter in den Magen zu treten.",
    "optionen": {
      "A": "Ich schreite sofort physisch ein, dränge ihn weg, rufe ihn zur Räson und verhindere aktiv eine Straftat im Amt.",
      "B": "Ich drehe mich um und lasse ihn gewähren, da der Täter sich auch massiv gewehrt hat.",
      "C": "Ich schaue zu und behaupte später vor Gericht, ich hätte aufgrund der Dunkelheit nichts gesehen.",
      "D": "Ich funke die Leitstelle an, ignoriere sein Verhalten aber völlig."
    },
    "A": "Ich schreite sofort physisch ein, dränge ihn weg, rufe ihn zur Räson und verhindere aktiv eine Straftat im Amt.",
    "B": "Ich drehe mich um und lasse ihn gewähren, da der Täter sich auch massiv gewehrt hat.",
    "C": "Ich schaue zu und behaupte später vor Gericht, ich hätte aufgrund der Dunkelheit nichts gesehen.",
    "D": "Ich funke die Leitstelle an, ignoriere sein Verhalten aber völlig.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 36,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Bei einer Demo bittet ein Unterführer hitzig um Freigabe der Wasserwerfer, obwohl die rechtlichen Voraussetzungen noch nicht vorliegen.",
    "optionen": {
      "A": "Ich untersage den Einsatz klar, erinnere an die Verhältnismäßigkeit und entsende stattdessen Kommunikationsteams.",
      "B": "Ich vertraue dem Unterführer blind und erteile die uneingeschränkte Freigabe.",
      "C": "Ich fahre selbst an die Front und erteile den Befehl direkt an die Besatzung.",
      "D": "Ich entziehe dem Unterführer sofort das Kommando und beordere ihn zurück."
    },
    "A": "Ich untersage den Einsatz klar, erinnere an die Verhältnismäßigkeit und entsende stattdessen Kommunikationsteams.",
    "B": "Ich vertraue dem Unterführer blind und erteile die uneingeschränkte Freigabe.",
    "C": "Ich fahre selbst an die Front und erteile den Befehl direkt an die Besatzung.",
    "D": "Ich entziehe dem Unterführer sofort das Kommando und beordere ihn zurück.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 37,
    "rolle": "Normaler Beamter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Sie kommen mit Sondersignal an eine unübersichtliche rote Ampel. Ein Linienbus nähert sich von links.",
    "optionen": {
      "A": "Ich bremse stark ab, stelle durch Blickkontakt sicher, dass alle mich wahrgenommen haben, und taste mich langsam vor.",
      "B": "Ich bleibe auf dem Gas, da die anderen verpflichtet sind, mir Platz zu machen.",
      "C": "Ich schalte das Martinshorn aus und versuche schnell durch eine Lücke zu huschen.",
      "D": "Ich warte an der Haltelinie auf die nächste Grünphase, um absolut kein Risiko einzugehen."
    },
    "A": "Ich bremse stark ab, stelle durch Blickkontakt sicher, dass alle mich wahrgenommen haben, und taste mich langsam vor.",
    "B": "Ich bleibe auf dem Gas, da die anderen verpflichtet sind, mir Platz zu machen.",
    "C": "Ich schalte das Martinshorn aus und versuche schnell durch eine Lücke zu huschen.",
    "D": "Ich warte an der Haltelinie auf die nächste Grünphase, um absolut kein Risiko einzugehen.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 38,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Sie kommen in eine neue Dienstgruppe, die einen rauen Ton pflegt und Ihnen misstrauisch nur Hilfsarbeiten zuweist.",
    "optionen": {
      "A": "Ich trete weiterhin professionell auf, erledige meine Aufgaben und erarbeite mir durch fachliche Leistung Respekt.",
      "B": "Ich übernehme sofort den rauen Jargon, um es den Platzhirschen recht zu machen.",
      "C": "Ich beschwere mich nach drei Schichten beim Leiter über das schlechte Arbeitsklima.",
      "D": "Ich isoliere mich bewusst und mache stur Dienst nach Vorschrift."
    },
    "A": "Ich trete weiterhin professionell auf, erledige meine Aufgaben und erarbeite mir durch fachliche Leistung Respekt.",
    "B": "Ich übernehme sofort den rauen Jargon, um es den Platzhirschen recht zu machen.",
    "C": "Ich beschwere mich nach drei Schichten beim Leiter über das schlechte Arbeitsklima.",
    "D": "Ich isoliere mich bewusst und mache stur Dienst nach Vorschrift.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 39,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Die Schichtmoral ist wegen Überstunden am Boden. Beim Antreten beschweren sich die Kollegen lautstark bei Ihnen.",
    "optionen": {
      "A": "Ich zeige ehrliches Verständnis, erkläre die Engpässe transparent und sage zu, mich bei der Leitung für Entlastung einzusetzen.",
      "B": "Ich blocke rigoros ab und betone, dass die Polizei kein Wunschkonzert sei.",
      "C": "Ich schimpfe gemeinsam mit ihnen über 'die da oben', um mich beliebt zu machen.",
      "D": "Ich breche das Antreten sofort ab und entziehe mich der Diskussion."
    },
    "A": "Ich zeige ehrliches Verständnis, erkläre die Engpässe transparent und sage zu, mich bei der Leitung für Entlastung einzusetzen.",
    "B": "Ich blocke rigoros ab und betone, dass die Polizei kein Wunschkonzert sei.",
    "C": "Ich schimpfe gemeinsam mit ihnen über 'die da oben', um mich beliebt zu machen.",
    "D": "Ich breche das Antreten sofort ab und entziehe mich der Diskussion.",
    "ranking": "A, B, C, D"
  },
  {
    "id": 40,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Sie übernehmen mit 25 Jahren als DGL eine Schicht. Ältere Kollegen (Anfang 50) belächeln Ihre Anweisungen.",
    "optionen": {
      "A": "Ich suche das persönliche Gespräch, erkläre meine Erwartungen und zeige aufrichtigen Respekt vor ihrer Einsatzerfahrung.",
      "B": "Ich drohe sofort jedem mit disziplinarischen Konsequenzen, der meine Befehle anzweifelt.",
      "C": "Ich kümmere mich nur noch um die Verwaltung und lasse die alten Hasen machen, was sie wollen.",
      "D": "Ich bitte den Chef, mich wieder als Sachbearbeiter einzusetzen, da ich dem Druck nicht standhalte."
    },
    "A": "Ich suche das persönliche Gespräch, erkläre meine Erwartungen und zeige aufrichtigen Respekt vor ihrer Einsatzerfahrung.",
    "B": "Ich drohe sofort jedem mit disziplinarischen Konsequenzen, der meine Befehle anzweifelt.",
    "C": "Ich kümmere mich nur noch um die Verwaltung und lasse die alten Hasen machen, was sie wollen.",
    "D": "Ich bitte den Chef, mich wieder als Sachbearbeiter einzusetzen, da ich dem Druck nicht standhalte.",
    "ranking": "A, B, C, D"
  }
];

// "A, B, C, D" -> ['A', 'B', 'C', 'D'] — wird bei der Auswertung gebraucht
QUIZ_QUESTIONS.forEach(q => {
  q.rankingArray = q.ranking.split(',').map(s => s.trim());
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
