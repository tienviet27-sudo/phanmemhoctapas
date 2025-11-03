import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Subject } from './types';
import { SUBJECTS, MUSIC_URL } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import SubjectScreen from './components/SubjectScreen';
import ProfileScreen from './components/ProfileScreen';
import GameCenterScreen from './components/GameCenterScreen';
import SpeedQuizGame from './components/SpeedQuizGame';
import SettingsModal from './components/SettingsModal';
import SettingsButton from './components/SettingsButton';

type Screen = 'welcome' | 'home' | 'subject' | 'profile' | 'gameCenter' | 'game';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedGameSubject, setSelectedGameSubject] = useState<Subject | null>(null);
  const [totalStars, setTotalStars] = useState(125);
  
  const [showSettings, setShowSettings] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [musicVolume, setMusicVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC_URL);
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume;
      if (isMusicPlaying) {
        audioRef.current.play().catch(error => console.log("Audio play blocked until user interaction."));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, musicVolume]);


  const handleStart = useCallback(() => {
    setCurrentScreen('home');
    if (isMusicPlaying && audioRef.current?.paused) {
      audioRef.current.play().catch(error => console.error("Audio playback failed on start:", error));
    }
  }, [isMusicPlaying]);

  const handleSelectSubject = useCallback((subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentScreen('subject');
  }, []);
  
  const handleGoToGameCenter = useCallback(() => {
    setCurrentScreen('gameCenter');
  }, []);

  const handleSelectGame = useCallback((subject: Subject) => {
    setSelectedGameSubject(subject);
    setCurrentScreen('game');
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedSubject(null);
    setSelectedGameSubject(null);
    setCurrentScreen('home');
  }, []);
  
  const handleViewProfile = useCallback(() => {
    setCurrentScreen('profile');
  }, []);

  const addStars = useCallback((stars: number) => {
    setTotalStars(prev => prev + stars);
  }, []);

  const handleOpenSettings = useCallback(() => setShowSettings(true), []);
  const handleCloseSettings = useCallback(() => setShowSettings(false), []);
  const handleToggleMusic = useCallback(() => setIsMusicPlaying(prev => !prev), []);
  const handleVolumeChange = useCallback((newVolume: number) => setMusicVolume(newVolume), []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} onOpenSettings={handleOpenSettings} />;
      case 'home':
        return (
          <HomeScreen
            userName="Phong"
            stars={totalStars}
            subjects={SUBJECTS}
            onSelectSubject={handleSelectSubject}
            onViewProfile={handleViewProfile}
            onGoToGameCenter={handleGoToGameCenter}
          />
        );
      case 'subject':
        if (selectedSubject) {
          return <SubjectScreen subject={selectedSubject} onGoHome={handleGoHome} onAddStars={addStars} />;
        }
        return null;
      case 'profile':
        return <ProfileScreen onGoHome={handleGoHome} stars={totalStars} />;
      case 'gameCenter':
        return <GameCenterScreen subjects={SUBJECTS} onGoHome={handleGoHome} onSelectGame={handleSelectGame} />;
      case 'game':
        if (selectedGameSubject) {
          return <SpeedQuizGame subject={selectedGameSubject} onGoBack={() => setCurrentScreen('gameCenter')} onAddStars={addStars} />;
        }
        return null;
      default:
        return <WelcomeScreen onStart={handleStart} onOpenSettings={handleOpenSettings} />;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto max-w-4xl p-4 relative">
        {renderScreen()}

        {currentScreen !== 'welcome' && currentScreen !== 'game' && (
            <SettingsButton onClick={handleOpenSettings} />
        )}

        <SettingsModal
          isOpen={showSettings}
          onClose={handleCloseSettings}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
          musicVolume={musicVolume}
          onVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default App;