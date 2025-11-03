
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ProfileScreenProps {
  onGoHome: () => void;
  stars: number;
}

const data = [
  { name: 'Toán', progress: 80, color: '#3b82f6' },
  { name: 'Tiếng Việt', progress: 95, color: '#ef4444' },
  { name: 'Tiếng Anh', progress: 75, color: '#22c55e' },
  { name: 'Khoa Học', progress: 70, color: '#f97316' },
  { name: 'Lịch sử', progress: 88, color: '#d97706' },
  { name: 'Tin học', progress: 85, color: '#a855f7' },
];

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onGoHome, stars }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
      <header className="flex items-center mb-6">
        <button
          onClick={onGoHome}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full mr-4 transition-colors"
        >
          &larr; Trang chủ
        </button>
        <h1 className="text-3xl font-extrabold">Hồ sơ học tập</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-100 p-6 rounded-xl flex flex-col items-center justify-center">
          <span className="text-6xl">⭐</span>
          <p className="text-4xl font-bold text-yellow-800 mt-2">{stars}</p>
          <p className="text-yellow-700 font-semibold">Tổng số sao đạt được</p>
        </div>
         <div className="bg-green-100 p-6 rounded-xl flex flex-col items-center justify-center">
          <span className="text-6xl">🎯</span>
          <p className="text-2xl font-bold text-green-800 mt-2">Hoàn thành 5 bài tập</p>
          <p className="text-green-700 font-semibold">Mục tiêu tuần này</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Biểu đồ tiến độ</h2>
        <div className="w-full h-80 bg-gray-50 p-4 rounded-xl">
           <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#8884d8" name="Tiến độ (%)" unit="%">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;