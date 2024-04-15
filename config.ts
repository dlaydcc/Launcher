// import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'ConflictZone Launcher',
};

export const api = {
    ws: 'ws://127.0.0.1:1370/ws',
    web: 'http://127.0.0.1:1370',
    // extraToken: token,
};

export const appPath = '.aurora-launcher';

export const discordRPC = {
  appId: "1229457627684278293",
  firstLineText: "Тестирую лаунчер",
  secondLineText: "Баращка сбежала",
  buttons: [
    {
      label: "Видео секрет",
      url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
    },
  ],
  largeImageKey: "logo",
  smallImageKey: "logo_mc",
  largeImageText: "ConflictZone Launcher",
  smallImageText: "Minecraft",
};
