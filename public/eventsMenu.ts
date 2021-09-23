// @ts-ignore
const { app, ipcMain, dialog } = require('electron')
const fs = require('fs')
const path = require('path')

const openFileDialog = (win: any) => {
  ipcMain.on('select-file-dialog', async (e: any, data: any) => {
    let path = await dialog.showOpenDialogSync(win, {
        title: 'Выбор файла',
        defaultPath: 'C:\\',
        buttonLabel: 'Выбрать файл',
        filters: [
           { name: 'Доступные форматы', extensions: ['avi', 'mkv', 'mov', 'flv', 'vob', 'mp4'] },
        ],
        properties: ['openFile']
      })
      win.webContents.send('file-path', path);
  })  
}

const openFolderDialog = (win: any) => {
  ipcMain.on('select-folder-dialog', async (e: any, data: any) => {
  let folderPath = await dialog.showOpenDialogSync(win, {
      title: 'Выбор каталога',
      defaultPath: 'C:\\',
      buttonLabel: 'Выбрать каталог',
      filters: [
         { name: 'Доступные форматы', extensions: ['avi', 'mkv', 'mov', 'ogv', 'webm', 'mp4'] },
      ],
      properties: ['openDirectory', 'createDirectory']
    })
  fs.readdir(folderPath[0], function(err: any, videos: any) {
    const pathVideos = videos.map((item: any) => path.resolve(`${folderPath[0]}\\`, item))
    win.webContents.send('folder-path', pathVideos)
  })
})
}

const quitWindow = () => {
  ipcMain.on('quit-window', () => {
  app.quit()
})
}

const minimizeWindow = (win: any) => {
  ipcMain.on('minimizable-window', () => {
    win.minimize()
  })
}

const maximizeWindow = (win: any) => {
  ipcMain.on('maximizable-window', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize()
  })
}

module.exports = {
  openFileDialog,
  openFolderDialog,
  quitWindow,
  minimizeWindow,
  maximizeWindow
} 