import React from 'react';
import './WindowControls.css'

function WindowControls({onMinimizableBtnClick, onMaximizableBtnClick, onExitCrossBtnClick}) {
  return (
    <ul className="window-controls">
      <li className="window-controls__item">
        <button 
          className="window-controls__btn window-controls__btn_type_minimize" 
          type="button" 
          onClick={onMinimizableBtnClick}>
        </button>
      </li>
      <li className="window-controls__item">
        <button 
          className="window-controls__btn window-controls__btn_type_expand" 
          type="button"
          onClick={onMaximizableBtnClick}>
        </button>
      </li>
      <li className="window-controls__item">
        <button 
          className="window-controls__btn window-controls__btn_type_close" 
          type="button"
          onClick={onExitCrossBtnClick}>
        </button>
      </li>
    </ul>
  );
}

export default WindowControls;