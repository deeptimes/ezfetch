import type { FetchContext } from 'ofetch'

export function comResponseError({ response }: FetchContext) {
  // 获取HTTP状态码
  const status = response?.status
  // console.log(status)
  switch (status) {
    case 400:
      console.error('Bad Request: 请求语法错误')
      break
    case 401:
      console.error('Unauthorized: 没有权限访问')
      break
    case 403:
      console.error('Forbidden: 没有权限访问')
      break
    case 404:
      console.error('Not Found: 请求的资源不存在')
      break
    case 405:
      console.error('Method Not Allowed: 请求方式不被允许')
      break
    case 406:
      console.error('Not Acceptable: 请求的内容无法提供')
      break
    case 408:
      console.error('Request Timeout: 请求超时，请稍后重试')
      break
    case 409:
      console.error('Conflict: 请求冲突')
      break
    case 413:
      console.error('Payload Too Large: 请求体过大')
      break
    case 414:
      console.error('URI Too Long: 请求的URL过长')
      break
    case 415:
      console.error('Unsupported Media Type: 不支持的媒体类型')
      break
    case 422:
      console.error('Unprocessable Entity: 请求结构正确，但语义错误')
      break
    case 429:
      console.error('Too Many Requests: 请求过多，请稍后再试')
      break
    default:
      console.error('An unexpected error occurred: 发生未知错误')
      break
  }
  // ...
}
