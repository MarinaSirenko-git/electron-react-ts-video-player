const { app, ipcMain, dialog } = require('electron')

const openFileDialog = (win) => {
  ipcMain.on('select-file-dialog', async (e, data) => {
    let result = await dialog.showOpenDialogSync(win, {
        title: 'Выбор файла',
        defaultPath: 'C:\\',
        buttonLabel: 'Выбрать файл',
        filters: [
           { name: 'Доступные форматы', extensions: ['avi', 'mkv', 'mov', 'flv', 'vob', 'mp4'] },
        ],
        properties: ['openFile']
      })
      console.log(result)
  })  
}

const openFolderDialog = (win) => {
  ipcMain.on('select-folder-dialog', async (e, data) => {
  let result = await dialog.showOpenDialogSync(win, {
      title: 'Выбор каталога',
      defaultPath: 'C:\\',
      buttonLabel: 'Выбрать каталог',
      filters: [
         { name: 'Доступные форматы', extensions: ['avi', 'mkv', 'mov', 'flv', 'vob', 'mp4'] },
      ],
      properties: ['openDirectory', 'createDirectory']
    })
    console.log(result)
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