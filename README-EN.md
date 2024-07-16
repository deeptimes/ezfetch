# EzFetch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This module is for personal learning and communication. There are still some deficiencies in the types. I hope some experts can give me some advice.

- [🌍 中文说明](https://github.com/deeptimes/ezfetch/blob/main/README.md)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-starter-vpwwc4?file=README.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup
Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @deeptimes/ezfetch
# for pnpm
pnpx nuxi module add @deeptimes/ezfetch
```

## Manual Installation
```bash
npm i ezfetch
# or
pnpm add ezfetch
```

Modify `nuxt.config.ts` and add `@deeptimes/ezfetch` to the `modules` array.

```js
export default defineNuxtConfig({
  modules: ["@deeptimes/ezfetch"]
})
```

That's it! You can now use My Module in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@deeptimes/ezfetch/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@deeptimes/ezfetch

[npm-downloads-src]: https://img.shields.io/npm/dm/@deeptimes/ezfetch.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@deeptimes/ezfetch

[license-src]: https://img.shields.io/npm/l/@deeptimes/ezfetch.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@deeptimes/ezfetch

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
