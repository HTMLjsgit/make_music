const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.openDevTools();

	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});