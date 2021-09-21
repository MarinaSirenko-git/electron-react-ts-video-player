import React, { useState } from 'react'
import Header from '../Header/Header'
import Player from '../Player/Player'
import './App.css'
import { replaceBackslashes, findIndex } from '../../utils/utils'
const electron = window.require('electron')
const { ipcRenderer } = electron

function App() {
  const [path, setPath] = useState('')
  const [folderPaths, setFolderPaths] = useState([])

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog')
    ipcRenderer.on('file-path', (e, data) => {
      const path = replaceBackslashes(data)
      setPath(path)
    })
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog')
    ipcRenderer.on('folder-path', (e, data) => {
      const paths = replaceBackslashes(data)
      setPath(paths[0])
      setFolderPaths(paths)
    })
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

  const handleNextBtnClick = () => {
    const currentIndex = findIndex(folderPaths, path)
    setPath(folderPaths[currentIndex + 1])
  }

  const handlePreviousBtnClick = () => {
    const currentIndex = findIndex(folderPaths, path)
    setPath(folderPaths[currentIndex - 1])
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
      <Player path={path} onNextBtnClick={handleNextBtnClick} onPreviousBtnClick={handlePreviousBtnClick}/>
  </div>
  )
}

export default App
