import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert';
import { describe, it } from 'node:test';

import * as prettier from 'prettier';

import config from './index.js';

/**
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
async function prettierCheck(filePath) {
  const source = await fs.readFile(filePath);

  const { inferredParser: parser } = await prettier.getFileInfo(filePath, {
    resolveConfig: false,
  });

  return prettier.check(source.toString(), {
    ...config,
    parser: parser ?? undefined,
  });
}

const allLanguages = await fs.readdir('./tests');

for (const language of allLanguages) {
  describe(language, async () => {
    describe('valid', async () => {
      const dirContent = await fs.readdir(`./tests/${language}/valid`, {
        recursive: true,
        withFileTypes: true,
      });
      const validFiles = dirContent.filter((it) => it.isFile());

      for (const { name, parentPath } of validFiles) {
        it(`should pass on ${name}`, async () => {
          const result = await prettierCheck(path.join(parentPath, name));
          assert.equal(result, true, 'file is formatted correctly');
        });
      }
    });

    describe('invalid', async () => {
      const dirContent = await fs.readdir(`./tests/${language}/invalid`, {
        recursive: true,
        withFileTypes: true,
      });
      const validFiles = dirContent.filter((it) => it.isFile());

      for (const { name, parentPath } of validFiles) {
        it(`should NOT pass on ${name}`, async () => {
          const result = await prettierCheck(path.join(parentPath, name));
          assert.equal(result, false, 'file is not formatted correctly');
        });
      }
    });
  });
}
