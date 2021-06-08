import React, { useState } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Navbar from "./layout/Navbar";
import Library from './components/Library';
import data from "./childHop.js";

function App() {
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <h1>Music Player</h1>
      </div>

      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library currentSong={currentSong} songs={songs} />
    </div>
  );
}

export default App;
