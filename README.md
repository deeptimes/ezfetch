# EzFetch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

本模块为个人学习交流，其中在类型方面还有些不足，希望有大神来指点。

- [🌍 English-Readme](https://github.com/deeptimes/ezfetch/blob/main/README-EN.md)
- [🏀 在线试炼](https://stackblitz.com/edit/nuxt-starter-vpwwc4?file=README.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## 功能
- 可自定义拦截器（请求拦截，响应拦截，错误拦截）
- 封装了 `Authorization`，在请求时可携带`token`
- 统一配置 `BaseUrl`

## 快速安装
使用一个命令将模块安装到你的 Nuxt 应用程序：

```bash
npx nuxi module add @deeptimes/ezfetch
# for pnpm
pnpx nuxi module add @deeptimes/ezfetch
```
就这样！你现在可以在 Nuxt 应用中使用`EzFetch`模块了 ✨

## 手动安装
```bash
npm i @deeptimes/ezfetch
# or
pnpm add @deeptimes/ezfetch
```
修改`nuxt.config.ts`,并在`modules`数组中添加`@deeptimes/ezfetch`。

```js
export default defineNuxtConfig({
  modules: ["@deeptimes/ezfetch"]
})
```
## 配置
```js
ezFetch: {
  apiBase: 'https://your.domain.com',
  apiSecret: 'your_token',
  cookie: {
    access: 'token_access',
  },
},
```


## 贡献

<details>
  <summary>本地开发</summary>

  ```bash
  # 安装依赖项
  npm install
  
  # 生成类型存根
  npm run dev:prepare
  
  # 使用 Playground 进行开发
  npm run dev
  
  # 构建 Playground
  npm run dev:build
  
  # 运行 ESLint
  npm run lint
  
  # 运行 Vitest
  npm run test
  npm run test:watch
  
  # 发布新版本
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
