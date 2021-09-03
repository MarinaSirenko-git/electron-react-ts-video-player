import React from 'react';
import './WindowControls.css'

function WindowControls() {
  return (
    <ul className="window-controls">
      <li className="window-controls__item">
        <button className="window-controls__btn window-controls__btn_type_minimize" type="button"></button>
      </li>
      <li className="window-controls__item">
        <button className="window-controls__btn window-controls__btn_type_expand" type="button"></button>
      </li>
      <li className="window-controls__item">
        <button className="window-controls__btn window-controls__btn_type_close" type="button"></button>
      </li>
    </ul>
  );
}

export default WindowControls;