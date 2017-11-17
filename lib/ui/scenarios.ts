import { NeovimClient } from 'neovim/lib/api/client';
import { VBase } from './Base';

export abstract class Scenario {
  abstract activate(page: VBase): Promise<any>;
}

export class ListScenario extends Scenario {

  public cb: IListSelectCB;

  constructor(cb: IListSelectCB) {
    super();
    this.cb = cb;
  }

  private async trySelect(page: VBase) {
    const cursor = await page.nvim.window.cursor;
    const pickedLine = cursor[0] - 1;
    this.cb(pickedLine);
  }

  async activate(page: VBase) {
    await page.attachBindings({
      'o': () => this.trySelect(page),
      '<CR>': () => this.trySelect(page)
    });
  }

}

interface IListSelectCB {
  (index: number): void;
}
