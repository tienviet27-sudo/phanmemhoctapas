
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
  onOpenSettings: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onOpenSettings }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in-down">
        <div className="text-7xl mb-4 animate-bounce">📘</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
          Vui Học Mỗi Ngày ✨
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Phần mềm học tập dành cho học sinh lớp 5.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onStart}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Bắt đầu học
          </button>
          <button className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-8 rounded-full text-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            Đăng nhập
          </button>
        </div>
         <button onClick={onOpenSettings} className="mt-6 text-gray-500 hover:text-gray-700">
            Cài đặt
          </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;