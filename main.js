const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')
const fs= require('fs')

const preloadPath=path.resolve(__dirname, './preload.js');
 const createWindow=() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
           // nodeIntegration: true,
           preload:preloadPath,
            
        }
    })
    win.setMenu(null);
    win.loadFile("./index.html");
   //win.loadURL("https://www.baidu.com");
  // win.webContents.openDevTools();

}

// app.whenReady().then(() => {
//    createWindow()
// })

app.whenReady().then(() => {
    createWindow()
    
  })

  

  

