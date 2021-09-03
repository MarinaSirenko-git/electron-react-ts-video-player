import React from 'react';
import Logo from '../Logo/Logo';
import WindowControls from '../WindowControls/WindowControls';
import Navbar from '../Navbar/Navbar';
import './Header.css'

function Header({...props}) {
  return (
    <header className="header">
      <Logo />
      <Navbar {...props} />
      <WindowControls />
    </header>
  );
}

export default Header;