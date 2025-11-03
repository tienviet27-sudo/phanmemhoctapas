import React from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  musicVolume: number;
  onVolumeChange: (volume: number) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isMusicPlaying,
  onToggleMusic,
  musicVolume,
  onVolumeChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md m-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Cài đặt</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label htmlFor="music-toggle" className="font-semibold text-lg flex items-center">
              <span className="mr-2 text-2xl">🎵</span> Âm nhạc
            </label>
            <label htmlFor="music-toggle" className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                id="music-toggle"
                checked={isMusicPlaying}
                onChange={onToggleMusic}
                className="sr-only peer" 
              />
               <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="volume-slider" className="font-semibold text-lg flex items-center">
              <span className="mr-2 text-2xl">🔊</span> Âm lượng
            </label>
            <div className="flex items-center space-x-4">
              <span className="text-xl">🔈</span>
              <input 
                type="range"
                id="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={musicVolume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xl">🔊</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
            Xong
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
