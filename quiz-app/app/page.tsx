'use client';

import { useState } from 'react';
import { tests } from './data/quizData';
import QuizSection from './components/QuizSection';

export default function Home() {
  const [selectedTestId, setSelectedTestId] = useState<number | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const selectedTest = selectedTestId !== null 
    ? tests.find(test => test.id === selectedTestId) 
    : null;

  const currentSection = selectedTest && selectedTest.sections[currentSectionIndex];

  const handleTestSelect = (testId: number) => {
    setSelectedTestId(testId);
    setCurrentSectionIndex(0);
    setShowAnswers(false);
  };

  const handleBackToTests = () => {
    setSelectedTestId(null);
    setCurrentSectionIndex(0);
    setShowAnswers(false);
  };

  const handleNextSection = () => {
    if (selectedTest && currentSectionIndex < selectedTest.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setShowAnswers(false);
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setShowAnswers(false);
    }
  };

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <main className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Fysik 9 - öva inför nationella provet</h1>
      
      {!selectedTest ? (
        // Test selection view
        <>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Välj testprov:</label>
          <div className="flex flex-wrap gap-2">
            {tests.map(test => (
              <button
                key={test.id}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleTestSelect(test.id)}
              >
                {test.title}
              </button>
            ))}
          </div>
        </div>
        {/* Text overview of the areas here */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Översikt av områdena</h2>
        </div>
        <div className="table-container">
          <div className="row table-header">
            <div className="cell">Område</div>
            <div className="cell">Beskrivning</div>
            <div className="cell">Relevans för Provet</div>
          </div>

          {/* Rad 1 */}
          <div className="row">
            <div className="cell">1. Universums uppkomst, uppbyggnad och utveckling samt förutsättningar för att finna planeter och liv i andra solsystem.</div>
            <div className="cell">Inkluderar big bang-teorin, solsystemets struktur och förutsättningar för liv på andra planeter.</div>
            <div className="cell">Tester teoretisk förståelse av kosmologi och astronomi, ofta med diagram och förklaringar.</div>
          </div>

          {/* Rad 2 */}
          <div className="row">
            <div className="cell">2. Partikelmodell av materiens egenskaper samt fasövergångar, tryck, volym, densitet och temperatur.</div>
            <div className="cell">Använder partikelmodeller för att förklara materiens faser, tryck, volym, densitet och temperatur.</div>
            <div className="cell">Kräver både teoretisk kunskap och förmåga att tillämpa modeller, t.ex. i beräkningar.</div>
          </div>

          {/* Rad 3 */}
          <div className="row">
            <div className="cell">3. Fysikaliska förklaringsmodeller av jordens strålningsbalans, växthuseffekten och klimatförändringar.</div>
            <div className="cell">Inkluderar modeller för hur jorden absorberar och reflekterar energi, växthusgaser och klimatpåverkan.</div>
            <div className="cell">Betonar samhällsrelevans, ofta med frågor om miljö och hållbar utveckling.</div>
          </div>

          {/* Rad 4 */}
          <div className="row">
            <div className="cell">4. Energins flöde och oförstörbarhet samt olika energislags kvalitet. Olika typer av energikällor samt deras för- och nackdelar för samhället och miljön.</div>
            <div className="cell">Täcker energins konservering, kvalitet (t.ex. förnybar vs. icke-förnybar) och miljöpåverkan.</div>
            <div className="cell">Vanligt med resonemang och argumentation, t.ex. för- och nackdelar med kärnkraft.</div>
          </div>

          {/* Rad 5 */}
          <div className="row">
            <div className="cell">5. Partikelstrålning och elektromagnetisk strålning, deras användningsområden och risker.</div>
            <div className="cell">Inkluderar solstrålning, röntgen, joniserande strålning och deras användning i teknik och medicin.</div>
            <div className="cell">Tester förståelse för risker, t.ex. strålskydd, och tillämpningar som röntgen.</div>
          </div>

          {/* Rad 6 */}
          <div className="row">
            <div className="cell">6. Hur ljus breder ut sig, reflekteras och bryts.</div>
            <div className="cell">Inkluderar ljusets rätlinjiga utbredning, reflektion (t.ex. speglar) och brytning (t.ex. linser).</div>
            <div className="cell">Vanliga frågor om optik, t.ex. hur glasögon eller teleskop fungerar.</div>
          </div>

          {/* Rad 7 */}
          <div className="row">
            <div className="cell">7. Hur ljud uppstår, breder ut sig och kan registreras på olika sätt.</div>
            <div className="cell">Täckar ljudvågor, vibrationer, fortplantning via material och decibelskalan för ljudstyrka.</div>
            <div className="cell">Tester både teoretisk förståelse och praktiska tillämpningar, t.ex. ultraljud.</div>
          </div>

          {/* Rad 8 */}
          <div className="row">
            <div className="cell">8. Sambandet mellan elektricitet och magnetism samt mellan ström och spänning i elektriska kretsar. Hur kretsarna kan användas i elektrisk utrustning.</div>
            <div className="cell">Inkluderar Ohms lag, serie- och parallellkopplingar, elektromagneter och generatorer.</div>
            <div className="cell">Vanliga labbuppgifter och beräkningar, t.ex. ström i kretsar.</div>
          </div>

          {/* Rad 9 */}
          <div className="row">
            <div className="cell">9. Krafter, rörelser och rörelseförändringar samt hur kunskaper om detta kan användas, t.ex. i frågor om trafiksäkerhet.</div>
            <div className="cell">Täcker Newtons lagar, friktion, tyngdkraft och tillämpningar som bromssträckor och satellitrörelser.</div>
            <div className="cell">Tester både teori och praktiska scenarier, ofta med beräkningar av hastighet och kraft.</div>
          </div>

          {/* Rad 10 */}
          <div className="row">
            <div className="cell">10. Några instrument för att mäta fysikaliska storheter, t.ex. kraft och ström. Användning av mätvärden i enkla beräkningar, t.ex. beräkningar av densitet och hastighet.</div>
            <div className="cell">Inkluderar användning av mätinstrument som vågar, voltmetrar och hastighetsmätare, samt beräkningar.</div>
            <div className="cell">Tester praktiska färdigheter och matematiska tillämpningar, t.ex. densitet = massa/volym.</div>
          </div>

          {/* Rad 11 */}
          <div className="row">
            <div className="cell">11. Observationer och experiment med såväl analoga som digitala verktyg. Formulering av undersökningsbara frågor, planering, utförande, värdering av resultat samt dokumentation med bilder, tabeller, diagram och rapporter.</div>
            <div className="cell">Inkluderar vetenskapligt arbetssätt, hypoteser, variabler och dokumentation i olika format.</div>
            <div className="cell">Vanliga labbuppgifter, t.ex. mäta temperaturförändringar eller ljusreflektion.</div>
          </div>

          {/* Rad 12 */}
          <div className="row">
            <div className="cell">12. Sambandet mellan undersökningar av fysikaliska fenomen och utvecklingen av begrepp och förklaringsmodeller. De fysikaliska förklaringsmodellernas historiska framväxt, användbarhet och föränderlighet.</div>
            <div className="cell">Täcker hur fysikens teorier utvecklats, t.ex. från geocentrisk till heliocentriska världsbild, och deras begränsningar.</div>
            <div className="cell">Tester historisk förståelse och kritiskt tänkande, ofta med diskussioner om vetenskapens natur.</div>
          </div>

          {/* Rad 13 */}
          <div className="row">
            <div className="cell">13. Informationssökning, kritisk granskning och användning av information som rör fysik. Argumentation och ställningstaganden i aktuella frågor som rör energi, teknik och miljö.</div>
            <div className="cell">Inkluderar att bedöma källors trovärdighet, t.ex. jämföra energibolags och miljöorganisations påståenden, och ta ställning i debatter.</div>
            <div className="cell">Tester förmågan att kommunicera och resonera, t.ex. för- och nackdelar med vindkraft.</div>
          </div>
        </div>
        </>
      ) : (
        // Test questions view
        <>
          <div className="mb-4 flex items-center">
            <button 
              className="flex items-center text-blue-500 hover:text-blue-700"
              onClick={handleBackToTests}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Tillbaka till testval
            </button>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">{selectedTest.title}</h2>
          
          {currentSection && (
            <>
              <QuizSection section={currentSection} showAnswers={showAnswers} />
              
              <div className="mt-6 flex gap-2 justify-between">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  onClick={handlePreviousSection}
                  disabled={currentSectionIndex === 0}
                >
                  Föregående avsnitt
                </button>
                
                <button 
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={toggleShowAnswers}
                >
                  {showAnswers ? 'Dölj facit' : 'Visa facit'}
                </button>
                
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600"
                  onClick={handleNextSection}
                  disabled={!selectedTest || currentSectionIndex === selectedTest.sections.length - 1}
                >
                  Nästa avsnitt
                </button>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                Avsnitt {currentSectionIndex + 1} av {selectedTest.sections.length}
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
} 