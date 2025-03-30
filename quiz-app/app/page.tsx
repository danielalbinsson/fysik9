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
      <h1 className="text-2xl font-bold mb-6">Fysik 9 - Testprov</h1>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium">Välj testprov:</label>
        <div className="flex gap-2">
          {tests.map(test => (
            <button
              key={test.id}
              className={`px-4 py-2 rounded-md ${
                selectedTestId === test.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleTestSelect(test.id)}
            >
              {test.title}
            </button>
          ))}
        </div>
      </div>

      {selectedTest && currentSection && (
        <>
          <QuizSection section={currentSection} showAnswers={showAnswers} />
          
          <div className="mt-6 flex gap-2 justify-between">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={handlePreviousSection}
              disabled={currentSectionIndex === 0}
            >
              Föregående avsnitt
            </button>
            
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-md"
              onClick={toggleShowAnswers}
            >
              {showAnswers ? 'Dölj facit' : 'Visa facit'}
            </button>
            
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
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
    </main>
  );
} 