import React from 'react';
import { INavbarProps } from '../../../interfaces/interfaces';
import './Navbar.css';

const Navbar: React.FC<INavbarProps> = ({ onOpenFileClick, onOpenFolderClick, onExitClick }) => {
  
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <span className="navbar__name">File</span>
          <ul className="navbar__submenu">
            <li className="navbar__submenu-item">
              <button className="navbar__btn" type="button" onClick={onOpenFileClick}>Open File</button>
            </li>
            <li className="navbar__submenu-item">
              <button className="navbar__btn" type="button" onClick={onOpenFolderClick}>Open Folder</button>
            </li>
            <li className="navbar__submenu-item">
              <button className="navbar__btn" type="button" onClick={onExitClick}>Exit</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;