// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron'
import { join } from 'path'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

  (function () {
    var oldLog = console.log;
    console.log = function (message) {
      document.getElementById('a').value += message
      oldLog.apply(arguments);
    };
  })();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) {
  document.getElementById('save').style.display = "none"; textarea.style.height = "500px";
}//resize for mobile
function generate() {
  var triesPerSecond = document.getElementById('speed').value //self explanatory
  getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < 16; i++) {
      code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    console.log('[CODE] https://discord.gift/' + code + "\n");
    code += '\n'
    document.getElementById('b').value += "https://discord.gift/" + code;

  } //generates codes


  getGiftCode();
  document.getElementById('stop').addEventListener("click", stop); //binds button stop to function stop
  function stop() {
    clearInterval(gInterval);
    clearInterval(interval)
  } //stop generating and stop console scroll loop
  var gInterval = setInterval(() => { getGiftCode(); }, (1 / triesPerSecond) * 1000);
  //repeat making codes

  function scroll() {
    document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight
  }; // auto scroll
  var interval = setInterval(scroll, 100) //keep on making "console" scroll
  document.getElementById('clear').addEventListener("click", stop);
}

document.getElementById('generate').addEventListener("click", generate);