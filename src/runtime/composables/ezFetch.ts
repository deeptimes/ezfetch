import { useFetch, useNuxtApp } from 'nuxt/app'
import type { UseFetchOptions, AsyncData } from 'nuxt/app'
import type { FetchError } from 'ofetch'
import type { Ref } from '#imports'

/**
 * @name ezFetch<T>(url,options)
 * @param <T> 表示返回值或数据类型可以是任意类型。这种泛型的使用允许函数在不同的场景下重用，同时保持类型的安全性。
 * @param url 参数可以是一个字符串或者一个返回字符串的函数。这提供了灵活性，允许你在调用时直接指定 URL，或者提供一个函数来动态生成 URL。
 * @param options 参数的类型较为复杂，使用了 TypeScript 的高级类型：
 * @param `UseFetchOptions<T>` 是一个泛型类型，来自 `nuxt/app`。这个类型包含用于 `useFetch` 函数的各种选项，如 headers、query parameters、method 等。
 * @param `Omit<UseFetchOptions<T>, 'default'>` 使用了 `Omit` 工具类型，它从 `UseFetchOptions<T>` 中排除了 `default` 属性。
 *        这意味着 `options` 对象将包含 `UseFetchOptions<T>` 的所有属性，除了 `default`。
 * @param `&` 是 TypeScript 的交叉类型操作符，用于组合多个类型。
 *        这里将 `Omit<...>` 的结果与 `{ default: ... }` 结合，形成一个新的类型，
 *        既包含除 `default` 外的所有 `UseFetchOptions<T>` 属性，又添加了新的 `default` 属性定义。
 * @function useFetch 传入了 `url` 和 `options`。此外，还通过扩展操作符（`...options`）将传入的 `options` 展开，并添加了一个 `$fetch` 属性。这个 `$fetch` 属性被设置为 `useNuxtApp().$ezFetch`，这意味着使用了由 Nuxt 应用实例提供的自定义 fetch 实现。
 * 这种设计模式允许 `ezFetch` 函数在 Nuxt 应用中作为一个通用的数据获取函数，支持自定义的 fetch 实现，同时通过泛型和精确的类型定义保证了代码的可维护性和扩展性。
 * @see https://nuxt.com/docs/guide/recipes/custom-usefetch
 */

export function ezFetch<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> },
): AsyncData<T, FetchError> {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$ezFetch,
  }) as AsyncData<T, FetchError>
}

// 实在不太清楚该定义返回的类型是什么，只知道应该是AsyncData<>中的某个扩展类型。只好临时用T，AsyncData<T, FetchError>
