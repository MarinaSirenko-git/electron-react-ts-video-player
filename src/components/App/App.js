import React, { useState } from 'react'
import Header from '../Header/Header'
import Player from '../Player/Player'
import './App.css'
const electron = window.require('electron')
const { ipcRenderer } = electron

function App() {
  const [path, setPath] = useState('')

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog')
    ipcRenderer.on('file-path', (e, data) => {
      const path = data[0].replace(/(\\)/g,'\\\\')
      setPath(path)
    });
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog')
    ipcRenderer.on('folder-path', (e, data) => {
      console.log(data)
    });
  }
  
  const handleExitClick = () => {
    ipcRenderer.send('quit-window')
  }

  const handleMinimizableBtnClick = () => {
    ipcRenderer.send('minimizable-window')
  }

  const handleMaximizableBtnClick = () => {
    ipcRenderer.send('maximizable-window')
  }


  return (
    <div className="app">
      <Header 
        onOpenFileClick={handleOpenFileClick} 
        onOpenFolderClick={handleOpenFolderClick}
        onExitClick={handleExitClick}
        onMinimizableBtnClick={handleMinimizableBtnClick}
        onMaximizableBtnClick={handleMaximizableBtnClick}
        onExitCrossBtnClick={handleExitClick}
      />
      <Player path={path} />
  </div>
  )
}

export default App
