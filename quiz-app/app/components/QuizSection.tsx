'use client';

import { useState } from 'react';
import { Section } from '../data/quizData';

type QuizSectionProps = {
  section: Section;
  showAnswers: boolean;
};

export default function QuizSection({ section, showAnswers }: QuizSectionProps) {
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setStudentAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">{section.title}</h2>
      
      {section.questions.map((question) => (
        <div key={question.id} className="p-4 border rounded-md">
          <p className="font-medium mb-2">
            {question.id}: {question.text}
          </p>
          
          <div className="mt-3">
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Skriv ditt svar här..."
              value={studentAnswers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
          </div>
          
          {showAnswers && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="font-medium">Facit:</p>
              <p>{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 