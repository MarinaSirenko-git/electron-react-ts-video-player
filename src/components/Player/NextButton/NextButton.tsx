import React from 'react';
import { IPrevNextProps } from '../../../interfaces/interfaces';
import './NextButton.css'

const NextButton: React.FC<IPrevNextProps> = ({handleClick, isDisabled}) => {
  return (
    <li className="player__control">
      <button className="player__next-btn" type="button" onClick={handleClick} disabled={isDisabled}></button>
    </li>
  );
}

export default NextButton;