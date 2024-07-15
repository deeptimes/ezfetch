/**
 * @name comRequest
 * @description 通用请求拦截器
 */

import type { FetchContext } from 'ofetch'

export function comRequest({ options }: FetchContext) {
  options.retry = 3
  options.retryDelay = 300
  options.timeout = 3000
}
