import React from 'react'
import LibrarySong from './LibrarySong';

const Library = ({currentSong, songs, setCurrentSong}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong song={song} key={song.id} id={song.id} songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} />)}
            </div>
        </div>
    )
}

export default Library
