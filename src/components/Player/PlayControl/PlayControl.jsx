import React from 'react';
import './PlayControl.css'

function PlayControl({ handleClick }) {
  return (
    <li className="player__control">
      <button className="player__play-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default PlayControl;