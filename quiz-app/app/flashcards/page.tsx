'use client';

import { useState, useEffect } from 'react';
import { tests } from '../data/quizData';
import Link from 'next/link';
import './flashcards.css';

// Get all questions from all tests
const getAllQuestions = () => {
  const allQuestions = [];
  
  for (const test of tests) {
    for (const section of test.sections) {
      for (const question of section.questions) {
        allQuestions.push({
          ...question,
          sectionId: section.id,
          sectionTitle: section.title
        });
      }
    }
  }
  
  return allQuestions;
};

export default function Flashcards() {
  const [questions] = useState(() => getAllQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  // Initialize with random question on first load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
  }, [questions]);
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space to flip
      if (e.code === 'Space') {
        setFlipped(!flipped);
        e.preventDefault();
      }
      
      // Right arrow for next card
      if (e.code === 'ArrowRight') {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestionIndex(randomIndex);
        setFlipped(false);
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipped, questions.length]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleNextQuestion = () => {
    // Get random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
    setFlipped(false);
  };
  
  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  // Get section number
  const getSectionNumber = (sectionId: string) => {
    return parseInt(sectionId);
  };
  
  return (
    <main className="container mx-auto p-4 max-w-3xl flex flex-col items-center">
      <div className="mb-4 flex items-center justify-center">
        <Link href="/" className="flex items-center text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Tillbaka till första sidan
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-6">Flashcards</h1>
      <p className="text-sm text-gray-500 mb-4">Totalt {questions.length} frågor från alla testprov</p>
      
      <div className="flashcard mb-6 flex justify-center items-center">
        <div 
          className={`card ${flipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="card-face card-front">
            <h2 className="text-xl font-semibold mb-8">Fråga</h2>
            <p className="text-lg">{currentQuestion.text}</p>
            <div className="section-indicator">
              Område {getSectionNumber(currentQuestion.sectionId)}
            </div>
          </div>
          
          <div className="card-face card-back">
            <h2 className="text-xl font-semibold mb-8">Svar</h2>
            <p className="text-lg">{currentQuestion.answer}</p>
            <div className="section-indicator">
              Område {getSectionNumber(currentQuestion.sectionId)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleNextQuestion}
        >
          Nästa
        </button>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Snabbkommandon: Mellanslag (flip), Höger pil (nästa)</p>
      </div>
    </main>
  );
} 