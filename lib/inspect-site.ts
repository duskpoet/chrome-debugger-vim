import * as WebSocket from 'ws';
import { ISite, IPromiseReturn } from './interfaces';
import * as logger from './logger';
import { NeovimClient } from 'neovim/lib/api/client';
import { Scripts } from './scripts';
import { VTreePage } from './ui/TreePage';

const WS_STOP_COMMAND = '_CR_WS_STOP';
const DUMP_COMMAND = '_CR_DUMP';

let ws: WebSocket;
let socketQueueId = 1;
let nvim: NeovimClient;
let scripts: Scripts;
let page: VTreePage;
let scriptsList = [];

export function inspectSite(options: IPromiseReturn) {
  const wsUrl = options.site.webSocketDebuggerUrl;
  nvim = options.nvim;
  ws = new WebSocket(wsUrl);
  ws.on('open', listenMessages);
  ws.on('message', onMessage);
  ws.on('close', onClose);
  nvim.on('notification', onNvimNotify);
  scripts = new Scripts();
  page = new VTreePage(nvim);
}

async function listenMessages() {
  await page.init();
  sendMessage('Debugger.enable');
}

function onMessage(message: string) {
  try {
    const data = JSON.parse(message);
    switch (data.method) {
    case 'Debugger.scriptParsed':
      scripts.add(data.params);
      schedule(drawScripts);
      break;
    }
  } catch (ex) {
    logger.error(ex);
  }
}

function onClose() {
  logger.log('CLOSE SOCKET');
}

function sendMessage(method: string) {
  const data = {
    id: socketQueueId,
    method: method
  };
  ws.send(JSON.stringify(data));
  socketQueueId++;
}

function onNvimNotify(method: string) {
  switch (method) {
    case WS_STOP_COMMAND: {
      ws.close();
    }
    case DUMP_COMMAND: {
      scripts.dump();
    }
  }
}

let scheduleId;

function schedule(cb) {
  clearTimeout(scheduleId);
  scheduleId = setTimeout(cb, 500);
}

function drawScripts() {
  scriptsList = scripts.getScriptsListed();
  page.fillTree(scriptsList);
}

