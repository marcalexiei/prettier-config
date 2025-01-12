import { defineConfig } from 'rolldown';
import UnpluginIsolatedDecl from 'unplugin-isolated-decl/rolldown';

export default defineConfig([
  {
    input: 'index.js',
    output: {
      entryFileNames: '[name].js',
      format: 'esm',
    },
    plugins: [UnpluginIsolatedDecl({ include: 'index.js' })],
  },
  {
    input: 'index.js',
    output: {
      entryFileNames: '[name].cjs',
      format: 'cjs',
    },
  },
]);
