import React from 'react';
import './DecreasePlaybackControl.css'

function DecreasePlaybackControl({ handleClick }) {
  return (
    <li className="player__control">
      <button className="player__decrease-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default DecreasePlaybackControl;