import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Player from '../Player/Player'
import './App.css'
import { 
  replaceBackslashes, 
  findIndex, 
  setPathToLocalStorage, 
  getPathFromLocalStorage,
  removePathToLocalStorge
} from '../../utils/utils'
// @ts-ignore
const electron = window.require('electron')
const { ipcRenderer } = electron

const App: React.FC = () => {
  const [path, setPath] = useState<string>('')
  const [folderPaths, setFolderPaths] = useState <string[]>([])
  const [isDisabledPrevBtn, setIsDisabledPrevBtn] = useState <boolean>(true)
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState <boolean>(true)

  const handleOpenFileClick = () => {
    ipcRenderer.send('select-file-dialog')
    ipcRenderer.on('file-path', (e: any, data: Array<string>) => {
      if(data === undefined) {
        console.log('Файл не выбран')
      } else {
        const path = replaceBackslashes(data)
        setPath(path[0])
        setPathToLocalStorage(path, 0)
      }
    })
  }
  
  const handleOpenFolderClick = () => {
    ipcRenderer.send('select-folder-dialog')
    ipcRenderer.on('folder-path', (e: any, data: Array<string>) => {
      const paths = replaceBackslashes(data)
      if(data === undefined) {
        console.log('Директория не выбрана')
      } else {
        setPath(paths[0])
        setFolderPaths(paths)
        setPathToLocalStorage(paths, 0)
      }
    })
  }

  useEffect(() => {
    const data = getPathFromLocalStorage()
    if(data) {
      setFolderPaths(data.pathsFolder)
      setPath(data.path)
    }
  }, [])

  useEffect(() => {
    const index = findIndex(folderPaths, path)
    if(folderPaths.length > 1 && index === 0) {
      setIsDisabledPrevBtn(true)
      setIsDisabledNextBtn(false)
    } else if(folderPaths.length === 1) {
      setIsDisabledPrevBtn(true)
      setIsDisabledNextBtn(true)
    } else if(folderPaths.length - 1 === index) {
      setIsDisabledPrevBtn(false)
      setIsDisabledNextBtn(true)
    } else {
      setIsDisabledPrevBtn(false)
      setIsDisabledNextBtn(false)
    }
  }, [folderPaths, path])
  
  const handleExitClick = () => {
    ipcRenderer.send('quit-window')
    removePathToLocalStorge()
  }

  const handleMinimizableBtnClick = () => {
    ipcRenderer.send('minimizable-window')
  }

  const handleMaximizableBtnClick = () => {
    ipcRenderer.send('maximizable-window')
  }

  const handleNextBtnClick = () => {
    const index = findIndex(folderPaths, path) + 1
    setPath(folderPaths[index])
    setPathToLocalStorage(folderPaths, index)
    setIsDisabledPrevBtn(false)
    if(folderPaths.length === (index + 1)) {
      setIsDisabledNextBtn(true)
    }
  }

  const handlePreviousBtnClick = () => {
    const index = findIndex(folderPaths, path) - 1
    setPath(folderPaths[index])
    setPathToLocalStorage(folderPaths, index)
    if(index === 1) {
      setIsDisabledPrevBtn(true)
    }
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
      <Player 
        path={path} 
        onNextBtnClick={handleNextBtnClick} 
        onPreviousBtnClick={handlePreviousBtnClick}
        isDisabledPrev={isDisabledPrevBtn}
        isDisabledNext={isDisabledNextBtn}/>
  </div>
  )
}

export default App
