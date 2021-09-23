import React from 'react';
import { IProgressBarProps } from '../../../interfaces/interfaces'
import './ProgressBar.css'

const ProgressBar: React.FC<IProgressBarProps> = ({ currentTime, duration, progressValue }) => {
  return (
    <div className="player__progress-bar">
      <progress className="player__progress-line" max="100" value={progressValue}></progress>
      <div className="player-wrap">
        <p className="player__video-duration">{currentTime}</p>
        <p className="player__video-duration player__video-duration_type_full">{duration}</p>
      </div>
    </div>
  );
}

export default ProgressBar;