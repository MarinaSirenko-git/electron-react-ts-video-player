import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './StopControl.css'

const StopControl: React.FC<ICommonProps> = ({ handleClick }) => {
  return (
    <li className="player__control">
      <button className="player__stop-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default StopControl;