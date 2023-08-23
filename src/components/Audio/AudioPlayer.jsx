import React, { useEffect } from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { FaPlay,FaPause } from "react-icons/fa";

function MiniBarAudioPlayer() {
  const { currentTrack, isPlaying, pauseTrack, title, artist } =
    useAudioPlayer();

  useEffect(() => {
    const audioElement = new Audio(currentTrack);
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [currentTrack, isPlaying]);

  return (
    <div className={`${title ? "" : "hidden"} bg-gray-200 dark:bg-gray-900 dark:text-white fixed mx-auto left-0 right-0 bottom-0 w-full`}>
      <div className="w-1/2 flex flex-row justify-between mx-auto my-4">
        <div className="mini-bar-info">
          <p className="font-bold text-2xl">{title}</p>
          <p className="dark:text-gray-400">{artist}</p>
        </div>
        <div className="flex items-center">
          <button onClick={pauseTrack}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        </div>
      </div>
    </div>
  );
}

export default MiniBarAudioPlayer;
