export type Question = {
  id: string;
  text: string;
  answer: string;
};

export type Section = {
  id: string;
  title: string;
  questions: Question[];
};

export type Test = {
  id: number;
  title: string;
  sections: Section[];
};

export const tests: Test[] = [
  {
    id: 1,
    title: "Testprov 1",
    sections: [
      {
        id: "1",
        title: "Område 1: Universum och Partikelmodeller",
        questions: [
          {
            id: "1.1",
            text: "Beskriv Big Bang-teorin och hur den förklarar universums uppkomst.",
            answer: "Big Bang-teorin beskriver universums uppkomst som en expansion från en mycket het och tät början."
          },
          {
            id: "1.2",
            text: "Rita en enkel modell av solsystemets struktur och ange de huvudsakliga himlakropparna.",
            answer: "En modell med solen i centrum, följt av planeter med omloppsbanor (t.ex. Merkurius, Venus, Jorden, Mars, etc.)."
          },
          {
            id: "1.3",
            text: "Diskutera vilka faktorer som är avgörande för att liv ska kunna uppstå på en planet.",
            answer: "Förutsättningar kan inkludera rätt temperatur, närvaro av flytande vatten, lämplig atmosfär samt energikälla."
          }
        ]
      },
      {
        id: "2",
        title: "Område 2: Partikelmodell och Materiens Egenskaper",
        questions: [
          {
            id: "2.1",
            text: "Förklara partikelmodellen för materia och hur den beskriver egenskaper som tryck och temperatur.",
            answer: "Partikelmodellen beskriver att materia består av små, ständigt rörliga partiklar som påverkar egenskaper som tryck, volym och temperatur."
          },
          {
            id: "2.2",
            text: "Beskriv hur man beräknar densiteten hos ett material.",
            answer: "Densitet beräknas som massa dividerat med volym (ρ = m/V)."
          },
          {
            id: "2.3",
            text: "Ge ett exempel på en fasövergång (t.ex. från fast till flytande) och förklara de bakomliggande processerna.",
            answer: "Vid exempelvis smältning omvandlas is till flytande vatten när partiklarna får tillräckligt med energi för att övervinna bindningarna."
          }
        ]
      },
      {
        id: "3",
        title: "Område 3: Jordens Strålningsbalans och Klimatmodeller",
        questions: [
          {
            id: "3.1",
            text: "Beskriv hur jordens strålningsbalans fungerar med fokus på energins inkommande och utgående flöde.",
            answer: "Jordens strålningsbalans innebär att den energi som jorden tar emot från solen balanseras med den energi den sänder ut i rymden."
          },
          {
            id: "3.2",
            text: "Förklara vad växthuseffekten innebär och hur den påverkar jordens temperatur.",
            answer: "Växthuseffekten innebär att vissa gaser i atmosfären fångar upp värme, vilket håller jorden varmare än den annars skulle vara."
          },
          {
            id: "3.3",
            text: "Diskutera hur ökade växthusgaser kan leda till klimatförändringar utifrån ett fysikaliskt perspektiv.",
            answer: "Ökade växthusgaser kan leda till global uppvärmning genom att rubba energibalansen, vilket i sin tur påverkar klimatet."
          }
        ]
      },
      {
        id: "4",
        title: "Område 4: Energi och Miljö",
        questions: [
          {
            id: "4.1",
            text: "Förklara energins oförstörbarhet enligt energikonserveringslagen.",
            answer: "Energi kan inte skapas eller förstöras – den omvandlas från en form till en annan (energikonservering)."
          },
          {
            id: "4.2",
            text: "Diskutera skillnaderna mellan förnybara och icke-förnybara energikällor.",
            answer: "Förnybara energikällor (t.ex. sol, vind) är oändliga medan icke-förnybara (t.ex. olja, kol) kan ta slut."
          },
          {
            id: "4.3",
            text: "Ge ett exempel på hur ett energiflöde i naturen kan påverka miljön.",
            answer: "Till exempel leder förbränning av fossila bränslen till utsläpp som påverkar klimatet."
          }
        ]
      },
      {
        id: "5",
        title: "Område 5: Partikel- och Elektromagnetisk Strålning",
        questions: [
          {
            id: "5.1",
            text: "Beskriv skillnaderna mellan partikelstrålning och elektromagnetisk strålning.",
            answer: "Partikelstrålning består av partiklar (t.ex. alfa- och beta-partiklar) medan elektromagnetisk strålning (t.ex. röntgen, gammastrålning) är energi i form av vågor."
          },
          {
            id: "5.2",
            text: "Ge exempel på användningsområden för röntgenstrålning.",
            answer: "Röntgenstrålning används inom medicinsk diagnostik för att visualisera inre strukturer."
          },
          {
            id: "5.3",
            text: "Diskutera de potentiella riskerna med joniserande strålning.",
            answer: "Joniserande strålning kan skada celler och öka risken för cancer, vilket kräver skyddsåtgärder."
          }
        ]
      },
      {
        id: "6",
        title: "Område 6: Ljusets Utbredning, Reflektion och Brytning",
        questions: [
          {
            id: "6.1",
            text: "Förklara varför ljus färdas i raka linjer i ett homogent medium.",
            answer: "Ljus färdas i raka linjer om det inte påverkas av t.ex. reflektion eller brytning."
          },
          {
            id: "6.2",
            text: "Beskriv hur reflektion sker när ljus träffar en spegel.",
            answer: "När ljus träffar en spegel reflekteras det med samma infallsvinkel som utfallsvinkel."
          },
          {
            id: "6.3",
            text: "Vad är brytning och ge ett praktiskt exempel (t.ex. genom en lins).",
            answer: "Brytning är ljusets riktningändring vid övergång mellan material med olika optiska tätheter (t.ex. från luft till vatten)."
          }
        ]
      },
      {
        id: "7",
        title: "Område 7: Ljudets Uppkomst och Spridning",
        questions: [
          {
            id: "7.1",
            text: "Förklara hur ljud uppstår genom vibrationer och hur dessa omvandlas till ljudvågor.",
            answer: "Ljud uppstår när vibrationer skapar tryckvågor som fortplantar sig genom ett medium."
          },
          {
            id: "7.2",
            text: "Beskriv hur ljud färdas genom olika material (t.ex. luft, vatten, fasta material).",
            answer: "Ljudets hastighet varierar med mediets densitet och elasticitet (snabbare i fasta material än i luft)."
          },
          {
            id: "7.3",
            text: "Vad innebär decibelskalan och hur används den för att mäta ljudstyrka?",
            answer: "Decibelskalan mäter ljudstyrka, där högre decibel innebär starkare ljud."
          }
        ]
      },
      {
        id: "8",
        title: "Område 8: Elektricitet och Magnetism",
        questions: [
          {
            id: "8.1",
            text: "Beskriv Ohms lag och ge ett exempel på hur den används i en elektrisk krets.",
            answer: "Ohms lag uttrycker sambandet V = I · R, där spänning är produkten av ström och resistans."
          },
          {
            id: "8.2",
            text: "Förklara skillnaden mellan serie- och parallellkopplingar i kretsar.",
            answer: "I en seriekoppling adderas resistansen, medan i en parallellkoppling minskar den totala resistansen."
          },
          {
            id: "8.3",
            text: "Redogör för hur en elektromagnet fungerar.",
            answer: "En elektromagnet består av en spole med ström som genererar ett magnetfält."
          }
        ]
      },
      {
        id: "9",
        title: "Område 9: Krafter, Rörelser och Rörelseförändringar",
        questions: [
          {
            id: "9.1",
            text: "Beskriv Newtons första lag (tröghetslagen) med egna ord.",
            answer: "Newtons första lag säger att ett objekt förblir i vila eller i konstant rörelse om ingen yttre kraft påverkar det."
          },
          {
            id: "9.2",
            text: "Förklara begreppet friktion och ge ett vardagligt exempel.",
            answer: "Friktion är motståndet mellan två ytor som glider mot varandra, exempelvis bromsning i en bil."
          },
          {
            id: "9.3",
            text: "Hur påverkar ett objekts massa dess bromssträcka? Förklara med hänsyn till rörelseenergi.",
            answer: "Ett större objekt med högre massa har mer rörelseenergi och kräver längre bromssträcka."
          }
        ]
      },
      {
        id: "10",
        title: "Område 10: Mätningar och Fysikaliska Beräkningar",
        questions: [
          {
            id: "10.1",
            text: "Beskriv hur man använder en våg för att mäta ett objekts massa.",
            answer: "Man mäter massa genom att placera objektet på en våg och läsa av värdet."
          },
          {
            id: "10.2",
            text: "Förklara hur en voltmeter används för att mäta elektrisk spänning.",
            answer: "En voltmeter kopplas parallellt med komponenten för att mäta spänningen över den."
          },
          {
            id: "10.3",
            text: "Visa med en beräkning hur densitet (ρ) kan bestämmas utifrån massa och volym.",
            answer: "Densitetsberäkning: Om massa = m och volym = V, då ρ = m/V (t.ex. 10 kg/2 m³ = 5 kg/m³)."
          }
        ]
      },
      {
        id: "11",
        title: "Område 11: Experiment och Dokumentation",
        questions: [
          {
            id: "11.1",
            text: "Beskriv de grundläggande stegen i att planera och genomföra ett fysikexperiment.",
            answer: "Ett experiment bör planeras med en tydlig frågeställning, hypotes, metod, observation, analys och slutsats."
          },
          {
            id: "11.2",
            text: "Vad innebär det att formulera en hypotes? Ge ett exempel.",
            answer: "En hypotes är en testbar förklaring till ett fenomen (t.ex. 'Om temperaturen ökar, ökar reaktionshastigheten')."
          },
          {
            id: "11.3",
            text: "Hur bör experimentresultat dokumenteras för att vara överskådliga och trovärdiga?",
            answer: "Resultat bör dokumenteras med bilder, tabeller, diagram och en sammanfattande rapport."
          }
        ]
      },
      {
        id: "12",
        title: "Område 12: Vetenskaplig Utveckling och Begreppsutveckling",
        questions: [
          {
            id: "12.1",
            text: "Jämför de geocentriska och heliocentriska modellerna och diskutera deras konsekvenser.",
            answer: "Den geocentriska modellen sätter jorden i centrum medan den heliocentriska placerar solen i centrum, vilket förändrade vår förståelse av himlakropparnas rörelser."
          },
          {
            id: "12.2",
            text: "Ge ett exempel på hur experiment har bidragit till utvecklingen av ett nytt fysikaliskt begrepp.",
            answer: "Nya experiment, t.ex. inom elektricitet, har lett till upptäckten av begreppet elektromagnetism."
          },
          {
            id: "12.3",
            text: "Vad kan vi lära oss om vetenskapens utveckling genom historiska upptäckter?",
            answer: "Historiska upptäckter visar att vetenskapliga teorier kan revideras när ny data blir tillgänglig."
          }
        ]
      },
      {
        id: "13",
        title: "Område 13: Informationssökning och Argumentation",
        questions: [
          {
            id: "13.1",
            text: "Beskriv hur du skulle söka efter vetenskapligt granskad information om vindkraft.",
            answer: "Vid informationssökning bör du använda vetenskapliga databaser och söka efter peer-review artiklar."
          },
          {
            id: "13.2",
            text: "Förklara hur du kritiskt kan granska en källa som diskuterar energipolitik.",
            answer: "Källkritik innebär att undersöka författarens bakgrund, publiceringsdatum och att jämföra med andra källor."
          },
          {
            id: "13.3",
            text: "Ge ett exempel på hur du kan argumentera för och emot kärnkraft med stöd av vetenskapliga fakta.",
            answer: "Vid argumentation kan du använda fakta om miljöpåverkan, säkerhet och ekonomi för att resonera kring kärnkraftens för- och nackdelar."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Testprov 2",
    sections: [
      {
        id: "1",
        title: "Område 1: Universum och Partikelmodeller",
        questions: [
          {
            id: "1.1",
            text: "Förklara hur observationer, t.ex. galaxers rödförskjutning, bekräftar att universum expanderar.",
            answer: "Galaxers rödförskjutning visar att de rör sig bort från oss, vilket indikerar att universum expanderar."
          },
          {
            id: "1.2",
            text: "Skapa ett diagram över solsystemet och identifiera minst fyra planeter med korta beskrivningar.",
            answer: "Diagrammet ska visa solen i centrum och planeter såsom Merkurius, Venus, Jorden och Mars med korta beskrivningar."
          },
          {
            id: "1.3",
            text: "Diskutera vilka faktorer (såsom avstånd, temperatur och atmosfär) som påverkar möjligheten att upptäcka liv på exoplaneter.",
            answer: "Faktorer som påverkar möjligheten till liv är bland annat planetens storlek, avstånd till stjärnan, temperatur och atmosfärens sammansättning."
          }
        ]
      },
      {
        id: "2",
        title: "Område 2: Partikelmodell och Materiens Egenskaper",
        questions: [
          {
            id: "2.1",
            text: "Redogör för hur partikelmodellen förklarar värmeöverföring genom partikels rörelser och kollisioner.",
            answer: "Partikelmodellen visar att värme överförs genom att partiklarna i ett material rör sig snabbare och krockar med varandra."
          },
          {
            id: "2.2",
            text: "Givet massa och volym, visa hur du beräknar densitet med en formel.",
            answer: "Densiteten beräknas med formeln ρ = m/V."
          },
          {
            id: "2.3",
            text: "Förklara vad som sker med materia när den övergår från vätska till gas (t.ex. kokning).",
            answer: "Vid övergång från vätska till gas (kokning) får partiklarna tillräckligt med energi för att bryta de intermolekylära bindningarna."
          }
        ]
      },
      {
        id: "3",
        title: "Område 3: Jordens Strålningsbalans och Klimatmodeller",
        questions: [
          {
            id: "3.1",
            text: "Beskriv hur jorden upprätthåller sin energibalans genom att ta emot solenergi och sända ut värme.",
            answer: "Jordens energibalans upprätthålls genom att den mottar solenergi och sänder ut värmeenergi, vilket ger en balans."
          },
          {
            id: "3.2",
            text: "Förklara skillnaden mellan den naturliga och den förstärkta växthuseffekten.",
            answer: "Den naturliga växthuseffekten är livsviktig medan den förstärkta växthuseffekten, orsakad av ökade växthusgaser, leder till global uppvärmning."
          },
          {
            id: "3.3",
            text: "Diskutera hur mänsklig aktivitet påverkar klimatet ur ett fysikaliskt perspektiv.",
            answer: "Mänskliga aktiviteter, t.ex. förbränning av fossila bränslen, bidrar till en ökad koncentration av växthusgaser, vilket rubbar balansen."
          }
        ]
      },
      {
        id: "4",
        title: "Område 4: Energi och Miljö",
        questions: [
          {
            id: "4.1",
            text: "Förklara skillnaden mellan kinetisk och potentiell energi med egna ord.",
            answer: "Kinetisk energi är den energi som ett objekt har på grund av sin rörelse, medan potentiell energi är lagrad energi på grund av position."
          },
          {
            id: "4.2",
            text: "Diskutera hur energiflödet i ett ekosystem kan påverka miljön.",
            answer: "Energiflödet i ett ekosystem påverkar bl.a. näringskedjor och energicirkulation."
          },
          {
            id: "4.3",
            text: "Ge exempel på hur energikonservering visas i vardagliga situationer, t.ex. i en pendel.",
            answer: "Ett exempel är en pendel där energi omvandlas mellan potentiell och kinetisk form utan att den totala energin försvinner."
          }
        ]
      },
      {
        id: "5",
        title: "Område 5: Partikel- och Elektromagnetisk Strålning",
        questions: [
          {
            id: "5.1",
            text: "Jämför egenskaperna hos alfa-, beta- och gammastrålning med avseende på deras partikel- eller vågnatur.",
            answer: "Alfa- och beta-strålning består av partiklar, medan gammastrålning är elektromagnetisk med hög energi."
          },
          {
            id: "5.2",
            text: "Förklara hur röntgenstrålar bildas i en röntgenapparat.",
            answer: "I en röntgenapparat genereras röntgenstrålar när elektroner accelereras och kolliderar med en metallplatta."
          },
          {
            id: "5.3",
            text: "Diskutera vilka säkerhetsåtgärder som är viktiga vid hantering av joniserande strålning.",
            answer: "Säkerhetsåtgärder inkluderar användning av blyskydd, begränsad exponeringstid och säkerhetsrutiner."
          }
        ]
      },
      {
        id: "6",
        title: "Område 6: Ljusets Utbredning, Reflektion och Brytning",
        questions: [
          {
            id: "6.1",
            text: "Vad menas med att ljus har både partikel- och vågegenskaper?",
            answer: "Ljusets dubbelnatur innebär att det kan uppvisa egenskaper både som partikel (fotoner) och som våg."
          },
          {
            id: "6.2",
            text: "Förklara varför en lins kan bryta ljuset genom att ändra dess riktning.",
            answer: "En lins bryter ljuset genom att ändra ljusets hastighet när det passerar in i ett material med annan optisk täthet."
          },
          {
            id: "6.3",
            text: "Ge exempel på hur reflektion av ljus används i praktiska tillämpningar (t.ex. bilspegel).",
            answer: "Exempel: Reflekterande ytor i bilar eller byggnader används för att styra ljus."
          }
        ]
      },
      {
        id: "7",
        title: "Område 7: Ljudets Uppkomst och Spridning",
        questions: [
          {
            id: "7.1",
            text: "Förklara hur ljudvågor kan beskrivas som periodiska tryckvariationer i ett medium.",
            answer: "Ljudvågor är tryckvariationer som sprider sig periodiskt genom ett medium."
          },
          {
            id: "7.2",
            text: "Beskriv hur ljudets hastighet påverkas av det medium genom vilket det färdas.",
            answer: "Ljudets hastighet är högre i fasta material än i gaser, då molekylerna är tätare packade."
          },
          {
            id: "7.3",
            text: "Förklara begreppet frekvens och hur det påverkar ljudets tonhöjd.",
            answer: "Frekvens, mätt i Hertz, bestämmer tonhöjden – hög frekvens ger hög ton."
          }
        ]
      },
      {
        id: "8",
        title: "Område 8: Elektricitet och Magnetism",
        questions: [
          {
            id: "8.1",
            text: "Redogör för sambandet mellan ström, spänning och resistans enligt Ohms lag.",
            answer: "Sambandet mellan ström (I), spänning (V) och resistans (R) uttrycks med Ohms lag: V = I · R."
          },
          {
            id: "8.2",
            text: "Förklara hur serie- respektive parallellkoppling påverkar den totala resistansen i en krets.",
            answer: "I en seriekoppling adderas resistansen medan i en parallellkoppling minskar den totala resistansen."
          },
          {
            id: "8.3",
            text: "Vad är en generator och hur omvandlar den mekanisk energi till elektrisk energi?",
            answer: "En generator omvandlar mekanisk energi till elektrisk energi via elektromagnetisk induktion."
          }
        ]
      },
      {
        id: "9",
        title: "Område 9: Krafter, Rörelser och Rörelseförändringar",
        questions: [
          {
            id: "9.1",
            text: "Förklara skillnaden mellan hastighet och acceleration.",
            answer: "Hastighet är en förändring av position, medan acceleration är förändring av hastigheten."
          },
          {
            id: "9.2",
            text: "Använd Newtons andra lag (F = m·a) för att beskriva ett praktiskt exempel, t.ex. en bils acceleration.",
            answer: "Newtons andra lag (F = m·a) illustreras t.ex. av en bil som accelererar – en större kraft krävs för att accelerera en tyngre bil."
          },
          {
            id: "9.3",
            text: "Diskutera hur friktionskraften påverkar rörelsen hos ett objekt på en sluttande yta.",
            answer: "Friktion verkar som en bromsande kraft, särskilt på sluttande ytor där den motverkar objektets acceleration."
          }
        ]
      },
      {
        id: "10",
        title: "Område 10: Mätningar och Fysikaliska Beräkningar",
        questions: [
          {
            id: "10.1",
            text: "Beskriv hur en amperemeter används för att mäta ström i en krets.",
            answer: "En amperemeter mäter ström genom att kopplas in i serie med kretsen."
          },
          {
            id: "10.2",
            text: "Förklara hur du kan använda ett tidtagarur för att mäta hastighet (v = s/t).",
            answer: "Ett tidtagarur kan användas tillsammans med en sträckmätning för att beräkna hastigheten med formeln v = s/t."
          },
          {
            id: "10.3",
            text: "Ge ett exempel på en densitetsberäkning med hjälp av givna mätvärden för massa och volym.",
            answer: "Exempel: Om ett objekt har en massa på 20 kg och en volym på 4 m³, är densiteten 20/4 = 5 kg/m³."
          }
        ]
      },
      {
        id: "11",
        title: "Område 11: Experiment och Dokumentation",
        questions: [
          {
            id: "11.1",
            text: "Beskriv hur du planerar och genomför ett fysikexperiment, från frågeställning till slutsats.",
            answer: "Ett experiment planeras genom att formulera en frågeställning, hypotes, metod, genomföra försöket, analysera data och dra slutsatser."
          },
          {
            id: "11.2",
            text: "Vad menas med en variabel i ett experiment? Ge ett konkret exempel.",
            answer: "En variabel är en faktor som kan varieras, exempelvis temperaturen i ett experiment."
          },
          {
            id: "11.3",
            text: "Hur kan digitala verktyg underlätta dokumentationen av experimentella data?",
            answer: "Digitala verktyg kan användas för att skapa diagram, tabeller och spara data, vilket underlättar en systematisk dokumentation."
          }
        ]
      },
      {
        id: "12",
        title: "Område 12: Vetenskaplig Utveckling och Begreppsutveckling",
        questions: [
          {
            id: "12.1",
            text: "Förklara hur övergången från geocentriska till heliocentriska modeller förändrade vår förståelse av universum.",
            answer: "Övergången från geocentriska till heliocentriska modeller ledde till en mer korrekt förståelse av himlakropparnas rörelser."
          },
          {
            id: "12.2",
            text: "Ge ett exempel på hur nya experiment har lett till en omvärdering av tidigare fysikteorier.",
            answer: "Nya experiment, t.ex. inom elektriska fenomen, har ibland tvingat forskare att omvärdera tidigare teorier."
          },
          {
            id: "12.3",
            text: "Diskutera varför falsifierbarhet är en central del i utvecklingen av vetenskapliga teorier.",
            answer: "Falsifierbarhet är viktig eftersom den möjliggör att teorier kan testas och revideras med ny data."
          }
        ]
      },
      {
        id: "13",
        title: "Område 13: Informationssökning och Argumentation",
        questions: [
          {
            id: "13.1",
            text: "Beskriv hur du identifierar trovärdiga källor vid informationssökning.",
            answer: "Trovärdiga källor identifieras genom att granska om de är publicerade i vetenskapliga tidskrifter och om de har tydliga referenser."
          },
          {
            id: "13.2",
            text: "Förklara varför det är viktigt att granska information ur flera perspektiv.",
            answer: "Det är viktigt att se på information ur flera perspektiv för att undvika ensidiga tolkningar."
          },
          {
            id: "13.3",
            text: "Ge ett exempel på hur du kan argumentera för användning av solenergi med stöd av vetenskapliga fakta.",
            answer: "Vid argumentation för solenergi kan man använda verifierbara data om miljöpåverkan, kostnadseffektivitet och tekniska möjligheter."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Testprov 3",
    sections: [
      {
        id: "1",
        title: "Område 1: Universum och Partikelmodeller",
        questions: [
          {
            id: "1.1",
            text: "Diskutera hur observationer av den kosmiska bakgrundsstrålningen stödjer Big Bang-teorin.",
            answer: "Den kosmiska bakgrundsstrålningen är en jämn strålning över hela himlen och betraktas som en kvarleva från Big Bang."
          },
          {
            id: "1.2",
            text: "Beskriv hur solsystemets uppbyggnad visar gravitationens centrala roll.",
            answer: "Solsystemets uppbyggnad, med planeter i omloppsbanor runt en central sol, visar hur gravitation håller systemet samman."
          },
          {
            id: "1.3",
            text: "Analysera hur faktorer såsom avstånd, temperatur och strålningsnivåer påverkar möjligheten att finna liv på exoplaneter.",
            answer: "Faktorer såsom rätt temperatur, optimala avstånd från stjärnan och skydd mot skadlig strålning är viktiga för att liv ska kunna utvecklas."
          }
        ]
      },
      {
        id: "2",
        title: "Område 2: Partikelmodell och Materiens Egenskaper",
        questions: [
          {
            id: "2.1",
            text: "Förklara hur partikelmodellen beskriver materia på en mikroskopisk nivå.",
            answer: "Partikelmodellen förklarar att all materia består av små, rörliga partiklar som avgör materialets egenskaper."
          },
          {
            id: "2.2",
            text: "Beräkna densiteten för ett objekt med massa = 15 kg och volym = 3 m³.",
            answer: "Densiteten beräknas enligt formeln ρ = massa/volym; med massa = 15 kg och volym = 3 m³ blir densiteten 5 kg/m³."
          },
          {
            id: "2.3",
            text: "Diskutera vad som händer med partiklar vid en smältprocess från fast form.",
            answer: "Vid smältning bryts de fasta bindningarna, vilket gör att partiklarna börjar röra sig mer fritt i en flytande form."
          }
        ]
      },
      {
        id: "3",
        title: "Område 3: Jordens Strålningsbalans och Klimatmodeller",
        questions: [
          {
            id: "3.1",
            text: "Beskriv hur jordens energiupptagning och värmeutstrålning bidrar till en energibalans.",
            answer: "Jordens energiupptagning från solen balanseras av utstrålning av värme, vilket skapar en energibalans."
          },
          {
            id: "3.2",
            text: "Förklara hur ökade nivåer av växthusgaser leder till en förstärkt växthuseffekt.",
            answer: "Ökade nivåer av växthusgaser fångar upp mer värme och leder till en förstärkt växthuseffekt, vilket höjer den globala temperaturen."
          },
          {
            id: "3.3",
            text: "Diskutera vilka potentiella konsekvenser klimatförändringar kan få utifrån fysikaliska principer.",
            answer: "Konsekvenser kan inkludera extremväder, stigande havsnivåer och störda ekosystem."
          }
        ]
      },
      {
        id: "4",
        title: "Område 4: Energi och Miljö",
        questions: [
          {
            id: "4.1",
            text: "Beskriv skillnaden mellan mekanisk energi och termisk energi.",
            answer: "Mekanisk energi innefattar rörelse- och lägesenergi medan termisk energi är kopplad till värme."
          },
          {
            id: "4.2",
            text: "Diskutera hur energiflödet i ett slutet system följer energikonserveringslagen.",
            answer: "I ett slutet system omvandlas energi mellan olika former men den totala energin förblir konstant enligt energikonserveringslagen."
          },
          {
            id: "4.3",
            text: "Ge exempel på hur energikonservering kan observeras i en vardagsmaskin, t.ex. en cykelgenerator.",
            answer: "Ett exempel är en cykelgenerator där mekanisk rörelse omvandlas till elektrisk energi med minimal energiförlust."
          }
        ]
      },
      {
        id: "5",
        title: "Område 5: Partikel- och Elektromagnetisk Strålning",
        questions: [
          {
            id: "5.1",
            text: "Förklara skillnaderna mellan olika typer av strålning med fokus på deras energinivåer.",
            answer: "Olika strålningsformer skiljer sig åt i våglängd och energi – radiovågor har låg energi medan gammastrålning har mycket hög energi."
          },
          {
            id: "5.2",
            text: "Beskriv hur medicinsk bildbehandling, t.ex. röntgen, använder elektromagnetisk strålning.",
            answer: "Medicinsk bildbehandling, som röntgen, använder elektromagnetisk strålning för att skapa bilder av kroppens inre strukturer."
          },
          {
            id: "5.3",
            text: "Diskutera vilka metoder som kan användas för att skydda sig mot farlig strålning.",
            answer: "Skydd mot farlig strålning kan uppnås med hjälp av blyskydd, ökat avstånd och minimerad exponeringstid."
          }
        ]
      },
      {
        id: "6",
        title: "Område 6: Ljusets Utbredning, Reflektion och Brytning",
        questions: [
          {
            id: "6.1",
            text: "Diskutera varför ljusets hastighet i vakuum är en fundamental konstant inom fysiken.",
            answer: "Ljusets hastighet i vakuum (cirka 300 000 km/s) är en grundläggande konstant som används i många fysikaliska teorier."
          },
          {
            id: "6.2",
            text: "Förklara hur en prisma kan dela upp vitt ljus i dess spektrum.",
            answer: "En prisma bryter upp vitt ljus i dess färgspektrum eftersom olika våglängder bryts olika mycket."
          },
          {
            id: "6.3",
            text: "Vad är totalreflektion och hur används detta fenomen i optiska fibrer?",
            answer: "Totalreflektion uppstår när ljus helt reflekteras inuti ett medium, vilket är grunden för optiska fibrers funktion."
          }
        ]
      },
      {
        id: "7",
        title: "Område 7: Ljudets Uppkomst och Spridning",
        questions: [
          {
            id: "7.1",
            text: "Förklara hur ett oscilloskop kan användas för att visualisera ljudvågor.",
            answer: "Ett oscilloskop kan omvandla ljudvågor till elektriska signaler och visa dem grafiskt över tid."
          },
          {
            id: "7.2",
            text: "Beskriv hur ljud reflekteras i en konsertlokal för att förbättra akustiken.",
            answer: "Akustisk design i en konsertlokal syftar till att reflektera ljudet jämnt för att ge optimal ljudupplevelse."
          },
          {
            id: "7.3",
            text: "Vad menas med ljudintensitet och hur mäts den?",
            answer: "Ljudintensitet, mätt i decibel, anger hur starkt ljudet är."
          }
        ]
      },
      {
        id: "8",
        title: "Område 8: Elektricitet och Magnetism",
        questions: [
          {
            id: "8.1",
            text: "Förklara principen bakom elektromagnetisk induktion.",
            answer: "Elektromagnetisk induktion innebär att en förändring i ett magnetfält genererar en elektrisk ström i en ledare."
          },
          {
            id: "8.2",
            text: "Jämför en transformator med en generator utifrån deras funktioner.",
            answer: "En transformator överför spänning mellan kretsar via induktion, medan en generator omvandlar mekanisk energi till elektrisk."
          },
          {
            id: "8.3",
            text: "Hur påverkar resistans och spänning varandra enligt Ohms lag i en krets?",
            answer: "Enligt Ohms lag minskar en ökad resistans strömmen vid konstant spänning (V = I · R)."
          }
        ]
      },
      {
        id: "9",
        title: "Område 9: Krafter, Rörelser och Rörelseförändringar",
        questions: [
          {
            id: "9.1",
            text: "Vad menas med tröghet och hur relaterar detta till Newtons första lag?",
            answer: "Tröghet är ett objekts motstånd mot förändring i sin rörelsetillstånd och är grunden i Newtons första lag."
          },
          {
            id: "9.2",
            text: "Förklara sambandet mellan kraft, massa och acceleration med hjälp av en formel.",
            answer: "Newtons andra lag anger att kraft (F) är lika med massa (m) multiplicerat med acceleration (a), dvs. F = m·a."
          },
          {
            id: "9.3",
            text: "Diskutera hur yttre krafter, exempelvis vind, kan påverka ett föremåls rörelse.",
            answer: "Yttre krafter, såsom vind, kan utöva en extra kraft som ändrar ett objekts hastighet och riktning."
          }
        ]
      },
      {
        id: "10",
        title: "Område 10: Mätningar och Fysikaliska Beräkningar",
        questions: [
          {
            id: "10.1",
            text: "Beskriv hur ett digitalt mätinstrument kan användas för att mäta temperatur.",
            answer: "Ett digitalt mätinstrument, exempelvis en digital termometer, mäter och visar temperaturen elektroniskt."
          },
          {
            id: "10.2",
            text: "Förklara hur en multimeter används för att mäta både spänning och ström.",
            answer: "En multimeter kan mäta spänning (ansluten parallellt) och ström (ansluten i serie) i en krets."
          },
          {
            id: "10.3",
            text: "Ge ett exempel på en praktisk beräkning där du använder mätdata från ett experiment (t.ex. beräkna hastighet).",
            answer: "Exempel: Med mätdata för sträcka och tid kan hastighet beräknas med formeln v = s/t."
          }
        ]
      },
      {
        id: "11",
        title: "Område 11: Experiment och Dokumentation",
        questions: [
          {
            id: "11.1",
            text: "Beskriv hur du formulerar en undersökningsbar frågeställning i ett experiment.",
            answer: "En undersökningsbar frågeställning är tydlig, mätbar och formulerad så att den kan testas genom experiment."
          },
          {
            id: "11.2",
            text: "Vad är syftet med att använda kontrollgrupper i ett experiment?",
            answer: "Kontrollgrupper används för att jämföra resultat och eliminera störfaktorer, vilket ökar experimentets validitet."
          },
          {
            id: "11.3",
            text: "Hur kan du systematiskt dokumentera experimentella resultat?",
            answer: "Experimentella resultat dokumenteras systematiskt med hjälp av tabeller, diagram, fotografier och skriftliga rapporter."
          }
        ]
      },
      {
        id: "12",
        title: "Område 12: Vetenskaplig Utveckling och Begreppsutveckling",
        questions: [
          {
            id: "12.1",
            text: "Analysera hur fysikens begreppsutveckling speglar förändringar i vetenskapliga metoder.",
            answer: "Fysikens begreppsutveckling har förändrats i takt med nya metoder och verktyg, vilket möjliggjort mer precisa teorier."
          },
          {
            id: "12.2",
            text: "Diskutera betydelsen av experimentell verifikation i utvecklingen av nya teorier.",
            answer: "Experimentell verifikation är avgörande för att bekräfta nya teorier och utmana gamla modeller."
          },
          {
            id: "12.3",
            text: "Ge exempel på hur historiska upptäckter har påverkat dagens fysik.",
            answer: "Historiska upptäckter, såsom Newtons lagar, har lagt grunden för den moderna fysikens principer."
          }
        ]
      },
      {
        id: "13",
        title: "Område 13: Informationssökning och Argumentation",
        questions: [
          {
            id: "13.1",
            text: "Beskriv vilka metoder du använder för att söka efter vetenskapligt granskade artiklar.",
            answer: "Att söka vetenskapligt granskade artiklar görs via databaser som PubMed, Scopus eller Web of Science."
          },
          {
            id: "13.2",
            text: "Förklara hur du bedömer källkritik vid informationsinhämtning.",
            answer: "Källkritik innebär att bedöma författarens expertis, publiceringsdatum och jämföra med andra oberoende källor."
          },
          {
            id: "13.3",
            text: "Diskutera hur evidensbaserad argumentation kan stärka din ståndpunkt i en debatt om teknik och miljö.",
            answer: "Evidensbaserad argumentation bygger på verifierbara data och statistik, vilket stärker argumentationen i debatter om t.ex. teknikens och miljöns påverkan."
          }
        ]
      }
    ]
  }
]; 