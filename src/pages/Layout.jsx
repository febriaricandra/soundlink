import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { AudioPlayerProvider } from "../context/AudioPlayerContext";
import MiniBarAudioPlayer from "../components/Audio/AudioPlayer";
export default function Layout() {
  const handleOpenTab = () => {
    window.open("https://www.linkedin.com/in/febriari-candra-guritno-3795221bb/", "_blank");
  }
  return (
    <ThemeProvider>
      <AudioPlayerProvider>
        <div className="dark:bg-black dark:text-white">
          <Navbar />
          <div className="max-w-4xl mx-auto px-2 h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
              <div className="col-span-2">
                <Outlet />
              </div>
              <div className="mb-12">
                <h1 className="font-bold text-2xl">About</h1>
                <div className="flex flex-col gap-1 rounded-lg p-4 border-gray-400 border-2 my-4">
                  <h2 className="font-bold text-2xl text-center">Looking for a collaboration?</h2>
                  <p className="text-md text-center my-2">You can find me on another platforms, here you go</p>
                  <button onClick={handleOpenTab} className="rounded-full font-bold p-1 mb-4 text-sm bg-gray-200 h-10 dark:bg-blue-900">Here you go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MiniBarAudioPlayer />
      </AudioPlayerProvider>
    </ThemeProvider>
  );
}
