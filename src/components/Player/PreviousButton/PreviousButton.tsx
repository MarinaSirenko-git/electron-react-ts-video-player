import React from 'react';
import { IPrevNextProps } from '../../../interfaces/interfaces';
import './PreviousButton.css'

const PreviousButton: React.FC<IPrevNextProps> = ({ handleClick, isDisabled }) => {
  return (
    <li className="player__control">
      <button className="player__previous-btn" type="button" onClick={handleClick} disabled={isDisabled}></button>
    </li>
  );
}

export default PreviousButton;