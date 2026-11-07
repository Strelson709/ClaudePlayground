// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  ssr: false,
  devtools: { enabled: true },
  app: {
    // Für GitHub Pages wird NUXT_APP_BASE_URL=/ClaudePlayground/ im Workflow gesetzt
    head: {
      title: 'Todo-Liste',
      htmlAttrs: { lang: 'de' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  css: ['~/assets/main.css']
})
