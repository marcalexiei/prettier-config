# `@marcalexiei/prettier-config`

[![CI][CIBadge]][CIURL]
[![Code style: prettier][CodeStyleBadge]][CodeStyleURL]
[![npm version][npmVersionBadge]][npmVersionURL]
[![issues][issuesBadge]][issuesURL]

[CIBadge]: https://img.shields.io/github/actions/workflow/status/marcalexiei/prettier-config/CI.yml?style=for-the-badge&logo=github&event=push&label=CI
[CIURL]: https://github.com/marcalexiei/prettier-config/actions/workflows/CI.yml/badge.svg
[CodeStyleBadge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier
[CodeStyleURL]: https://prettier.io
[npmVersionBadge]: https://img.shields.io/npm/v/@marcalexiei/prettier-config.svg?style=for-the-badge&logo=npm
[npmVersionURL]: https://www.npmjs.com/package/@marcalexiei/prettier-config
[issuesBadge]: https://img.shields.io/github/issues/marcalexiei/prettier-config.svg?style=for-the-badge
[issuesURL]: https://github.com/marcalexiei/prettier-config/issues

A custom prettier config

> [!NOTE]
> Most of all properties have default value but I prefer to have them explicit

## Usage

**Install**:

```shell
pnpm add -D prettier @marcalexiei/prettier-config
```

```shell
yarn add -D prettier @marcalexiei/prettier-config
```

```shell
npm install ---save-dev prettier @marcalexiei/prettier-config
```

**Configuration:**

Add the following line to your `package.json`

```text
"prettier": "@marcalexiei/prettier-config"
```

```jsonc
{
  // ...
  "prettier": "@marcalexiei/prettier-config",
  // ...
}
```
