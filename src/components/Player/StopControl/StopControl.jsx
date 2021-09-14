import React from 'react';
import './StopControl.css'

function StopControl({ handleClick }) {
  return (
    <li className="player__control">
      <button className="player__stop-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default StopControl;