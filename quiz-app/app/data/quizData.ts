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
      }
    ]
  }
]; 