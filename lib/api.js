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
const neovim_1 = require("neovim");
const child_process_1 = require("child_process");
const _ = require("lodash");
const fs = require("fs");
const nvim_proc = child_process_1.spawn('nvim', ['--embed']);
const nvim = neovim_1.attach({ proc: nvim_proc });
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield nvim.request('vim_get_api_info');
        logger.log(data);
        const funcs = data[1].functions;
        _.sortBy(funcs, 'name');
        const wstream = fs.createWriteStream('api.md');
        wstream.write('| Function name | Parameters | Return |\n');
        wstream.write('| ------------- | ---------- | ------ |\n');
        for (let fdesc of funcs) {
            const params = fdesc.parameters
                .map((param) => `*${param[0]}* ${param[1]}`)
                .join(', ');
            wstream.write(`| ${fdesc.name} | ${params} | ${fdesc.return_type} |\n`);
        }
        wstream.end(null, null, () => process.exit());
    });
})();
