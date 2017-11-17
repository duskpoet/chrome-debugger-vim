import { Buffer, Window } from 'neovim';
import { fillBuffer } from './buffer';
import { VBase } from './Base';

export class VPage extends VBase {

  public buffer: Buffer;

  async init() {
    await this.nvim.command('tabnew');
    this.buffer = await this.nvim.buffer;
  }

  async fill(lines: string[]) {
    return fillBuffer(this.buffer, lines);
  }

}
