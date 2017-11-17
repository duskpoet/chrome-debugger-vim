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
const request = require("request-promise");
const neovim_1 = require("neovim");
const logger = require("./logger");
const Page_1 = require("./ui/Page");
const scenarios_1 = require("./ui/scenarios");
let nvim;
let page;
let resolve;
function fetchSites() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            nvim = yield neovim_1.attach({ reader: process.stdin, writer: process.stdout });
            page = new Page_1.VPage(nvim);
            yield page.init();
            yield step1();
            yield step2();
            yield step3();
            nvim.command('setlocal nomodifiable cursorline buftype=nofile');
            return new Promise(function (rs, rj) {
                resolve = rs;
            });
        }
        catch (ex) {
            if (page.buffer) {
                yield page.fill(ex.toString());
                nvim.command('setlocal nomodifiable buftype=nofile');
            }
            else {
                logger.error(ex);
            }
            return;
        }
    });
}
exports.fetchSites = fetchSites;
/*
 * Step 1. Fetching pages available for inspection
 */
let availableSites = [];
function step1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield request('http://localhost:9222/json');
            availableSites = JSON.parse(data);
        }
        catch (ex) {
            let errMsg = 'Looks like Chrome with Remote Debug is not present';
            return Promise.reject(errMsg);
        }
        return Promise.resolve();
    });
}
/*
 * Step 2. Displaying pages for inspection
 */
function step2() {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = availableSites.map((item) => item.title + ' | ' + item.url);
        return page.fill(lines);
    });
}
/*
 * Step 3. Setup bindings.
 */
function step3() {
    const scenario = new scenarios_1.ListScenario(tryPickSite);
    page.addScenario(scenario);
}
function tryPickSite(index) {
    const pickedSite = availableSites[index];
    if (pickedSite) {
        resolve({
            site: pickedSite,
            nvim: nvim
        });
    }
}
