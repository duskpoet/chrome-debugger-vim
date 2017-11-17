import { NeovimClient } from 'neovim/lib/api/client';
import * as logger from '../logger';

const NOTIFICATION_TYPE = '_CR_KEY';

let activeBindings: IBindings = {};

/*
 * Attach bindings to a NeovimClient instance.
 * Previous bindings are destroyed
 */
export function attachBindings(nvim: NeovimClient, bindings: IBindings) {
  let commands: string[] = [];
  for (let key in bindings) {
    commands.push(
      `nnoremap <silent> <buffer> ${key} :call rpcnotify(g:chrome_rpc_id, '${NOTIFICATION_TYPE}', '${escape(key)}')<cr>`
    );
  }
  activeBindings = bindings;
  return nvim.command(commands.join(' | '));
}

/*
 * Prepare listener for notifications
 */
export function setupBindings(nvim: NeovimClient) {
  nvim.removeListener('notification', onNotify);
  nvim.on('notification', onNotify);
  activeBindings = {};
}

function onNotify(method: string, args: any[]) {
  if (method === NOTIFICATION_TYPE) {
    const cb = activeBindings[args[0]];
    if (cb) {
      cb();
    }
  }

}

function escape(str: string) {
  return str.replace('<', '<lt>');
}

export interface IBindings {
  [key: string]: Function;
}
