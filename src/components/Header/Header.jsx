import React from 'react';
import Logo from './Logo/Logo';
import WindowControls from './WindowControls/WindowControls';
import Navbar from './Navbar/Navbar';
import './Header.css'

function Header({
  onOpenFileClick, 
  onOpenFolderClick, 
  onExitClick, 
  onMinimizableBtnClick, 
  onMaximizableBtnClick, 
  onExitCrossBtnClick
  }) {
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