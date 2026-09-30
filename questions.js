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
    "ranking": "B, D, C, A"
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
    "ranking": "B, C, A, D"
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
    "ranking": "D, C, A, B"
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
    "ranking": "C, D, A, B"
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
    "ranking": "B, A, C, D"
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
    "ranking": "A, C, D, B"
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
    "ranking": "A, B, C, D"
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
    "ranking": "C, A, B, D"
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
    "ranking": "D, B, A, C"
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
    "ranking": "A, B, C, D"
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
    "ranking": "B, C, A, D"
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
    "ranking": "B, A, D, C"
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
    "ranking": "B, A, C, D"
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
    "ranking": "A, B, C, D"
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
    "ranking": "C, A, B, D"
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
    "ranking": "D, B, C, A"
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
    "ranking": "A, B, C, D"
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
    "ranking": "C, A, D, B"
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
    "ranking": "A, B, D, C"
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
    "ranking": "C, A, B, D"
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
    "ranking": "C, A, D, B"
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
    "ranking": "C, B, A, D"
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
    "ranking": "B, A, C, D"
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
    "ranking": "A, C, B, D"
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
    "ranking": "B, A, D, C"
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
    "ranking": "B, A, C, D"
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
    "ranking": "C, A, D, B"
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
    "ranking": "A, B, C, D"
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
    "ranking": "B, A, D, C"
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
    "ranking": "C, A, D, B"
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
    "ranking": "A, C, B, D"
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
    "ranking": "B, A, C, D"
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
    "ranking": "B, A, C, D"
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
    "ranking": "C, A, B, D"
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
    "ranking": "B, A, D, C"
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
    "ranking": "A, B, C, D"
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
    "ranking": "B, A, C, D"
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
    "ranking": "A, C, B, D"
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
    "ranking": "C, A, B, D"
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
    "ranking": "C, A, D, B"
  }
];

// "A, B, C, D" -> ['A', 'B', 'C', 'D'] — wird bei der Auswertung gebraucht
QUIZ_QUESTIONS.forEach(q => {
  q.rankingArray = q.ranking.split(',').map(s => s.trim());
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
