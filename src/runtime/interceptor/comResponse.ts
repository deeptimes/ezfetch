/**
 * @name comResponse
 * @description 通用响应拦截器
 */

import type { FetchContext } from 'ofetch'

export function comResponse({ response }: FetchContext) {
  // 是否需要成功响应拦截器
  const data = response?._data

  // 使用 switch 语句根据 code 字段的值执行不同的操作
  switch (data.code) {
    case 0:
      if (data.message)
        console.info(data.message)
      break
    case 11001:
      // console.info(data.message)
      console.error(data.message)
      break
    case 11010:
      // console.info(data.message)
      console.error(data.message)
      break
      // ...
    default:
      // 默认逻辑（可选）
      break
  }

  // ...
}
