import React from 'react';
import './NextButton.css'

function NextButton({handleClick}) {
  return (
    <li className="player__control">
      <button className="player__next-btn" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default NextButton;