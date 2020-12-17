const {BrowserWindow, app, Menu,  dialog} = require('electron');


const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

// const template = [
//   {
//     label: 'Data',
//     submenu: [
//       {
//         label: "change Directory",
// click() {
//   openDir()
// }
//       }
//     ]
//   }
// ]

// const menu = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(menu)

function createWindow() {
  mainWindow = new BrowserWindow({width: 1300, height: 800,  icon: path.join(__dirname, 'icon.png')});
  mainWindow.loadURL(isDev ? 'http://localhost:3004' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// const openDir = () => {
// const directory = dialog.showOpenDialog(mainWindow, {
// properties: ['openDirectory']
// })
// if (!directory) return
// }