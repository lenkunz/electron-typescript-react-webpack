import { app, BrowserWindow, ipcMain } from "electron";
import * as Path from "path";

import { Auth } from "./Auth";

import { ILoginInfoResponse } from "./IpcData";
import { IpcLoginReceiver, IpcLoginSender } from "./IpcFunction/IpcFunction";
import LoginProcess from "./Process/LoginProcess";

import Config from "./Config";

if (Config.IsDevelopment) {
  // tslint:disable-next-line:no-console
  require("electron-debug")();
}

let mainWindow: Electron.BrowserWindow;

const auth = new Auth();

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    maxHeight: 600,
    maxWidth: 800,
    maximizable: false,
    minHeight: 400,
    minWidth: 400,
    width: 800,
  });

  mainWindow.setMenu(null);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  if (Config.IsDevelopment) {
    mainWindow.loadURL(`http://localhost:${Config.DevelopmentPort}/dist/renderer/`);
  } else {
    // and load the index.html of the app.
    mainWindow.loadFile(Path.join(__dirname, "../renderer/index.html"));
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  const loginProcess = new LoginProcess(auth, new IpcLoginSender(mainWindow));
  loginProcess.Login();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (Config.IsDevelopment) {
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require("electron-devtools-installer");

    try {
      const name: string = await installExtension(REACT_DEVELOPER_TOOLS);
      // tslint:disable-next-line:no-console
      console.log(`Added Extension: ${name}`);
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.error("An error occured %o", e);
    }
  }

  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
