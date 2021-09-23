import React, { useState } from 'react'
import Header from '../Header/Header'
import Player from '../Player/Player'
import './App.css'
import { replaceBackslashes, findIndex } from '../../utils/utils'
// @ts-ignore
const electron = window.require('electron')
const { ipcRenderer } = electron

const App: React.FC = () => {
  const [path, setPath] = useState<string>('')
  const [folderPaths, setFolderPaths] = useState <string[]>([])

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog')
    ipcRenderer.on('file-path', (e: any, data: Array<string>) => {
      const path = replaceBackslashes(data)
      setPath(path[0])
    })
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog')
    ipcRenderer.on('folder-path', (e: any, data: Array<string>) => {
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
