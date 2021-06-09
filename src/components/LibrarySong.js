import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  setSongs,
  songs,
  id,
  isPlaying,
  audioref,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    playAudio(isPlaying, audioref);
  };

  return (
    <div
      className={`library-song-single ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className={`song-description`}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
