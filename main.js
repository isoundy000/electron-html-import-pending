'use strict'

const App = require('app');

// quit when all windows are closed.
App.on('window-all-closed', () => {
  App.quit();
});

App.on('ready', () => {
  const BrowserWindow = require('browser-window');
  let mainWindow = new BrowserWindow( {
    title: 'Main',
    width: 800,
    height: 600,
  });

  mainWindow.loadUrl(`file://${__dirname}/page/index.html`);
  mainWindow.show();
  mainWindow.openDevTools();
});
