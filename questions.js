// questions.js - 40 Situational Judgement Test (SJT) Aufgaben für die Polizei
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "kompetenzen": ["Konfliktmanagement", "Kommunikationsfähigkeit"],
    "szenario": "Ein Kollege, mit dem Sie häufig Streife fahren, riecht in letzter Zeit extrem stark nach Schweiß. Es belastet die Zusammenarbeit im engen Streifenwagen enorm.",
    "optionen": {
      "A": "Sie bitten den Dienstgruppenleiter (DGL), einen allgemeinen Dienstunterricht über Körperhygiene zu halten, damit der Kollege es merkt.",
      "B": "Sie sprechen den Kollegen bei nächster Gelegenheit unter vier Augen respektvoll, aber direkt auf das Problem an.",
      "C": "Sie machen im Streifenwagen demonstrativ das Fenster auf und sprühen Deo, in der Hoffnung, dass er den Wink versteht.",
      "D": "Sie ignorieren das Problem, um das gute kollegiale Verhältnis nicht durch eine solch peinliche Thematik zu belasten."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 2,
    "kompetenzen": ["Führungskompetenz", "Entscheidungskompetenz"],
    "szenario": "Als DGL bemerken Sie, dass ein erfahrener, älterer Kollege Ihre Arbeitsanweisungen bei der Schichtübergabe vor den jungen Kollegen wiederholt ins Lächerliche zieht.",
    "optionen": {
      "A": "Sie weisen ihn sofort vor der gesamten Schicht scharf zurecht, um Ihre Autorität als neuer DGL klarzustellen.",
      "B": "Sie ignorieren die Kommentare in der Runde, bitten ihn aber direkt nach der Übergabe zu einem Vier-Augen-Gespräch, um die Gründe für sein Verhalten zu klären und Grenzen aufzuzeigen.",
      "C": "Sie melden den Vorfall umgehend dem Dienststellenleiter und fordern eine offizielle Abmahnung für den Kollegen.",
      "D": "Sie versuchen, bei seinen Witzen mitzulachen, um Authentizität zu zeigen und sich als 'Teil des Teams' zu etablieren."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 3,
    "kompetenzen": ["Emotionale Intelligenz", "Belastbarkeit"],
    "szenario": "Sie kommen als Erstsprecher zu einer Wohnung, um eine Todesnachricht (plötzlicher Kindstod) zu überbringen. Der Vater reagiert extrem aggressiv, schreit Sie an und schlägt gegen die Wand.",
    "optionen": {
      "A": "Sie weisen ihn streng an, sich zu beruhigen, da Sie sonst Maßnahmen ergreifen müssen.",
      "B": "Sie ziehen sich sofort aus der Wohnung zurück und fordern Unterstützung nach, um Eigenschutz zu gewährleisten.",
      "C": "Sie bewahren absolute Ruhe, halten körperlichen Abstand, zeigen Verständnis für den Ausnahmezustand und warten ab, bis die erste Welle der Wut abebbt.",
      "D": "Sie versuchen, ihn in den Arm zu nehmen und körperlich zu beruhigen, um Empathie zu signalisieren."
    },
    "ranking": "C, B, A, D"
  },
  {
    "id": 4,
    "kompetenzen": ["Gerechtigkeit", "Teamfähigkeit"],
    "szenario": "Auf der Dienststelle kursiert das Gerücht, eine Kollegin würde bei Verkehrskontrollen vereinzelt Verwarnungsgelder in die eigene Tasche stecken. Sie haben dafür keine Beweise, hören es aber von mehreren Seiten.",
    "optionen": {
      "A": "Sie sprechen die Kollegin direkt auf die Gerüchte an und fragen sie, ob etwas an den Vorwürfen dran ist.",
      "B": "Sie informieren umgehend Ihren Vorgesetzten oder die interne Ermittlung über die kursierenden Gerüchte, damit diese objektiv geprüft werden.",
      "C": "Da es nur Gerüchte sind, tun Sie nichts. Kollegen verpfeift man nicht ohne handfeste Beweise.",
      "D": "Sie meiden die Zusammenarbeit mit der Kollegin und raten auch anderen, nicht mehr mit ihr Streife zu fahren."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 5,
    "kompetenzen": ["Selbstreflexion", "Authentizität"],
    "szenario": "Sie haben als Einsatzleiter eine taktische Entscheidung getroffen, die im Nachhinein offensichtlich falsch war. Es gab keine Verletzten, aber der Einsatz dauerte dadurch unnötig lange und stieß auf Unmut im Team.",
    "optionen": {
      "A": "Sie besprechen den Einsatz in der Nachbereitung, übernehmen offen die Verantwortung für den Fehler und analysieren gemeinsam mit dem Team, was man künftig besser machen kann.",
      "B": "Sie rechtfertigen Ihre Entscheidung in der Nachbereitung mit unklaren Informationslagen, um keinen Gesichtsverlust als Führungskraft zu erleiden.",
      "C": "Sie lassen den Einsatz unkommentiert, da Fehler passieren und Sie das Thema nicht unnötig aufbauschen wollen.",
      "D": "Sie schieben die Schuld auf die ungenauen Angaben der Einsatzzentrale."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 6,
    "kompetenzen": ["Belastbarkeit", "Entscheidungskompetenz"],
    "szenario": "Sie sind als erste Streife bei einer Massenschlägerei auf einem Volksfest (ca. 30 Beteiligte). Die Situation ist unübersichtlich, Flaschen fliegen.",
    "optionen": {
      "A": "Sie stürzen sich sofort ins Getümmel, um den Hauptaggressor festzunehmen und ein Zeichen zu setzen.",
      "B": "Sie bleiben am Rand, fordern umgehend starke Unterstützung an, beobachten die Lage, melden laufend Erkenntnisse und greifen erst gezielt ein, wenn es der Eigenschutz zulässt.",
      "C": "Sie fahren ein Stück zurück, schalten Blaulicht und Martinshorn aus und warten in sicherer Entfernung auf die geschlossenen Einheiten.",
      "D": "Sie nutzen sofort den Mehrzweckstock und Pfefferspray wahllos in die Menge, um diese schnellstmöglich zu zerstreuen."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 7,
    "kompetenzen": ["Führungskompetenz", "Teamfähigkeit"],
    "szenario": "Ein Mitglied Ihrer Dienstgruppe, das sonst sehr engagiert ist, wirkt seit Wochen apathisch, macht Leichtsinnsfehler und meldet sich häufig kurzfristig krank.",
    "optionen": {
      "A": "Sie ermahnen ihn offiziell wegen der Fehler und der Fehlzeiten, um die Dienstfähigkeit der Gruppe zu sichern.",
      "B": "Sie bitten ihn zu einem vertraulichen Gespräch, spiegeln Ihre Beobachtungen wider, fragen nach den Ursachen und bieten Hilfsmöglichkeiten (z.B. psychosoziale Unterstützung) an.",
      "C": "Sie teilen ihn nur noch für unbeliebte Innendienste ein, wo er weniger Schaden anrichten kann.",
      "D": "Sie ignorieren das Verhalten vorerst in der Hoffnung, dass es sich um eine kurze Phase handelt."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 8,
    "kompetenzen": ["Kommunikationsfähigkeit", "Authentizität"],
    "szenario": "Bei einer Routineverkehrskontrolle beginnt der Fahrer sofort, Sie mit seinem Smartphone zu filmen und provoziert Sie verbal ('Scheiß Bullen, habt ihr nichts Besseres zu tun?').",
    "optionen": {
      "A": "Sie versuchen, ihm das Handy sofort aus der Hand zu schlagen, da Filmaufnahmen im Dienst unzulässig sind.",
      "B": "Sie drohen ihm lautstark mit einer Anzeige wegen Beleidigung und fordern aggressiv seine Papiere.",
      "C": "Sie bleiben ruhig, weisen sachlich auf Ihre rechtlichen Befugnisse hin, ignorieren die Provokation weitgehend und ziehen die Kontrolle professionell und zügig durch.",
      "D": "Sie brechen die Kontrolle ab und lassen ihn weiterfahren, um eine Eskalation auf Video zu vermeiden."
    },
    "ranking": "C, B, D, A"
  },
  {
    "id": 9,
    "kompetenzen": ["Emotionale Intelligenz", "Kommunikationsfähigkeit"],
    "szenario": "Sie nehmen die Anzeige einer Frau auf, der gerade die Handtasche geraubt wurde. Sie steht stark unter Schock und weint ununterbrochen.",
    "optionen": {
      "A": "Sie fordern sie bestimmt auf, sich zu beruhigen, da Sie sonst die Anzeige nicht ordnungsgemäß aufnehmen können.",
      "B": "Sie reichen ihr ein Taschentuch, geben ihr Zeit sich zu sammeln, sprechen beruhigend mit ihr und stellen erst danach behutsam die wichtigsten Fragen.",
      "C": "Sie übergeben die Anzeigenaufnahme an Ihren Kollegen und warten lieber im Streifenwagen.",
      "D": "Sie rufen sofort den Rettungsdienst, da Sie mit weinenden Opfern grundsätzlich nicht sprechen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 10,
    "kompetenzen": ["Entscheidungskompetenz", "Belastbarkeit"],
    "szenario": "Sie sind als DGL in der Schicht. Es laufen zeitgleich drei Einsätze auf: 1. Eine Ruhestörung, 2. Ein Ladendieb (wird festgehalten), 3. Ein schwerer Verkehrsunfall mit eingeklemmter Person. Sie haben nur zwei Streifen frei.",
    "optionen": {
      "A": "Sie schicken eine Streife zur Ruhestörung und eine zum Ladendieb. Den VU lassen Sie durch benachbarte Dienststellen anfahren.",
      "B": "Sie priorisieren den VU (höchstes Rechtsgut) und entsenden beide Streifen dorthin. Ladendieb und Ruhestörung müssen warten, was Sie den Mitteilern transparent kommunizieren.",
      "C": "Sie fahren als DGL selbst zur Ruhestörung, um Ressourcen zu sparen.",
      "D": "Sie schicken jeweils einen Beamten alleine zu den drei Einsätzen, um alles gleichzeitig abzudecken."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 11,
    "kompetenzen": ["Gerechtigkeit", "Konfliktmanagement"],
    "szenario": "Während einer gemeinsamen Pause auf der Wache macht ein Kollege einen klar rassistischen Witz über eine bestimmte Bevölkerungsgruppe. Andere lachen.",
    "optionen": {
      "A": "Sie lachen mit, um im Team nicht als Spielverderber zu gelten.",
      "B": "Sie ignorieren den Witz und verlassen stumm den Raum.",
      "C": "Sie positionieren sich sofort und sachlich, dass Sie solche Witze nicht tolerieren und diese mit den Werten der Polizei unvereinbar sind.",
      "D": "Sie melden den Kollegen sofort heimlich beim Disziplinarvorgesetzten, ohne vorher mit ihm zu sprechen."
    },
    "ranking": "C, D, B, A"
  },
  {
    "id": 12,
    "kompetenzen": ["Führungskompetenz", "Selbstreflexion"],
    "szenario": "Sie sind Dienstgruppenleiter. Die Schichtmoral ist am Boden, da in den letzten Wochen extrem viele Überstunden angefallen sind. Die Kollegen beschweren sich lautstark beim Antreten.",
    "optionen": {
      "A": "Sie zeigen Verständnis für den Frust, erklären transparent die aktuellen personellen Engpässe und sagen zu, sich bei der Dienststellenleitung für Entlastung (z.B. durch Schwerpunkteinsätze) einzusetzen.",
      "B": "Sie blocken ab und sagen, dass Polizei eben kein Wunschkonzert ist und Überstunden zum Beruf gehören.",
      "C": "Sie stimmen den Kollegen voll zu und schimpfen gemeinsam mit ihnen über 'die da oben', um Solidarität zu zeigen.",
      "D": "Sie sagen den Antritts-Appell ab, da Sie Diskussionen aus dem Weg gehen wollen."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 13,
    "kompetenzen": ["Teamfähigkeit", "Kommunikationsfähigkeit"],
    "szenario": "Bei der Schichtübernahme stellen Sie fest, dass die Vorgängerschicht den Streifenwagen extrem dreckig (Müll, Kaffeeflecken) und mit leerem Tank hinterlassen hat. Das passiert nicht zum ersten Mal.",
    "optionen": {
      "A": "Sie putzen das Auto und tanken stumm, um keinen Ärger anzufangen.",
      "B": "Sie rufen den verantwortlichen Fahrer der Vorgängerschicht an und bitten ihn sachlich, künftig das Auto ordnungsgemäß zu übergeben, andernfalls würden Sie es offiziell melden.",
      "C": "Sie lassen den Wagen genau so für Ihre Nachfolger stehen, aus Prinzip.",
      "D": "Sie beschweren sich lautstark beim DGL und weigern sich, mit dem Auto auf Streife zu fahren."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 14,
    "kompetenzen": ["Kommunikationsfähigkeit", "Authentizität"],
    "szenario": "An einem Tatort drängt ein Reporter eines Lokalblattes immer wieder auf Informationen und versucht, Fotos von Verletzten zu machen.",
    "optionen": {
      "A": "Sie verweisen den Reporter freundlich aber extrem konsequent des Platzes, verweisen auf die Pressestelle und richten einen Sichtschutz ein.",
      "B": "Sie drohen dem Reporter sofort mit Festnahme und beschlagnahmen seine Kamera.",
      "C": "Sie geben ihm ein paar harmlose Insider-Informationen, damit er endlich Ruhe gibt.",
      "D": "Sie ignorieren ihn und hoffen, dass er von selbst geht."
    },
    "ranking": "A, D, B, C"
  },
  {
    "id": 15,
    "kompetenzen": ["Führungskompetenz", "Konfliktmanagement"],
    "szenario": "Eine junge Beamtin in Ihrer Schicht postet regelmäßig Videos auf Social Media in Uniform, die grenzwertig sind und das Ansehen der Polizei schädigen könnten. Sie sind ihr Vorgesetzter.",
    "optionen": {
      "A": "Sie verbieten ihr sofort jegliche Social Media Nutzung.",
      "B": "Sie führen ein Sensibilisierungsgespräch, erklären die rechtlichen und dienstrechtlichen Grenzen (Neutralitätsgebot) und bitten sie, kritische Videos zu entfernen.",
      "C": "Sie leiten den Fall anonym an die Pressestelle weiter.",
      "D": "Sie liken die Videos, um einen guten Draht zu den jungen Kollegen aufzubauen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 16,
    "kompetenzen": ["Entscheidungskompetenz", "Teamfähigkeit"],
    "szenario": "Ein Bürger reicht eine formelle Dienstaufsichtsbeschwerde gegen Ihren Streifenpartner ein, da dieser bei einer Kontrolle unverhältnismäßig grob gewesen sei. Sie waren dabei und fanden das Verhalten Ihres Partners ebenfalls grenzwertig.",
    "optionen": {
      "A": "Sie decken Ihren Partner bei der Zeugenaussage zu 100%, Korpsgeist ist am wichtigsten.",
      "B": "Sie sagen objektiv und wahrheitsgemäß aus, was passiert ist, sprechen aber vorher mit Ihrem Partner über Ihre Sicht der Dinge.",
      "C": "Sie behaupten, sich an nichts erinnern zu können.",
      "D": "Sie belasten Ihren Partner schwerer als es war, um sich selbst zu distanzieren."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 17,
    "kompetenzen": ["Belastbarkeit", "Emotionale Intelligenz"],
    "szenario": "Nach einem extrem belastenden Einsatz (Suizid auf den Schienen) bemerken Sie, dass Ihr Streifenpartner zittert und extrem still wird. Er lehnt ein Gespräch ab ('Mir gehts gut').",
    "optionen": {
      "A": "Sie zwingen ihn, sofort mit einem Polizeiseelsorger zu sprechen.",
      "B": "Sie akzeptieren seine Grenze im Moment, bleiben aber aufmerksam, schirmen ihn für den Rest der Schicht etwas ab und bieten später behutsam erneut ein Gespräch an.",
      "C": "Sie machen Witze über den Einsatz, um die Stimmung aufzulockern (Galgenhumor).",
      "D": "Sie ignorieren es. Jeder muss mit sowas alleine klarkommen."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 18,
    "kompetenzen": ["Gerechtigkeit", "Konfliktmanagement"],
    "szenario": "Sie erwischen einen Kollegen dabei, wie er bei einem Bäcker einen Kaffee und ein Gebäck annimmt, ohne zu bezahlen ('Geht aufs Haus für die Polizei').",
    "optionen": {
      "A": "Sie nehmen ebenfalls etwas an, um nicht unhöflich zu sein.",
      "B": "Sie warten, bis Sie draußen sind, weisen ihn auf die Compliance-Regeln (Vorteilsnahme) hin und fordern ihn auf, das künftig zu unterlassen.",
      "C": "Sie zahlen demonstrativ den Kaffee für ihn mit und machen ihm vor dem Bäcker eine Szene.",
      "D": "Sie melden ihn sofort wegen Bestechlichkeit an den Staatsanwalt."
    },
    "ranking": "B, C, D, A"
  },
  {
    "id": 19,
    "kompetenzen": ["Führungskompetenz", "Authentizität"],
    "szenario": "Sie sind neu in der Rolle des Einsatzleiters. Ein lebenserfahrener, aber dienstgradniederer Beamter hinterfragt in einem Einsatz lautstark vor anderen Ihre Taktik.",
    "optionen": {
      "A": "Sie stellen klar, dass Sie hier das Sagen haben und dulden keine Widerworte.",
      "B": "Sie hören sich seinen Einwand kurz an, entscheiden dann (falls der Einwand gut ist, passen Sie die Taktik an; falls nicht, bleiben Sie bei Ihrem Plan) und klären die Art und Weise der Kritik im Nachgang unter vier Augen.",
      "C": "Sie übergeben ihm die Einsatzleitung, da er anscheinend mehr Erfahrung hat.",
      "D": "Sie ignorieren ihn komplett und rufen über Funk Ihre Befehle."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 20,
    "kompetenzen": ["Kommunikationsfähigkeit", "Konfliktmanagement"],
    "szenario": "Ein bekannter 'Querulant' erscheint zum 5. Mal in dieser Woche auf der Wache und will eine völlig abstruse Anzeige wegen 'Gedankenkontrolle durch Nachbarn' erstatten.",
    "optionen": {
      "A": "Sie schmeißen ihn sofort und wortlos von der Wache.",
      "B": "Sie bleiben sachlich, erklären ihm bestimmt, dass es sich um keinen Straftatbestand handelt und fertigen bei Bedarf einen kurzen Aktenvermerk, weisen ihn dann aber konsequent ab.",
      "C": "Sie nehmen eine komplette Anzeige auf, um ihn ruhigzustellen, auch wenn es Stunden dauert.",
      "D": "Sie rufen den sozialpsychiatrischen Dienst, um ihn sofort einweisen zu lassen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 21,
    "kompetenzen": ["Belastbarkeit", "Selbstreflexion"],
    "szenario": "Sie spüren in der Mitte einer 12-Stunden-Nachtschicht eine enorme Müdigkeit, die Ihre Reaktionsfähigkeit beim Fahren einschränkt.",
    "optionen": {
      "A": "Sie fahren trotzdem weiter, um keine Schwäche zu zeigen.",
      "B": "Sie kommunizieren dies offen an Ihren Streifenpartner, bitten ihn, das Steuer zu übernehmen oder machen eine vereinbarte Kurzpause, falls es die Einsatzlage zulässt.",
      "C": "Sie trinken drei Energydrinks und fahren aggressiver, um wach zu bleiben.",
      "D": "Sie stellen sich heimlich mit dem Streifenwagen ab und schlafen zwei Stunden, ohne der Einsatzzentrale Bescheid zu geben."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 22,
    "kompetenzen": ["Teamfähigkeit", "Gerechtigkeit"],
    "szenario": "Ihre neue Streifenpartnerin ist die einzige Frau in der Dienstgruppe. Sie merken, dass einige Kollegen in der Teeküche hinter ihrem Rücken anzügliche Bemerkungen machen.",
    "optionen": {
      "A": "Sie lachen mit, um dazuzugehören.",
      "B": "Sie schreiten ein, benennen das Verhalten als unkollegial und unangebracht und fordern die Kollegen auf, dies zu unterlassen.",
      "C": "Sie erzählen der Kollegin detailliert, wer was über sie gesagt hat.",
      "D": "Sie melden es anonym beim Gleichstellungsbeauftragten, ohne selbst einzugreifen."
    },
    "ranking": "B, D, C, A"
  },
  {
    "id": 23,
    "kompetenzen": ["Entscheidungskompetenz", "Kommunikationsfähigkeit"],
    "szenario": "Bei einer Verkehrskontrolle stellt sich der Fahrer als lokaler Politiker vor und droht mit Konsequenzen für Ihre Karriere, wenn Sie ihm ein Bußgeld ausstellen.",
    "optionen": {
      "A": "Sie ziehen die Kontrolle vollkommen unbeeindruckt, sachlich und formell korrekt durch. Die Drohung protokollieren Sie in einem Vermerk.",
      "B": "Sie belassen es bei einer mündlichen Verwarnung, um Ärger für die Dienststelle zu vermeiden.",
      "C": "Sie reagieren emotional, werfen ihm Amtsmissbrauch vor und legen ihm präventiv Handschellen an.",
      "D": "Sie rufen Ihren DGL an und fragen, ob Sie das Knöllchen schreiben dürfen."
    },
    "ranking": "A, D, B, C"
  },
  {
    "id": 24,
    "kompetenzen": ["Führungskompetenz", "Selbstreflexion"],
    "szenario": "Sie müssen als Vorgesetzter ein schwieriges Mitarbeitergespräch mit einem Beamten führen, der fachlich exzellent ist, aber ein großes Defizit im Umgang mit Bürgern (oft arrogant) hat.",
    "optionen": {
      "A": "Sie loben zuerst seine fachlichen Leistungen und sprechen dann konkret und beispielhaft sein Auftreten an. Sie erarbeiten gemeinsam Lösungswege.",
      "B": "Sie konzentrieren sich im Gespräch nur auf die Defizite, um ihm die Ernsthaftigkeit klarzumachen.",
      "C": "Sie schreiben ihm lediglich eine schlechte Beurteilung, ohne das Gespräch zu suchen.",
      "D": "Sie ignorieren das Problem, da seine fachliche Arbeit für die Dienststelle unverzichtbar ist."
    },
    "ranking": "A, B, D, C"
  },
  {
    "id": 25,
    "kompetenzen": ["Teamfähigkeit", "Kommunikationsfähigkeit"],
    "szenario": "Sie werden zu einer Dienstgruppe versetzt, die für ihre starke interne Abschottung und ihren rauen Umgangston bekannt ist. Man begegnet Ihnen anfangs mit Misstrauen.",
    "optionen": {
      "A": "Sie ordnen sich komplett unter, übernehmen den rauen Ton und versuchen, es allen recht zu machen.",
      "B": "Sie treten professionell, authentisch und offen auf, erledigen Ihre Arbeit zuverlässig und lassen sich Zeit, durch Leistung Respekt zu erarbeiten, ohne Ihre eigenen Werte aufzugeben.",
      "C": "Sie beschweren sich nach drei Tagen beim Dienststellenleiter über das schlechte Arbeitsklima.",
      "D": "Sie isolieren sich bewusst, machen nur Dienst nach Vorschrift und meiden Gespräche."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 26,
    "kompetenzen": ["Emotionale Intelligenz", "Belastbarkeit"],
    "szenario": "Nach einer missglückten Reanimation eines Jugendlichen sind Sie und Ihr Partner auf der Rückfahrt zur Wache extrem angespannt. Ihr Partner bricht plötzlich in Tränen aus.",
    "optionen": {
      "A": "Sie fahren rechts ran, nehmen sich Zeit für ihn, signalisieren Verständnis und bieten an, den Rest der Schicht die Führung zu übernehmen.",
      "B": "Sie tun so, als hätten Sie es nicht bemerkt, um ihm keine Scham zu bereiten.",
      "C": "Sie sagen ihm, er solle sich zusammenreißen, wir sind schließlich bei der Polizei.",
      "D": "Sie funken sofort an die Einsatzzentrale, dass Ihr Partner dienstunfähig ist."
    },
    "ranking": "A, B, D, C"
  },
  {
    "id": 27,
    "kompetenzen": ["Gerechtigkeit", "Entscheidungskompetenz"],
    "szenario": "Sie bearbeiten einen Ladendiebstahl. Der Beschuldigte ist offensichtlich obdachlos und hat lediglich eine Dose Suppe gestohlen. Der Filialleiter besteht beharrlich auf eine Strafanzeige.",
    "optionen": {
      "A": "Sie verweigern die Anzeigenaufnahme wegen Geringfügigkeit und bezahlen die Suppe selbst.",
      "B": "Sie nehmen die Anzeige objektiv und formgerecht auf, behandeln den Täter respektvoll und fertigen einen entsprechenden Bericht für die Staatsanwaltschaft, die über die Einstellung entscheidet.",
      "C": "Sie beschimpfen den Filialleiter wegen seiner Unmenschlichkeit.",
      "D": "Sie legen dem Obdachlosen Handschellen an, um dem Filialleiter zu imponieren."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 28,
    "kompetenzen": ["Authentizität", "Kommunikationsfähigkeit"],
    "szenario": "Sie haben vergessen, eine wichtige Zeugenaussage zeitgerecht weiterzuleiten. Die Staatsanwaltschaft beschwert sich telefonisch bei Ihnen.",
    "optionen": {
      "A": "Sie behaupten, die IT habe versagt und das Dokument sei im System verschwunden.",
      "B": "Sie geben den Fehler offen und ohne Umschweife zu, entschuldigen sich und versichern, das Dokument sofort nachzureichen.",
      "C": "Sie geben einem jüngeren Kollegen die Schuld, der die Akte angeblich falsch abgelegt hat.",
      "D": "Sie ignorieren den Anruf der Staatsanwaltschaft und reichen das Dokument stillschweigend nach."
    },
    "ranking": "B, D, A, C"
  },
  {
    "id": 29,
    "kompetenzen": ["Konfliktmanagement", "Teamfähigkeit"],
    "szenario": "Ihr Streifenpartner übernimmt während einer Personenkontrolle ständig das Wort und lässt Sie wie einen Praktikanten aussehen, obwohl Sie denselben Dienstgrad haben.",
    "optionen": {
      "A": "Sie fallen ihm während der nächsten Kontrolle vor dem Bürger hart ins Wort und übernehmen lautstark die Führung.",
      "B": "Sie sprechen das Thema bei der nächsten Rückfahrt zur Wache an und vereinbaren eine klare Rollenverteilung (Sicherer / Sprecher) für zukünftige Kontrollen.",
      "C": "Sie lassen ihn künftig alles alleine machen und schalten auf stur.",
      "D": "Sie beschweren sich beim DGL über ihn."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 30,
    "kompetenzen": ["Führungskompetenz", "Belastbarkeit"],
    "szenario": "Sie werden als junger Beamter vorübergehend mit der stellvertretenden Dienstgruppenleitung betraut. Einige ältere Kollegen weigern sich subtil, Ihre Anordnungen ernst zu nehmen.",
    "optionen": {
      "A": "Sie suchen das Einzelgespräch, erklären Ihre Aufgabe, fordern Professionalität ein und zeigen gleichzeitig Wertschätzung für deren Erfahrung.",
      "B": "Sie beginnen sofort, Disziplinarverfahren gegen jeden anzudrohen, der nicht spurt.",
      "C": "Sie ziehen sich zurück und erledigen nur Verwaltungsarbeit, um Konflikten aus dem Weg zu gehen.",
      "D": "Sie bitten den Dienstgruppenleiter, Ihnen die Aufgabe wieder abzunehmen, da Sie dem Druck nicht standhalten."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 31,
    "kompetenzen": ["Entscheidungskompetenz", "Selbstreflexion"],
    "szenario": "Während einer Einsatzfahrt mit Sondersignal kommen Sie an eine rote Ampel. Die Kreuzung ist unübersichtlich.",
    "optionen": {
      "A": "Sie fahren ungebremst durch, da Sie Vorrang haben und es schnell gehen muss.",
      "B": "Sie bremsen stark ab, vergewissern sich, dass alle Verkehrsteilnehmer Sie gesehen haben und tasten sich langsam in die Kreuzung, bevor Sie wieder beschleunigen.",
      "C": "Sie schalten das Martinshorn aus, um niemanden zu erschrecken, und fahren drüber.",
      "D": "Sie warten an der roten Ampel, bis diese grün wird, um kein Risiko einzugehen."
    },
    "ranking": "B, D, A, C"
  },
  {
    "id": 32,
    "kompetenzen": ["Kommunikationsfähigkeit", "Konfliktmanagement"],
    "szenario": "Eine hysterische Mutter ruft auf der Wache an. Ihre 15-jährige Tochter ist seit 2 Stunden überfällig. Es liegen keine Hinweise auf eine Straftat vor.",
    "optionen": {
      "A": "Sie wimmeln die Mutter ab und sagen ihr, sie soll sich in 24 Stunden wieder melden.",
      "B": "Sie nehmen die Sorge der Mutter ernst, erfassen sachlich alle Personalien, leiten erste Routineüberprüfungen (Krankenhäuser, Freunde) ein und geben ihr Verhaltenshinweise.",
      "C": "Sie lösen sofort eine landesweite Großfahndung aus, um die Mutter zu beruhigen.",
      "D": "Sie legen einfach auf, da das Telefon dauernd klingelt."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 33,
    "kompetenzen": ["Teamfähigkeit", "Authentizität"],
    "szenario": "Bei einer Feier der Dienststelle trinkt ein Kollege, der an diesem Abend noch in die Nachtschicht starten soll, offensichtlich Alkohol.",
    "optionen": {
      "A": "Sie behalten es für sich, da Sie keine Spaßbremse sein wollen.",
      "B": "Sie sprechen den Kollegen diskret an, fordern ihn auf, den Dienstantritt zu unterlassen und sich krank/Urlaub zu melden. Zeigt er keine Einsicht, informieren Sie den DGL.",
      "C": "Sie informieren sofort den Dienststellenleiter vor allen anwesenden Gästen.",
      "D": "Sie mischen ihm Wasser in sein Getränk, damit er nicht so betrunken wird."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 34,
    "kompetenzen": ["Führungskompetenz", "Gerechtigkeit"],
    "szenario": "Als Vorgesetzter müssen Sie Urlaubswünsche koordinieren. Zwei Beamte wollen zeitgleich an Weihnachten frei haben. Personaltechnisch kann nur einer gehen. Beide haben kleine Kinder.",
    "optionen": {
      "A": "Sie würfeln die Entscheidung aus, um objektiv zu wirken.",
      "B": "Sie prüfen die Urlaubslisten der letzten Jahre (Wer hatte letztes Jahr frei?) und suchen das gemeinsame Gespräch mit beiden, um eine faire, nachvollziehbare Lösung (z.B. Splitting) zu finden.",
      "C": "Sie genehmigen keinem den Urlaub, um Streit zu vermeiden.",
      "D": "Sie geben dem Beamten frei, der lauter meckert."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 35,
    "kompetenzen": ["Emotionale Intelligenz", "Kommunikationsfähigkeit"],
    "szenario": "Sie sichern einen Tatort (schwerer Unfall) ab. Ein Schaulustiger steht weinend am Rand, da das verunglückte Fahrzeug aussieht wie das seines Sohnes.",
    "optionen": {
      "A": "Sie erteilen ihm sofort einen strengen Platzverweis wegen Störung.",
      "B": "Sie gehen empathisch auf ihn zu, überprüfen das Kennzeichen und teilen ihm (falls negativ) schonend mit, dass es nicht sein Sohn ist. Gegebenenfalls binden Sie den Rettungsdienst ein.",
      "C": "Sie lassen ihn stehen, da Sie den Tatort bewachen müssen.",
      "D": "Sie lassen ihn zum Fahrzeug vor, damit er sich selbst vergewissern kann."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 36,
    "kompetenzen": ["Selbstreflexion", "Belastbarkeit"],
    "szenario": "Sie haben seit Wochen massive Schlafprobleme aufgrund des Schichtdienstes und merken, dass Sie im Dienst unkonzentriert und reizbar sind.",
    "optionen": {
      "A": "Sie nehmen rezeptfreie Schlafmittel, um den Dienst irgendwie zu überstehen.",
      "B": "Sie wenden sich vertrauensvoll an den Polizeiarzt oder Vorgesetzten, um präventiv nach Lösungen (z.B. vorübergehender Innendienst) zu suchen.",
      "C": "Sie kompensieren das durch hohen Kaffeekonsum und versuchen, die Schwäche zu verbergen.",
      "D": "Sie melden sich dauerhaft krank, ohne den Grund zu nennen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 37,
    "kompetenzen": ["Konfliktmanagement", "Gerechtigkeit"],
    "szenario": "Ein Kollege redet vor Ihnen oft herablassend über die DGL. Eines Tages fordert die DGL Sie auf, die Leistung des besagten Kollegen einzuschätzen.",
    "optionen": {
      "A": "Sie nutzen die Chance und erzählen der DGL detailliert von den Lästereien des Kollegen.",
      "B": "Sie trennen Privates von Dienstlichem und bewerten gegenüber der DGL rein objektiv die fachliche Leistung des Kollegen auf Streife.",
      "C": "Sie lügen und behaupten, er sei der beste Kollege, um ihn zu schützen.",
      "D": "Sie weigern sich, eine Aussage über Kollegen zu machen."
    },
    "ranking": "B, D, A, C"
  },
  {
    "id": 38,
    "kompetenzen": ["Entscheidungskompetenz", "Teamfähigkeit"],
    "szenario": "Sie haben einen Flüchtigen nach langer Verfolgung gestellt. Er wehrt sich massiv, es kommt zum Gerangel. Als der Täter am Boden fixiert ist, will Ihr extrem wütender Kollege nochmal nachtreten.",
    "optionen": {
      "A": "Sie lassen ihn gewähren, da der Täter sich auch gewehrt hat.",
      "B": "Sie schreiten physisch ein, blockieren Ihren Kollegen und rufen ihn lautstark zur Räson, um eine Straftat im Amt zu verhindern.",
      "C": "Sie schauen weg und behaupten später, nichts gesehen zu haben.",
      "D": "Sie nehmen die Personalien des Täters auf und ignorieren das Verhalten des Kollegen."
    },
    "ranking": "B, D, C, A"
  },
  {
    "id": 39,
    "kompetenzen": ["Führungskompetenz", "Kommunikationsfähigkeit"],
    "szenario": "Sie sind Einsatzleiter bei einer angemeldeten Demonstration. Ein Unterführer meldet, dass seine Gruppe von Demonstranten stark provoziert wird und er den Wasserwerfer einsetzen will. Die rechtlichen Voraussetzungen sind noch nicht gegeben.",
    "optionen": {
      "A": "Sie vertrauen dem Unterführer blind und geben den Einsatz des Wasserwerfers frei.",
      "B": "Sie untersagen den Einsatz klar, erinnern sachlich an die Verhältnismäßigkeit und entsenden zusätzliche Kräfte zur verbalen Deeskalation.",
      "C": "Sie fahren selbst dorthin und spritzen die Demonstranten persönlich nass.",
      "D": "Sie nehmen dem Unterführer sofort die Führung weg und schicken ihn nach Hause."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 40,
    "kompetenzen": ["Authentizität", "Kommunikationsfähigkeit"],
    "szenario": "Sie werden zu einem Streit unter Nachbarn gerufen. Beide Parteien schreien wild durcheinander. Keiner hört Ihnen zu.",
    "optionen": {
      "A": "Sie verschaffen sich durch ein lautes, klares Kommando ('Halt, Polizei!') Gehör, trennen die Parteien räumlich und klären den Sachverhalt dann in Ruhe mit jedem einzeln.",
      "B": "Sie drehen sich um und fahren wieder, mit der Bemerkung, sie sollen anrufen, wenn sie sich beruhigt haben.",
      "C": "Sie zücken sofort den Taser, um Ruhe zu erzwingen.",
      "D": "Sie stellen sich dazwischen und versuchen, während des Geschreis zu schlichten."
    },
    "ranking": "A, D, B, C"
  }
];

// Helper to parse ranking string e.g. "B, C, A, D" into array ['B', 'C', 'A', 'D']
QUIZ_QUESTIONS.forEach(q => {
  q.rankingArray = q.ranking.split(',').map(s => s.trim());
});
