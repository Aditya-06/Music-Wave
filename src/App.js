import React, { useState, useRef } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Navbar from "./layout/Navbar";
import Library from './components/Library';
import data from "./childHop.js";

function App() {
  // Reference the audio tag
  const audioref = useRef(null)
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <h1></h1>
      </div>

      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioref={audioref} />
      <Library currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
