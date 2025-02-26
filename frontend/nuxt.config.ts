// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["/public/static/css/style.css",
        "/public/static/fonts/font.css"],
  app: {
    head: {
      title: "STRACT DIGITAL Агенство - Настроим авито, приведём новых клиентов в ваш бизнес",
      meta: [
        {
          name: "description",
          content: "Мы digital Агенство STRACT, помогаем найти новых клиентов для вашего бизнеса. Команда професионалов настроит вам авито и запустит рекламу вашего бизнеса."
        },
        {
          name: "keywords",

        }
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      link: [{ rel: "icon", href: "static/img/favicon.svg", type: "image/svg+xml" }],
    },
    buildAssetsDir: '/static/_nuxt'
  },
  modules: ['nuxt-lazyimages'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    port: 3000,
    host: '192.168.43.190',
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
})