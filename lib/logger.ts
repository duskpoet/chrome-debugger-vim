import * as fs from 'fs';

const LOG_FILE = 'plugin.log';

fs.writeFileSync(LOG_FILE, '');

function log(...args) {
  fs.appendFileSync(LOG_FILE, args.concat('').join("\n"));
}

function error(...args) {
  fs.appendFileSync(LOG_FILE, ["ERROR:"].concat(args).concat('').join("\n"));
}

export { log, error }
