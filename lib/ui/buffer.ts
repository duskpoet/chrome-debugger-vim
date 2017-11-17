import { Buffer } from 'neovim';
import * as logger from '../logger';

export async function fillBuffer (buf: Buffer, lines: string[] | string): Promise<any> {
  const l = await buf.length;
  await buf.remove(0, l, true);
  await buf.insert(lines, 0);
  return buf.remove(lines.length, lines.length + 1, true);
}
