import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './IncreasePlaybackControl.css'

const IncreasePlaybackControl: React.FC<ICommonProps> = ({ handleClick }) => {
  return (
    <li className="player__control">
      <button className="player__increase-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default IncreasePlaybackControl;