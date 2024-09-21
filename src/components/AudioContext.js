import React, { createContext, useRef, useContext } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(`${process.env.PUBLIC_URL}/song.mp3`));

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const value = {
    playAudio,
    audioRef,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};