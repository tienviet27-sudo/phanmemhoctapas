import React from 'react';
import { Subject } from '../types';
import SubjectCard from './SubjectCard';

interface GameCenterScreenProps {
  subjects: Subject[];
  onSelectGame: (subject: Subject) => void;
  onGoHome: () => void;
}

const GameCenterScreen: React.FC<GameCenterScreenProps> = ({ subjects, onSelectGame, onGoHome }) => {
  return (
    <div className="animate-fade-in">
      <header className="flex items-center mb-6">
        <button
          onClick={onGoHome}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-4 transition-colors"
        >
          &larr; Trang chủ
        </button>
        <h1 className="text-3xl font-extrabold">🎮 Trung Tâm Trò Chơi</h1>
      </header>
      <p className="text-center text-gray-600 mb-8 text-lg">Chọn một môn học để bắt đầu thử thách!</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {subjects.map((subject) => (
          <SubjectCard 
            key={subject.name} 
            subject={subject} 
            onClick={() => onSelectGame(subject)} 
          />
        ))}
      </div>
    </div>
  );
};

export default GameCenterScreen;
