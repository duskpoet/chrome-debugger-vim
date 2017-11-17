import { VBase } from './Base';
import * as logger from '../logger';
import { Buffer } from 'neovim';
import { fillBuffer } from './buffer';

export class VTreePage extends VBase {
  private treeBuff: Buffer;

  async init() {
    await this.nvim.command('tabnew');
    await this.nvim.command('topleft 40vs');
    this.treeBuff = await this.nvim.buffer;
    return Promise.resolve();
  }

  async fillTree(list: string[]) {
    fillBuffer(this.treeBuff, list);
  }
}
