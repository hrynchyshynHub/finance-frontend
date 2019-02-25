const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const globalShortcut = app.globalShortcut;

let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        backgroundColor: '#ffffff',
        icon: url.format({
            pathname: path.join(__dirname, 'dist/assets/logo.png'),
            protocol: 'file',
            slashes: true
        })
    });
    win.setTitle(require('./package.json').name);


    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    });

    globalShortcut.register('f5', function() {
        console.log('f5 is pressed');
        win.reload();
    });
    globalShortcut.register('CommandOrControl+R', function() {
        console.log('CommandOrControl+R is pressed');
        win.reload();
    })
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
});
