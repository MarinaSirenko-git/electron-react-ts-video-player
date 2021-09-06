import React from 'react'
import Header from '../Header/Header'
import './App.css'
const electron = window.require('electron')
const { contextBridge, ipcRenderer } = electron

function App() {
  console.log(electron)
  console.log(contextBridge)

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog')
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog')
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
  </div>
  )
}

export default App
