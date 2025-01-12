import fs from 'node:fs/promises';

import { defineConfig } from 'rolldown';

export default defineConfig([
  {
    input: 'index.js',
    output: [
      {
        entryFileNames: '[name].js',
        format: 'esm',
      },
      {
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      {
        name: 'clean-dist',
        async buildStart() {
          await fs.rm('./dist', { recursive: true, force: true });
        },
      },
    ],
  },
]);
