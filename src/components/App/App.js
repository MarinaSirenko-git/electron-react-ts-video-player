import React from 'react'
import Header from '../Header/Header'
import './App.css'
const electron = window.require('electron')
const { contextBridge, ipcRenderer } = electron;

function App() {
  console.log(electron)
  console.log(contextBridge)
  console.log(ipcRenderer)

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog');
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog');
  }
  
  const handleExitClick = () => {
    ipcRenderer.send('quit-window');
  }

  return (
    <div className="app">
    <Header 
      onOpenFileClick={handleOpenFileClick} 
      onOpenFolderClick={handleOpenFolderClick}
      onExitClick={handleExitClick} 
    />
  </div>
  );
}

export default App;
