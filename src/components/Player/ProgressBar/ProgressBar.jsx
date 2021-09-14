import React from 'react';
import './ProgressBar.css'

function ProgressBar({ currentTime, duration, progressValue }) {
  return (
    <div className="player__progress-bar">
      <progress className="player__progress-line" max="100" value={progressValue}></progress>
      <span className="player__video-duration">{currentTime}</span>
      <span className="player__video-duration player__video-duration_type_full">{duration}</span>
    </div>
  );
}

export default ProgressBar;