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
class Scenario {
}
exports.Scenario = Scenario;
class ListScenario extends Scenario {
    constructor(cb) {
        super();
        this.cb = cb;
    }
    trySelect(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursor = yield page.nvim.window.cursor;
            const pickedLine = cursor[0] - 1;
            this.cb(pickedLine);
        });
    }
    activate(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.attachBindings({
                'o': () => this.trySelect(page),
                '<CR>': () => this.trySelect(page)
            });
        });
    }
}
exports.ListScenario = ListScenario;
