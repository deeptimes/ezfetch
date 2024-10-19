interface LoginForm {
  email: string
  password: string
}

/**
 * @name useKsAuths
 * @description 用于管理用户验证
 * @function login 登陆
 * @function refresh 刷新令牌
 * @function logout 登出
 * @function clear 清除
 */

export function useKsAuths() {
  const { $ezFetch } = useNuxtApp()
  const router = useRouter()
  // const { fetchMe, fetchMerchant } = useKsUser()

  /* 登陆 */
  async function login(form: LoginForm) {
    const result = ref()
    result.value = await $fetch(`/api/auth.login`, {
      default() {},
      method: 'POST',
      credentials: 'include',
      body: { ...form },
      onResponse({ response }) {
        switch (response.status) {
          case 200:
            console.log('登陆成功：即将进入首页！')
            break
          case 401: {
            const extCode = response._data?.data?.errors[0]?.extensions?.code
            switch (extCode) {
              case 'INVALID_CREDENTIALS':
                console.log('登陆失败：账号或密码错误！')
                break
              case 'USER_SUSPENDED':
                console.log('重试次数过多，账户已停用！请联系管理员！')
                break
              default:
                console.log('登录失败：未知错误')
                break
            }
            break
          }
          default:
            console.log('登录异常')
            break
        }
      },
    })

    // 登陆成功后：获取当前用户
    if (result.value) {
      console.log(result.value)
      // 获取当前用户
      const member = ref()
      const { data: user } = await $ezFetch('/users/me', {

      })
      member.value = user.value.data

      // cache.setMe(me)
      return 'success'
    }
  }

  /* 刷新Token */
  async function refresh() {
    await useFetch(`/api/auth.refresh`, {
      method: 'POST',
      credentials: 'include',
    })
  }

  /* 清除痕迹 */
  function clear() {
    // 清理缓存
    // cache.resetStore()
  }

  /* 登出 */
  async function logout() {
    const tokenRefresh = useCookie('ks_token_refresh')
    const { status } = await useFetch(`/api/auth.logout`, {
      method: 'POST',
      body: {
        refresh_token: tokenRefresh.value,
      },
    })
    if (status.value === 'success') {
      console.log('成功登出！')
      clear()
      router.push('/auth/login')
    }
  }

  return { login, refresh, logout, clear }
}
