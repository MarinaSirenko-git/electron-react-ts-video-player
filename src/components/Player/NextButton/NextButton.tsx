import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './NextButton.css'

const NextButton: React.FC<ICommonProps> = ({handleClick}) => {
  return (
    <li className="player__control">
      <button className="player__next-btn" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default NextButton;