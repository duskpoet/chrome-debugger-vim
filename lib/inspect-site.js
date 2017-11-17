"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const logger = require("./logger");
const scripts_1 = require("./scripts");
const TreePage_1 = require("./ui/TreePage");
const WS_STOP_COMMAND = '_CR_WS_STOP';
const DUMP_COMMAND = '_CR_DUMP';
let ws;
let socketQueueId = 1;
let nvim;
let scripts;
let page;
let scriptsList = [];
function inspectSite(options) {
    const wsUrl = options.site.webSocketDebuggerUrl;
    nvim = options.nvim;
    ws = new WebSocket(wsUrl);
    ws.on('open', listenMessages);
    ws.on('message', onMessage);
    ws.on('close', onClose);
    nvim.on('notification', onNvimNotify);
    scripts = new scripts_1.Scripts();
    page = new TreePage_1.VTreePage(nvim);
}
exports.inspectSite = inspectSite;
function listenMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.init();
        sendMessage('Debugger.enable');
    });
}
function onMessage(message) {
    try {
        const data = JSON.parse(message);
        switch (data.method) {
            case 'Debugger.scriptParsed':
                scripts.add(data.params);
                schedule(drawScripts);
                break;
        }
    }
    catch (ex) {
        logger.error(ex);
    }
}
function onClose() {
    logger.log('CLOSE SOCKET');
}
function sendMessage(method) {
    const data = {
        id: socketQueueId,
        method: method
    };
    ws.send(JSON.stringify(data));
    socketQueueId++;
}
function onNvimNotify(method) {
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
