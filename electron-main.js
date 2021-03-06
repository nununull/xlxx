//引入electron
const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron');

const path = require('path');

const globalShortcut = require('electron').globalShortcut;

//窗口配置程序运行窗口的大小
let win;
let windowConfig = {
    width: 1280,
    height: 800,
    //禁止改变主窗口尺寸
    resizable: false,
    // 是否显示titleBar
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'render.js'),
        webSecurity: false
    },

    icon: path.join(__dirname, 'logo.ico')
};

// 菜单
// label : 菜单名字
// submenu： 子菜单项
// click: 点击事触发
// type: ‘separator’ 分隔条
let template = [{
    label: '快捷键',
    submenu: [
        {
            label: '全屏F11',
            click: function () {
                let isFull = win.isFullScreen();
                win.setFullScreen(!isFull);
            }
        },
        {
            type: 'separator'
        },
    ],
}, {
    label: '开发者工具',
    submenu: [
        {
            label: 'DevTools',
            click: function () {

                let isOpened = win.webContents.isDevToolsOpened();

                if (isOpened) {
                    win.webContents.closeDevTools()
                } else {
                    //开启调试工具
                    win.webContents.openDevTools();
                }
            }
        }
    ]
}
];

function createWindow() {


    win = new BrowserWindow(windowConfig);//创建一个窗口
    win.loadURL(`file://${__dirname}/www/index.html`);//在窗口内要展示的内容index.html 就是打包生成的index.html

    win.on('close', () => {
        //回收BrowserWindow对象
        win = null;
    });

}

ipcMain.on('window-mini', () => win.minimize());

ipcMain.on('window-max', () => {
    let isFull = win.isFullScreen();
    win.setFullScreen(!isFull);
});

ipcMain.on('window-close', () => {

    // 有可能开了调试模式 要先关调试模式
    let isOpened = win.webContents.isDevToolsOpened();

    if (isOpened) {
        win.webContents.closeDevTools()
    }

    win.close();
});

ipcMain.on('window-fix', () => {
    if (win.isAlwaysOnTop()) {
        win.setAlwaysOnTop(false);
        BrowserWindow.getFocusedWindow().webContents.send('alwaysOnTop', 'no');
    } else {
        win.setAlwaysOnTop(true);
        BrowserWindow.getFocusedWindow().webContents.send('alwaysOnTop', 'yes');
    }
});

app.once('ready-to-show', () => {
    win.show()
});

app.on('ready', () => {

    // 注册监听F11
    if (!globalShortcut.isRegistered("F11")) {
        globalShortcut.register('F11', function () {

            let isFull = win.isFullScreen();
            win.setFullScreen(!isFull);
        });
    }

    let isRegisterF8 = globalShortcut.isRegistered("F8");

    if (isRegisterF8) {
        globalShortcut.unregister("F8")
    }

    globalShortcut.register('F8', function () {

        let isOpened = win.webContents.isDevToolsOpened();

        if (isOpened) {
            win.webContents.closeDevTools()
        } else {
            //开启调试工具
            win.webContents.openDevTools();
        }
    });

    // 设置菜单
    // let menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(null);

    // 创建视图
    createWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {

    if (win == null) {
        createWindow();
    }
});

let tray = null;

app.whenReady().then(() => {

    tray = new Tray(path.join(__dirname, 'logo.ico'));

    const trayContextMenu = Menu.buildFromTemplate([
        {
            label: '打开',
            click: () => {
                win.show();
            }
        }, {
            label: '退出',
            click: () => {
                win.webContents.send("window-close");
                app.quit()
            }
        }
    ]);
    tray.setToolTip('秋名山车神');

    tray.on('click', () => {
        win.show();
    });
    tray.on('right-click', () => {
        tray.popUpContextMenu(trayContextMenu);
    });
});