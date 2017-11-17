import * as logger from './logger';

export class Scripts {
  scripts: IScriptData [];

  scriptsByUrl: { [key: string]: IScriptData[] };

  constructor() {
    this.scripts = [];
    this.scriptsByUrl = {};
  }

  private rememberScript(script: IScriptData) {
    let url = script.url;
    let existing = this.scriptsByUrl[url];
    this.scriptsByUrl[url] = existing ? existing.concat(script) : [script];
  }

  add(script: IScriptData) {
    this.scripts.push(script);
    this.rememberScript(script);
  }

  dump() {
    logger.log(
      this.scripts.map((item) => JSON.stringify(item))
    );
  }

  getScriptsListed() {
    let visited = {};
    let result = [];
    this.scripts.forEach((item) => {
      const url = item.url;
      if (!visited[url]) {
        result.push(url);
      }
    });
    return result;
  }
}

export class Script {
}

interface IScriptData {
  scriptId: string;
  url: string;
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
}
