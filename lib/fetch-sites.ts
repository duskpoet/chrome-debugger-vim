import * as request from 'request-promise';
import { attach, Buffer, Window } from 'neovim';
import { NeovimClient } from 'neovim/lib/api/client';
import { ISite, IPromiseReturn } from './interfaces';
import * as logger  from './logger';
import { VPage } from './ui/Page';
import { ListScenario } from './ui/scenarios';

let nvim: NeovimClient;
let page: VPage;
let resolve: (ISite) => void;
type SiteCB = (ISite) => void;

export async function fetchSites(): Promise<IPromiseReturn> {
  try {
    nvim = await attach({ reader: process.stdin, writer: process.stdout });

    page = new VPage(nvim);
    await page.init();
    await step1();
    await step2();
    await step3();
    nvim.command('setlocal nomodifiable cursorline buftype=nofile');
    return new Promise(function(rs: SiteCB, rj) {
      resolve = rs;
    });
  } catch(ex) {
    if (page.buffer) {
      await page.fill(ex.toString());
      nvim.command('setlocal nomodifiable buftype=nofile');
    } else {
      logger.error(ex);
    }
    return;
  }
}

/*
 * Step 1. Fetching pages available for inspection
 */
let availableSites: ISite[] = [];
async function step1() {
  try {
    const data = await request('http://localhost:9222/json');
    availableSites = JSON.parse(data);
  } catch (ex) {
    let errMsg = 'Looks like Chrome with Remote Debug is not present';
    return Promise.reject(errMsg);
  }
  return Promise.resolve()
}

/*
 * Step 2. Displaying pages for inspection
 */
async function step2() {
  const lines = availableSites.map((item) =>
    item.title + ' | ' + item.url
  );
  return page.fill(lines);
}

/*
 * Step 3. Setup bindings.
 */
function step3() {
  const scenario = new ListScenario(tryPickSite);
  page.addScenario(scenario);
}

function tryPickSite(index) {
  const pickedSite = availableSites[index];
  if (pickedSite) {
    resolve({
      site: pickedSite,
      nvim: nvim
    });
  }
}

