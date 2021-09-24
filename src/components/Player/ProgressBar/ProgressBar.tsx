import React from 'react';
import { IProgressBarProps } from '../../../interfaces/interfaces'
import './ProgressBar.css'

const ProgressBar: React.FC<IProgressBarProps> = ({ currentTime, duration, progressValue }) => {
  const pinStyle = {
    left: `calc(${progressValue}% - 1%)`,
  };

  return (
    <div className="player__progress-bar">
      <div className="player__progress-wrap">
        <progress className="player__progress-line" max="100" value={progressValue}></progress>
        <span className="player__pin" style={pinStyle}></span>
      </div>
      <div className="player__duration-wrap">
        <p className="player__video-duration">{currentTime}</p>
        <p className="player__video-duration player__video-duration_type_full">{duration}</p>
      </div>
    </div>
  );
}

export default ProgressBar;