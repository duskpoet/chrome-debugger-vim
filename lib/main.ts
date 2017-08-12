import * as logger  from './logger';
import * as request from 'request-promise';
import { attach, Buffer, Window } from 'neovim';
import { fillBuffer } from './buffer';

let buffer: Buffer;
let window: Window;
(async function() {
  try {
    let nvim = await attach({ reader: process.stdin, writer: process.stdout });
    await nvim.command('tabnew');
    buffer = await nvim.buffer;
    window = await nvim.window;
    await step1();
    await step2();
    logger.log('step2');
    nvim.command('setlocal nomodifiable buftype=nofile');
  } catch(ex) {
    logger.error(ex);
    return;
  }
})();

/*
 * Step 1. Fetching pages available for inspection
 */
let availableSites: ISite[] = [];
async function step1() {
  const data = await request('http://localhost:9222/json');
  availableSites = JSON.parse(data);
  return Promise.resolve()
}

/*
 * Step 2. Displaying pages for inspection
 */
function step2() {
  const lines = availableSites.map((item) =>
    item.title + ' | ' + item.url
  );
  return fillBuffer(buffer, lines);
}

interface ISite {
  type: string;
  id: string;
  title: string;
  url: string;
  webSocketDebuggerUrl: string;
}
