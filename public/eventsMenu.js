const { app, ipcMain, dialog } = require('electron')

const openFileDialog = (win) => {
  ipcMain.on('select-file-dialog', async (e, data) => {
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

const openFolderDialog = (win) => {
  ipcMain.on('select-folder-dialog', async (e, data) => {
  let path = await dialog.showOpenDialogSync(win, {
      title: 'Выбор каталога',
      defaultPath: 'C:\\',
      buttonLabel: 'Выбрать каталог',
      filters: [
         { name: 'Доступные форматы', extensions: ['avi', 'mkv', 'mov', 'ogv', 'webm', 'mp4'] },
      ],
      properties: ['openDirectory', 'createDirectory']
    })
    win.webContents.send('folder-path', path);
})
}

const quitWindow = () => {
  ipcMain.on('quit-window', () => {
  app.quit()
})
}

const minimizeWindow = (win) => {
  ipcMain.on('minimizable-window', () => {
    win.minimize()
  })
}

const maximizeWindow = (win) => {
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