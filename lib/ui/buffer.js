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
function fillBuffer(buf, lines) {
    return __awaiter(this, void 0, void 0, function* () {
        const l = yield buf.length;
        yield buf.remove(0, l, true);
        yield buf.insert(lines, 0);
        return buf.remove(lines.length, lines.length + 1, true);
    });
}
exports.fillBuffer = fillBuffer;
