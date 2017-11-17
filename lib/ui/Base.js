"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bindings_1 = require("./bindings");
class VBase {
    constructor(nvim) {
        this.nvim = nvim;
        this.scenarios = [];
        bindings_1.setupBindings(this.nvim);
    }
    attachBindings(bindings) {
        return bindings_1.attachBindings(this.nvim, bindings);
    }
    addScenario(scenario) {
        this.scenarios.push(scenario);
        scenario.activate(this);
    }
}
exports.VBase = VBase;
