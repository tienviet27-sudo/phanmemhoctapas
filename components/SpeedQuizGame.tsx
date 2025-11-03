
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Subject } from '../types';

interface SpeedQuizGameProps {
  subject: Subject;
  onGoBack: () => void;
  onAddStars: (stars: number) => void;
}

const GAME_DURATION = 60; // 60 seconds

const SpeedQuizGame: React.FC<SpeedQuizGameProps> = ({ subject, onGoBack, onAddStars }) => {
  const [gameState, setGameState] = useState<'playing' | 'finished'>('playing');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const shuffledQuestions = useMemo(() => 
    [...subject.game.questions].sort(() => Math.random() - 0.5), 
    [subject.game.questions]
  );
  
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions([...currentQuestion.options].sort(() => Math.random() - 0.5));
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameState('finished');
      onAddStars(score * 5);
    }
  }, [gameState, timeLeft, onAddStars, score]);

  const handleAnswer = useCallback((answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Loop questions if answered all
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestion, currentQuestionIndex, shuffledQuestions.length]);

  const handlePlayAgain = useCallback(() => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setCurrentQuestionIndex(0);
    setGameState('playing');
  }, []);

  if (gameState === 'finished') {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in text-center">
        <h1 className="text-3xl font-extrabold mb-2">Hết giờ!</h1>
        <div className="text-5xl mb-4">⏰</div>
        <p className="text-xl mb-4">Bạn đã trả lời đúng <span className="font-bold text-green-600">{score}</span> câu hỏi.</p>
        <p className="text-xl mb-6">Bạn nhận được <span className="font-bold text-yellow-500">{score * 5} ⭐</span></p>
        <div className="flex justify-center space-x-4">
          <button onClick={handlePlayAgain} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
            Chơi lại
          </button>
          <button onClick={onGoBack} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-full transition-colors">
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
      <header className="flex justify-between items-center mb-4">
        <div className={`text-3xl font-bold ${subject.color} p-2 rounded-lg text-white`}>{subject.icon} {subject.name}</div>
        <div className="flex space-x-4 text-xl font-bold">
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">⭐ {score}</div>
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full">⏰ {timeLeft}s</div>
        </div>
      </header>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${(timeLeft / GAME_DURATION) * 100}%`, transition: 'width 1s linear' }}></div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {shuffledOptions.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold p-4 rounded-lg shadow hover:opacity-90 transform hover:scale-105 transition-transform duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
       <button onClick={onGoBack} className="mt-8 text-gray-500 hover:text-gray-700">
            Thoát trò chơi
        </button>
    </div>
  );
};

export default SpeedQuizGame;