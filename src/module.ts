import { addImports, addPlugin, createResolver, defineNuxtModule, logger } from '@nuxt/kit'
import { defu } from 'defu'
import pkg from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiBase: string
  apiSecret?: string
  // comRequest: string 暂时没想好
  cookie: {
    access: string
  }
}

const meta = {
  name: pkg.name,
  version: pkg.version,
  compatibility: pkg.capabilities,
  configKey: 'ezFetch',
}

export default defineNuxtModule<ModuleOptions>({
  meta: meta,
  // Default configuration options of the Nuxt module
  defaults: _nuxt => ({
    apiBase: _nuxt.options.runtimeConfig.public.apiBase as string,
    apiSecret: _nuxt.options.runtimeConfig.apiSecret as string,
    // comRequest: '',暂时没想好
    cookie: {
      access: 'token_access',
    },
  }),

  setup(_options, _nuxt) {
    logger.info(`🧩 Load module: ${meta.name} v${meta.version}`)

    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')

    // _nuxt.options.runtimeConfig.public.ezFetch = _options

    /* Composables */
    addImports({
      name: 'ezFetch',
      as: 'ezFetch',
      from: resolver.resolve(runtimeDir, 'composables', 'ezFetch'),
    })

    /* Plugins */
    addPlugin(resolver.resolve(runtimeDir, 'plugin'))

    /*  */
    // provides module options to runtime
    const nuxtPublic = _nuxt.options.runtimeConfig.public
    nuxtPublic.ezFetch = defu(nuxtPublic.ezFetch as ModuleOptions, _options)
  },
})
