import React from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="header">
      <h1>Music Player</h1>
      </div>

      <Song />
      <Player />
    </div>
  );
}

export default App;
