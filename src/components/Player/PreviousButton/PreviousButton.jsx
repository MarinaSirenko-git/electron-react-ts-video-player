import React from 'react';
import './PreviousButton.css'

function PreviousButton({handleClick}) {
  return (
    <li className="player__control">
      <button className="player__previous-btn" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default PreviousButton;