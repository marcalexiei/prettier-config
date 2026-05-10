import fs from 'node:fs/promises';

import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig([
  {
    input: 'index.js',
    external: ['prettier'],
    output: [
      {
        entryFileNames: '[name].js',
        format: 'esm',
      },
    ],
    plugins: [
      {
        name: 'clean-dist',
        async buildStart() {
          await fs.rm('./dist', { recursive: true, force: true });
        },
      },
      dts(),
    ],
  },
  {
    input: 'index.js',
    output: {
      entryFileNames: '[name].cjs',
      format: 'cjs',
    },
  },
]);
