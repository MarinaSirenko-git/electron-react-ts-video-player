import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './PreviousButton.css'

const PreviousButton: React.FC<ICommonProps> = ({handleClick}) => {
  return (
    <li className="player__control">
      <button className="player__previous-btn" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default PreviousButton;