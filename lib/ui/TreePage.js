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
const Base_1 = require("./Base");
const buffer_1 = require("./buffer");
class VTreePage extends Base_1.VBase {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nvim.command('tabnew');
            yield this.nvim.command('topleft 40vs');
            this.treeBuff = yield this.nvim.buffer;
            return Promise.resolve();
        });
    }
    fillTree(list) {
        return __awaiter(this, void 0, void 0, function* () {
            buffer_1.fillBuffer(this.treeBuff, list);
        });
    }
}
exports.VTreePage = VTreePage;
