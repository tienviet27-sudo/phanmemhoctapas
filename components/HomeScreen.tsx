import React from 'react';
import { Subject } from '../types';
import SubjectCard from './SubjectCard';

interface HomeScreenProps {
  userName: string;
  stars: number;
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
  onViewProfile: () => void;
  onGoToGameCenter: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  userName,
  stars,
  subjects,
  onSelectSubject,
  onViewProfile,
  onGoToGameCenter
}) => {
  return (
    <div className="animate-fade-in">
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-md">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Xin chào, {userName}!</h1>
          <p className="text-gray-500">Sẵn sàng cho bài học mới chưa?</p>
        </div>
        <div 
          onClick={onViewProfile}
          className="flex items-center space-x-2 bg-yellow-100 text-yellow-800 font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-yellow-200 transition-colors">
          <span className="text-2xl">⭐</span>
          <span className="text-lg">{stars}</span>
        </div>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {subjects.map((subject) => (
          <SubjectCard key={subject.name} subject={subject} onClick={() => onSelectSubject(subject)} />
        ))}
      </div>

      <button 
        onClick={onGoToGameCenter}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-3">
        <span>Trò chơi học tập</span>
        <span className="text-2xl">🎮</span>
      </button>
    </div>
  );
};

export default HomeScreen;