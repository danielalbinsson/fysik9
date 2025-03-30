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
      }
    ]
  }
]; 