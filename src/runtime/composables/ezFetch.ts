import { useFetch, useNuxtApp } from 'nuxt/app'
import type { UseFetchOptions } from 'nuxt/app'

export function ezFetch<T>(url: string | (() => string), options?: UseFetchOptions<T>) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$ezFetch,
  })
}
