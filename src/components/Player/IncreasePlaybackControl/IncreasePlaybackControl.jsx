import React from 'react';
import './IncreasePlaybackControl.css'

function IncreasePlaybackControl({ handleClick }) {
  return (
    <li className="player__control">
      <button className="player__increase-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default IncreasePlaybackControl;