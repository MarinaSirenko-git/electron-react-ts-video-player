import React from 'react';
import { ICommonProps } from '../../../interfaces/interfaces';
import './DecreasePlaybackControl.css'

const DecreasePlaybackControl: React.FC<ICommonProps> = ({ handleClick }) => {
  return (
    <li className="player__control">
      <button className="player__decrease-control" type="button" onClick={handleClick}></button>
    </li>
  );
}

export default DecreasePlaybackControl;