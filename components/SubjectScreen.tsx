
import React from 'react';
import { Subject } from '../types';
import Quiz from './Quiz';

interface SubjectScreenProps {
  subject: Subject;
  onGoHome: () => void;
  onAddStars: (stars: number) => void;
}

const SubjectScreen: React.FC<SubjectScreenProps> = ({ subject, onGoHome, onAddStars }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
      <header className="flex items-center mb-6">
        <button
          onClick={onGoHome}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-4 transition-colors"
        >
          &larr; Quay lại
        </button>
        <div className={`text-4xl mr-4 ${subject.color} p-2 rounded-lg text-white`}>{subject.icon}</div>
        <h1 className="text-3xl font-extrabold">{subject.name}</h1>
      </header>

      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-3">{subject.lesson.title}</h2>
        <img src={subject.lesson.imageUrl} alt={subject.lesson.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 leading-relaxed">{subject.lesson.content}</p>
      </div>
      
      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Bài tập vận dụng</h2>
        <Quiz questions={subject.questions} onComplete={onAddStars} />
      </div>
    </div>
  );
};

export default SubjectScreen;
