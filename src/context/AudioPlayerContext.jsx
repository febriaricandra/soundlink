import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export function AudioPlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState(null);
  const [artist, setArtist] = useState(null);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const setPlayTrack = (title, artist) => {
    setTitle(title);
    setArtist(artist);
  };

  const pauseTrack = () => {
    if (currentTrack) {
      setIsPlaying(false);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{ currentTrack, isPlaying, playTrack, pauseTrack, title, artist, setPlayTrack }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}
