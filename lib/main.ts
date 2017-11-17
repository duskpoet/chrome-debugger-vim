import * as logger  from './logger';

import { fetchSites } from './fetch-sites';
import { inspectSite } from './inspect-site';

(async function() {
  const pickedSite = await fetchSites();
  inspectSite(pickedSite);
})();
