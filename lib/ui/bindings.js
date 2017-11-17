"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NOTIFICATION_TYPE = '_CR_KEY';
let activeBindings = {};
/*
 * Attach bindings to a NeovimClient instance.
 * Previous bindings are destroyed
 */
function attachBindings(nvim, bindings) {
    let commands = [];
    for (let key in bindings) {
        commands.push(`nnoremap <silent> <buffer> ${key} :call rpcnotify(g:chrome_rpc_id, '${NOTIFICATION_TYPE}', '${escape(key)}')<cr>`);
    }
    activeBindings = bindings;
    return nvim.command(commands.join(' | '));
}
exports.attachBindings = attachBindings;
/*
 * Prepare listener for notifications
 */
function setupBindings(nvim) {
    nvim.removeListener('notification', onNotify);
    nvim.on('notification', onNotify);
    activeBindings = {};
}
exports.setupBindings = setupBindings;
function onNotify(method, args) {
    if (method === NOTIFICATION_TYPE) {
        const cb = activeBindings[args[0]];
        if (cb) {
            cb();
        }
    }
}
function escape(str) {
    return str.replace('<', '<lt>');
}
