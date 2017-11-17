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
const buffer_1 = require("./buffer");
const Base_1 = require("./Base");
class VPage extends Base_1.VBase {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nvim.command('tabnew');
            this.buffer = yield this.nvim.buffer;
        });
    }
    fill(lines) {
        return __awaiter(this, void 0, void 0, function* () {
            return buffer_1.fillBuffer(this.buffer, lines);
        });
    }
}
exports.VPage = VPage;
