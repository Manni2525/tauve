// questions.js - TAUVE Uebungstest (3. Qualifikationsebene)
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
      "A": "Ich fahre selbst zur Unfallstelle, kümmere mich um den betroffenen Beamten und biete ihm meine Unterstützung an. Ich sorge dafür, dass er von der Öffentlichkeit abgeschirmt ist. Für die nächsten Tage stelle ich ihn vom Außendienst frei. Dann sorge ich dafür, dass die Eltern des schwer verletzten Mädchens informiert werden. Schließlich kehre ich zur Dienststelle zurück.",
      "B": "Ich übergebe die Dienstgeschäfte an meinen Stellvertreter und fahre selbst zur Unfallstelle. Dort versuche ich, den Beamten von der Öffentlichkeit abzuschirmen und seine Betreuung zu organisieren. Außerdem benachrichtige ich die Eltern des Kindes persönlich. Wenn irgendwie möglich, gewähre ich dem Beamten für die nächsten Tage Dienstbefreiung. Im Anschluss an den Einsatz fahre ich selbst ins Krankenhaus zum verletzten Mädchen.",
      "C": "Sobald ich am Unfallort angekommen bin, schirme ich den Beamten von äußeren Einflüssen ab. Ich organisiere eine Betreuung für ihn und versuche, ihn für einige Tage vom Dienst zu befreien. Ich sorge außerdem dafür, dass die Eltern des verletzten Mädchens informiert werden. Nach dem Einsatz fahre ich zurück in die Dienststelle.",
      "D": "Ich beauftrage meinen Stellvertreter, die anfallenden Aufgaben zu übernehmen. Dann fahre ich selbst zur Unfallstelle und schirme zunächst den Beamten von der Öffentlichkeit ab. Ich organisiere für ihn eine professionelle Betreuung und gebe ihm möglichst für einige Tage dienstfrei. Außerdem sorge ich dafür, dass die Verständigung der Eltern des Kindes durchgeführt wird. Nach Beendigung des Einsatzes fahre ich wieder zur Dienststelle."
    },
    "A": "Ich fahre selbst zur Unfallstelle, kümmere mich um den betroffenen Beamten und biete ihm meine Unterstützung an. Ich sorge dafür, dass er von der Öffentlichkeit abgeschirmt ist. Für die nächsten Tage stelle ich ihn vom Außendienst frei. Dann sorge ich dafür, dass die Eltern des schwer verletzten Mädchens informiert werden. Schließlich kehre ich zur Dienststelle zurück.",
    "B": "Ich übergebe die Dienstgeschäfte an meinen Stellvertreter und fahre selbst zur Unfallstelle. Dort versuche ich, den Beamten von der Öffentlichkeit abzuschirmen und seine Betreuung zu organisieren. Außerdem benachrichtige ich die Eltern des Kindes persönlich. Wenn irgendwie möglich, gewähre ich dem Beamten für die nächsten Tage Dienstbefreiung. Im Anschluss an den Einsatz fahre ich selbst ins Krankenhaus zum verletzten Mädchen.",
    "C": "Sobald ich am Unfallort angekommen bin, schirme ich den Beamten von äußeren Einflüssen ab. Ich organisiere eine Betreuung für ihn und versuche, ihn für einige Tage vom Dienst zu befreien. Ich sorge außerdem dafür, dass die Eltern des verletzten Mädchens informiert werden. Nach dem Einsatz fahre ich zurück in die Dienststelle.",
    "D": "Ich beauftrage meinen Stellvertreter, die anfallenden Aufgaben zu übernehmen. Dann fahre ich selbst zur Unfallstelle und schirme zunächst den Beamten von der Öffentlichkeit ab. Ich organisiere für ihn eine professionelle Betreuung und gebe ihm möglichst für einige Tage dienstfrei. Außerdem sorge ich dafür, dass die Verständigung der Eltern des Kindes durchgeführt wird. Nach Beendigung des Einsatzes fahre ich wieder zur Dienststelle.",
    "ranking": "B, D, C, A",
    "begruendungen": {
      "B": "Beste Lösung zur Führungskompetenz. Sie übergeben die Dienststelle geordnet, kümmern sich persönlich um den Beamten, benachrichtigen die Eltern selbst und gehen danach zum verletzten Kind. Damit bleiben Fürsorge, Außenverantwortung und Ihre Präsenz als Leiter in einer Hand.",
      "D": "Gute Fürsorge und klare Delegation. Die Verständigung der Eltern geben Sie jedoch ab und fahren nicht ins Krankenhaus, deshalb bleibt die persönliche Verantwortung gegenüber der Familie unvollständig.",
      "C": "Sie schirmen den Beamten ab und organisieren Betreuung, kehren danach aber auf die Dienststelle zurück. Die Lage wird geführt, der persönliche Kontakt zu Eltern und Kind fehlt.",
      "A": "Schwächste Variante. Sie kümmern sich um den Beamten, ohne die Dienstgeschäfte geordnet zu übergeben, und beenden den Einsatz mit der Rückkehr zur Dienststelle. Eltern und das verletzte Kind bleiben nachrangig."
    }
  },
  {
    "id": 2,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Ihre Mitarbeiterin wird von Ihnen zur Leiterin einer Arbeitsgruppe bestimmt. Fachlich kennt sie sich mit der betreffenden Thematik weniger aus als einige der AG-Mitglieder. Bei der ersten Besprechung blockieren zwei sehr erfahrene Kollegen und stellen ihre fachliche Eignung für die Leitung vor dem gesamten Team in Frage.",
    "optionen": {
      "A": "Ich übernehme als DGL sofort selbst die Leitung der Arbeitsgruppe, um das Projekt nicht zu gefährden, und teile die Mitarbeiterin als meine Stellvertreterin ein, damit sie durch Beobachtung lernen kann.",
      "B": "Ich lade die Mitarbeiterin und die beiden kritischen Kollegen zu einem klärenden Gespräch ein, betone, dass Führungskompetenz hier wichtiger ist als reines Fachwissen, und stärke der Mitarbeiterin offiziell den Rücken.",
      "C": "Ich ignoriere den Vorfall vorerst, da die Mitarbeiterin lernen muss, sich in ihrer neuen Führungsrolle selbst durchzusetzen und von anderen in dieser Funktion akzeptiert zu werden.",
      "D": "Ich weise die beiden erfahrenen Kollegen vor versammelter Mannschaft scharf zurecht, drohe ihnen mit disziplinarischen Konsequenzen wegen Insubordination und beende die Besprechung vorzeitig."
    },
    "A": "Ich übernehme als DGL sofort selbst die Leitung der Arbeitsgruppe, um das Projekt nicht zu gefährden, und teile die Mitarbeiterin als meine Stellvertreterin ein, damit sie durch Beobachtung lernen kann.",
    "B": "Ich lade die Mitarbeiterin und die beiden kritischen Kollegen zu einem klärenden Gespräch ein, betone, dass Führungskompetenz hier wichtiger ist als reines Fachwissen, und stärke der Mitarbeiterin offiziell den Rücken.",
    "C": "Ich ignoriere den Vorfall vorerst, da die Mitarbeiterin lernen muss, sich in ihrer neuen Führungsrolle selbst durchzusetzen und von anderen in dieser Funktion akzeptiert zu werden.",
    "D": "Ich weise die beiden erfahrenen Kollegen vor versammelter Mannschaft scharf zurecht, drohe ihnen mit disziplinarischen Konsequenzen wegen Insubordination und beende die Besprechung vorzeitig.",
    "ranking": "B, C, A, D",
    "begruendungen": {
      "B": "Beste Lösung. Sie lassen die Mitarbeiterin in der Leitung, klären den Konflikt und stellen klar, dass hier Führung zählt, nicht das größere Fachwissen. So stärken Sie ihren Auftrag vor den Kritikern.",
      "C": "Sie trauen ihr die Auseinandersetzung zu. Das schützt ihre Rolle, lässt sie in der ersten Sitzung aber ohne Rückhalt, deshalb liegt die Variante hinter dem klärenden Gespräch.",
      "A": "Sie nehmen ihr die Leitung wieder ab. Das sichert kurzfristig das Projekt, widerruft aber Ihre eigene Personalentscheidung und verhindert, dass sie führen lernt.",
      "D": "Schlechteste Lösung. Öffentliche Drohung und Abbruch demütigen die Kritiker und die neue Leiterin. Autorität entsteht so nicht, das Klima in der Gruppe wird zerstört."
    }
  },
  {
    "id": 3,
    "rolle": "Normaler Beamter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Bei einem Einsatz „Häusliche Gewalt“ mit zwei Streifen vor Ort sind Sie der ranghöchste Beamte. Als hinter verschlossener Tür ein weibliches Opfer in vermeintlicher Todesangst schreit, entscheiden Sie, die Tür einzutreten. Später erklärt die Frau, der Einsatz sei gar nicht nötig gewesen.",
    "optionen": {
      "A": "Ich schreibe den Einsatzbericht so um, dass die Situation noch bedrohlicher klingt, als sie war, um die rechtliche Verhältnismäßigkeit der Türöffnung im Nachhinein unangreifbar zu machen.",
      "B": "Ich weise die Schuld von mir und behaupte gegenüber dem DGL, die jüngeren Kollegen hätten mich durch ihre panischen Schilderungen zu der überhasteten Entscheidung gedrängt.",
      "C": "Ich zweifle stark an meiner eigenen Wahrnehmung, entschuldige mich wiederholt bei der Frau und biete an, die Reparatur der Tür aus eigener Tasche zu bezahlen, um Ärger zu vermeiden.",
      "D": "Ich bedaure meine Fehleinschätzung, kann aber mündlich und schriftlich meine Entscheidung anhand der damaligen Informationslage nachvollziehbar erläutern und stehe vollumfänglich zu meiner Verantwortung."
    },
    "A": "Ich schreibe den Einsatzbericht so um, dass die Situation noch bedrohlicher klingt, als sie war, um die rechtliche Verhältnismäßigkeit der Türöffnung im Nachhinein unangreifbar zu machen.",
    "B": "Ich weise die Schuld von mir und behaupte gegenüber dem DGL, die jüngeren Kollegen hätten mich durch ihre panischen Schilderungen zu der überhasteten Entscheidung gedrängt.",
    "C": "Ich zweifle stark an meiner eigenen Wahrnehmung, entschuldige mich wiederholt bei der Frau und biete an, die Reparatur der Tür aus eigener Tasche zu bezahlen, um Ärger zu vermeiden.",
    "D": "Ich bedaure meine Fehleinschätzung, kann aber mündlich und schriftlich meine Entscheidung anhand der damaligen Informationslage nachvollziehbar erläutern und stehe vollumfänglich zu meiner Verantwortung.",
    "ranking": "D, C, A, B",
    "begruendungen": {
      "D": "Beste Lösung zur Entscheidungskompetenz. Sie stehen zu der Entscheidung, die zur damaligen Informationslage nachvollziehbar war, und erklären sie mündlich wie schriftlich. Verantwortung heißt hier nicht Rechtfertigung um jeden Preis, sondern Nachvollziehbarkeit.",
      "C": "Sie übernehmen den Fehler persönlich, überziehen die Entschuldigung aber und bieten private Zahlung an. Das ist ehrlich, untergräbt jedoch die dienstliche Bewertung der Gefahrenlage.",
      "A": "Sie verfälschen den Bericht, damit die Türöffnung im Nachhinein unangreifbar wirkt. Das schützt Sie formal und macht die Entscheidung unehrlich.",
      "B": "Schlechteste Lösung. Sie schieben die Entscheidung auf die jüngeren Kollegen. Wer in der Lage den Zugriff verantwortet hat, darf die Verantwortung danach nicht abgeben."
    }
  },
  {
    "id": 4,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Eine Kollegin äußert im Pausenraum eine Meinung zu polizeilichen Zwangsmaßnahmen, die Ihnen äußerst fragwürdig und rechtlich unzulässig erscheint. Mehrere jüngere Kollegen nicken jedoch zustimmend.",
    "optionen": {
      "A": "Ich verlasse den Pausenraum wortlos, um mich von der Diskussion zu distanzieren, melde den Vorfall aber später anonym an den Dienststellenleiter.",
      "B": "Ich lache leise mit und wechsle schnell das Thema, um in der eingeschworenen Dienstgruppe nicht als moralisierender Außenseiter wahrgenommen zu werden.",
      "C": "Ich spreche dies offen an und stelle meine eigene, rechtsstaatliche Position der Meinung der Kollegin sachlich und bestimmt entgegen, um den jüngeren Kollegen Orientierung zu geben.",
      "D": "Ich warte ab, bis ich mit der Kollegin alleine auf Streife bin, und deute dann vorsichtig an, dass ihre Aussagen von Vorgesetzten vielleicht falsch verstanden werden könnten."
    },
    "A": "Ich verlasse den Pausenraum wortlos, um mich von der Diskussion zu distanzieren, melde den Vorfall aber später anonym an den Dienststellenleiter.",
    "B": "Ich lache leise mit und wechsle schnell das Thema, um in der eingeschworenen Dienstgruppe nicht als moralisierender Außenseiter wahrgenommen zu werden.",
    "C": "Ich spreche dies offen an und stelle meine eigene, rechtsstaatliche Position der Meinung der Kollegin sachlich und bestimmt entgegen, um den jüngeren Kollegen Orientierung zu geben.",
    "D": "Ich warte ab, bis ich mit der Kollegin alleine auf Streife bin, und deute dann vorsichtig an, dass ihre Aussagen von Vorgesetzten vielleicht falsch verstanden werden könnten.",
    "ranking": "C, D, A, B",
    "begruendungen": {
      "C": "Beste Lösung zur Authentizität. Sie widersprechen der rechtlich unzulässigen Meinung offen und sachlich. Gerade die jüngeren Kollegen brauchen diese Orientierung, nicht ein späteres Signal im kleinen Kreis.",
      "D": "Sie sprechen es an, aber erst unter vier Augen und nur als Warnung vor Vorgesetzten. Der Maßstab bleibt persönliches Risiko, nicht die rechtsstaatliche Position vor der Gruppe.",
      "A": "Sie gehen und melden anonym. Distanz ist verständlich, die Kollegen im Raum bleiben aber ohne Widerspruch zurück.",
      "B": "Schlechteste Lösung. Mitlachen und Themenwechsel bestätigen die Position nach außen. Authentizität heißt hier, die eigene Haltung nicht dem Gruppenklima zu opfern."
    }
  },
  {
    "id": 5,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Nach einem Umbau Ihrer Dienststelle erteilen Sie den Auftrag, einen Vorschlag auszuarbeiten, wie die neuen Büroräume aufgeteilt werden sollen. Sie müssen sich dabei auch selbst ein Zimmer zuteilen. Die Kollegen haben sehr unterschiedliche, teils egoistische Wünsche.",
    "optionen": {
      "A": "Ich teile die Räume streng nach Dienstgrad und Dienstalter zu. Das ist das fairste objektive Kriterium und erspart mir endlose, emotionale Diskussionen mit den Kollegen.",
      "B": "Ich beziehe alle Betroffenen aktiv ein, hole mir Anregungen von Außenstehenden, stelle meine eigenen Interessen zurück und erreiche so in der Gruppe ein tragfähiges, gemeinsames Ergebnis.",
      "C": "Ich reserviere mir vorab das größte und ruhigste Büro als Entschädigung für den organisatorischen Aufwand und verteile den Rest der Zimmer dann nach den Wünschen der Kollegen.",
      "D": "Ich delegiere die unangenehme Planungsaufgabe kurzerhand an einen Dienstanfänger, da mir das Konfliktpotenzial in der Dienstgruppe bei diesem Thema viel zu hoch ist."
    },
    "A": "Ich teile die Räume streng nach Dienstgrad und Dienstalter zu. Das ist das fairste objektive Kriterium und erspart mir endlose, emotionale Diskussionen mit den Kollegen.",
    "B": "Ich beziehe alle Betroffenen aktiv ein, hole mir Anregungen von Außenstehenden, stelle meine eigenen Interessen zurück und erreiche so in der Gruppe ein tragfähiges, gemeinsames Ergebnis.",
    "C": "Ich reserviere mir vorab das größte und ruhigste Büro als Entschädigung für den organisatorischen Aufwand und verteile den Rest der Zimmer dann nach den Wünschen der Kollegen.",
    "D": "Ich delegiere die unangenehme Planungsaufgabe kurzerhand an einen Dienstanfänger, da mir das Konfliktpotenzial in der Dienstgruppe bei diesem Thema viel zu hoch ist.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Teamfähigkeit. Sie binden alle ein, holen auch Außenstehende dazu und stellen das eigene Interesse zurück. So entsteht eine Verteilung, die die Gruppe trägt.",
      "A": "Dienstgrad und Dienstalter sind ein klares, streitarme Kriterium. Fair im formalen Sinn, aber ohne Beteiligung und ohne Blick auf die tatsächliche Nutzung der Räume.",
      "C": "Sie bedienen die Wünsche der anderen erst, nachdem Sie sich das beste Büro gesichert haben. Die Verteilung wirkt dann wie ein Rest, nicht wie ein gemeinsames Ergebnis.",
      "D": "Schlechteste Lösung. Sie geben den unangenehmen Konflikt an einen Dienstanfänger ab. Teamfähigkeit zeigt sich daran, die Entscheidung selbst zu moderieren."
    }
  },
  {
    "id": 6,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Bei einer Verkehrskontrolle werden Sie von einem Autofahrer mit üblen Vorwürfen bedacht. Er ruft: 'Die Polizei soll lieber Verbrecher jagen, statt ehrbare Bürger unnötig aufzuhalten!' Er gestikuliert wild und weigert sich, die Papiere herauszugeben.",
    "optionen": {
      "A": "Ich besänftige den Fahrer, indem ich sowohl seine Bedürfnislage nach einem schnellen Feierabend als auch unsere polizeilichen Absichten der Verkehrssicherheit geschickt und ruhig thematisiere.",
      "B": "Ich breche die Maßnahme sofort ab und lasse ihn weiterfahren, da eine Eskalation bei einer simplen Verkehrskontrolle außer Verhältnis stünde.",
      "C": "Ich reagiere überhaupt nicht auf seine Provokationen, verziehe keine Miene und wiederhole monoton und distanziert meine Aufforderung, bis er nachgibt.",
      "D": "Ich fahre ihn lautstark an, fordere sofortige Kooperation und drohe ihm die Mitnahme auf die Wache wegen Widerstands an, falls er nicht augenblicklich ruhig ist."
    },
    "A": "Ich besänftige den Fahrer, indem ich sowohl seine Bedürfnislage nach einem schnellen Feierabend als auch unsere polizeilichen Absichten der Verkehrssicherheit geschickt und ruhig thematisiere.",
    "B": "Ich breche die Maßnahme sofort ab und lasse ihn weiterfahren, da eine Eskalation bei einer simplen Verkehrskontrolle außer Verhältnis stünde.",
    "C": "Ich reagiere überhaupt nicht auf seine Provokationen, verziehe keine Miene und wiederhole monoton und distanziert meine Aufforderung, bis er nachgibt.",
    "D": "Ich fahre ihn lautstark an, fordere sofortige Kooperation und drohe ihm die Mitnahme auf die Wache wegen Widerstands an, falls er nicht augenblicklich ruhig ist.",
    "ranking": "A, C, D, B",
    "begruendungen": {
      "A": "Beste Lösung zur emotionalen Intelligenz. Sie nehmen das Bedürfnis des Fahrers auf und erklären zugleich den Zweck der Kontrolle. So bleibt die Maßnahme möglich, ohne das Gegenüber zu überfahren.",
      "C": "Sie lassen sich nicht provozieren und wiederholen die Aufforderung. Das ist beherrscht, geht aber nicht auf ihn ein und kann die Eskalation nur verzögern.",
      "D": "Lautstärke und die Drohung mit der Wache setzen die Kontrolle durch. Das sichert den Ablauf, verfehlt aber die Deeskalation und ist bei einer Routinekontrolle unverhältnismäßig früh.",
      "B": "Schlechteste Lösung. Sie brechen die rechtmäßige Kontrolle ab, um Streit zu vermeiden. Emotionale Intelligenz heißt nicht, dem Druck nachzugeben."
    }
  },
  {
    "id": 7,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Bei einem Großeinsatz treffen Sie als Einsatzleiter eine taktische Fehlentscheidung, die dazu führt, dass ein Tatverdächtiger flüchten kann. Ihr Team ist frustriert über den enormen, aber erfolglosen Aufwand.",
    "optionen": {
      "A": "Ich reflektiere meine Entscheidung kritisch, übernehme in der Nachbesprechung offen die Verantwortung vor dem Team und zeige die Bereitschaft, aus diesem Fehler für künftige Lagen zu lernen.",
      "B": "Ich rechtfertige mein Handeln in der Besprechung vehement mit der unklaren Informationslage der Einsatzzentrale, um meine Autorität als Führungskraft nicht zu schwächen.",
      "C": "Ich lenke den Fokus sofort auf die Fehler der nachgeordneten Trupps, da diese meine Befehle nicht schnell genug umgesetzt haben, und kündige Nachschulungen an.",
      "D": "Ich hake den Vorfall unkommentiert ab, verfasse einen geschönten Einsatzbericht und verbiete dem Team, den Fehler im Nachgang weiter zu diskutieren."
    },
    "A": "Ich reflektiere meine Entscheidung kritisch, übernehme in der Nachbesprechung offen die Verantwortung vor dem Team und zeige die Bereitschaft, aus diesem Fehler für künftige Lagen zu lernen.",
    "B": "Ich rechtfertige mein Handeln in der Besprechung vehement mit der unklaren Informationslage der Einsatzzentrale, um meine Autorität als Führungskraft nicht zu schwächen.",
    "C": "Ich lenke den Fokus sofort auf die Fehler der nachgeordneten Trupps, da diese meine Befehle nicht schnell genug umgesetzt haben, und kündige Nachschulungen an.",
    "D": "Ich hake den Vorfall unkommentiert ab, verfasse einen geschönten Einsatzbericht und verbiete dem Team, den Fehler im Nachgang weiter zu diskutieren.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur Selbstreflexion. Sie benennen den Fehler vor dem Team, erklären Ihre damalige Abwägung und leiten daraus Konsequenzen ab. So bleibt Autorität erhalten, weil sie nicht auf Fehlerfreiheit beruht.",
      "B": "Sie stellen die Informationslage in den Vordergrund. Das ist ein Teil der Wahrheit, dient hier aber vor allem dazu, den Gesichtsverlust zu vermeiden.",
      "C": "Sie schließen die Sache schnell, weil niemand verletzt wurde. Der Aufwand und der Unmut der Kräfte bleiben unbearbeitet.",
      "D": "Schlechteste Lösung. Die Schuld wird auf Leitstelle und Erstsprecher geschoben. Selbstreflexion beginnt bei der eigenen Entscheidung, nicht bei der Datenlage der anderen."
    }
  },
  {
    "id": 8,
    "rolle": "Normaler Beamter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Sie und Ihr Streifenpartner sind sich völlig uneinig über die Arbeitsaufteilung bei der Anzeigenaufnahme. Der Konflikt schwelt schon lange und belastet das Klima im Streifenwagen spürbar.",
    "optionen": {
      "A": "Ich weigere mich ab sofort, weitere Anzeigen aufzunehmen, und überlasse ihm schweigend die gesamte Schreibarbeit, bis er von selbst merkt, dass etwas nicht stimmt.",
      "B": "Ich beschwere mich umgehend beim Dienstgruppenleiter über seine mangelnde Kooperationsbereitschaft und beantrage die sofortige Zuteilung eines neuen Streifenpartners.",
      "C": "Ich suche aktiv das Gespräch in einer ruhigen Minute, um zu verstehen, warum wir uneins sind, und lote konstruktiv aus, wie wir eine faire Einigung herbeiführen können.",
      "D": "Ich passe mich seinen Wünschen komplett an und übernehme künftig alle ungeliebten Aufgaben, um Konflikten aus dem Weg zu gehen und Harmonie zu erzwingen."
    },
    "A": "Ich weigere mich ab sofort, weitere Anzeigen aufzunehmen, und überlasse ihm schweigend die gesamte Schreibarbeit, bis er von selbst merkt, dass etwas nicht stimmt.",
    "B": "Ich beschwere mich umgehend beim Dienstgruppenleiter über seine mangelnde Kooperationsbereitschaft und beantrage die sofortige Zuteilung eines neuen Streifenpartners.",
    "C": "Ich suche aktiv das Gespräch in einer ruhigen Minute, um zu verstehen, warum wir uneins sind, und lote konstruktiv aus, wie wir eine faire Einigung herbeiführen können.",
    "D": "Ich passe mich seinen Wünschen komplett an und übernehme künftig alle ungeliebten Aufgaben, um Konflikten aus dem Weg zu gehen und Harmonie zu erzwingen.",
    "ranking": "C, A, B, D",
    "begruendungen": {
      "C": "Beste Lösung zum Konfliktmanagement. Sie suchen das Gespräch, um die Ursache der Unzufriedenheit zu verstehen, und arbeiten an einer tragfähigen Aufteilung. Der Konflikt wird bearbeitet, nicht verwaltet.",
      "A": "Schweigen und Arbeitsverweigerung machen den Unmut sichtbar, klären ihn aber nicht. Der Partner soll von selbst merken, was schiefläuft.",
      "B": "Die sofortige Meldung und der Wunsch nach einem neuen Partner umgehen das direkte Gespräch. Das ist erst der nächste Schritt, wenn das Gespräch scheitert.",
      "D": "Schlechteste Lösung. Sie übernehmen alle ungeliebten Aufgaben, nur damit Ruhe herrscht. Der Konflikt ist dann zu, die Ursache bleibt."
    }
  },
  {
    "id": 9,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Auf der Dienststelle fallen viele Kolleginnen und Kollegen aufgrund von Krankheit aus. Die darauffolgenden Wochen werden für das verbleibende Team extrem stressintensiv. Die Beschwerden häufen sich.",
    "optionen": {
      "A": "Ich stimme in das Klagelied der Kollegen ein, schimpfe lautstark über die mangelnde Personalplanung der Führung und zeige so Solidarität mit meiner Mannschaft.",
      "B": "Ich ordne pauschal und ohne Diskussion für alle verbliebenen Beamten Überstunden an und drohe mit Konsequenzen bei weiterer Kritik, da der Dienstbetrieb aufrechterhalten werden muss.",
      "C": "Ich melde mich selbst für zwei Wochen krank, da ich spüre, dass ich diesem enormen psychischen und physischen Druck als Dienstgruppenleiter nicht mehr gewachsen bin.",
      "D": "Ich bleibe ruhig, kümmere mich aktiv um Nachersatz, priorisiere die anfallenden Einsätze um und beweise durch mein überlegtes Handeln Durchhaltevermögen in dieser Krise."
    },
    "A": "Ich stimme in das Klagelied der Kollegen ein, schimpfe lautstark über die mangelnde Personalplanung der Führung und zeige so Solidarität mit meiner Mannschaft.",
    "B": "Ich ordne pauschal und ohne Diskussion für alle verbliebenen Beamten Überstunden an und drohe mit Konsequenzen bei weiterer Kritik, da der Dienstbetrieb aufrechterhalten werden muss.",
    "C": "Ich melde mich selbst für zwei Wochen krank, da ich spüre, dass ich diesem enormen psychischen und physischen Druck als Dienstgruppenleiter nicht mehr gewachsen bin.",
    "D": "Ich bleibe ruhig, kümmere mich aktiv um Nachersatz, priorisiere die anfallenden Einsätze um und beweise durch mein überlegtes Handeln Durchhaltevermögen in dieser Krise.",
    "ranking": "D, B, A, C",
    "begruendungen": {
      "D": "Beste Lösung zur Belastbarkeit. Sie bleiben ruhig, organisieren Ersatz, setzen Prioritäten und halten den Dienstbetrieb. Das Team sieht, dass Druck steuerbar ist.",
      "B": "Überstunden sichern die Besetzung, die pauschale Anordnung und die Drohung nehmen dem Team aber jede Mitsprache. Durchhalten wird hier mit Druck verwechselt.",
      "A": "Sie klagen mit. Das zeigt Nähe zur Mannschaft und verstärkt die Überlastung, statt sie zu ordnen.",
      "C": "Schlechteste Lösung. Die eigene Krankmeldung entlastet Sie und lässt die verbleibenden Kräfte allein. Belastbarkeit einer Führungskraft zeigt sich in der Krise, nicht im Ausstieg."
    }
  },
  {
    "id": 10,
    "rolle": "Normaler Beamter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Sie müssen einem aufgeregten Bürger einen komplexen rechtlichen Sachverhalt erklären, warum die Polizei in seinem zivilrechtlichen Nachbarschaftsstreit nicht einschreiten darf. Er wird zunehmend lauter.",
    "optionen": {
      "A": "Ich drücke mich inhaltlich präzise, verständlich und situationsangemessen aus, passe mein Sprachniveau an sein Verständnis an und zeige durch aktives Zuhören Interesse an seinem Problem.",
      "B": "Ich wimmle ihn mit dem knappen Hinweis auf den Zivilrechtsweg ab und drohe ihm einen Platzverweis an, falls er nicht sofort aufhört, laut zu werden.",
      "C": "Ich verstecke mich hinter extrem komplexen juristischen Fachbegriffen und zitieren Paragrafen, um meine Autorität zu untermauern und jede weitere Diskussion abzublocken.",
      "D": "Ich gebe ihm in allen Punkten recht, um ihn zu beruhigen, und verweise ihn dann an das Ordnungsamt, in der Hoffnung, dass diese Kollegen ihn übernehmen."
    },
    "A": "Ich drücke mich inhaltlich präzise, verständlich und situationsangemessen aus, passe mein Sprachniveau an sein Verständnis an und zeige durch aktives Zuhören Interesse an seinem Problem.",
    "B": "Ich wimmle ihn mit dem knappen Hinweis auf den Zivilrechtsweg ab und drohe ihm einen Platzverweis an, falls er nicht sofort aufhört, laut zu werden.",
    "C": "Ich verstecke mich hinter extrem komplexen juristischen Fachbegriffen und zitieren Paragrafen, um meine Autorität zu untermauern und jede weitere Diskussion abzublocken.",
    "D": "Ich gebe ihm in allen Punkten recht, um ihn zu beruhigen, und verweise ihn dann an das Ordnungsamt, in der Hoffnung, dass diese Kollegen ihn übernehmen.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur Kommunikationsfähigkeit. Sie erklären die Zuständigkeit verständlich, passen die Sprache an und hören zu. Der Bürger versteht die Grenze, ohne bloß abgewiesen zu werden.",
      "B": "Der Verweis auf den Zivilrechtsweg ist inhaltlich richtig, der knappe Ton und der angedrohte Platzverweis brechen das Gespräch aber ab.",
      "C": "Fachbegriffe und Paragrafen schaffen Distanz. Sie wirken überlegen und verhindern, dass der Sachverhalt ankommt.",
      "D": "Schlechteste Lösung. Sie geben ihm in der Sache recht, nur damit er ruhig wird, und schieben ihn weiter. Das ist weder korrekt noch hilfreich."
    }
  },
  {
    "id": 11,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Sie müssen entscheiden, wer an Silvester den unbeliebten Spätdienst übernehmen muss. Zur Auswahl stehen zwei Beamte: Einer ist ein enger privater Freund von Ihnen, der andere ein Kollege, mit dem Sie oft aneinandergeraten.",
    "optionen": {
      "A": "Ich teile den Kollegen ein, mit dem ich oft streite, und rechtfertige dies vage mit betrieblichen Notwendigkeiten, um meinem Freund den Gefallen zu tun.",
      "B": "Ich gehe fair mit beiden um, stelle persönliche Sympathien absolut in den Hintergrund und bemühe mich um eine objektive Entscheidung basierend auf dem Dienstplan des Vorjahres.",
      "C": "Ich teile vorsichtshalber meinen Freund ein, um mir von der Mannschaft keinesfalls den Vorwurf der Vetternwirtschaft gefallen lassen zu müssen.",
      "D": "Ich streiche den Spätdienst komplett aus dem Plan und fahre die Schicht in Unterbesetzung, um dieser unangenehmen und persönlichen Entscheidung aus dem Weg zu gehen."
    },
    "A": "Ich teile den Kollegen ein, mit dem ich oft streite, und rechtfertige dies vage mit betrieblichen Notwendigkeiten, um meinem Freund den Gefallen zu tun.",
    "B": "Ich gehe fair mit beiden um, stelle persönliche Sympathien absolut in den Hintergrund und bemühe mich um eine objektive Entscheidung basierend auf dem Dienstplan des Vorjahres.",
    "C": "Ich teile vorsichtshalber meinen Freund ein, um mir von der Mannschaft keinesfalls den Vorwurf der Vetternwirtschaft gefallen lassen zu müssen.",
    "D": "Ich streiche den Spätdienst komplett aus dem Plan und fahre die Schicht in Unterbesetzung, um dieser unangenehmen und persönlichen Entscheidung aus dem Weg zu gehen.",
    "ranking": "B, C, A, D",
    "begruendungen": {
      "B": "Beste Lösung zur Gerechtigkeit. Sympathie und Abneigung spielen keine Rolle, der Vorjahresplan ist ein nachvollziehbares Kriterium. Beide können die Entscheidung prüfen.",
      "C": "Sie teilen den Freund ein, um den Vorwurf der Bevorzugung zu vermeiden. Das ist vorsichtig, aber immer noch von der Beziehung bestimmt, nur in die andere Richtung.",
      "A": "Sie belasten den unbequemen Kollegen und tarnen das als betriebliche Notwendigkeit. Das ist die Bevorzugung, die Gerechtigkeit ausschließen soll.",
      "D": "Schlechteste Lösung. Der Spätdienst entfällt, die Schicht fährt unterbesetzt. Sie vermeiden die Entscheidung auf Kosten des Dienstbetriebs."
    }
  },
  {
    "id": 12,
    "rolle": "Normaler Beamter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Ihr Streifenpartner hat die Angewohnheit, bei Verkehrskontrollen den Bürgern sofort ins Wort zu fallen und einen extrem aggressiven Ton anzuschlagen. Dies eskaliert Routinesituationen regelmäßig unnötig.",
    "optionen": {
      "A": "Ich schreite während einer Kontrolle vor dem Bürger lautstark ein, weise meinen Partner scharf zurecht und übernehme demonstrativ die Gesprächsführung, um Schlimmeres zu verhindern.",
      "B": "Ich wähle einen ruhigen Moment auf der Wache, spreche mein Unbehagen über seine aggressive Kommunikation konstruktiv an und schlage eine klare Rollenverteilung für künftige Kontrollen vor.",
      "C": "Ich reagiere passiv, steige bei Kontrollen gar nicht mehr aus dem Streifenwagen aus und überlasse ihm die gesamte Arbeit, um nicht in seine Konflikte reingezogen zu werden.",
      "D": "Ich gehe hinter seinem Rücken zum Dienstgruppenleiter, melde sein unprofessionelles Verhalten und beantrage sofort die Zuteilung eines anderen Streifenpartners."
    },
    "A": "Ich schreite während einer Kontrolle vor dem Bürger lautstark ein, weise meinen Partner scharf zurecht und übernehme demonstrativ die Gesprächsführung, um Schlimmeres zu verhindern.",
    "B": "Ich wähle einen ruhigen Moment auf der Wache, spreche mein Unbehagen über seine aggressive Kommunikation konstruktiv an und schlage eine klare Rollenverteilung für künftige Kontrollen vor.",
    "C": "Ich reagiere passiv, steige bei Kontrollen gar nicht mehr aus dem Streifenwagen aus und überlasse ihm die gesamte Arbeit, um nicht in seine Konflikte reingezogen zu werden.",
    "D": "Ich gehe hinter seinem Rücken zum Dienstgruppenleiter, melde sein unprofessionelles Verhalten und beantrage sofort die Zuteilung eines anderen Streifenpartners.",
    "ranking": "B, A, D, C",
    "begruendungen": {
      "B": "Beste Lösung. Sie sprechen die aggressive Ansprache in ruhiger Minute an und schlagen eine klare Rollenverteilung vor. Der Bürger bekommt das nicht als Streit der Streife mit.",
      "A": "Sie stoppen ihn vor dem Bürger. Das verhindert die Eskalation sofort, stellt den Partner aber bloß und verlagert den Konflikt in die Kontrolle.",
      "D": "Die Meldung beim DGL schaltet eine höhere Ebene ein, bevor Sie das Gespräch gesucht haben. Sinnvoll als Folge, nicht als erster Schritt.",
      "C": "Schlechteste Lösung. Sie steigen nicht mehr aus und überlassen ihm die Lage. Der Konflikt wird vermieden, die Kontrollen bleiben aggressiv."
    }
  },
  {
    "id": 13,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Eine interne Statistik zeigt, dass in einer bestimmten Dienstgruppe die Fehlerquote bei der Anzeigenaufnahme extrem gestiegen ist. Der zuständige DGL ist ein 'Kumpeltyp', der Konfrontationen meidet.",
    "optionen": {
      "A": "Ich ordne sofort für die gesamte Dienstgruppe Nachschulungen an und streiche alle Sonderurlaube, bis sich die statistische Fehlerquote signifikant verbessert hat.",
      "B": "Ich lade den DGL zu einem Feedbackgespräch ein, spreche die Defizite klar an, diskutiere sein Führungsverständnis und vereinbare verbindliche, messbare Ziele zur Fehlerreduktion.",
      "C": "Ich versetze den DGL ohne Vorwarnung in den Innendienst und setze einen strengen, autoritären Nachfolger ein, um die Dienstgruppe schnellstmöglich wieder auf Linie zu bringen.",
      "D": "Ich ignoriere die Statistik vorerst, da der DGL bei seiner Mannschaft sehr beliebt ist und ich das gute Betriebsklima auf der Dienststelle nicht gefährden möchte."
    },
    "A": "Ich ordne sofort für die gesamte Dienstgruppe Nachschulungen an und streiche alle Sonderurlaube, bis sich die statistische Fehlerquote signifikant verbessert hat.",
    "B": "Ich lade den DGL zu einem Feedbackgespräch ein, spreche die Defizite klar an, diskutiere sein Führungsverständnis und vereinbare verbindliche, messbare Ziele zur Fehlerreduktion.",
    "C": "Ich versetze den DGL ohne Vorwarnung in den Innendienst und setze einen strengen, autoritären Nachfolger ein, um die Dienstgruppe schnellstmöglich wieder auf Linie zu bringen.",
    "D": "Ich ignoriere die Statistik vorerst, da der DGL bei seiner Mannschaft sehr beliebt ist und ich das gute Betriebsklima auf der Dienststelle nicht gefährden möchte.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Führung. Sie sprechen die Fehlerquote und sein konfliktarmes Führungsbild direkt an und vereinbaren messbare Ziele. Kritik bleibt am Verantwortlichen, nicht an der ganzen Gruppe.",
      "A": "Nachschulung und gestrichener Sonderurlaub für alle erhöhen den Druck. Die Ursache in der Führung der Gruppe wird damit nicht bearbeitet.",
      "C": "Die Versetzung ohne Gespräch tauscht die Person aus, statt das Verhalten zu korrigieren. Schnell, aber ohne Entwicklung und ohne Anhörung.",
      "D": "Schlechteste Lösung. Sie lassen die Zahlen liegen, weil der DGL beliebt ist. Führung weicht hier dem Betriebsklima."
    }
  },
  {
    "id": 14,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Sie haben in einem extrem schwierigen Einsatz unter Lebensgefahr hervorragend gehandelt. Ihr DGL lobt Sie vor der versammelten Schicht in höchsten Tönen. Sie wissen jedoch, dass ein anderer Kollege den entscheidenden taktischen Hinweis gab.",
    "optionen": {
      "A": "Ich zeige hohe Glaubwürdigkeit, bedanke mich für das Lob, positioniere mich aber sofort offen und stelle klar, dass der Einsatzerfolg maßgeblich auf dem entscheidenden Hinweis meines Kollegen beruhte.",
      "B": "Ich nehme das Lob schweigend an, genieße den Respekt der Mannschaft und bedanke mich später heimlich unter vier Augen bei dem Kollegen für seinen Beitrag.",
      "C": "Ich weise das Lob übertrieben bescheiden komplett von mir, spiele meine eigene Leistung völlig herunter und behaupte, jeder andere hätte genauso gehandelt.",
      "D": "Ich fordere den DGL auf, solche öffentlichen Lobeshymnen künftig zu unterlassen, da sie nur Neid und Missgunst innerhalb der Dienstgruppe schüren."
    },
    "A": "Ich zeige hohe Glaubwürdigkeit, bedanke mich für das Lob, positioniere mich aber sofort offen und stelle klar, dass der Einsatzerfolg maßgeblich auf dem entscheidenden Hinweis meines Kollegen beruhte.",
    "B": "Ich nehme das Lob schweigend an, genieße den Respekt der Mannschaft und bedanke mich später heimlich unter vier Augen bei dem Kollegen für seinen Beitrag.",
    "C": "Ich weise das Lob übertrieben bescheiden komplett von mir, spiele meine eigene Leistung völlig herunter und behaupte, jeder andere hätte genauso gehandelt.",
    "D": "Ich fordere den DGL auf, solche öffentlichen Lobeshymnen künftig zu unterlassen, da sie nur Neid und Missgunst innerhalb der Dienstgruppe schüren.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur Authentizität. Sie nehmen das Lob an und stellen sofort klar, dass der entscheidende Hinweis vom Kollegen kam. Glaubwürdig ist, wer den Erfolg nicht für sich behält.",
      "B": "Sie genießen die Wirkung nach außen und danken erst unter vier Augen. Der Kollege wird gesehen, die Mannschaft aber nicht.",
      "C": "Übertriebene Bescheidenheit spielt die eigene und seine Leistung herunter. Das klingt höflich und bleibt ungenau.",
      "D": "Schlechteste Lösung. Sie weisen öffentliches Lob grundsätzlich zurück, weil es Neid erzeugen könnte. Damit vermeiden Sie die klare Zuordnung, um die es geht."
    }
  },
  {
    "id": 15,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Während eines laufenden Banküberfalls mit Geiselnahme fällt das Funksystem komplett aus. Sie sind als ersteintreffender Führer vor Ort und müssen die Absperrmaßnahmen koordinieren, haben aber keinen Kontakt zur Einsatzzentrale.",
    "optionen": {
      "A": "Ich delegiere die Verantwortung an den dienstältesten Kollegen vor Ort und fahre selbst schnell zur Wache zurück, um die Funkprobleme mit der Technik zu klären.",
      "B": "Ich zögere, weise meine Kräfte an, sich verdeckt zu halten und strikt nichts zu unternehmen, bis das Funksystem wieder funktioniert und Befehle von oben kommen.",
      "C": "Ich treffe unter diesen unsicheren Rahmenbedingungen eigenständig klare Entscheidungen zur weiträumigen Absperrung, agiere vorausschauend und übernehme später die volle Verantwortung für mein Handeln.",
      "D": "Ich ordne einen sofortigen, unkoordinierten Zugriff auf die Bank an, um die Situation schnell aufzulösen, bevor sich die mediale Lage durch den fehlenden Funkverkehr verschlimmert."
    },
    "A": "Ich delegiere die Verantwortung an den dienstältesten Kollegen vor Ort und fahre selbst schnell zur Wache zurück, um die Funkprobleme mit der Technik zu klären.",
    "B": "Ich zögere, weise meine Kräfte an, sich verdeckt zu halten und strikt nichts zu unternehmen, bis das Funksystem wieder funktioniert und Befehle von oben kommen.",
    "C": "Ich treffe unter diesen unsicheren Rahmenbedingungen eigenständig klare Entscheidungen zur weiträumigen Absperrung, agiere vorausschauend und übernehme später die volle Verantwortung für mein Handeln.",
    "D": "Ich ordne einen sofortigen, unkoordinierten Zugriff auf die Bank an, um die Situation schnell aufzulösen, bevor sich die mediale Lage durch den fehlenden Funkverkehr verschlimmert.",
    "ranking": "C, A, B, D",
    "begruendungen": {
      "C": "Beste Lösung zur Entscheidungskompetenz. Ohne Funk entscheiden Sie vor Ort über die Absperrung und stehen danach dafür ein. In der Lage zählt handlungsfähige Verantwortung, nicht das Warten auf die Zentrale.",
      "A": "Sie delegieren an den Dienstältesten und fahren selbst zur Technik. Die Absperrung bleibt besetzt, Sie verlassen aber den Ort, an dem geführt werden muss.",
      "B": "Abwarten bis der Funk wieder steht vermeidet eine Fehlentscheidung und lässt die Lage in der Zwischenzeit unbeantwortet.",
      "D": "Schlechteste Lösung. Der sofortige, unkoordinierte Zugriff ersetzt die fehlende Verbindung durch Aktion. Das erhöht die Gefahr für Geiseln und Kräfte."
    }
  },
  {
    "id": 16,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Ein neuer, sehr unsicherer Kollege wird Ihrer Dienstgruppe zugeteilt. Bei seiner ersten Anzeigenaufnahme macht er formelle Fehler. Die erfahrenen Kollegen lachen ihn in der Teeküche dafür aus.",
    "optionen": {
      "A": "Ich lache mit den erfahrenen Kollegen mit, um meine eigene Position in der Gruppe nicht zu schwächen und nicht als Außenseiter abgestempelt zu werden.",
      "B": "Ich melde das unkollegiale Verhalten der älteren Beamten sofort schriftlich beim Dienstgruppenleiter und fordere disziplinarische Maßnahmen wegen Mobbings.",
      "C": "Ich ziehe mich aus der Situation zurück, mische mich nicht in das Gespräch ein und lasse den neuen Kollegen seine Probleme selbst lösen.",
      "D": "Ich biete dem neuen Kollegen proaktiv meine Unterstützung an, erkläre ihm abseits der Gruppe ruhig die richtigen Abläufe und binde ihn so konstruktiv ins Team ein."
    },
    "A": "Ich lache mit den erfahrenen Kollegen mit, um meine eigene Position in der Gruppe nicht zu schwächen und nicht als Außenseiter abgestempelt zu werden.",
    "B": "Ich melde das unkollegiale Verhalten der älteren Beamten sofort schriftlich beim Dienstgruppenleiter und fordere disziplinarische Maßnahmen wegen Mobbings.",
    "C": "Ich ziehe mich aus der Situation zurück, mische mich nicht in das Gespräch ein und lasse den neuen Kollegen seine Probleme selbst lösen.",
    "D": "Ich biete dem neuen Kollegen proaktiv meine Unterstützung an, erkläre ihm abseits der Gruppe ruhig die richtigen Abläufe und binde ihn so konstruktiv ins Team ein.",
    "ranking": "D, B, C, A",
    "begruendungen": {
      "D": "Beste Lösung zur Teamfähigkeit. Sie helfen ihm abseits der Gruppe beim korrekten Ablauf und holen ihn so in die Schicht, ohne die anderen vorzuführen.",
      "B": "Die schriftliche Meldung wegen Mobbings schützt ihn formal. Sie ersetzt aber nicht die praktische Einarbeitung und eskaliert den Vorfall sofort.",
      "C": "Sie halten sich heraus. Der neue Kollege bleibt mit dem Spott allein und lernt den Ablauf nicht.",
      "A": "Schlechteste Lösung. Mitlachen sichert Ihren Platz in der Gruppe und macht die Ausgrenzung mit. Teamfähigkeit gilt auch gegenüber dem Neuen."
    }
  },
  {
    "id": 17,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Sie überbringen einer Ehefrau die Nachricht vom Unfalltod ihres Mannes. Sie bricht weinend zusammen, klammert sich an Ihre Uniform und bittet Sie, sie nicht alleine zu lassen.",
    "optionen": {
      "A": "Ich löse mich behutsam, zeige tiefe Empathie für ihren Schmerz, bleibe bei ihr, bis Angehörige oder die Notfallseelsorge eintreffen, und reagiere angemessen auf ihre starken Emotionen.",
      "B": "Ich weise sie professionell, aber bestimmt darauf hin, dass meine polizeiliche Aufgabe erfüllt ist, und verlasse zügig die Wohnung, da mich solche Situationen selbst belasten.",
      "C": "Ich fange an, gemeinsam mit ihr zu weinen, da mich das Schicksal stark mitnimmt, und verliere dadurch meine professionelle polizeiliche Distanz zur Situation.",
      "D": "Ich drücke sie bestimmt von mir weg, erinnere sie an die Sachlichkeit der Situation und fordere sie auf, sich zusammenzureißen, damit ich das Protokoll ausfüllen kann."
    },
    "A": "Ich löse mich behutsam, zeige tiefe Empathie für ihren Schmerz, bleibe bei ihr, bis Angehörige oder die Notfallseelsorge eintreffen, und reagiere angemessen auf ihre starken Emotionen.",
    "B": "Ich weise sie professionell, aber bestimmt darauf hin, dass meine polizeiliche Aufgabe erfüllt ist, und verlasse zügig die Wohnung, da mich solche Situationen selbst belasten.",
    "C": "Ich fange an, gemeinsam mit ihr zu weinen, da mich das Schicksal stark mitnimmt, und verliere dadurch meine professionelle polizeiliche Distanz zur Situation.",
    "D": "Ich drücke sie bestimmt von mir weg, erinnere sie an die Sachlichkeit der Situation und fordere sie auf, sich zusammenzureißen, damit ich das Protokoll ausfüllen kann.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur emotionalen Intelligenz. Sie bleiben, bis Angehörige oder Seelsorge da sind, und halten dabei die professionelle Grenze. Empathie zeigt sich im Bleiben, nicht im Mitweinen.",
      "B": "Sie beenden den Auftrag, sobald die Nachricht überbracht ist. Das ist sachlich abgeschlossen und lässt die Frau in der akutesten Phase allein.",
      "C": "Sie weinen mit. Das Mitgefühl ist echt, die nötige Ruhe und Handlungsfähigkeit gehen dabei verloren.",
      "D": "Schlechteste Lösung. Wegdrücken und die Aufforderung, sich zusammenzureißen, missachten die Lage. Das Protokoll wird wichtiger als der Mensch."
    }
  },
  {
    "id": 18,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Eine Mitarbeiterbefragung ergibt, dass Ihr Führungsstil von vielen Kollegen als zu autoritär, mikro-managend und wenig wertschätzend empfunden wird. Sie sind von diesem Ergebnis überrascht.",
    "optionen": {
      "A": "Ich ignoriere die Ergebnisse der Befragung, da die Belegschaft in Zeiten hoher Belastung ohnehin immer unzufrieden ist und ich an meinem bewährten Stil festhalte.",
      "B": "Ich suche den Fehler bei den Fragestellern, erkläre die Methodik der Umfrage für ungültig und verbiete künftige anonyme Befragungen auf meiner Dienststelle.",
      "C": "Ich zeige die Bereitschaft, aus der Kritik zu lernen, setze mich selbstkritisch mit der Wirkung meines Verhaltens auseinander und initiiere Workshops zur Verbesserung der Führungskultur.",
      "D": "Ich delegiere ab sofort alle ungeliebten Führungsaufgaben an meinen Stellvertreter, um mich bei der Mannschaft wieder beliebter zu machen und Konflikten aus dem Weg zu gehen."
    },
    "A": "Ich ignoriere die Ergebnisse der Befragung, da die Belegschaft in Zeiten hoher Belastung ohnehin immer unzufrieden ist und ich an meinem bewährten Stil festhalte.",
    "B": "Ich suche den Fehler bei den Fragestellern, erkläre die Methodik der Umfrage für ungültig und verbiete künftige anonyme Befragungen auf meiner Dienststelle.",
    "C": "Ich zeige die Bereitschaft, aus der Kritik zu lernen, setze mich selbstkritisch mit der Wirkung meines Verhaltens auseinander und initiiere Workshops zur Verbesserung der Führungskultur.",
    "D": "Ich delegiere ab sofort alle ungeliebten Führungsaufgaben an meinen Stellvertreter, um mich bei der Mannschaft wieder beliebter zu machen und Konflikten aus dem Weg zu gehen.",
    "ranking": "C, A, D, B",
    "begruendungen": {
      "C": "Beste Lösung zur Selbstreflexion. Sie nehmen die Rückmeldung ernst, prüfen die Wirkung Ihres Stils und ändern die Führungskultur messbar. Überraschung ist kein Grund, das Ergebnis zu verwerfen.",
      "A": "Sie halten den Stil für bewährt und schieben die Kritik auf die Belastung. Damit schützen Sie das eigene Bild und lernen nichts.",
      "D": "Sie geben unangenehme Führung ab, um beliebter zu werden. Das reagiert auf die Umfrage, bearbeitet aber nicht Ihr Verhalten.",
      "B": "Schlechteste Lösung. Sie erklären die Befragung für ungültig und untersagen weitere anonyme Rückmeldungen. Die Kritik wird abgeschnitten statt geprüft."
    }
  },
  {
    "id": 19,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Zwei Ihrer Beamten streiten sich lautstark im Wachraum über die Zuteilung der neuen Streifenwagen. Die Situation eskaliert verbal vor den Augen von Bürgern, die eine Anzeige erstatten wollen.",
    "optionen": {
      "A": "Ich trenne die beiden sofort, verweise sie in mein Büro und analysiere dort in Ruhe den Konflikt, um eine für beide Seiten faire und sachliche Lösung zu erarbeiten.",
      "B": "Ich brülle beide vor den Bürgern lauter an, als sie selbst streiten, um sofortige Dominanz zu zeigen und den Konflikt durch Androhung von Disziplinarverfahren zu beenden.",
      "C": "Ich schließe demonstrativ die Tür zu meinem Büro, um nicht involviert zu werden, und überlasse es den beiden, ihren Streit wie Erwachsene selbst zu klären.",
      "D": "Ich entziehe beiden für einen Monat das Recht, einen neuen Streifenwagen zu fahren, um ein hartes Exempel zu statuieren, unabhängig davon, wer im Recht war."
    },
    "A": "Ich trenne die beiden sofort, verweise sie in mein Büro und analysiere dort in Ruhe den Konflikt, um eine für beide Seiten faire und sachliche Lösung zu erarbeiten.",
    "B": "Ich brülle beide vor den Bürgern lauter an, als sie selbst streiten, um sofortige Dominanz zu zeigen und den Konflikt durch Androhung von Disziplinarverfahren zu beenden.",
    "C": "Ich schließe demonstrativ die Tür zu meinem Büro, um nicht involviert zu werden, und überlasse es den beiden, ihren Streit wie Erwachsene selbst zu klären.",
    "D": "Ich entziehe beiden für einen Monat das Recht, einen neuen Streifenwagen zu fahren, um ein hartes Exempel zu statuieren, unabhängig davon, wer im Recht war.",
    "ranking": "A, B, D, C",
    "begruendungen": {
      "A": "Beste Lösung zum Konfliktmanagement. Sie trennen die beiden sofort vor den Bürgern und klären die Sache danach sachlich. Der Streit wird gestoppt, ohne ihn öffentlich zu entscheiden.",
      "B": "Anbrüllen und die Drohung mit dem Disziplinarrecht beenden den Lärm. Vor den Anzeigenerstattern wird die Führung damit selbst zum Teil des Streits.",
      "D": "Beiden pauschal den neuen Wagen zu entziehen setzt ein Exempel, unabhängig davon, wer recht hat. Der Konflikt ist bestraft, nicht gelöst.",
      "C": "Schlechteste Lösung. Sie schließen die Tür. Die Bürger sehen den Streit, und niemand führt."
    }
  },
  {
    "id": 20,
    "rolle": "Normaler Beamter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Sie sichern eine Großveranstaltung ab. Eine Gruppe alkoholisierter Hooligans bedrängt Sie und Ihren Kollegen massiv, provoziert verbal und kommt Ihnen körperlich extrem nahe. Die Unterstützungskräfte brauchen noch 5 Minuten.",
    "optionen": {
      "A": "Ich ziehe sofort den Einsatzstock und sprühe Pfefferspray in die Menge, um ein klares Zeichen der Stärke zu setzen und die Gruppe präventiv zurückzudrängen.",
      "B": "Ich flüchte mit meinem Kollegen rennend in ein Nebengebäude und verriegele die Tür, bis die geschlossenen Einheiten eintreffen, um jedem Risiko aus dem Weg zu gehen.",
      "C": "Ich steuere mein Verhalten bewusst, bleibe äußerlich ruhig, halte professionellen Abstand, kommuniziere deeskalierend und bleibe handlungsfähig, bis die Verstärkung eintrifft.",
      "D": "Ich lasse mich von den Provokationen anstecken, beleidige die Rädelsführer lautstark zurück und lasse mich auf ein Handgemenge ein, um meine Ehre zu verteidigen."
    },
    "A": "Ich ziehe sofort den Einsatzstock und sprühe Pfefferspray in die Menge, um ein klares Zeichen der Stärke zu setzen und die Gruppe präventiv zurückzudrängen.",
    "B": "Ich flüchte mit meinem Kollegen rennend in ein Nebengebäude und verriegele die Tür, bis die geschlossenen Einheiten eintreffen, um jedem Risiko aus dem Weg zu gehen.",
    "C": "Ich steuere mein Verhalten bewusst, bleibe äußerlich ruhig, halte professionellen Abstand, kommuniziere deeskalierend und bleibe handlungsfähig, bis die Verstärkung eintrifft.",
    "D": "Ich lasse mich von den Provokationen anstecken, beleidige die Rädelsführer lautstark zurück und lasse mich auf ein Handgemenge ein, um meine Ehre zu verteidigen.",
    "ranking": "C, A, B, D",
    "begruendungen": {
      "C": "Beste Lösung zur Belastbarkeit. Sie halten Abstand, bleiben ruhig und deeskalieren, bis die Verstärkung da ist. Handlungsfähig bleiben heißt hier, die fünf Minuten zu überstehen, nicht sie abzukürzen.",
      "A": "Schlagstock und Pfefferspray schaffen sofort Abstand. Bei reiner Provokation ohne Angriff ist das zu früh und kann die Lage verschärfen.",
      "B": "Der Rückzug in ein verschlossenes Gebäude vermeidet die Gefahr und gibt den Platz auf. Schutz ja, die Aufgabe der Absicherung bleibt liegen.",
      "D": "Schlechteste Lösung. Sie lassen sich auf Beleidigung und Handgemenge ein. Die Provokation hat dann die Kontrolle übernommen."
    }
  },
  {
    "id": 21,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Sie müssen Ihrer Schicht ein neues, sehr bürokratisches und unbeliebtes Zeiterfassungssystem des Präsidiums präsentieren, das ab sofort zwingend genutzt werden muss.",
    "optionen": {
      "A": "Ich verteile lediglich einen schriftlichen Befehl zur Nutzung und entziehe mich so den unangenehmen Fragen und dem erwartbaren Frust der Mannschaft.",
      "B": "Ich stelle mich vor die Mannschaft, distanziere mich lautstark von 'denen da oben', erkläre das System für unsinnig, fordere aber dennoch die widerwillige Nutzung.",
      "C": "Ich strukturiere meine Präsentation klar, erkläre sachlich und zielgruppengerecht die Vorgaben, lasse Rückfragen zu und versuche, die Vorteile objektiv darzustellen.",
      "D": "Ich drohe direkt zu Beginn der Präsentation jedem mit Disziplinarverfahren, der das neue System boykottiert oder kritische Fragen dazu stellt."
    },
    "A": "Ich verteile lediglich einen schriftlichen Befehl zur Nutzung und entziehe mich so den unangenehmen Fragen und dem erwartbaren Frust der Mannschaft.",
    "B": "Ich stelle mich vor die Mannschaft, distanziere mich lautstark von 'denen da oben', erkläre das System für unsinnig, fordere aber dennoch die widerwillige Nutzung.",
    "C": "Ich strukturiere meine Präsentation klar, erkläre sachlich und zielgruppengerecht die Vorgaben, lasse Rückfragen zu und versuche, die Vorteile objektiv darzustellen.",
    "D": "Ich drohe direkt zu Beginn der Präsentation jedem mit Disziplinarverfahren, der das neue System boykottiert oder kritische Fragen dazu stellt.",
    "ranking": "C, A, D, B",
    "begruendungen": {
      "C": "Beste Lösung zur Kommunikationsfähigkeit. Sie erklären die Vorgabe zielgruppengerecht, lassen Fragen zu und benennen auch den Nutzen. Unbeliebt bleibt die Regel, verstanden wird sie trotzdem.",
      "A": "Ein schriftlicher Befehl informiert formal. Sie entziehen sich der Rückmeldung, die bei so einer Änderung nötig ist.",
      "D": "Die Drohung mit dem Disziplinarrecht erzwingt Nutzung und beendet jede Frage. Kommunikation wird durch Gehorsam ersetzt.",
      "B": "Schlechteste Lösung. Sie stellen sich gegen die Behördenleitung und verlangen trotzdem Befolgung. Die Mannschaft bekommt weder Orientierung noch ein tragfähiges Signal."
    }
  },
  {
    "id": 22,
    "rolle": "Normaler Beamter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Bei der Bearbeitung von Bagatelldelikten (Ladendiebstahl) fällt Ihnen auf, dass ein Kollege bei Beschuldigten mit Migrationshintergrund deutlich härter und kleinlicher agiert als bei einheimischen Beschuldigten.",
    "optionen": {
      "A": "Ich ignoriere das Verhalten, da jeder Beamte bei der Anzeigenaufnahme einen gewissen Ermessensspielraum hat und ich den Kollegen nicht belehren möchte.",
      "B": "Ich melde den Kollegen sofort und ohne Vorwarnung wegen Rassismus beim Dienststellenleiter und verlange seine sofortige Versetzung in den Innendienst.",
      "C": "Ich spreche den Kollegen unter vier Augen auf meine Beobachtungen an, fordere objektive Fairness und erinnere ihn nachdrücklich an den polizeilichen Gleichbehandlungsgrundsatz.",
      "D": "Ich passe mich seinem Verhalten an, wenn wir gemeinsam auf Streife sind, um Konflikte im Auto zu vermeiden und Einigkeit nach außen zu demonstrieren."
    },
    "A": "Ich ignoriere das Verhalten, da jeder Beamte bei der Anzeigenaufnahme einen gewissen Ermessensspielraum hat und ich den Kollegen nicht belehren möchte.",
    "B": "Ich melde den Kollegen sofort und ohne Vorwarnung wegen Rassismus beim Dienststellenleiter und verlange seine sofortige Versetzung in den Innendienst.",
    "C": "Ich spreche den Kollegen unter vier Augen auf meine Beobachtungen an, fordere objektive Fairness und erinnere ihn nachdrücklich an den polizeilichen Gleichbehandlungsgrundsatz.",
    "D": "Ich passe mich seinem Verhalten an, wenn wir gemeinsam auf Streife sind, um Konflikte im Auto zu vermeiden und Einigkeit nach außen zu demonstrieren.",
    "ranking": "C, B, A, D",
    "begruendungen": {
      "C": "Beste Lösung zur Gerechtigkeit. Sie sprechen die ungleiche Härte unter vier Augen an und erinnern an den Gleichbehandlungsgrundsatz. Zuerst die konkrete Beobachtung, nicht das öffentliche Urteil.",
      "B": "Die sofortige Meldung als Rassismus und die Forderung nach Versetzung überspringen das Gespräch. Der Vorwurf kann berechtigt sein, der erste Schritt ist hier das direkte Ansprechen.",
      "A": "Sie nennen es Ermessen und sehen weg. Ungleiche Maßstäbe bleiben dann bestehen.",
      "D": "Schlechteste Lösung. Sie passen sich an, damit im Auto Ruhe ist. Damit wird die Ungleichbehandlung zum gemeinsamen Vorgehen."
    }
  },
  {
    "id": 23,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Ihre Dienststelle soll in wenigen Monaten in ein komplett neues, digitales Vorgangsbearbeitungssystem wechseln. Viele ältere Beamte äußern massive Ängste und drohen mit innerer Kündigung.",
    "optionen": {
      "A": "Ich ignoriere die Ängste, verweise auf die dienstliche Pflicht zur Fortbildung und ordne den Übergang als reinen Verwaltungsakt an.",
      "B": "Ich übernehme Verantwortung, kommuniziere transparent, organisiere frühzeitig gezielte Schulungen (Multiplikatoren) und motiviere die Belegschaft durch eine positive Fehlerkultur.",
      "C": "Ich verschiebe die Einführung des Systems auf unbestimmte Zeit, um den Frieden auf der Dienststelle zu wahren und mich nicht mit der Basis anzulegen.",
      "D": "Ich versetze die größten Kritiker des neuen Systems präventiv in andere Abteilungen, um Widerstand im Keim zu ersticken."
    },
    "A": "Ich ignoriere die Ängste, verweise auf die dienstliche Pflicht zur Fortbildung und ordne den Übergang als reinen Verwaltungsakt an.",
    "B": "Ich übernehme Verantwortung, kommuniziere transparent, organisiere frühzeitig gezielte Schulungen (Multiplikatoren) und motiviere die Belegschaft durch eine positive Fehlerkultur.",
    "C": "Ich verschiebe die Einführung des Systems auf unbestimmte Zeit, um den Frieden auf der Dienststelle zu wahren und mich nicht mit der Basis anzulegen.",
    "D": "Ich versetze die größten Kritiker des neuen Systems präventiv in andere Abteilungen, um Widerstand im Keim zu ersticken.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Führung. Sie bleiben beim Wechsel, erklären ihn, schulen früh und lassen Fehler in der Umstellung zu. Die Ängste werden bearbeitet, nicht ausgesessen.",
      "A": "Der Verweis auf die Fortbildungspflicht setzt den Termin durch. Die Sorge der älteren Beamten bleibt unbeantwortet, der Widerstand auch.",
      "C": "Die Einführung auf unbestimmte Zeit zu verschieben erhält den Frieden und gibt das Ziel auf, sobald die Basis widerspricht.",
      "D": "Schlechteste Lösung. Kritiker werden versetzt, damit niemand widerspricht. Führung beseitigt hier die Menschen, nicht das Problem."
    }
  },
  {
    "id": 24,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "In der Nachtschicht ist eine wichtige Beweismittelkühlung defekt. Die Asservate (Blutproben) drohen unbrauchbar zu werden. Der technische Notdienst ist nicht erreichbar.",
    "optionen": {
      "A": "Ich treffe unter Zeitdruck die Entscheidung, die Proben in einen privaten Kühlschrank auf der Wache umzulagern, dokumentiere dies lückenlos und übernehme die Verantwortung.",
      "B": "Ich lasse die Proben im defekten Kühlschrank, da ich ohne Erlaubnis des Staatsanwalts keine Beweismittel bewegen darf, auch wenn sie dadurch zerstört werden.",
      "C": "Ich rufe den Dienststellenleiter um 03:00 Uhr nachts an, um mir von ihm die Erlaubnis zum Umlagern der Proben geben zu lassen, um mich abzusichern.",
      "D": "Ich werfe die Proben weg und vermerke einen technischen Defekt in der Akte, um später keine juristischen Diskussionen über die Kühlkette führen zu müssen."
    },
    "A": "Ich treffe unter Zeitdruck die Entscheidung, die Proben in einen privaten Kühlschrank auf der Wache umzulagern, dokumentiere dies lückenlos und übernehme die Verantwortung.",
    "B": "Ich lasse die Proben im defekten Kühlschrank, da ich ohne Erlaubnis des Staatsanwalts keine Beweismittel bewegen darf, auch wenn sie dadurch zerstört werden.",
    "C": "Ich rufe den Dienststellenleiter um 03:00 Uhr nachts an, um mir von ihm die Erlaubnis zum Umlagern der Proben geben zu lassen, um mich abzusichern.",
    "D": "Ich werfe die Proben weg und vermerke einen technischen Defekt in der Akte, um später keine juristischen Diskussionen über die Kühlkette führen zu müssen.",
    "ranking": "A, C, B, D",
    "begruendungen": {
      "A": "Beste Lösung zur Entscheidungskompetenz. Unter Zeitdruck lagern Sie die Proben um, dokumentieren das lückenlos und stehen dafür. Die Kühlkette zu retten ist hier wichtiger als das Warten auf eine Erlaubnis, die niemand erteilt.",
      "C": "Der Anruf beim Dienststellenleiter um drei Uhr sichert Sie ab. Die Entscheidung wird nach oben geschoben, die Proben bleiben so lange in Gefahr.",
      "B": "Sie lassen die Proben verderben, weil eine formale Erlaubnis fehlt. Rechtssicherheit wird wichtiger als der Beweis selbst.",
      "D": "Schlechteste Lösung. Wegwerfen und ein geschönter Vermerk beseitigen das Problem nur in der Akte. Das ist keine Entscheidung, sondern eine Vertuschung."
    }
  },
  {
    "id": 25,
    "rolle": "Normaler Beamter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Ein Vorgesetzter verlangt von Ihnen, in einem Einsatzbericht ein Detail 'großzügig auszulassen', um eine fehlerhafte Anweisung von ihm zu vertuschen.",
    "optionen": {
      "A": "Ich füge mich der Anweisung, um meine Karrierechancen nicht zu gefährden und meinem Vorgesetzten Loyalität zu beweisen.",
      "B": "Ich verweigere die Fälschung des Berichts bestimmt, beziehe offen Stellung zu meinen rechtsstaatlichen Werten und melde den Vorfall, wenn er auf seiner Forderung beharrt.",
      "C": "Ich schreibe den Bericht wie gewünscht, speichere mir aber heimlich eine Kopie des Originals, um ihn später erpressen zu können.",
      "D": "Ich melde mich für den Rest der Woche krank, um den Bericht nicht schreiben zu müssen und der Konfrontation aus dem Weg zu gehen."
    },
    "A": "Ich füge mich der Anweisung, um meine Karrierechancen nicht zu gefährden und meinem Vorgesetzten Loyalität zu beweisen.",
    "B": "Ich verweigere die Fälschung des Berichts bestimmt, beziehe offen Stellung zu meinen rechtsstaatlichen Werten und melde den Vorfall, wenn er auf seiner Forderung beharrt.",
    "C": "Ich schreibe den Bericht wie gewünscht, speichere mir aber heimlich eine Kopie des Originals, um ihn später erpressen zu können.",
    "D": "Ich melde mich für den Rest der Woche krank, um den Bericht nicht schreiben zu müssen und der Konfrontation aus dem Weg zu gehen.",
    "ranking": "B, A, D, C",
    "begruendungen": {
      "B": "Beste Lösung zur Authentizität. Sie verweigern die Auslassung und melden den Vorgang, wenn der Vorgesetzte darauf besteht. Die eigene Haltung gilt auch gegenüber dem Dienstvorgesetzten.",
      "A": "Sie folgen der Anweisung, um die Karriere nicht zu gefährden. Loyalität ersetzt hier die Wahrheit des Berichts.",
      "D": "Krankmelden vermeidet die Konfrontation. Der Bericht wird dadurch nicht richtig, nur von jemand anderem geschrieben.",
      "C": "Schlechteste Lösung. Der gefälschte Bericht plus die heimliche Kopie dient der späteren Erpressung. Das ist weder ehrlich noch dienstlich."
    }
  },
  {
    "id": 26,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Ein Beamter Ihrer Schicht leistet hervorragende Arbeit, agiert aber als absoluter Einzelgänger und teilt wichtige Einsatzinformationen nicht mit den Kollegen.",
    "optionen": {
      "A": "Ich lobe seine hohe Aufklärungsquote und akzeptiere seinen Arbeitsstil, da am Ende nur die harten Zahlen für die Dienststelle zählen.",
      "B": "Ich führe ein Kritikgespräch, fordere ihn auf, seine Stärken zum Nutzen der Gruppe einzubringen, und erkläre Informationsfluss zur Teampflicht.",
      "C": "Ich teile ihn ab sofort nur noch für unbeliebte Objektschutzmaßnahmen ein, bei denen er alleine arbeiten kann und das Team nicht stört.",
      "D": "Ich weise das restliche Team an, ihn ebenfalls zu ignorieren, damit er merkt, wie es ist, von Informationen abgeschnitten zu sein."
    },
    "A": "Ich lobe seine hohe Aufklärungsquote und akzeptiere seinen Arbeitsstil, da am Ende nur die harten Zahlen für die Dienststelle zählen.",
    "B": "Ich führe ein Kritikgespräch, fordere ihn auf, seine Stärken zum Nutzen der Gruppe einzubringen, und erkläre Informationsfluss zur Teampflicht.",
    "C": "Ich teile ihn ab sofort nur noch für unbeliebte Objektschutzmaßnahmen ein, bei denen er alleine arbeiten kann und das Team nicht stört.",
    "D": "Ich weise das restliche Team an, ihn ebenfalls zu ignorieren, damit er merkt, wie es ist, von Informationen abgeschnitten zu sein.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Teamfähigkeit. Sie würdigen die Leistung und machen den Informationsfluss zur Pflicht. Ein gutes Einzelergebnis ersetzt nicht die Gruppe.",
      "A": "Sie akzeptieren den Einzelgängerstil, weil die Zahlen stimmen. Das Team arbeitet weiter ohne die Informationen, die es braucht.",
      "C": "Objektschutz allein beseitigt die Reibung und verschenkt seine Fähigkeit. Das Problem wird ausgelagert.",
      "D": "Schlechteste Lösung. Das Team soll ihn ebenfalls ausschließen. Sie organisieren damit die Isolation, die Sie eigentlich beenden wollen."
    }
  },
  {
    "id": 27,
    "rolle": "Normaler Beamter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Nach einem schweren Unfall auf der Autobahn macht ein junger Gaffer mit dem Handy Aufnahmen von Verletzten. Als Sie ihn zur Rede stellen, wirkt er völlig abgestumpft.",
    "optionen": {
      "A": "Ich schlage ihm das Handy aus der Hand, beschimpfe ihn wegen seiner Respektlosigkeit und nehme ihn sofort in Gewahrsam.",
      "B": "Ich ignoriere ihn, da ich mich auf die Unfallaufnahme konzentrieren muss und solche Leute ohnehin unverbesserlich sind.",
      "C": "Ich kontrolliere meinen Ärger, trete bestimmt auf, stelle das Handy rechtlich sauber sicher und mache ihm die moralischen Folgen seines Handelns sachlich klar.",
      "D": "Ich nehme sein Handy und lösche die Bilder eigenmächtig vor Ort, drücke ihm eine mündliche Verwarnung rein und schicke ihn weg."
    },
    "A": "Ich schlage ihm das Handy aus der Hand, beschimpfe ihn wegen seiner Respektlosigkeit und nehme ihn sofort in Gewahrsam.",
    "B": "Ich ignoriere ihn, da ich mich auf die Unfallaufnahme konzentrieren muss und solche Leute ohnehin unverbesserlich sind.",
    "C": "Ich kontrolliere meinen Ärger, trete bestimmt auf, stelle das Handy rechtlich sauber sicher und mache ihm die moralischen Folgen seines Handelns sachlich klar.",
    "D": "Ich nehme sein Handy und lösche die Bilder eigenmächtig vor Ort, drücke ihm eine mündliche Verwarnung rein und schicke ihn weg.",
    "ranking": "C, A, D, B",
    "begruendungen": {
      "C": "Beste Lösung zur emotionalen Intelligenz. Sie beherrschen den Ärger, sichern das Handy rechtlich sauber und benennen die Folgen sachlich. Die Grenze wird klar, ohne selbst übergriffig zu werden.",
      "A": "Das Handy aus der Hand schlagen, beschimpfen und sofort in Gewahrsam nehmen setzt die Empörung durch. Der Ärger steuert dann die Maßnahme.",
      "D": "Eigenmächtiges Löschen und Wegschicken umgehen das rechtliche Verfahren. Kurz, aber nicht sauber und nicht nachvollziehbar.",
      "B": "Schlechteste Lösung. Sie ignorieren ihn. Die Aufnahmen bleiben, und die Respektlosigkeit bleibt unbeantwortet."
    }
  },
  {
    "id": 28,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Sie haben ein neues Schichtmodell eingeführt, von dem Sie absolut überzeugt waren. Nach drei Monaten zeigt sich objektiv, dass der Krankenstand massiv gestiegen ist und die Kollegen unzufrieden sind.",
    "optionen": {
      "A": "Ich zeige die Bereitschaft, aus Fehlern zu lernen, nehme das Feedback ernst, trete vor die Mannschaft und kündige eine ergebnisoffene Überarbeitung des Modells an.",
      "B": "Ich halte stur an dem Modell fest und behaupte, die Kollegen müssten sich erst noch daran gewöhnen, da meine Konzepte grundsätzlich fehlerfrei sind.",
      "C": "Ich schiebe die Schuld auf den Personalrat, der das Modell mitgetragen hat, um mich selbst aus der Schusslinie zu nehmen.",
      "D": "Ich drohe den Beamten, die sich am meisten beschweren, mit Versetzungen, um den Widerstand gegen das Modell zu brechen."
    },
    "A": "Ich zeige die Bereitschaft, aus Fehlern zu lernen, nehme das Feedback ernst, trete vor die Mannschaft und kündige eine ergebnisoffene Überarbeitung des Modells an.",
    "B": "Ich halte stur an dem Modell fest und behaupte, die Kollegen müssten sich erst noch daran gewöhnen, da meine Konzepte grundsätzlich fehlerfrei sind.",
    "C": "Ich schiebe die Schuld auf den Personalrat, der das Modell mitgetragen hat, um mich selbst aus der Schusslinie zu nehmen.",
    "D": "Ich drohe den Beamten, die sich am meisten beschweren, mit Versetzungen, um den Widerstand gegen das Modell zu brechen.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur Selbstreflexion. Sie nehmen den höheren Krankenstand ernst, treten vor die Mannschaft und öffnen das Modell wieder. Ein früher für richtig gehaltenes Konzept darf korrigiert werden.",
      "B": "Sie bleiben bei dem Modell und schieben die Wirkung auf die Eingewöhnung. Die Zahlen werden der eigenen Überzeugung untergeordnet.",
      "C": "Die Schuld beim Personalrat abzulegen schützt Sie. Die Entscheidung bleibt Ihre, auch wenn andere mitgetragen haben.",
      "D": "Schlechteste Lösung. Versetzungsdruck gegen die Lautesten beendet die Kritik, nicht die Ursache des Krankenstands."
    }
  },
  {
    "id": 29,
    "rolle": "Normaler Beamter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Bei einer Verkehrskontrolle mischt sich ein unbeteiligter Passant lautstark ein, kritisiert Ihre Maßnahmen und heizt die Stimmung gegen Sie und Ihren Partner auf.",
    "optionen": {
      "A": "Ich verlasse meine eigentliche Kontrolle, diskutiere lautstark mit dem Passanten und versuche, meine Maßnahmen vor den Umstehenden zu rechtfertigen.",
      "B": "Ich erteile dem Passanten frühzeitig und bestimmt einen Platzverweis, um die Störung auf der Entstehungsebene zu bearbeiten und die Lage zu beruhigen.",
      "C": "Ich ignoriere den Passanten komplett und hoffe, dass er von selbst wieder geht, auch wenn der kontrollierte Fahrer dadurch immer aggressiver wird.",
      "D": "Ich zücke sofort das Pfefferspray und drohe dem Passanten mit dem Einsatz, falls er nicht augenblicklich das Weite sucht."
    },
    "A": "Ich verlasse meine eigentliche Kontrolle, diskutiere lautstark mit dem Passanten und versuche, meine Maßnahmen vor den Umstehenden zu rechtfertigen.",
    "B": "Ich erteile dem Passanten frühzeitig und bestimmt einen Platzverweis, um die Störung auf der Entstehungsebene zu bearbeiten und die Lage zu beruhigen.",
    "C": "Ich ignoriere den Passanten komplett und hoffe, dass er von selbst wieder geht, auch wenn der kontrollierte Fahrer dadurch immer aggressiver wird.",
    "D": "Ich zücke sofort das Pfefferspray und drohe dem Passanten mit dem Einsatz, falls er nicht augenblicklich das Weite sucht.",
    "ranking": "B, A, D, C",
    "begruendungen": {
      "B": "Beste Lösung zum Konfliktmanagement. Ein früher, bestimmter Platzverweis nimmt dem Unbeteiligten die Bühne, solange die Störung noch klein ist. Die eigentliche Kontrolle bleibt führbar.",
      "A": "Sie lassen die Kontrolle liegen und rechtfertigen sich laut vor den Umstehenden. Der Passant bestimmt dann das Thema.",
      "D": "Pfefferspray als Drohung gegen eine lautstarke Kritik ist zu schwer. Die Störung wird mit einem Einsatzmittel beantwortet, das hier nicht passt.",
      "C": "Schlechteste Lösung. Ignorieren in der Hoffnung, er gehe von selbst, lässt den kontrollierten Fahrer mit aufheizen. Der Konflikt wächst unbeantwortet."
    }
  },
  {
    "id": 30,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Während einer hochbrisanten Geisellage in Ihrem Bereich überschlagen sich die Informationen am Funk, das Telefon klingelt ununterbrochen und Medienvertreter stehen vor der Wache.",
    "optionen": {
      "A": "Ich verfalle in Hektik, brülle meine Mitarbeiter an, damit sie schneller arbeiten, und verliere den Überblick über die eigentliche taktische Lage.",
      "B": "Ich schalte das Funkgerät ab und verlasse den Raum, um mir in Ruhe einen Kaffee zu holen und dem enormen Stress für einen Moment zu entfliehen.",
      "C": "Ich behalte den Überblick, filtere die eingehenden Informationen ruhig, steuere mein Verhalten bewusst und ordne die Prioritäten für mein Team klar an.",
      "D": "Ich übergebe die Koordination hektisch an einen unerfahrenen Beamten, um mich selbst ausschließlich um die Beantwortung der Presseanfragen kümmern zu können."
    },
    "A": "Ich verfalle in Hektik, brülle meine Mitarbeiter an, damit sie schneller arbeiten, und verliere den Überblick über die eigentliche taktische Lage.",
    "B": "Ich schalte das Funkgerät ab und verlasse den Raum, um mir in Ruhe einen Kaffee zu holen und dem enormen Stress für einen Moment zu entfliehen.",
    "C": "Ich behalte den Überblick, filtere die eingehenden Informationen ruhig, steuere mein Verhalten bewusst und ordne die Prioritäten für mein Team klar an.",
    "D": "Ich übergebe die Koordination hektisch an einen unerfahrenen Beamten, um mich selbst ausschließlich um die Beantwortung der Presseanfragen kümmern zu können.",
    "ranking": "C, A, D, B",
    "begruendungen": {
      "C": "Beste Lösung zur Belastbarkeit. Sie filtern den Funk, halten die Lage und geben dem Team eine klare Reihenfolge. Viele Reize bleiben beherrschbar, wenn eine Person sie ordnet.",
      "A": "Hektik und Anbrüllen erhöhen das Tempo und kosten den Überblick. Der Druck wird an die Mitarbeiter weitergegeben.",
      "D": "Sie geben die taktische Führung an einen Unerfahrenen ab und kümmern sich um die Presse. Die Außendarstellung verdrängt die Lage.",
      "B": "Schlechteste Lösung. Funk aus und Kaffee holen ist ein Ausstieg mitten in der Geisellage. Belastbarkeit zeigt sich daran, in der Lage zu bleiben."
    }
  },
  {
    "id": 31,
    "rolle": "Normaler Beamter",
    "kompetenz": "Kommunikationsfähigkeit",
    "kompetenzen": [
      "Kommunikationsfähigkeit"
    ],
    "szenario": "Sie müssen vor einer Schulklasse einen Vortrag über Cybermobbing halten. Die Jugendlichen sind unruhig und wirken desinteressiert.",
    "optionen": {
      "A": "Ich setze effektive Präsentationstechniken ein, passe meine Sprache der Zielgruppe an, stelle aktive Fragen an die Schüler und binde sie interaktiv ein.",
      "B": "Ich lese meinen vorbereiteten, stark juristisch geprägten Text monoton ab, da der formelle Informationsauftrag der Polizei damit erfüllt ist.",
      "C": "Ich brülle die Klasse an, fordere absoluten Respekt vor der Uniform und drohe mit Konsequenzen für die Unruhestifter.",
      "D": "Ich breche den Vortrag nach fünf Minuten beleidigt ab und beschwere mich beim Lehrer über die mangelnde Disziplin der heutigen Jugend."
    },
    "A": "Ich setze effektive Präsentationstechniken ein, passe meine Sprache der Zielgruppe an, stelle aktive Fragen an die Schüler und binde sie interaktiv ein.",
    "B": "Ich lese meinen vorbereiteten, stark juristisch geprägten Text monoton ab, da der formelle Informationsauftrag der Polizei damit erfüllt ist.",
    "C": "Ich brülle die Klasse an, fordere absoluten Respekt vor der Uniform und drohe mit Konsequenzen für die Unruhestifter.",
    "D": "Ich breche den Vortrag nach fünf Minuten beleidigt ab und beschwere mich beim Lehrer über die mangelnde Disziplin der heutigen Jugend.",
    "ranking": "A, C, B, D",
    "begruendungen": {
      "A": "Beste Lösung zur Kommunikationsfähigkeit. Sie wechseln in die Sprache der Klasse, stellen Fragen und beziehen die Jugendlichen ein. Der Inhalt kommt an, weil das Publikum mitarbeitet.",
      "C": "Anbrüllen und die Drohung mit der Uniform erzwingen Ruhe. Gehört wird die Autorität, nicht das Thema Cybermobbing.",
      "B": "Den juristischen Text abzulesen erfüllt den Auftrag formal. Die unruhige Klasse erreicht das nicht.",
      "D": "Schlechteste Lösung. Sie brechen ab und beschweren sich beim Lehrer. Die Kommunikation ist damit beendet, bevor sie begonnen hat."
    }
  },
  {
    "id": 32,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Gerechtigkeit",
    "kompetenzen": [
      "Gerechtigkeit"
    ],
    "szenario": "Zwei Beamte bewerben sich auf einen attraktiven Dienstposten (Zivilfahndung). Beamter A ist Ihr bester Freund, Beamter B ist objektiv besser qualifiziert.",
    "optionen": {
      "A": "Ich bewerte Beamten A in der Auswahlentscheidung besser, da Vertrauen bei der Zivilfahndung das Wichtigste ist und ich ihn gut kenne.",
      "B": "Ich stelle private Sympathien komplett hinten an, entscheide mich aufgrund der nachweisbaren Qualifikation fair für Beamten B und begründe dies transparent.",
      "C": "Ich entscheide mich für keinen von beiden und lasse den Posten unbesetzt, um den privaten Konflikt mit Beamten A zu vermeiden.",
      "D": "Ich lasse die beiden Beamten in einem sportlichen Wettkampf gegeneinander antreten, um die Entscheidung dem Zufall zu überlassen."
    },
    "A": "Ich bewerte Beamten A in der Auswahlentscheidung besser, da Vertrauen bei der Zivilfahndung das Wichtigste ist und ich ihn gut kenne.",
    "B": "Ich stelle private Sympathien komplett hinten an, entscheide mich aufgrund der nachweisbaren Qualifikation fair für Beamten B und begründe dies transparent.",
    "C": "Ich entscheide mich für keinen von beiden und lasse den Posten unbesetzt, um den privaten Konflikt mit Beamten A zu vermeiden.",
    "D": "Ich lasse die beiden Beamten in einem sportlichen Wettkampf gegeneinander antreten, um die Entscheidung dem Zufall zu überlassen.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Gerechtigkeit. Die bessere Qualifikation entscheidet, die Freundschaft nicht, und Sie begründen das offen. Beamter A kann die Entscheidung nachvollziehen, auch wenn sie ihn trifft.",
      "A": "Sie werten den Freund höher, weil Sie ihm vertrauen. Vertrauen ist hier ein persönliches Kriterium und ersetzt die nachweisbare Eignung.",
      "C": "Den Posten unbesetzt zu lassen vermeidet den privaten Konflikt. Die Dienststelle verliert die Besetzung, damit Sie den Freund nicht enttäuschen.",
      "D": "Schlechteste Lösung. Ein sportlicher Wettkampf macht die Personalentscheidung zum Zufall. Gerechtigkeit braucht einen sachlichen Maßstab."
    }
  },
  {
    "id": 33,
    "rolle": "Dienststellenleiter",
    "kompetenz": "Führungskompetenz",
    "kompetenzen": [
      "Führungskompetenz"
    ],
    "szenario": "Ihre Dienststelle hat bei einer großangelegten Präventionskampagne hervorragende Zahlen geliefert. Der Polizeipräsident lobt Sie dafür in einer Videokonferenz.",
    "optionen": {
      "A": "Ich nehme das Lob dankend an und betone, dass dieser Erfolg vor allem auf meiner strikten und effektiven Führungsstruktur basiert.",
      "B": "Ich nutze die Gelegenheit, das Lob sofort an mein Team weiterzugeben, nenne die Schlüsselakteure beim Namen und schaffe so Motivation und Vertrauen.",
      "C": "Ich spiele den Erfolg herunter und behaupte, die Kriminalitätsrate sei ohnehin gesunken, um keine falschen Erwartungen für das nächste Jahr zu wecken.",
      "D": "Ich weise darauf hin, dass wir noch viel besser hätten sein können, wenn die Mannschaft nicht so fehleranfällig wäre."
    },
    "A": "Ich nehme das Lob dankend an und betone, dass dieser Erfolg vor allem auf meiner strikten und effektiven Führungsstruktur basiert.",
    "B": "Ich nutze die Gelegenheit, das Lob sofort an mein Team weiterzugeben, nenne die Schlüsselakteure beim Namen und schaffe so Motivation und Vertrauen.",
    "C": "Ich spiele den Erfolg herunter und behaupte, die Kriminalitätsrate sei ohnehin gesunken, um keine falschen Erwartungen für das nächste Jahr zu wecken.",
    "D": "Ich weise darauf hin, dass wir noch viel besser hätten sein können, wenn die Mannschaft nicht so fehleranfällig wäre.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur Führung. Sie geben das Lob an die Leute weiter, die die Zahlen erzeugt haben, und nennen sie. So wird Anerkennung zu Motivation, nicht zu Ihrem persönlichen Verdienst.",
      "A": "Sie führen den Erfolg auf Ihre Struktur zurück. Das kann ein Teil der Erklärung sein und nimmt dem Team die Sichtbarkeit.",
      "C": "Den Erfolg herunterzuspielen dämpft Erwartungen. Es nimmt der Mannschaft aber auch die Anerkennung für geleistete Arbeit.",
      "D": "Schlechteste Lösung. Sie nutzen das Lob, um auf Fehler der Mannschaft zu zeigen. Aus Anerkennung wird Tadel."
    }
  },
  {
    "id": 34,
    "rolle": "Normaler Beamter",
    "kompetenz": "Entscheidungskompetenz",
    "kompetenzen": [
      "Entscheidungskompetenz"
    ],
    "szenario": "Sie sind Erstsprecher bei einem Suizidversuch (Person steht auf einer Brücke). Das SEK und die Verhandlungsgruppe brauchen noch 45 Minuten. Die Person droht sofort zu springen, wenn Sie näherkommen.",
    "optionen": {
      "A": "Ich stürme sofort auf die Person los, um sie im Sprint zu überwältigen, da schnelles Handeln bei der Polizei immer Vorrang hat.",
      "B": "Ich ziehe mich komplett zurück, breche jeden Kontakt ab und warte versteckt im Auto auf die Spezialkräfte, um keinen Fehler zu machen.",
      "C": "Ich wäge die situativen Gegebenheiten ab, halte den geforderten Abstand, baue verbale Bindung auf und treffe die Entscheidung, die Situation bis zum Eintreffen der Profis stabil zu halten.",
      "D": "Ich rufe der Person über einen Megafon lautstark rechtliche Belehrungen zu, dass Suizidversuche den Straßenverkehr gefährden und strafbar sein können."
    },
    "A": "Ich stürme sofort auf die Person los, um sie im Sprint zu überwältigen, da schnelles Handeln bei der Polizei immer Vorrang hat.",
    "B": "Ich ziehe mich komplett zurück, breche jeden Kontakt ab und warte versteckt im Auto auf die Spezialkräfte, um keinen Fehler zu machen.",
    "C": "Ich wäge die situativen Gegebenheiten ab, halte den geforderten Abstand, baue verbale Bindung auf und treffe die Entscheidung, die Situation bis zum Eintreffen der Profis stabil zu halten.",
    "D": "Ich rufe der Person über einen Megafon lautstark rechtliche Belehrungen zu, dass Suizidversuche den Straßenverkehr gefährden und strafbar sein können.",
    "ranking": "C, A, B, D",
    "begruendungen": {
      "C": "Beste Lösung zur Entscheidungskompetenz. Sie halten den geforderten Abstand, bleiben im Gespräch und stabilisieren die Lage bis zum Eintreffen der Spezialkräfte. Nicht jeder Zeitdruck verlangt einen Zugriff.",
      "A": "Der Sprint und die Überwältigung können die Person vom Sprung abhalten und können sie auch auslösen. Schnelligkeit ersetzt hier keine Abwägung.",
      "B": "Sie ziehen sich ins Auto zurück. Das vermeidet einen Fehler und bricht den Kontakt ab, der die Person noch hält.",
      "D": "Schlechteste Lösung. Rechtliche Belehrung über Megafon behandelt den Suizidversuch als Ordnungswidrigkeit. Das verfehlt die Lage vollständig."
    }
  },
  {
    "id": 35,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Authentizität",
    "kompetenzen": [
      "Authentizität"
    ],
    "szenario": "Die Behördenleitung hat eine neue, extrem restriktive Pausenregelung erlassen, die Sie für völlig realitätsfremd halten. Sie müssen diese der Mannschaft verkünden.",
    "optionen": {
      "A": "Ich tue so, als fände ich die Regelung absolut fantastisch, und spiele den loyalen Befehlsempfänger, wirke dabei aber künstlich und unglaubwürdig.",
      "B": "Ich verkünde die Regelung sachlich, beziehe aber authentisch Stellung, dass ich sie kritisch sehe, diese aber dienstlich bindend ist, und verspreche, Feedback nach oben zu geben.",
      "C": "Ich fordere die Mannschaft offen zur Sabotage der Regelung auf, um mich mit ihnen gegen die Behördenleitung zu verbünden.",
      "D": "Ich hänge den Befehl einfach ans Schwarze Brett und weigere mich, darüber zu diskutieren, um mir nicht die Finger schmutzig zu machen."
    },
    "A": "Ich tue so, als fände ich die Regelung absolut fantastisch, und spiele den loyalen Befehlsempfänger, wirke dabei aber künstlich und unglaubwürdig.",
    "B": "Ich verkünde die Regelung sachlich, beziehe aber authentisch Stellung, dass ich sie kritisch sehe, diese aber dienstlich bindend ist, und verspreche, Feedback nach oben zu geben.",
    "C": "Ich fordere die Mannschaft offen zur Sabotage der Regelung auf, um mich mit ihnen gegen die Behördenleitung zu verbünden.",
    "D": "Ich hänge den Befehl einfach ans Schwarze Brett und weigere mich, darüber zu diskutieren, um mir nicht die Finger schmutzig zu machen.",
    "ranking": "B, A, D, C",
    "begruendungen": {
      "B": "Beste Lösung zur Authentizität. Sie geben die Regel als bindend weiter und sagen zugleich, dass Sie sie für realitätsfern halten und Rückmeldung nach oben tragen. Die Mannschaft hört eine echte Haltung, keinen falschen Beifall.",
      "A": "Sie loben die Regel, obwohl Sie sie ablehnen. Das Signal ist loyal und unglaubwürdig.",
      "D": "Aushängen ohne Gespräch hält Sie aus der Diskussion. Die Regel gilt, Ihre Position bleibt unsichtbar.",
      "C": "Schlechteste Lösung. Der Aufruf zur Sabotage macht Sie zum Verbündeten gegen die Behördenleitung. Authentisch wäre das nur als Privatmeinung, dienstlich ist es ein Bruch."
    }
  },
  {
    "id": 36,
    "rolle": "Normaler Beamter",
    "kompetenz": "Teamfähigkeit",
    "kompetenzen": [
      "Teamfähigkeit"
    ],
    "szenario": "Ein Kollege hat private Probleme (Scheidung) und bringt im Dienst seit Wochen kaum noch Leistung. Die anfallende Arbeit bleibt an Ihnen hängen.",
    "optionen": {
      "A": "Ich biete ihm meine Unterstützung an, übernehme temporär mehr Aufgaben für das gemeinsame Ziel, rate ihm aber dringend, professionelle Hilfe in Anspruch zu nehmen.",
      "B": "Ich beschwere mich lautstark in der Teeküche über seine Faulheit und stachle die anderen Kollegen gegen ihn auf.",
      "C": "Ich mache strikt nur noch 50% der Arbeit und lasse seine Akten demonstrativ unbearbeitet auf dem Tisch liegen, bis der Chef es merkt.",
      "D": "Ich gehe heimlich zum DGL und fordere, dass dem Kollegen sofort die Zulagen gestrichen werden, da er keine Leistung mehr bringt."
    },
    "A": "Ich biete ihm meine Unterstützung an, übernehme temporär mehr Aufgaben für das gemeinsame Ziel, rate ihm aber dringend, professionelle Hilfe in Anspruch zu nehmen.",
    "B": "Ich beschwere mich lautstark in der Teeküche über seine Faulheit und stachle die anderen Kollegen gegen ihn auf.",
    "C": "Ich mache strikt nur noch 50% der Arbeit und lasse seine Akten demonstrativ unbearbeitet auf dem Tisch liegen, bis der Chef es merkt.",
    "D": "Ich gehe heimlich zum DGL und fordere, dass dem Kollegen sofort die Zulagen gestrichen werden, da er keine Leistung mehr bringt.",
    "ranking": "A, B, C, D",
    "begruendungen": {
      "A": "Beste Lösung zur Teamfähigkeit. Sie fangen vorübergehend Arbeit auf und drängen zugleich auf professionelle Hilfe. Das gemeinsame Ziel bleibt erreichbar, ohne die private Krise zu ignorieren oder zu bestrafen.",
      "B": "Lautes Schimpfen in der Teeküche entlastet Sie und isoliert ihn. Die Arbeit wird dadurch nicht weniger.",
      "C": "Nur noch die eigene Hälfte zu tun lässt seine Akten liegen, bis der Chef es sieht. Der Konflikt wird vorgeführt statt getragen.",
      "D": "Schlechteste Lösung. Heimlich die Zulage streichen zu lassen bestraft die Leistung, ohne das Gespräch und ohne Hilfe."
    }
  },
  {
    "id": 37,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Emotionale Intelligenz",
    "kompetenzen": [
      "Emotionale Intelligenz"
    ],
    "szenario": "Ein sonst sehr ruhiger und besonnener Beamter rastet nach einer Beleidigung durch einen Bürger bei einer Kontrolle völlig aus und wird handgreiflich. Sie kommen als DGL hinzu.",
    "optionen": {
      "A": "Ich schreie den Beamten vor dem Bürger an, suspendiere ihn sofort mündlich und schicke ihn zu Fuß nach Hause.",
      "B": "Ich erkenne den extremen Kontrollverlust, trenne die Parteien sofort, beruhige die Situation empathisch, schütze den Beamten vor sich selbst und kläre den Vorfall im Nachgang auf der Wache.",
      "C": "Ich decke meinen Beamten blind, behaupte gegenüber dem Bürger, er habe sich den Angriff selbst zuzuschreiben, und fahre unkommentiert weg.",
      "D": "Ich tue so, als hätte ich nichts gesehen, setze mich wieder in mein Fahrzeug und überlasse den Kollegen ihrem Schicksal."
    },
    "A": "Ich schreie den Beamten vor dem Bürger an, suspendiere ihn sofort mündlich und schicke ihn zu Fuß nach Hause.",
    "B": "Ich erkenne den extremen Kontrollverlust, trenne die Parteien sofort, beruhige die Situation empathisch, schütze den Beamten vor sich selbst und kläre den Vorfall im Nachgang auf der Wache.",
    "C": "Ich decke meinen Beamten blind, behaupte gegenüber dem Bürger, er habe sich den Angriff selbst zuzuschreiben, und fahre unkommentiert weg.",
    "D": "Ich tue so, als hätte ich nichts gesehen, setze mich wieder in mein Fahrzeug und überlasse den Kollegen ihrem Schicksal.",
    "ranking": "B, A, C, D",
    "begruendungen": {
      "B": "Beste Lösung zur emotionalen Intelligenz. Sie trennen sofort, beruhigen beide Seiten und schützen den Beamten davor, die Lage weiter zu verschärfen. Die Aufarbeitung gehört auf die Wache, nicht vor den Bürger.",
      "A": "Öffentliches Anschreien und die mündliche Suspendierung stoppen ihn. Vor dem Bürger wird aus der Führung eine zweite Eskalation.",
      "C": "Ihn blind zu decken und dem Bürger die Schuld zu geben beendet den Moment und vertuscht die Gewalt. Loyalität ersetzt hier die nötige Grenze.",
      "D": "Schlechteste Lösung. Wegfahren, als hätten Sie nichts gesehen, lässt beide ohne Führung. Die emotionale Lage bleibt unbeantwortet."
    }
  },
  {
    "id": 38,
    "rolle": "Normaler Beamter",
    "kompetenz": "Selbstreflexion",
    "kompetenzen": [
      "Selbstreflexion"
    ],
    "szenario": "Sie haben bei einer Festnahme unverhältnismäßig viel körperliche Gewalt angewendet, weil Sie persönlich provoziert wurden. Es gab keine Zeugen.",
    "optionen": {
      "A": "Ich setze mich selbstkritisch mit meinem Kontrollverlust auseinander, melde den Vorfall meinem Vorgesetzten und zeige die Bereitschaft, an meiner Stresstoleranz zu arbeiten.",
      "B": "Ich freue mich heimlich, dass es keine Zeugen gab, und verbuche es als ausgleichende Gerechtigkeit für all die Beleidigungen im Dienst.",
      "C": "Ich schreibe eine Anzeige wegen Widerstands gegen den Festgenommenen, um meine eigene Gewaltanwendung präventiv zu rechtfertigen.",
      "D": "Ich verdränge den Vorfall komplett und rede mir ein, dass solche Härte im polizeilichen Alltag ohnehin notwendig ist."
    },
    "A": "Ich setze mich selbstkritisch mit meinem Kontrollverlust auseinander, melde den Vorfall meinem Vorgesetzten und zeige die Bereitschaft, an meiner Stresstoleranz zu arbeiten.",
    "B": "Ich freue mich heimlich, dass es keine Zeugen gab, und verbuche es als ausgleichende Gerechtigkeit für all die Beleidigungen im Dienst.",
    "C": "Ich schreibe eine Anzeige wegen Widerstands gegen den Festgenommenen, um meine eigene Gewaltanwendung präventiv zu rechtfertigen.",
    "D": "Ich verdränge den Vorfall komplett und rede mir ein, dass solche Härte im polizeilichen Alltag ohnehin notwendig ist.",
    "ranking": "A, C, B, D",
    "begruendungen": {
      "A": "Beste Lösung zur Selbstreflexion. Sie melden den eigenen Kontrollverlust, obwohl es keine Zeugen gibt, und arbeiten an der Ursache. Gerade ohne äußeren Druck zeigt sich, ob Sie den Maßstab selbst anlegen.",
      "C": "Eine Widerstands-Anzeige im Voraus rechtfertigt die Gewalt in der Akte. Sie beschäftigen sich mit dem Vorfall, aber um sich abzusichern, nicht um ihn zu prüfen.",
      "B": "Sie sind erleichtert, dass niemand zusieht, und verbuchen die Gewalt als Ausgleich. Der Kontrollverlust wird zur privaten Genugtuung.",
      "D": "Schlechteste Lösung. Verdrängen und die Erzählung, Härte sei eben nötig, schließen die Reflexion. Der Vorfall wiederholt sich dann beim nächsten Mal."
    }
  },
  {
    "id": 39,
    "rolle": "Dienstgruppenleiter",
    "kompetenz": "Konfliktmanagement",
    "kompetenzen": [
      "Konfliktmanagement"
    ],
    "szenario": "Eine Bürgerinitiative protestiert lautstark, aber friedlich vor Ihrer Wache gegen geplante Abschiebungen. Sie sind als Wachhabender verantwortlich.",
    "optionen": {
      "A": "Ich schicke sofort die Einsatzzüge mit Helmen und Schilden raus, um den Platz rigoros räumen zu lassen und Stärke zu demonstrieren.",
      "B": "Ich verbarrikadiere die Wache, schalte das Licht aus und warte, bis die Demonstranten von selbst das Interesse verlieren.",
      "C": "Ich gehe ohne Schutzausrüstung auf die Versammlungsleiterin zu, signalisiere Dialogbereitschaft, kläre die rechtlichen Rahmenbedingungen und bearbeite den Konflikt deeskalierend.",
      "D": "Ich lasse die Demonstranten über Lautsprecher mit rechtlichen Konsequenzen und Wasserwerfern bedrohen, falls sie nicht sofort verschwinden."
    },
    "A": "Ich schicke sofort die Einsatzzüge mit Helmen und Schilden raus, um den Platz rigoros räumen zu lassen und Stärke zu demonstrieren.",
    "B": "Ich verbarrikadiere die Wache, schalte das Licht aus und warte, bis die Demonstranten von selbst das Interesse verlieren.",
    "C": "Ich gehe ohne Schutzausrüstung auf die Versammlungsleiterin zu, signalisiere Dialogbereitschaft, kläre die rechtlichen Rahmenbedingungen und bearbeite den Konflikt deeskalierend.",
    "D": "Ich lasse die Demonstranten über Lautsprecher mit rechtlichen Konsequenzen und Wasserwerfern bedrohen, falls sie nicht sofort verschwinden.",
    "ranking": "C, A, B, D",
    "begruendungen": {
      "C": "Beste Lösung zum Konfliktmanagement. Sie gehen auf die Versammlungsleitung zu, klären den rechtlichen Rahmen und bleiben im Gespräch. Eine friedliche Versammlung wird deeskaliert, nicht geräumt.",
      "A": "Helm und Schild räumen den Platz und demonstrieren Stärke. Bei einem noch friedlichen Protest ist das die Eskalation, die Sie vermeiden sollen.",
      "B": "Licht aus und Abwarten lassen die Versammlung unbeantwortet. Der Konflikt ist dann nur ausgesessen.",
      "D": "Schlechteste Lösung. Die Drohung mit Wasserwerfern und rechtlichen Folgen über Lautsprecher behandelt eine friedliche Kundgebung als zu brechenden Widerstand."
    }
  },
  {
    "id": 40,
    "rolle": "Normaler Beamter",
    "kompetenz": "Belastbarkeit",
    "kompetenzen": [
      "Belastbarkeit"
    ],
    "szenario": "Sie müssen eine stark verweste Leiche in einer Messie-Wohnung bergen. Der Geruch ist unerträglich und Ihr junger Partner übergibt sich im Flur.",
    "optionen": {
      "A": "Ich breche den Einsatz sofort ab, verlasse das Gebäude und fordere Spezialfirmen an, da solche Aufgaben unzumutbar für Streifenbeamte sind.",
      "B": "Ich mache mich über den schwachen Magen meines Partners lustig, um ihn abzuhärten, und zwinge ihn, wieder in die Wohnung zu gehen.",
      "C": "Ich mobilisiere meine physischen und psychischen Ressourcen, schicke meinen Partner an die frische Luft, bleibe selbst handlungsfähig und führe die notwendigen Maßnahmen professionell durch.",
      "D": "Ich reagiere panisch, verlasse den Tatort ungesichert und melde mich beim DGL sofort dienstunfähig für den restlichen Tag."
    },
    "A": "Ich breche den Einsatz sofort ab, verlasse das Gebäude und fordere Spezialfirmen an, da solche Aufgaben unzumutbar für Streifenbeamte sind.",
    "B": "Ich mache mich über den schwachen Magen meines Partners lustig, um ihn abzuhärten, und zwinge ihn, wieder in die Wohnung zu gehen.",
    "C": "Ich mobilisiere meine physischen und psychischen Ressourcen, schicke meinen Partner an die frische Luft, bleibe selbst handlungsfähig und führe die notwendigen Maßnahmen professionell durch.",
    "D": "Ich reagiere panisch, verlasse den Tatort ungesichert und melde mich beim DGL sofort dienstunfähig für den restlichen Tag.",
    "ranking": "C, A, D, B",
    "begruendungen": {
      "C": "Beste Lösung zur Belastbarkeit. Sie schicken den Partner an die Luft und führen die Bergung selbst weiter. Die Aufgabe bleibt erfüllbar, ohne ihn zu demütigen oder den Tatort zu verlassen.",
      "A": "Der Abbruch und die Forderung nach einer Spezialfirma schützen vor der Zumutung und lassen die Leiche unversorgt, solange niemand sonst da ist.",
      "D": "Panik und die sofortige Krankmeldung beenden Ihren Einsatz. Verständlich als Impuls, als Verhalten in der Lage aber ein Ausstieg.",
      "B": "Schlechteste Lösung. Sie verspotten den Partner und zwingen ihn zurück. Belastbarkeit wird hier mit Abhärtung auf Kosten des Kollegen verwechselt."
    }
  }
];

// "A, B, C, D" -> ['A', 'B', 'C', 'D'] — wird bei der Auswertung gebraucht
QUIZ_QUESTIONS.forEach(q => {
  q.rankingArray = q.ranking.split(',').map(s => s.trim());
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
