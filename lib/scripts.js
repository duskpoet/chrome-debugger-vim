"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("./logger");
class Scripts {
    constructor() {
        this.scripts = [];
        this.scriptsByUrl = {};
    }
    rememberScript(script) {
        let url = script.url;
        let existing = this.scriptsByUrl[url];
        this.scriptsByUrl[url] = existing ? existing.concat(script) : [script];
    }
    add(script) {
        this.scripts.push(script);
        this.rememberScript(script);
    }
    dump() {
        logger.log(this.scripts.map((item) => JSON.stringify(item)));
    }
    getScriptsListed() {
        let visited = {};
        let result = [];
        this.scripts.forEach((item) => {
            const url = item.url;
            if (!visited[url]) {
                result.push(url);
            }
        });
        return result;
    }
}
exports.Scripts = Scripts;
class Script {
}
exports.Script = Script;
