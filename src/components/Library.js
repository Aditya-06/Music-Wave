import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
  isPlaying,
  showLib,
  audioRef,
}) => {
  return (
    <div className={`library ${showLib ? "deactivated" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            songs={songs}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
