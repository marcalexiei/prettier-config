// @ts-check
import { describe, it } from 'node:test';
import { spawn } from 'node:child_process';
import assert from 'node:assert';

/**
 * @typedef {object} RunPrettierResult
 * @property {Array<string>} stdout
 * @property {Array<string>} stderr
 * @property {number | null} exitCode
 */

/**
 * @param {string} command
 * @param {Array<string>} args
 *
 * @returns {Promise<RunPrettierResult>}
 */
function runPrettier(command, args) {
  const task = spawn(command, args);

  return new Promise((resolve) => {
    /** @type {RunPrettierResult['stdout']} */
    const stdout = [];
    /** @type {RunPrettierResult['stderr']} */
    const stderr = [];
    /** @type {RunPrettierResult['exitCode']} */
    let exitCode = null;

    task.stdout.on('data', (data) => {
      stdout.push(`${data}`);
    });

    task.stderr.on('data', (data) => {
      stderr.push(`${data}`);
    });

    task.on('exit', (code) => {
      exitCode = code;
      // console.info({ stdout, stderr, exitCode });
      resolve({ stdout, stderr, exitCode });
    });
  });
}

const CLI_PRETTIER_ARGS = [
  '--config=./index.json',
  // used to avoid inherit ignore from repository .prettierignore, which ignores test files
  '--ignore-path',
  '--check',
];

describe('config', () => {
  it('should not trow error on formatted code', async () => {
    const { exitCode, stdout, stderr } = await runPrettier('pnpm', [
      'prettier',
      ...CLI_PRETTIER_ARGS,
      'tests/valid',
    ]);

    assert.strictEqual(exitCode, 0);
    assert.strictEqual(
      stdout.some((it) =>
        it.includes('All matched files use Prettier code style!'),
      ),
      true,
    );
    assert.strictEqual(stderr.length, 0);
  });

  it('throw error on malformed code', async () => {
    const { exitCode, stderr } = await runPrettier('pnpm', [
      'prettier',
      ...CLI_PRETTIER_ARGS,
      'tests/invalid',
    ]);

    assert.strictEqual(exitCode, 1);

    assert.strictEqual(
      stderr.some((it) => it.includes('tests/invalid/typescript/class.ts')),
      true,
    );
  });
});
