import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    // Reference the audio tag
    const audioref = useRef(null)

    // Set information about the song in state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    // Format time from seconds -> minutes
    const getTime = (time) => {
        return Math.floor(time /60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }
    
    // Play / Pause handler
    const playSongHandler = () => {
        isPlaying ? audioref.current.pause() : audioref.current.play()
        setIsPlaying(!isPlaying)
    }


    const timeHandler = (e) => {
        // console.log(e.target.currentTime)
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }

    const dragHandler = (e) => {
        audioref.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    return (<div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon className="skip-back"  size="3x" icon={faAngleLeft} />
            <FontAwesomeIcon className="play" size="3x" icon={isPlaying ? faPause : faPlay} onClick={playSongHandler} />
            <FontAwesomeIcon className="skip-forward" size="3x" icon={faAngleRight} />
        </div>
        <audio ref={audioref} src={currentSong.audio} onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler}></audio>
  </div>);
};

export default Player;
