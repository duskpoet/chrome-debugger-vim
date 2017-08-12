import { Buffer } from 'neovim';

export async function fillBuffer (buf: Buffer, lines: string[] | string): Promise<any> {
  const l = await buf.length;
  await buf.remove(0, l, true);
  return buf.insert(lines, 0);
}
