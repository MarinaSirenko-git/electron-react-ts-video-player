import React from 'react';
import Logo from './Logo/Logo';
import WindowControls from './WindowControls/WindowControls';
import Navbar from './Navbar/Navbar';
import { IHeaderProps } from '../../interfaces/interfaces';
import './Header.css'

const Header: React.FC<IHeaderProps> = ({
  onOpenFileClick, 
  onOpenFolderClick, 
  onExitClick, 
  onMinimizableBtnClick, 
  onMaximizableBtnClick, 
  onExitCrossBtnClick
  }) => {
    return (
      <header className="header">
        <Logo />
        <Navbar 
          onOpenFileClick={onOpenFileClick}
          onOpenFolderClick={onOpenFolderClick}
          onExitClick={onExitClick}
        />
        <WindowControls 
          onMinimizableBtnClick={onMinimizableBtnClick}
          onMaximizableBtnClick={onMaximizableBtnClick}
          onExitCrossBtnClick={onExitCrossBtnClick}
        />
      </header>
    );
}

export default Header;