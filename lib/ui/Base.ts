import { NeovimClient } from 'neovim/lib/api/client';
import { setupBindings, attachBindings, IBindings } from './bindings';
import { Scenario } from './scenarios';

export class VBase {
  public readonly nvim: NeovimClient;
  private scenarios: Scenario[];

  constructor(nvim: NeovimClient) {
    this.nvim = nvim;
    this.scenarios = [];
    setupBindings(this.nvim);
  }

  attachBindings(bindings: IBindings) {
    return attachBindings(this.nvim, bindings);
  }

  addScenario(scenario: Scenario) {
    this.scenarios.push(scenario);
    scenario.activate(this);
  }

}

