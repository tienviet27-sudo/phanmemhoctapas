
import React from 'react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${subject.gradient} text-white p-4 rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center aspect-square`}
    >
      <div className="text-5xl sm:text-6xl mb-2">{subject.icon}</div>
      <h3 className="font-bold text-lg sm:text-xl text-center">{subject.name}</h3>
    </div>
  );
};

export default SubjectCard;
