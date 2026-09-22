// questions.js - 40 Situational Judgement Test (SJT) Aufgaben für die Polizei
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "rolle": "Dienststellenleiter",
    "kompetenzen": ["Führungskompetenz", "Emotionale Intelligenz", "Entscheidungskompetenz"],
    "szenario": "Als Dienststellenleiter erfahren Sie über die Einsatzzentrale, dass ein Angehöriger Ihrer Dienststelle bei einer Einsatzfahrt mit Sondersignalen ein kleines Mädchen überfahren hat. Das Mädchen ist sehr schwer verletzt, der Polizeibeamte blieb körperlich unverletzt, steht aber stark unter Schock. Die medizinische Versorgung des Kindes ist durch den Rettungsdienst bereits eingeleitet und Pressevertreter sind auf dem Weg zum Unfallort. Wie verhalten Sie sich?",
    "optionen": {
      "A": "Sobald ich am Unfallort angekommen bin, schirme ich den Beamten von äußeren Einflüssen ab. Ich organisiere eine Betreuung für ihn und versuche ihn für einige Tage vom Dienst zu befreien. Ich sorge außerdem dafür, dass die Eltern des Mädchens informiert werden. Nach dem Einsatz fahre ich zurück zur Dienststelle.",
      "B": "Ich fahre selbst zur Unfallstelle, kümmere mich um den betroffenen Beamten und biete ihm meine Unterstützung an. Ich sorge dafür, dass er von der Öffentlichkeit abgeschirmt ist. Für die nächsten Tage stelle ich ihn vom Außendienst frei. Dann sorge ich dafür, dass die Eltern des schwer verletzten Mädchens informiert werden. Schließlich kehre ich zur Dienststelle zurück.",
      "C": "Ich übergebe die Dienstgeschäfte an meinen Stellvertreter und fahre selbst zur Unfallstelle. Dort versuche ich den Beamten von der Öffentlichkeit abzuschirmen und seine Betreuung zu organisieren. Außerdem benachrichtige ich die Eltern des Kindes persönlich. Wenn irgendwie möglich, gewähre ich dem Beamten für die nächsten Tage Dienstbefreiung. Im Anschluss an den Einsatz fahre ich selbst ins Krankenhaus zum verletzten Mädchen.",
      "D": "Ich beauftrage meinen Stellvertreter, die anfallenden Aufgaben zu übernehmen. Dann fahre ich selbst zur Unfallstelle und schirme zunächst den Beamten von der Öffentlichkeit ab. Ich organisiere für ihn eine professionelle Betreuung und gebe ihm möglichst für einige Tage dienstfrei. Außerdem sorge ich dafür, dass die Verständigung der Eltern des Kindes durchgeführt wird. Nach Beendigung des Einsatzes fahre ich wieder zur Dienststelle."
    },
    "ranking": "C, D, A, B"
  },
  {
    "id": 2,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Konfliktmanagement", "Kommunikationsfähigkeit"],
    "szenario": "Sie sind als erfahrener Streifenbeamter in einer festen Dienstgruppe eingeteilt. Seit mehreren Wochen fällt Ihnen auf, dass ein jüngerer Kollege, mit dem Sie heute auf Streife sind, extrem stark nach Schweiß und ungewaschener Kleidung riecht. Dies ist kein Einzelfall nach einem Einsatz, sondern ein Dauerzustand, der die Zusammenarbeit auf engstem Raum im Streifenwagen nahezu unerträglich macht. Auch Bürger reagieren bei Kontrollen bereits spürbar irritiert. Die Stimmung in der Schicht leidet, aber aus falscher Zurückhaltung hat bisher niemand etwas gesagt. Wie verhalten Sie sich?",
    "optionen": {
      "A": "Ich bitte den Dienstgruppenleiter (DGL), bei der nächsten Dienstbesprechung einen allgemeinen Dienstunterricht über Körperhygiene und Außenwirkung zu halten, damit der Kollege den Wink versteht, ohne dass ich ihn direkt bloßstellen muss.",
      "B": "Ich suche bei der nächsten passenden Gelegenheit ein vertrauliches Vier-Augen-Gespräch. Dabei spreche ich das Problem respektvoll, aber absolut direkt an, erkläre ihm die negativen Auswirkungen auf die Zusammenarbeit sowie die Außenwirkung und bitte ihn, auf seine Hygiene zu achten.",
      "C": "Ich öffne während der Streifenfahrt demonstrativ beide Fenster, sprühe Raumspray und mache unmissverständliche Andeutungen über den Geruch, in der Hoffnung, dass er sein Verhalten von selbst ändert.",
      "D": "Ich ignoriere das Problem weiterhin und versuche, die Schicht irgendwie zu überstehen. Die Gefahr, das kollegiale Verhältnis durch eine so intime und peinliche Thematik dauerhaft zu zerstören, ist mir zu hoch."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 3,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Entscheidungskompetenz", "Authentizität"],
    "szenario": "Sie haben vor kurzem die Leitung einer Dienstgruppe übernommen. Ein sehr erfahrener, älterer Polizeihauptkommissar, der bei den jungen Kollegen ein hohes Standing genießt, zieht Ihre Arbeitsanweisungen beim täglichen Antreten wiederholt ins Lächerliche. Heute unterbricht er Sie vor versammelter Mannschaft bei der Zuweisung eines Schwerpunkteinsatzes mit der Bemerkung: 'Das haben wir hier noch nie so gemacht, das bringt doch eh nichts, Chef.' Die jungen Beamten schauen gespannt auf Ihre Reaktion.",
    "optionen": {
      "A": "Ich weise ihn sofort und scharf vor der gesamten Schicht zurecht, mache klar, dass ich solche Insubordinationen nicht dulde, und untermauere damit meine Autorität als neuer Dienstgruppenleiter unmissverständlich.",
      "B": "Ich reagiere sachlich, bedanke mich kurz für seinen Einwurf, setze meine Befehlsausgabe aber konsequent fort. Unmittelbar nach dem Antreten bestelle ich ihn zu einem Vier-Augen-Gespräch in mein Büro, um klare Grenzen für sein Verhalten vor der Mannschaft aufzuzeigen.",
      "C": "Ich melde den Vorfall noch am selben Tag schriftlich an den Dienststellenleiter und fordere eine formelle Abmahnung für den Kollegen, da mein Führungsanspruch andernfalls nachhaltig beschädigt ist.",
      "D": "Ich versuche, die Situation mit Humor zu überspielen, lache über seinen Kommentar und erkläre meine Anordnung ausführlich, um Authentizität zu zeigen und mich nicht sofort unbeliebt zu machen."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 4,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Emotionale Intelligenz", "Belastbarkeit", "Kommunikationsfähigkeit"],
    "szenario": "Sie müssen gemeinsam mit einem jungen Kollegen die Todesnachricht über einen plötzlichen Kindstod überbringen. Als Sie dem Vater in der Wohnung die Nachricht schonend mitteilen, bricht dieser nicht in Tränen aus, sondern reagiert mit unkontrollierbarer, extremer Aggression. Er schreit Sie aus vollstem Hals an, wirft einen Stuhl gegen die Wand und baut sich bedrohlich vor Ihrem jungen Streifenpartner auf, der sichtlich überfordert ist.",
    "optionen": {
      "A": "Ich baue mich vor dem Vater auf, weise ihn streng an, sich sofort zu beruhigen, und drohe ihm an, dass wir ihn andernfalls in Gewahrsam nehmen müssen, wenn er weiter randaliert.",
      "B": "Ich befehle meinem Kollegen den sofortigen taktischen Rückzug aus der Wohnung. Wir warten im Treppenhaus, fordern eine zweite Streife zur Eigensicherung an und betreten die Wohnung erst wieder, wenn sich die Lage beruhigt hat.",
      "C": "Ich bewahre absolute Ruhe, stelle mich schützend vor meinen Kollegen, halte körperlichen Abstand, zeige verbal Verständnis für den völligen Ausnahmezustand des Vaters und warte ab, bis die erste Welle der unkontrollierten Wut abebbt, ohne mich provozieren zu lassen.",
      "D": "Ich versuche sofort, körperlichen Kontakt herzustellen, nehme den Vater in den Arm und rede ununterbrochen beruhigend auf ihn ein, um größtmögliche Empathie in dieser schweren Stunde zu signalisieren."
    },
    "ranking": "C, B, A, D"
  },
  {
    "id": 5,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Gerechtigkeit", "Teamfähigkeit", "Entscheidungskompetenz"],
    "szenario": "Innerhalb der Wache kursiert das hartnäckige Gerücht, dass eine langjährige Kollegin bei Verkehrskontrollen vereinzelt Verwarnungsgelder in bar kassiert, aber keine Quittungen ausstellt und das Geld in die eigene Tasche steckt. Sie haben dafür selbst keine stichhaltigen Beweise gesehen, hören die Vorwürfe jedoch unabhängig voneinander von mehreren meist jüngeren Kollegen, die nicht wissen, wie sie damit umgehen sollen.",
    "optionen": {
      "A": "Ich suche das direkte Gespräch mit der betroffenen Kollegin, konfrontiere sie unter vier Augen mit den kursierenden Gerüchten und frage sie schonungslos, ob an den Vorwürfen etwas dran ist.",
      "B": "Da der Vorwurf einer Straftat im Amt im Raum steht, informiere ich umgehend meinen Vorgesetzten (DGL) über die Gerüchte und die Aussagen der jungen Kollegen, damit eine objektive und diskrete Prüfung eingeleitet wird.",
      "C": "Da es sich bislang nur um Hörensagen und Gerüchte handelt, unternehme ich vorerst gar nichts. Ohne handfeste Beweise verpfeift man keine Kollegen und riskiert keine Rufmordkampagne.",
      "D": "Ich weigere mich ab sofort kategorisch, mit dieser Kollegin auf Streife zu fahren, und rate auch den jüngeren Kollegen heimlich, die Zusammenarbeit mit ihr zu meiden, um nicht mit reingezogen zu werden."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 6,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Selbstreflexion", "Authentizität", "Führungskompetenz"],
    "szenario": "Sie haben in der vergangenen Nachtschicht als Einsatzleiter bei einer unklaren Bedrohungslage eine weitreichende taktische Entscheidung getroffen, die sich im Nachhinein als völlig falsch herausstellte. Es kam glücklicherweise niemand zu Schaden, aber der Einsatz dauerte dadurch extrem lange, band unnötig viele Kräfte und stieß bei den eingesetzten Beamten auf starken, spürbaren Unmut. Nun steht die Nachbesprechung des Einsatzes an.",
    "optionen": {
      "A": "Ich eröffne die Nachbesprechung, übernehme sofort und offen die volle persönliche Verantwortung für den Fehler, erkläre kurz meine damaligen Gedankengänge und analysiere dann gemeinsam mit dem Team konstruktiv, wie wir so etwas künftig besser lösen können.",
      "B": "Ich rechtfertige meine Entscheidung in der Nachbereitung intensiv mit der unklaren und dynamischen Informationslage, um keinen Gesichtsverlust als Führungskraft zu erleiden und das Vertrauen in meine Entscheidungsfähigkeit zu erhalten.",
      "C": "Ich hake den Einsatz schnell als 'Erfahrungswert' ab, verzichte auf eine tiefgehende Analyse eigener Fehler, da ja niemand verletzt wurde, und lenke das Thema zügig auf die anstehenden Aufgaben der nächsten Schicht.",
      "D": "Ich schiebe die Hauptschuld auf die ungenauen Angaben der Einsatzzentrale und die mangelhafte Informationsweitergabe durch die Erstsprecher vor Ort, da ich auf Basis dieser Daten handeln musste."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 7,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Belastbarkeit", "Entscheidungskompetenz", "Teamfähigkeit"],
    "szenario": "Sie und Ihr junger, noch unerfahrener Streifenpartner treffen als erste und einzige Streife bei einer Massenschlägerei auf einem Volksfest ein. Es sind ca. 30 teils stark alkoholisierte Personen beteiligt. Die Lage ist extrem dynamisch und unübersichtlich, es fliegen bereits Flaschen und Stühle. Weitere Unterstützungskräfte haben eine Anfahrtszeit von mindestens 8 Minuten.",
    "optionen": {
      "A": "Ich ziehe sofort den Einsatzstock, weise meinen Partner an mir zu folgen, und wir stürzen uns gezielt auf den lautesten Aggressor im Getümmel, um durch schnelle Festnahme eine Schockwirkung zu erzielen.",
      "B": "Ich stoppe das Fahrzeug in sicherer Entfernung, fordere über Funk umgehend alle verfügbaren Kräfte nach, beleuchte die Szenerie ausleuchtend, beobachte die Lage präzise und greife erst gezielt und verhältnismäßig ein, wenn es der Eigenschutz zulässt.",
      "C": "Ich fahre sofort ein großes Stück zurück, schalte Blaulicht und Martinshorn komplett aus, um keine Aggressionen auf uns zu ziehen, und warte versteckt, bis die geschlossenen Einheiten oder genügend Streifen eintreffen.",
      "D": "Ich steige aus, sprühe sofort großflächig mit dem RSG (Pfefferspray) in die Menge und rufe laute Kommandos, um die Menge schnellstmöglich und ohne Rücksicht auf Einzelne zu zerstreuen."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 8,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Emotionale Intelligenz", "Konfliktmanagement"],
    "szenario": "Ein Beamter Ihrer Dienstgruppe, der über Jahre hinweg stets hervorragende Arbeit geleistet hat, fällt seit etwa zwei Monaten massiv ab. Er wirkt apathisch, macht gravierende Leichtsinnsfehler bei einfachen Anzeigenaufnahmen, kapselt sich von den Kollegen ab und meldet sich auffällig häufig kurzfristig krank. Die restliche Dienstgruppe muss seine Arbeit zunehmend auffangen, was zu ersten Beschwerden führt.",
    "optionen": {
      "A": "Ich rufe ihn in mein Büro und ermahne ihn offiziell wegen der gehäuften Fehler und Fehlzeiten. Ich fordere eine sofortige Leistungssteigerung, um die Dienstfähigkeit der Gruppe zu sichern und weiteren Unmut zu vermeiden.",
      "B": "Ich lade ihn zu einem vertraulichen Fürsorgegespräch ein, spiegele ihm konkret und wertfrei meine Beobachtungen wider, frage ihn empathisch nach möglichen privaten oder dienstlichen Ursachen und zeige aktiv Hilfsangebote (z.B. psychosoziale Unterstützung) auf.",
      "C": "Ich teile ihn bis auf Weiteres kommentarlos nur noch für unbeliebte Innendienste und Aktenablage ein, wo er durch Leichtsinnsfehler den geringsten Schaden für die Dienststelle anrichten kann.",
      "D": "Ich ignoriere das Verhalten vorerst bewusst, da er jahrelang ein Leistungsträger war, und hoffe darauf, dass es sich nur um eine kurze private Phase handelt, die sich von selbst wieder reguliert."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 9,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Kommunikationsfähigkeit", "Authentizität", "Belastbarkeit"],
    "szenario": "Sie führen zur Nachtzeit eine Routineverkehrskontrolle durch. Der männliche Fahrer reagiert sofort hochaggressiv. Als Sie an das Fenster treten, hält er Ihnen sein Smartphone direkt ins Gesicht, filmt Sie und ruft laut: 'Das stream ich jetzt live, ihr scheiß Bullen! Habt ihr nichts Besseres zu tun, als ehrliche Bürger zu schikanieren?'",
    "optionen": {
      "A": "Ich greife blitzschnell durchs Fenster, versuche ihm das Handy aus der Hand zu schlagen oder abzunehmen, da Film- und Tonaufnahmen von Polizeibeamten im Dienst strafbar sind und ich das unterbinden muss.",
      "B": "Ich erhebe meine Stimme deutlich, drohe ihm sofort mit einer Strafanzeige wegen Beleidigung und Verletzung der Vertraulichkeit des Wortes und fordere hochaggressiv die Herausgabe seiner Papiere.",
      "C": "Ich bleibe äußerlich völlig ruhig, weise ihn sachlich und bestimmt auf die rechtlichen Grenzen von Filmaufnahmen hin, ignoriere die verbale Provokation professionell und führe die verkehrsrechtliche Kontrolle zügig und konsequent durch.",
      "D": "Ich breche die Kontrolle augenblicklich ab, steige kommentarlos in den Streifenwagen und lasse ihn weiterfahren, um eine mögliche mediale Eskalation oder ein virales Video im Netz zu vermeiden."
    },
    "ranking": "C, B, D, A"
  },
  {
    "id": 10,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Emotionale Intelligenz", "Kommunikationsfähigkeit", "Entscheidungskompetenz"],
    "szenario": "Sie werden zu einem schweren Raubüberfall gerufen. Das weibliche Opfer, der die Handtasche gewaltsam entrissen wurde, sitzt auf dem Gehweg. Sie ist körperlich unverletzt, steht aber stark unter Schock, zittert am ganzen Körper und weint ununterbrochen. Sie wissen, dass eine zeitnahe Täterbeschreibung für die laufende Ringfahndung essenziell wichtig wäre.",
    "optionen": {
      "A": "Ich spreche sie laut und bestimmt an, fordere sie auf sich sofort zusammenzureißen, da der Täter sonst entkommt, und dränge sie vehement zu einer detaillierten Personenbeschreibung.",
      "B": "Ich hocke mich auf Augenhöhe zu ihr, gebe ihr Zeit sich kurz zu sammeln, spreche beruhigend auf sie ein und stelle erst danach sehr behutsam die wichtigsten Fragen zur Täterbeschreibung für die Erstmeldung.",
      "C": "Da sie offensichtlich nicht vernehmungsfähig ist, verzichte ich komplett auf Befragungen, übergebe sie wortlos dem eintreffenden Rettungsdienst und warte im Fahrzeug, bis sie im Krankenhaus ist.",
      "D": "Ich richte sie auf, nehme sie in den Arm, sage ihr, dass alles wieder gut wird und versuche sie durch Witze aufzumuntern, bevor ich nach dem Täter frage."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 11,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Entscheidungskompetenz", "Belastbarkeit", "Führungskompetenz"],
    "szenario": "Es ist Samstagnacht, die Schicht ist unterbesetzt. Sie sitzen als DGL am Funk. Zeitgleich laufen drei Einsätze auf: 1. Eine massive Ruhestörung mit aggressiven Anrufern. 2. Ein Ladendieb, der vom Detektiv im Büro festgehalten wird. 3. Ein schwerer Verkehrsunfall auf der Landstraße mit eingeklemmter Person. Sie haben aktuell nur exakt zwei Streifenwagen zur Verfügung, Nachbardienststellen haben 20 Minuten Anfahrt.",
    "optionen": {
      "A": "Ich entsende eine Streife zur Ruhestörung und eine zum Ladendieb, da diese Sachverhalte schnell abzuarbeiten sind. Den Verkehrsunfall lasse ich durch die Feuerwehr und Nachbardienststellen anfahren, auch wenn es dauert.",
      "B": "Ich priorisiere den Verkehrsunfall als höchsten Schutzgut-Einsatz (Leben/Gesundheit) und entsende beide verfügbaren Streifen dorthin. Den Ladendetektiv und die Anrufer der Ruhestörung informiere ich transparent über die Verzögerung.",
      "C": "Ich fahre als DGL selbst alleine zur Ruhestörung, schicke eine Streife zum Ladendieb und eine Streife zum Verkehrsunfall, um alle Einsätze gleichzeitig abzudecken, auch wenn ich mich in Gefahr begebe.",
      "D": "Ich schicke jeweils einen Beamten alleine zu den drei Einsätzen, um Präsenz zu zeigen, und weise sie an, auf Eintreffen von Unterstützung zu warten, bevor sie tätig werden."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 12,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Gerechtigkeit", "Konfliktmanagement", "Authentizität"],
    "szenario": "Während der Nachtschicht sitzen Sie mit mehreren Kollegen im Aufenthaltsraum der Wache zusammen. Ein Kollege, der für seine flapsige Art bekannt ist, erzählt plötzlich einen klar rassistischen Witz über eine bestimmte Bevölkerungsgruppe, mit der es in letzter Zeit häufig Einsätze gab. Zwei andere Kollegen lachen laut auf. Die Stimmung ist ausgelassen, aber die Äußerung überschreitet eindeutig eine rote Linie.",
    "optionen": {
      "A": "Ich lache leise mit, um in der Gruppe nicht als moralisierender Spielverderber zu gelten und das gute Schichtklima nicht durch eine Prinzipiendiskussion zu zerstören.",
      "B": "Ich ignoriere den Witz demonstrativ, schüttle leicht den Kopf und verlasse stumm den Aufenthaltsraum, um durch meine Abwesenheit Missbilligung zu signalisieren.",
      "C": "Ich positioniere mich sofort, sachlich aber unmissverständlich vor der gesamten Gruppe, dass ich solche rassistischen Äußerungen nicht toleriere und diese mit unseren polizeilichen Werten unvereinbar sind.",
      "D": "Ich sage im Raum nichts, schreibe aber direkt danach eine detaillierte Beschwerdemail an den Dienststellenleiter, in der ich den Kollegen wegen Rassismus anschwärze."
    },
    "ranking": "C, B, D, A"
  },
  {
    "id": 13,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Selbstreflexion", "Kommunikationsfähigkeit"],
    "szenario": "Die Schichtmoral ist absolut am Boden. Aufgrund von Personalmangel, Großveranstaltungen und Krankenstand sind in den letzten vier Wochen extrem viele Überstunden angefallen. Beim heutigen Antreten entlädt sich der Frust: Die Kollegen beschweren sich lautstark, drohen teilweise offen mit 'Dienst nach Vorschrift' und werfen Ihnen vor, sich als DGL nicht schützend vor die Schicht zu stellen.",
    "optionen": {
      "A": "Ich zeige ehrliches Verständnis für den Frust, erkläre transparent die übergeordneten Gründe für die aktuellen Engpässe und sage verbindlich zu, mich bei der Dienststellenleitung massiv für Entlastungsmaßnahmen einzusetzen.",
      "B": "Ich blocke die Beschwerden rigoros ab, verweise auf die beamtenrechtliche Treuepflicht und betone hart, dass die Polizei kein Wunschkonzert sei und Überstunden eben zum Berufsbild gehören.",
      "C": "Ich pflichte den Kollegen bei, schimpfe gemeinsam mit ihnen minutenlang über 'die da oben in der Behördenleitung', um Solidarität zu zeigen und mich beliebt zu machen.",
      "D": "Ich breche das Antreten sofort ab, verweise die Kollegen auf ihre Fahrzeuge und entziehe mich der Diskussion, um die Gemüter abkühlen zu lassen."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 14,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Teamfähigkeit", "Kommunikationsfähigkeit", "Konfliktmanagement"],
    "szenario": "Sie kommen zum Frühdienst. Bei der Übernahme des Streifenwagens stellen Sie fest, dass die Vorgängerschicht das Fahrzeug in einem desolaten Zustand hinterlassen hat: Der Tank ist fast leer, auf den Sitzen kleben Kaffeeflecken und im Fußraum liegt Müll. Es ist nicht das erste Mal, dass speziell diese Dienstgruppe die Fahrzeuge so hinterlässt. Sie ärgern sich massiv, da Sie nun erst putzen und tanken müssen.",
    "optionen": {
      "A": "Ich putze das Auto wortlos und fahre tanken. Um des lieben Friedens willen fange ich keinen Streit mit der anderen Schicht an, da wir uns ohnehin selten sehen.",
      "B": "Ich rufe den verantwortlichen Fahrzeugführer der Vorgängerschicht direkt an, schildere sachlich das Problem, fordere ihn auf, dies künftig zu unterlassen, und kündige an, bei Wiederholung den DGL einzuschalten.",
      "C": "Ich räume den gröbsten Müll weg, lasse die Kaffeeflecken aber absichtlich für unsere Nachfolger so, aus Prinzip, damit auch andere den Zustand bemerken.",
      "D": "Ich eskaliere sofort: Ich fotografiere das Auto, stürme ins Büro des DGL der Vorgängerschicht, brülle ihn an und weigere mich, das Fahrzeug in diesem Zustand zu übernehmen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 15,
    "rolle": "Dienststellenleiter",
    "kompetenzen": ["Führungskompetenz", "Kommunikationsfähigkeit", "Gerechtigkeit"],
    "szenario": "Ein lokaler Journalist veröffentlicht einen äußerst kritischen und in weiten Teilen fehlerhaften Zeitungsartikel über Ihre Dienststelle. Darin wird einem Ihrer Beamten namentlich übermäßige Polizeigewalt bei einer Festnahme vorgeworfen. Die internen Prüfungen haben jedoch zweifelsfrei ergeben, dass das Verhalten des Beamten rechtmäßig und absolut verhältnismäßig war. Der Beamte ist psychisch sehr stark durch den Artikel belastet.",
    "optionen": {
      "A": "Ich suche sofort das persönliche Gespräch mit dem betroffenen Beamten, sichere ihm meine volle dienstliche und moralische Rückendeckung zu, und beauftrage die Pressestelle mit einer offiziellen Gegendarstellung.",
      "B": "Ich verbiete dem Beamten sowie der gesamten Dienststelle strikt, mit der Presse zu sprechen, und sitze die mediale Empörungswelle aus, da sich solche Dinge meist nach wenigen Tagen von selbst erledigen.",
      "C": "Ich versetze den Beamten vorübergehend in den Innendienst, um ihn aus der Schusslinie zu nehmen, und gebe eine Presseerklärung heraus, dass wir die Vorwürfe ernst nehmen und prüfen, um die Wogen zu glätten.",
      "D": "Ich rufe den Journalisten persönlich an, beschimpfe ihn wegen seiner unsauberen Recherche und drohe ihm mit einer Anzeige wegen Verleumdung, falls er den Artikel nicht sofort löscht."
    },
    "ranking": "A, C, B, D"
  },
  {
    "id": 16,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Konfliktmanagement", "Authentizität"],
    "szenario": "Eine frisch ausgebildete, junge Beamtin in Ihrer Schicht postet regelmäßig kurze Videos auf Social Media in Uniform. Die Inhalte sind nicht direkt strafbar, aber grenzwertig (Tänze vor dem Streifenwagen, flapsige Kommentare über Einsätze). Mehrere ältere Kollegen haben sich bei Ihnen bereits negativ darüber geäußert und fürchten um das Ansehen der bayerischen Polizei. Sie müssen als ihr Vorgesetzter handeln.",
    "optionen": {
      "A": "Ich erteile ihr sofort ein striktes, weisungsgebundenes Verbot jeglicher Social Media Nutzung in Uniform und drohe bei Zuwiderhandlung sofortige Disziplinarmaßnahmen an.",
      "B": "Ich führe ein intensives Sensibilisierungsgespräch mit ihr, erkläre die dienstrechtlichen Grenzen (Neutralitätsgebot) sowie die Außenwirkung und fordere sie verbindlich auf, kritische Videos umgehend zu löschen.",
      "C": "Da ich keine Konflikte möchte, leite ich den Social-Media-Account anonym an die zentrale Pressestelle weiter, damit diese den Vorfall bewertet und übernimmt.",
      "D": "Ich abonniere ihren Kanal und like die Videos, um einen 'guten Draht' zur jungen Generation aufzubauen und zu zeigen, dass ich ein moderner Chef bin."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 17,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Entscheidungskompetenz", "Teamfähigkeit", "Gerechtigkeit"],
    "szenario": "Sie waren zusammen mit Ihrem langjährigen Streifenpartner bei einer nächtlichen Personenkontrolle. Ein stark betrunkener Bürger reicht nun eine formelle Dienstaufsichtsbeschwerde (DAB) gegen Ihren Partner ein, da dieser ihn grundlos gegen die Motorhaube gedrückt habe. Sie waren direkt daneben und müssen intern zugeben: Das Verhalten Ihres Partners war tatsächlich unverhältnismäßig grob, wenn auch nicht direkt körperverletzend. Sie werden nun als Zeuge vernommen.",
    "optionen": {
      "A": "Korpsgeist geht vor: Ich decke meinen Partner bei der Zeugenaussage zu 100%, behaupte, der Bürger habe aktiv Widerstand geleistet und das Handeln sei absolut gerechtfertigt gewesen.",
      "B": "Ich sage objektiv und wahrheitsgemäß aus, wie ich die Situation wahrgenommen habe, suche aber zwingend vorher das Gespräch mit meinem Partner, um ihm meine Sicht der Dinge und meine geplante Aussage offen mitzuteilen.",
      "C": "Ich mache von meinem Aussageverweigerungsrecht Gebrauch oder behaupte pauschal, ich könne mich aufgrund der Dunkelheit und des Stresses an die genauen Details nicht mehr erinnern.",
      "D": "Ich belaste meinen Partner in der Vernehmung schwerer, als es tatsächlich war, um mich selbst maximal von der Situation zu distanzieren und gut vor den Ermittlern dazustehen."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 18,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Belastbarkeit", "Emotionale Intelligenz", "Kommunikationsfähigkeit"],
    "szenario": "Sie und Ihr Partner mussten nach einem Personenunfall auf der Bahnstrecke grauenhafte Bilder ansehen. Auf der Rückfahrt zur Dienststelle bemerken Sie, dass Ihr Partner extrem angespannt ist, leicht zittert und völlig verstummt ist. Als Sie ihn fragen, ob alles okay sei, antwortet er nur kurz und gepresst: 'Lass mich einfach in Ruhe, mir gehts gut.'",
    "optionen": {
      "A": "Ich fahre sofort auf den Hof der Dienststelle, hole den DGL ans Auto und zwinge meinen Partner, sich umgehend krankzumelden und mit dem Polizeiseelsorger zu telefonieren.",
      "B": "Ich akzeptiere seine verbale Grenze im aktuellen Moment, bleibe aber extrem aufmerksam. Ich übernehme für den Rest der Schicht die Federführung und biete ihm später auf der Wache behutsam erneut ein Gespräch an.",
      "C": "Ich fange an, zynische Witze über den Einsatzort zu machen (Galgenhumor), in der Hoffnung, die angespannte Stimmung im Auto dadurch aufzulockern.",
      "D": "Ich nehme seine Antwort wörtlich, ignoriere sein Zittern komplett und gehe davon aus, dass in unserem Beruf jeder mit solchen Dingen alleine klarkommen muss."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 19,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Gerechtigkeit", "Konfliktmanagement", "Authentizität"],
    "szenario": "Während der Nachtschicht machen Sie und Ihr Kollege kurz Halt bei einem lokalen Bäcker. Ihr Kollege bestellt zwei belegte Brötchen und einen großen Kaffee. Als er bezahlen will, winkt der Bäcker ab: 'Geht aufs Haus für die Polizei, ihr passt ja auf uns auf.' Ihr Kollege bedankt sich freudig und nimmt das Essen an, obwohl Sie wissen, dass dies als Vorteilsnahme strengstens untersagt ist.",
    "optionen": {
      "A": "Ich bestelle ebenfalls etwas und nehme es kostenlos an, um vor dem Bäcker nicht als unhöflich oder undankbar gegenüber seiner guten Absicht zu erscheinen.",
      "B": "Ich warte, bis wir den Laden verlassen haben. Im Auto weise ich den Kollegen klar auf die Compliance-Regeln (Vorteilsnahme/Korruption) hin und fordere ihn auf, dieses Verhalten in Zukunft bei gemeinsamen Streifen zu unterlassen.",
      "C": "Ich zücke mein Portemonnaie, bezahle demonstrativ den vollen Preis für sein Essen mit und mache ihm noch im Laden vor dem Bäcker eine laute Szene über Korruption.",
      "D": "Ich notiere mir heimlich Uhrzeit und Ort und schreibe direkt nach Schichtende eine Meldung an die interne Ermittlung wegen des Verdachts der Bestechlichkeit."
    },
    "ranking": "B, C, D, A"
  },
  {
    "id": 20,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Authentizität", "Kommunikationsfähigkeit"],
    "szenario": "Sie sind recht neu in der Rolle des Einsatzleiters einer geschlossenen Einheit. Bei einer brenzligen Versammlungslage ordnen Sie eine taktische Maßnahme an. Ein lebenserfahrener, aber dienstgradniederer Gruppenführer, der schon hundert solcher Lagen erlebt hat, hinterfragt Ihren Befehl vor anderen Einsatzkräften lautstark und hält Ihre Taktik für falsch und gefährlich.",
    "optionen": {
      "A": "Ich stelle sofort laut und unmissverständlich klar, dass ich hier das Sagen habe, dulde keinerlei Widerworte und setze meinen ursprünglichen Befehl ohne weitere Diskussion durch.",
      "B": "Ich höre mir seinen Einwand kurz und konzentriert an. Wenn er taktisch recht hat, passe ich den Plan an; wenn nicht, bleibe ich bei meinem Befehl. Die Art und Weise seiner Kritik kläre ich zwingend im Nachgang unter vier Augen.",
      "C": "Ich bin verunsichert, übergebe ihm kurzerhand die Einsatzleitung, da er offensichtlich mehr Erfahrung hat, und ziehe mich in die zweite Reihe zurück.",
      "D": "Ich ignoriere seinen Einwurf komplett, drehe mich weg und funke meine Befehle direkt an die einzelnen Trupps durch, um ihn zu übergehen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 21,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Kommunikationsfähigkeit", "Konfliktmanagement", "Belastbarkeit"],
    "szenario": "Ein stadtbekannter 'Querulant', der psychisch auffällig, aber harmlos ist, erscheint zum fünften Mal in dieser Woche im Wachraum. Er möchte erneut eine völlig abstruse Strafanzeige erstatten, diesmal wegen 'illegaler Gedankenkontrolle durch Satelliten des Nachbarn'. Der Wachraum ist voll, Sie haben eigentlich Wichtigeres zu tun und er redet laut auf Sie ein.",
    "optionen": {
      "A": "Ich rufe zwei Kollegen, packe ihn an den Armen und schmeiße ihn wortlos und mit Nachdruck aus der Dienststelle, notfalls mit Hausverbot.",
      "B": "Ich bleibe ruhig und sachlich, erkläre ihm konsequent, dass es sich um keinen Straftatbestand handelt. Ich fertige bei Bedarf einen kurzen Aktenvermerk, weise ihn dann aber bestimmt ab und fordere ihn auf zu gehen.",
      "C": "Ich setze mich mit ihm hin und nehme eine komplette, formelle Strafanzeige auf, auch wenn es eine Stunde dauert, nur um ihn ruhigzustellen und aus dem Wachraum zu bekommen.",
      "D": "Ich greife zum Telefon, rufe den sozialpsychiatrischen Dienst an und versuche ihn sofort wegen Eigen- und Fremdgefährdung zwangseinweisen zu lassen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 22,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Selbstreflexion", "Belastbarkeit", "Entscheidungskompetenz"],
    "szenario": "Es ist 04:00 Uhr morgens, mitten in einer extrem anstrengenden 12-Stunden-Nachtschicht. Sie sitzen am Steuer des Streifenwagens und spüren plötzlich eine massive Übermüdung (Sekundenschlaf-Gefahr), die Ihre Reaktionsfähigkeit beim Fahren massiv einschränkt. Ihr Partner tippt neben Ihnen am Tablet Berichte.",
    "optionen": {
      "A": "Ich kneife mich, mache das Radio lauter und fahre tapfer weiter, da ich vor meinem Kollegen keine Schwäche zeigen und als 'harter Hund' gelten will.",
      "B": "Ich kommuniziere meine Übermüdung offen an meinen Partner, fahre rechts ran und bitte ihn, das Steuer zu übernehmen, oder wir machen eine 15-minütige Bewegungspause, falls keine Einsätze offen sind.",
      "C": "Ich halte am nächsten Kiosk, trinke hastig drei Energydrinks und fahre absichtlich etwas rasanter, weil mich das Adrenalin wachhält.",
      "D": "Ich stelle den Streifenwagen heimlich in einen abgelegenen Waldweg, schlafe ohne Meldung an die Zentrale für zwei Stunden und überlasse meinen Partner sich selbst."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 23,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Teamfähigkeit", "Gerechtigkeit", "Authentizität"],
    "szenario": "Ihre neue Streifenpartnerin ist die einzige junge Frau in Ihrer Dienstgruppe. Sie merken an mehreren Tagen, wie einige ältere männliche Kollegen in der Teeküche der Wache hinter ihrem Rücken anzügliche Bemerkungen über ihre Figur machen und spekulieren, wie sie den Einstellungstest geschafft hat. Die Kollegin selbst bekommt das nicht mit.",
    "optionen": {
      "A": "Ich lache leise mit, um in der 'Männerrunde' der Schicht dazuzugehören und mich nicht als unliebsamer Moralapostel auszugrenzen.",
      "B": "Ich schreite sofort ein, benenne das Verhalten klar als unkollegial, sexistisch und unangebracht. Ich fordere die Kollegen auf, dies umgehend zu unterlassen.",
      "C": "Ich gehe im Anschluss direkt zu der Kollegin und erzähle ihr detailliert und ungefiltert, wer genau was Schlimmes über sie gesagt hat, damit sie gewarnt ist.",
      "D": "Ich schreibe eine anonyme E-Mail an den Gleichstellungsbeauftragten des Präsidiums, ohne selbst im Kollegenkreis Farbe zu bekennen."
    },
    "ranking": "B, D, C, A"
  },
  {
    "id": 24,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Entscheidungskompetenz", "Kommunikationsfähigkeit", "Konfliktmanagement"],
    "szenario": "Sie kontrollieren nachts einen SUV, der eine durchgezogene Linie überfahren hat. Der Fahrer ist alkoholisiert. Als Sie ihn mitnehmen wollen, stellt er sich als einflussreicher lokaler Politiker vor. Er wird herablassend und droht Ihnen ganz offen: 'Wenn Sie das jetzt durchziehen, sorge ich persönlich dafür, dass Sie in diesem Präsidium keine Karriere mehr machen!'",
    "optionen": {
      "A": "Ich bleibe vollkommen unbeeindruckt, führe die Maßnahme sachlich, formell korrekt und konsequent durch. Die ausgesprochene Drohung halte ich später akribisch in einem Aktenvermerk fest.",
      "B": "Ich werde unsicher, belasse es bei einer strengen mündlichen Verwarnung und lasse das Fahrzeug stehen, um mir und der Dienststellenleitung massiven politischen Ärger zu ersparen.",
      "C": "Ich werde emotional, werfe ihm lautstark Amtsmissbrauch vor, lege ihm sofort präventiv Handschellen an und drücke ihn unnötig hart in den Streifenwagen.",
      "D": "Ich rufe verängstigt über Handy meinen Dienststellenleiter aus dem Bett an und frage ihn, ob ich bei diesem Mann wirklich die Blutentnahme anordnen darf."
    },
    "ranking": "A, D, B, C"
  },
  {
    "id": 25,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Selbstreflexion", "Emotionale Intelligenz"],
    "szenario": "Sie müssen als Vorgesetzter ein schwieriges jährliches Beurteilungsgespräch mit einem erfahrenen Kriminalbeamten führen. Fachlich ist er exzellent und hat die beste Aufklärungsquote der Abteilung. Er hat jedoch ein gewaltiges Defizit im Umgang mit Menschen: Er tritt Bürgern gegenüber extrem arrogant auf und bevormundet jüngere Kollegen. Das Teamklima leidet darunter.",
    "optionen": {
      "A": "Ich lobe im Gespräch zunächst aufrichtig seine fachlichen Erfolge. Danach spreche ich sein Auftreten anhand konkreter Beispiele klar an, erkläre die negative Wirkung auf Team und Bürger und erarbeite mit ihm verbindliche Entwicklungsziele.",
      "B": "Da er weiß, dass er fachlich gut ist, konzentriere ich mich im Gespräch ausschließlich auf seine menschlichen Defizite und rede ihm heftig ins Gewissen, um die Ernsthaftigkeit klarzumachen.",
      "C": "Ich bewerte ihn einfach in allen Punkten (auch sozial) mit der Bestnote. Seine fachliche Arbeit ist für die Quote der Dienststelle zu wichtig, um ihn durch Kritik zu demotivieren.",
      "D": "Ich delegiere das Gespräch an meinen Stellvertreter, da ich Konflikten mit dominanten Mitarbeitern grundsätzlich lieber aus dem Weg gehe."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 26,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Teamfähigkeit", "Kommunikationsfähigkeit", "Authentizität"],
    "szenario": "Sie werden nach der Ausbildung in eine neue Dienstgruppe versetzt. Diese Gruppe ist dafür bekannt, ein sehr eingeschworener Haufen zu sein, der eine raue Sprache pflegt und 'Neuen' gegenüber extrem misstrauisch ist. In den ersten Schichten spüren Sie deutlich, wie man Sie bei Gesprächen schneidet und Ihnen nur Hilfsarbeiten (Auto waschen, Akten lochen) aufträgt.",
    "optionen": {
      "A": "Ich ordne mich komplett unter, übernehme sofort den rauen Jargon, lache über jeden Witz und versuche mit allen Mitteln, es den Platzhirschen recht zu machen, um dazuzugehören.",
      "B": "Ich trete weiterhin professionell, authentisch und freundlich auf, erledige meine Aufgaben zuverlässig und lasse mir Zeit, mir durch gute fachliche Leistung und Charakterfestigkeit den Respekt zu erarbeiten.",
      "C": "Ich gehe bereits nach der dritten Schicht zum Dienststellenleiter und beschwere mich offiziell über Mobbing und das schlechte Arbeitsklima in meiner neuen Gruppe.",
      "D": "Ich isoliere mich bewusst, spreche nur das absolut Nötigste, mache stur Dienst nach Vorschrift und warte ab, bis ich in eine andere Gruppe wechseln kann."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 27,
    "rolle": "Dienststellenleiter",
    "kompetenzen": ["Führungskompetenz", "Gerechtigkeit", "Konfliktmanagement"],
    "szenario": "Eine Bürgerinitiative hat sich über das Vorgehen Ihrer Beamten bei einer kürzlichen Hausbesetzung beschwert. In der Lokalpolitik wird nun gefordert, dass Sie als Dienststellenleiter sich öffentlich für die 'Polizeigewalt' entschuldigen. Sie haben die Einsatzberichte und Bodycam-Videos geprüft und sind zu 100% überzeugt, dass der Einsatz rechtmäßig, taktisch sauber und verhältnismäßig war.",
    "optionen": {
      "A": "Ich stelle mich bei einer öffentlichen Stellungnahme uneingeschränkt vor meine Beamten, präsentiere sachlich die Einsatzgründe und verteidige die Verhältnismäßigkeit der Maßnahme gegen jeden politischen Druck.",
      "B": "Ich bitte die Politik um Entschuldigung und kündige an, die beteiligten Beamten intern zu disziplinieren, um den öffentlichen Druck von der Behörde und mir zu nehmen.",
      "C": "Ich gebe überhaupt kein Statement ab, verbiete der Pressestelle jede Kommunikation und hoffe, dass das Thema durch das nächste große Nachrichtenereignis verdrängt wird.",
      "D": "Ich schiebe die Verantwortung öffentlich auf den Einsatzleiter vor Ort ab, betone, dass ich an diesem Tag nicht im Dienst war, und verspreche lückenlose Aufklärung."
    },
    "ranking": "A, C, D, B"
  },
  {
    "id": 28,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Entscheidungskompetenz", "Gerechtigkeit", "Kommunikationsfähigkeit"],
    "szenario": "Sie werden zu einem Supermarkt gerufen. Der Filialleiter hält einen offensichtlich verwahrlosten, älteren obdachlosen Mann fest. Er hat eine kleine Dose Gulaschsuppe im Wert von 1,50 Euro in der Tasche versteckt, da er tagelang nichts gegessen hat. Der Filialleiter ist extrem wütend, schreit den Mann an und besteht auf einer harten Strafanzeige und Hausverbot.",
    "optionen": {
      "A": "Ich weigere mich schlichtweg, die Anzeige aufzunehmen, verweise auf die Geringfügigkeit, bezahle die Suppe aus meiner eigenen Tasche und lasse den Mann gehen.",
      "B": "Ich nehme den Sachverhalt objektiv auf, beruhige den Filialleiter, behandle den Täter menschlich und respektvoll. Im Bericht für die Staatsanwaltschaft schildere ich detailliert die Lebensumstände, die für eine Einstellung des Verfahrens sprechen.",
      "C": "Ich fange an, den Filialleiter vor den Kunden anzuschreien, nenne ihn einen herzlosen Kapitalisten und drohe ihm, wegen Freiheitsberaubung zu ermitteln.",
      "D": "Ich lege dem weinenden Obdachlosen zur Abschreckung vor den Supermarktkunden demonstrativ Handschellen an und führe ihn ab, um dem Filialleiter mein hartes Durchgreifen zu beweisen."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 29,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Authentizität", "Kommunikationsfähigkeit", "Selbstreflexion"],
    "szenario": "Sie haben in der Hektik der Schichtarbeit vergessen, das wichtige Protokoll einer Zeugenvernehmung fristgerecht an die Staatsanwaltschaft weiterzuleiten. Es geht um eine schwere Körperverletzung und der Haftprüfungstermin droht zu platzen. Der zuständige Staatsanwalt ruft nun stinksauer direkt bei Ihnen im Büro an und fragt, wo die Akte bleibt.",
    "optionen": {
      "A": "Ich behaupte, das System habe mal wieder gehangen und die Akte sei auf dem digitalen Weg ins Justizzentrum verloren gegangen. Das sei ein bekanntes IT-Problem.",
      "B": "Ich gebe meinen Fehler am Telefon sofort, offen und ohne Umschweife zu, entschuldige mich für die Schlamperei und versichere, die Akte innerhalb der nächsten 5 Minuten per Eilbote/Fax nachzureichen.",
      "C": "Ich behaupte, ich hätte die Akte an einen jungen Kollegen zur Ablage gegeben und dieser habe sie verschlampt, um von meinem eigenen Fehler abzulenken.",
      "D": "Ich lege einfach auf, melde mich für den Rest des Tages krank und lasse meinen Streifenpartner die wütenden Rückrufe des Staatsanwalts bearbeiten."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 30,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Konfliktmanagement", "Teamfähigkeit", "Kommunikationsfähigkeit"],
    "szenario": "Ihr langjähriger Streifenpartner hat die Angewohnheit, bei jeder Bürgerkontrolle sofort das Wort an sich zu reißen. Selbst wenn Sie den Bürger zuerst ansprechen, fällt er Ihnen ins Wort, stellt die Fragen und lässt Sie danebenstehen wie einen unmündigen Praktikanten, obwohl Sie den gleichen Dienstgrad haben. Das ärgert Sie schon lange.",
    "optionen": {
      "A": "Ich falle ihm bei der nächsten Verkehrskontrolle vor dem Bürger lautstark ins Wort, ermahne ihn, mich ausreden zu lassen, und übernehme dann dominant die Führung des Gesprächs.",
      "B": "Ich warte, bis wir wieder alleine im Streifenwagen sitzen. Dort spreche ich das Thema sachlich an, schildere, wie ich mich dabei fühle, und rege an, vor künftigen Kontrollen klarer abzusprechen, wer die Gesprächsführung übernimmt.",
      "C": "Ich schalte auf stur, steige bei den nächsten Kontrollen gar nicht erst aus dem Auto aus und überlasse ihm einfach die gesamte Arbeit.",
      "D": "Ich gehe hinter seinem Rücken zum Dienstgruppenleiter, beschwere mich massiv über seine Arroganz und verlange sofort einen neuen Streifenpartner."
    },
    "ranking": "B, A, D, C"
  },
  {
    "id": 31,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Belastbarkeit", "Authentizität"],
    "szenario": "Sie sind frisch zum Polizeikommissar befördert worden und übernehmen mit 25 Jahren als stellvertretender DGL eine Schicht. Mehrere lebenserfahrene Polizeihauptmeister (Anfang 50), die schon alles gesehen haben, prüfen Sie ausgiebig. Sie merken, wie Ihre Anweisungen bei der Einsatzverteilung belächelt, diskutiert oder nur sehr widerwillig und langsam ausgeführt werden.",
    "optionen": {
      "A": "Ich suche das persönliche Gespräch mit den Meinungsführern, erkläre meine Erwartungen an eine professionelle Zusammenarbeit und zeige gleichzeitig aufrichtigen Respekt vor ihrer massiven Einsatzerfahrung, die ich in meine Führung einbinden möchte.",
      "B": "Ich verfasse sofort schriftliche Aktenvermerke, fange an, Dienstaufsichtsbeschwerden wegen Ungehorsams zu prüfen, und drohe jedem mit disziplinarischen Konsequenzen, der meine Befehle anzweifelt.",
      "C": "Ich ziehe mich enttäuscht ins Büro zurück, kümmere mich nur noch um die Sachbearbeitung am PC und lasse die alten Hasen auf der Straße einfach machen, was sie wollen.",
      "D": "Ich bitte den Dienststellenleiter weinend, mich wieder als einfachen Sachbearbeiter einzusetzen, da ich dem psychischen Druck der Führung nicht standhalte."
    },
    "ranking": "A, B, C, D"
  },
  {
    "id": 32,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Entscheidungskompetenz", "Selbstreflexion", "Belastbarkeit"],
    "szenario": "Sie befinden sich auf einer Einsatzfahrt mit eingeschaltetem Blaulicht und Martinshorn zu einem in Gange befindlichen Wohnungseinbruch. Es eilt sehr. Sie nähern sich mit hoher Geschwindigkeit einer großen, recht unübersichtlichen Kreuzung. Ihre Fahrtrichtung hat Rotlicht, der Querverkehr hat Grün. Sie sehen, wie sich von links ein Linienbus nähert.",
    "optionen": {
      "A": "Ich verlasse mich auf mein Sonder- und Wegerecht, bleibe auf dem Gas und fahre ungebremst in die Kreuzung ein, da die anderen Verkehrsteilnehmer verpflichtet sind, mir sofort Platz zu machen.",
      "B": "Ich bremse den Streifenwagen stark bis auf Schrittgeschwindigkeit ab, stelle durch Blickkontakt sicher, dass der Busfahrer und alle anderen mich wahrgenommen haben und anhalten, und taste mich dann langsam und sicher in die Kreuzung hinein.",
      "C": "Um den Busfahrer nicht durch Lärm zu erschrecken, schalte ich kurz vor der Kreuzung das Martinshorn aus und versuche, schnell durch eine Lücke vor dem Bus hindurchzuhuschen.",
      "D": "Ich bremse ab, schalte Blaulicht und Horn komplett aus und warte an der Haltelinie wie ein normaler Verkehrsteilnehmer auf die nächste Grünphase, um absolut kein Risiko einzugehen."
    },
    "ranking": "B, D, C, A"
  },
  {
    "id": 33,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Emotionale Intelligenz", "Kommunikationsfähigkeit", "Entscheidungskompetenz"],
    "szenario": "Eine völlig aufgelöste Mutter steht nachts um 01:00 Uhr auf der Wache. Ihre 15-jährige Tochter ist seit vier Stunden überfällig, geht nicht ans Handy und war am Nachmittag mit einem unzuverlässigen Freund unterwegs. Es gibt derzeit keine konkreten Hinweise auf eine Straftat oder Suizidalität. Die Mutter weint hysterisch und fleht Sie an, einen Hubschrauber zur Suche loszuschicken.",
    "optionen": {
      "A": "Ich wimmle die Mutter sachlich ab, verweise auf die Vorschriften und erkläre ihr, dass Jugendliche abhauen können und sie in frühestens 24 Stunden wiederkommen soll, wenn das Mädchen immer noch weg ist.",
      "B": "Ich nehme die Sorge der Mutter ernst, lasse sie in einem ruhigen Raum Platz nehmen. Ich erfasse alle Personalien, leite erste Routineüberprüfungen (Krankenhäuser, bekannte Aufenthaltsorte) ein, informiere die Streifen und berate die Mutter über das weitere Vorgehen, ohne unrealistische Hoffnungen auf Großeinsätze zu machen.",
      "C": "Ich alarmiere sofort den Polizeihubschrauber, die Hundestaffel und alle verfügbaren Einsatzkräfte der Region, um die Mutter psychologisch zu beruhigen und ihr zu zeigen, dass wir handeln.",
      "D": "Ich ignoriere die Frau im Wachraum, da ich gerade einen wichtigen Einsatzbericht schreiben muss, und hoffe, dass ein anderer Kollege sich erbarmt."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 34,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Teamfähigkeit", "Authentizität", "Konfliktmanagement"],
    "szenario": "Es ist Samstagabend, 20:00 Uhr. Sie sind auf einer privaten Geburtstagsfeier eines Kollegen. Ein anderer Kollege, der an diesem Abend um 22:00 Uhr noch zum Nachtdienst auf der Wache antreten muss, steht an der Bar und trinkt bereits das dritte Bier. Er ist hörbar angetrunken und sagt lachend: 'Ach was, so ein bisschen Restalkohol merkt doch auf der Streife keiner.'",
    "optionen": {
      "A": "Ich behalte es für mich, drehe mich weg und mische mich nicht ein, da es seine eigene private Verantwortung ist und ich auf der Party nicht als Spielverderber gelten will.",
      "B": "Ich ziehe ihn sofort diskret zur Seite, mache ihm unmissverständlich klar, dass ein Dienstantritt in diesem Zustand absolut inakzeptabel ist, und fordere ihn auf, sich sofort krank oder urlaub zu melden. Sollte er dennoch antreten wollen, kündige ich an, den DGL zu informieren.",
      "C": "Ich rufe noch von der Feier aus heimlich den Dienststellenleiter an, schildere den Vorfall in vollem Umfang und sorge dafür, dass der Kollege beim Dienstantritt direkt zum Alkoholtest gebeten wird.",
      "D": "Ich gehe heimlich zur Bar und lasse dem Kollegen ab sofort nur noch alkoholfreies Bier ausschenken, ohne dass er es merkt, in der Hoffnung, dass er bis 22 Uhr wieder nüchtern ist."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 35,
    "rolle": "Dienstgruppenleiter (DGL)",
    "kompetenzen": ["Führungskompetenz", "Gerechtigkeit", "Kommunikationsfähigkeit"],
    "szenario": "Als DGL müssen Sie die Urlaubsplanung für Weihnachten koordinieren. Zwei Ihrer Beamten (beide Väter von kleinen Kindern) wollen unbedingt an Heiligabend frei haben. Die Mindeststärke der Schicht lässt es jedoch zwingend nur zu, dass einer von beiden Urlaub bekommt. Beide beharren stark auf ihrem Wunsch und die Stimmung in der Dienstgruppe beginnt zu kippen.",
    "optionen": {
      "A": "Ich würfle die Entscheidung beim Antreten vor versammelter Mannschaft öffentlich aus. Das ist absolut transparent, objektiv und niemand kann mir als Vorgesetzten eine Bevorzugung vorwerfen.",
      "B": "Ich prüfe zunächst die Urlaubslisten der letzten Jahre (Wer hatte letztes Jahr an Weihnachten frei?). Dann lade ich beide zu einem gemeinsamen Gespräch ein, moderiere die Lösungsfindung und strebe einen fairen Kompromiss (z.B. Schicht-Splitting, einer Heiligabend, einer Silvester) an.",
      "C": "Da sie sich nicht einigen können, streiche ich kurzerhand beiden den Urlaub. So gibt es keinen Gewinner, aber auch keinen Bevorzugten, und die Schichtstärke ist auf jeden Fall gesichert.",
      "D": "Ich gebe dem Beamten frei, der am längsten auf der Dienststelle ist, und sage dem anderen einfach, dass er Pech gehabt hat."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 36,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Emotionale Intelligenz", "Kommunikationsfähigkeit", "Belastbarkeit"],
    "szenario": "Sie sichern spätnachts einen schrecklichen Verkehrsunfallort ab. Ein Fahrzeug ist bis zur Unkenntlichkeit ausgebrannt. Hinter dem Flatterband steht plötzlich ein älterer Mann im Bademantel. Er weint herzzerreißend, zittert und ruft: 'Das ist das Auto meines Sohnes, ich weiß es, lassen Sie mich durch!' Sie kennen das abgelesene Kennzeichen und wissen, dass es sich definitiv um ein ganz anderes Fahrzeug handelt.",
    "optionen": {
      "A": "Ich brülle ihn an, erteile ihm wegen Störung der polizeilichen Maßnahmen sofort einen Platzverweis und drohe mit Ingewahrsamnahme, falls er das Flatterband überschreitet.",
      "B": "Ich gehe zügig und empathisch auf ihn zu, halte ihn sanft zurück und teile ihm sofort und beruhigend mit, dass es definitiv nicht das Fahrzeug seines Sohnes ist. Ich bleibe kurz bei ihm, bis er sich vom ersten Schock erholt hat, und weise ihn dann aus dem Gefahrenbereich.",
      "C": "Ich ignoriere ihn komplett, drehe ihm den Rücken zu und bewache stur mein Flatterband. Es ist nicht meine Aufgabe, mich um Passanten zu kümmern.",
      "D": "Ich hebe das Flatterband an und lasse ihn ganz nah an das ausgebrannte Wrack herantreten, damit er sich selbst mit eigenen Augen davon überzeugen kann, dass es nicht das Auto seines Sohnes ist."
    },
    "ranking": "B, C, A, D"
  },
  {
    "id": 37,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Selbstreflexion", "Belastbarkeit", "Entscheidungskompetenz"],
    "szenario": "Sie leiden seit mehreren Wochen unter massiven, stressbedingten Schlafproblemen, die durch den ständigen Wechsel im Schichtdienst ausgelöst werden. Sie merken zunehmend, dass Sie auf Streife extrem unkonzentriert, vergesslich und gegenüber Bürgern ungerechtfertigt reizbar werden. Gestern haben Sie im Einsatz fast Ihre Dienstwaffe im Streifenwagen liegengelassen. Es wird gefährlich.",
    "optionen": {
      "A": "Ich besorge mir über Bekannte starke, rezeptfreie Beruhigungs- und Schlafmittel, um mich in den Freischichten auszuknocken und den Dienstbetrieb irgendwie weiter aufrechtzuerhalten.",
      "B": "Ich erkenne die Gefahr für mich und Kollegen, wende mich vertrauensvoll an meinen DGL oder den Polizeiarzt, schildere meine Symptome offen und bitte präventiv um Unterstützung, z.B. durch eine vorübergehende Zuweisung in den Tag- oder Innendienst, bis ich gesundheitlich wieder stabil bin.",
      "C": "Ich versuche das Defizit durch extremen Kaffeekonsum auszugleichen, reiße mich noch mehr zusammen und verheimliche meine Probleme vor allen, um nicht als 'schwach' oder 'nicht belastbar' abgestempelt zu werden.",
      "D": "Ich melde mich einfach dauerhaft krank, reiche eine Arbeitsunfähigkeitsbescheinigung nach der anderen ein, teile der Dienststelle aber bewusst nie die wahren psychischen Gründe mit."
    },
    "ranking": "B, A, C, D"
  },
  {
    "id": 38,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Konfliktmanagement", "Gerechtigkeit", "Authentizität"],
    "szenario": "Ein Kollege Ihrer Dienstgruppe lästert in Anwesenheit anderer Beamter häufig und sehr herablassend über die Führungsqualitäten der Dienstgruppenleiterin (DGL). Eines Tages bittet Sie diese DGL unter vier Augen in ihr Büro und fordert Sie auf, die fachliche Einsatzleistung genau dieses Kollegen offen und ehrlich einzuschätzen, da eine Beförderung ansteht.",
    "optionen": {
      "A": "Ich nutze die willkommene Gelegenheit und erzähle der DGL sehr detailliert von den ständigen Lästereien und der Respektlosigkeit des Kollegen, um ihm die Beförderung zu verbauen.",
      "B": "Ich trenne Privates strikt von Dienstlichem. Ich bewerte gegenüber der DGL rein objektiv und professionell die fachliche und polizeitaktische Leistung des Kollegen auf Streife, lasse sein Geläster unerwähnt, da es hier um die Fachkompetenz geht.",
      "C": "Ich lüge der DGL dreist ins Gesicht und präsentiere den Kollegen in den allerhöchsten Tönen als absoluten Musterbeamten, um ihn vor möglichen negativen Konsequenzen zu schützen.",
      "D": "Ich weigere mich kategorisch, als einfacher Beamter Aussagen über die Leistung eines Kollegen zu machen, und verlasse das Büro der DGL."
    },
    "ranking": "B, D, A, C"
  },
  {
    "id": 39,
    "rolle": "Normaler Beamter",
    "kompetenzen": ["Entscheidungskompetenz", "Teamfähigkeit", "Emotionale Intelligenz"],
    "szenario": "Sie und Ihr Partner haben einen flüchtigen Einbrecher nach einer extrem anstrengenden Fußverfolgung gestellt. Der Täter hat sich massiv gewehrt und Ihrem Partner ins Gesicht geschlagen. Nun liegt der Täter fixiert und in Handschellen auf dem Boden und leistet keinerlei Widerstand mehr. Ihr Partner, der aus der Nase blutet und vor Adrenalin kocht, holt plötzlich mit dem Stiefel aus, um dem wehrlosen Täter noch einmal kräftig in den Magen zu treten.",
    "optionen": {
      "A": "Ich drehe mich um, lasse ihn gewähren, da der Täter schließlich angefangen hat, sich gewehrt hat und mein Partner ein Recht auf emotionale Entladung hat.",
      "B": "Ich schreite sofort physisch ein, dränge meinen Partner mit vollem Körpereinsatz weg, rufe ihn lautstark zur Räson ('Schluss jetzt!') und verhindere so aktiv eine schwere Straftat im Amt durch meinen Kollegen.",
      "C": "Ich tue gar nichts, schaue zu und behaupte später in jedem Bericht und vor Gericht standhaft, ich hätte aufgrund der Dunkelheit nichts gesehen.",
      "D": "Ich funke ganz ruhig die Leitstelle an, fordere einen Rettungswagen, ignoriere das Verhalten meines Partners aber völlig und konzentriere mich nur auf die Personalienfeststellung."
    },
    "ranking": "B, D, C, A"
  },
  {
    "id": 40,
    "rolle": "Dienststellenleiter",
    "kompetenzen": ["Führungskompetenz", "Kommunikationsfähigkeit", "Entscheidungskompetenz"],
    "szenario": "Sie leiten den Großeinsatz bei einer politischen Demonstration, die zu eskalieren droht. Ein Ihnen unterstellter Abschnittsleiter (Unterführer) an der vordersten Front meldet über Funk, dass seine Kette von Demonstranten extrem provoziert und verbal beleidigt wird. Obwohl noch keine Steine oder Flaschen fliegen, bittet er eindringlich um die Freigabe für den sofortigen Einsatz der Wasserwerfer, 'um Stärke zu zeigen und den Platz zu räumen'.",
    "optionen": {
      "A": "Ich vertraue meinem Abschnittsleiter vor Ort blind und erteile ihm sofort die uneingeschränkte Freigabe für den Wasserwerfereinsatz, da er die Lage an der Front am besten einschätzen kann.",
      "B": "Ich untersage den Einsatz des Wasserwerfers klar und unmissverständlich, erinnere den Abschnittsleiter sachlich an die rechtlichen Vorraussetzungen und die Verhältnismäßigkeit, und entsende stattdessen sofort Kommunikationsteams (Anti-Konflikt-Team) zur verbalen Deeskalation.",
      "C": "Ich verlasse meine Befehlsstelle, fahre mit dem Einsatzwagen selbst an die Front und erteile den Befehl direkt an die Besatzung des Wasserwerfers, die Demonstranten nass zu spritzen.",
      "D": "Ich entziehe dem Abschnittsleiter sofort vor allen anderen am Funknetz das Kommando, da er offensichtlich überfordert ist, und beordere ihn unverzüglich zurück zur Einsatzleitung."
    },
    "ranking": "B, A, D, C"
  }
];
