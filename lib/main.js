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
const logger = require("./logger");
const request = require("request-promise");
const neovim_1 = require("neovim");
const buffer_1 = require("./buffer");
let buffer;
let window;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let nvim = yield neovim_1.attach({ reader: process.stdin, writer: process.stdout });
            yield nvim.command('tabnew');
            buffer = yield nvim.buffer;
            window = yield nvim.window;
            yield step1();
            yield step2();
            logger.log('step2');
            nvim.command('setlocal nomodifiable buftype=nofile');
        }
        catch (ex) {
            logger.error(ex);
            return;
        }
    });
})();
/*
 * Step 1. Fetching pages available for inspection
 */
let availableSites = [];
function step1() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield request('http://localhost:9222/json');
        availableSites = JSON.parse(data);
        return Promise.resolve();
    });
}
/*
 * Step 2. Displaying pages for inspection
 */
function step2() {
    const lines = availableSites.map((item) => item.title + ' | ' + item.url);
    return buffer_1.fillBuffer(buffer, lines);
}
