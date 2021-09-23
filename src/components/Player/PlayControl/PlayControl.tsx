import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './PlayControl.css'

const PlayControl: React.FC<ICommonProps> = ({ handleClick }) => {
  return (
    <li className="player__control">
      <button className="player__play-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default PlayControl;