import React from 'react';

interface SettingsButtonProps {
    onClick: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-4 right-4 bg-white text-gray-700 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl transform hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Cài đặt"
        >
            ⚙️
        </button>
    );
};

export default SettingsButton;
