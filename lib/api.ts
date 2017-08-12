import * as logger from './logger';
import { attach }  from 'neovim';
import { spawn }   from 'child_process';
import * as _      from 'lodash';
import * as fs     from 'fs';

const nvim_proc = spawn('nvim', ['--embed']);

const nvim = attach({ proc: nvim_proc });
(async function() {
  const data = await nvim.request('vim_get_api_info');
  logger.log(data);
  const funcs = data[1].functions;
  _.sortBy(funcs, 'name');
  const wstream = fs.createWriteStream('api.md');
  wstream.write('| Function name | Parameters | Return |\n');
  wstream.write('| ------------- | ---------- | ------ |\n');
  for (let fdesc of funcs) {
    const params = fdesc.parameters
      .map((param) => `*${param[0]}* ${param[1]}`)
      .join(', ');

    wstream.write(
      `| ${fdesc.name} | ${params} | ${fdesc.return_type} |\n`
    );
  }
  wstream.end(null, null, () =>
    process.exit()
  );
})();

