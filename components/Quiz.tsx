
import React, { useState, useCallback, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (starsEarned: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions([...currentQuestion.options].sort(() => Math.random() - 0.5));
    }
  }, [currentQuestion]);

  const handleSelectAnswer = useCallback((answer: string) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
  }, [showFeedback]);

  const handleNext = useCallback(() => {
    if (!selectedAnswer) return;

    setShowFeedback(true);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
        onComplete(score + (isCorrect ? 1 : 0));
      }
    }, 1500);
  }, [selectedAnswer, isCorrect, currentQuestionIndex, questions.length, onComplete, score]);
  
  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setShowFeedback(false);
  }, []);

  if (isFinished) {
    return (
      <div className="text-center bg-blue-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-700">Hoàn thành!</h3>
        <p className="my-4 text-lg">Bạn đã trả lời đúng {score} / {questions.length} câu.</p>
        <div className="text-5xl mb-4">
          {score === questions.length ? '🏆' : '👍'}
        </div>
        <button onClick={handleRestart} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold">{currentQuestionIndex + 1}. {currentQuestion.question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {shuffledOptions.map((option) => {
          const isSelected = selectedAnswer === option;
          let buttonClass = 'bg-white hover:bg-gray-100 border-gray-300';
          if (showFeedback) {
            if (option === currentQuestion.correctAnswer) {
              buttonClass = 'bg-green-500 border-green-500 text-white';
            } else if (isSelected) {
              buttonClass = 'bg-red-500 border-red-500 text-white';
            }
          } else if (isSelected) {
            buttonClass = 'bg-blue-500 border-blue-500 text-white';
          }
          return (
            <button
              key={option}
              onClick={() => handleSelectAnswer(option)}
              disabled={showFeedback}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 w-full font-semibold ${buttonClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>
       <div className="flex justify-end pt-4">
        <button 
          onClick={handleNext}
          disabled={!selectedAnswer || showFeedback}
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp' : 'Hoàn thành'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;