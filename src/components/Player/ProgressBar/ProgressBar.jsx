import React from 'react';
import './ProgressBar.css'

function ProgressBar() {
  return (
    <div className="player__progress-bar">
      <div className="player__progress-line"></div>
      <span className="player__video-duration">0:48:17</span>
      <span className="player__video-duration player__video-duration_type_full">1:13:24</span>
    </div>
  );
}

export default ProgressBar;