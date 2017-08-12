"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const LOG_FILE = 'plugin.log';
fs.writeFileSync(LOG_FILE, '');
function log(...args) {
    fs.appendFileSync(LOG_FILE, args.concat('').join("\n"));
}
exports.log = log;
function error(...args) {
    fs.appendFileSync(LOG_FILE, ["ERROR:"].concat(args).concat('').join("\n"));
}
exports.error = error;
