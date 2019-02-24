const {app, BrowserWindow} = require('electron');

let win;
function createWindow() {
  //ウィンドウを作成
  win = new BrowserWindow({width: 800, height: 600});

  //index.htmlを表示
  win.loadFile('index.html')

  //開発者ツールを開く
  win.webContents.openDevTools();

  //ウィンドウが閉じられた時に発火
  win.on('close', () => {
    win = null;
  });
}

app.on('ready', createWindow);

//すべてのウィンドウが閉じられると終了
app.on('window-all-closed', () => {
  if(process.plotfrom !== 'darwin'){
    app.quit();
  }
});

//mac用
app.on('active', () => {
  if( win === null ){
    createWindow();
  }
});
