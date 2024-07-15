export default defineNuxtConfig({
  modules: ['../src/module'],
  ezFetch: {
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
