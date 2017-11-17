import { NeovimClient } from 'neovim/lib/api/client';

export interface ISite {
  type: string;
  id: string;
  title: string;
  url: string;
  webSocketDebuggerUrl: string;
}

export interface IPromiseReturn {
  site: ISite;
  nvim: NeovimClient;
}
