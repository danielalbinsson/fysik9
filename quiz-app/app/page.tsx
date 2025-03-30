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