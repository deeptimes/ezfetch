import type { FetchContext } from 'ofetch'
import { defineNuxtPlugin, useCookie, useRuntimeConfig } from 'nuxt/app'
import type { ModuleOptions } from '../module'
import { comRequest, comResponse, comResponseError } from './request'

declare module 'nuxt/app' {
  interface NuxtApp {
    $ezFetch: typeof $fetch
  }
}

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

  // 模块配置选项
  const opts = config.public.ezFetch as ModuleOptions

  // 读取 Token，如果已存在的话。
  // 其中access的token名称可在模块配置中定义，默认：token_access
  const token = useCookie(opts.cookie.access)

  const ezFetch = $fetch.create({
    baseURL: opts.baseUrl,
    // 请求拦截器
    onRequest(ctx: FetchContext) {
      // 创建 `Headers` 对象，并尝试用现有的 `ctx.options.headers` 初始化
      const headers = new Headers(ctx.options.headers)
      if (token.value) {
        headers.append('Authorization', `Bearer ${token.value}`)
      }
      ctx.options.headers = headers

      comRequest(ctx) // 通用请求拦截逻辑
    },

    // 响应拦截器
    async onResponse(ctx: FetchContext) {
      comResponse(ctx) // 通用响应逻辑
    },

    // 错误拦截
    onResponseError(ctx: FetchContext) {
      comResponseError(ctx) // 通用错误逻辑
    },
  })

  return {
    provide: {
      ezFetch,
    },
  }
})
