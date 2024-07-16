export default defineNuxtConfig({
  ssr: false,
  modules: ['../src/module'],
  ezFetch: {
    apiBase: 'https://cms.ezdoc.cn',
    // apiSecret: 'BQqecWB_0rl4Zu4dYJGnD0qGQ7gWJWYM',
    cookie: {
      access: 'tk_access',
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-07-15',
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
})
