import React from "react";
import { FaPlay } from "react-icons/fa";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

export default function List({ title, artist, audio}) {

  const { playTrack, pauseTrack, currentTrack, isPlaying, setPlayTrack } = useAudioPlayer();

  const handlePlayClick = (track) => {
    if (track === currentTrack) {
      isPlaying ? pauseTrack() : playTrack(track);
    } else {
      playTrack(track);
    }
    setPlayTrack(title, artist);
  };

  return (
    <button onClick={() => handlePlayClick(audio)} className="flex flex-row gap-2 rounded items-center px-2 py-4 hover:bg-blue-600 active:bg-blue-400">
      <div className="flex flex-col grow">
        <p className="text-left font-bold">{title}</p>
        <p className="text-left text-gray-200">{artist}</p>
      </div>
      <div className="p-4">
        <FaPlay size={14} />
      </div>
    </button>
  );
}
