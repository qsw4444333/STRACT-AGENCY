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
          content: "авитолог," +
              "услуги авитолога," +
              "авитолог москва," +
              "Авитолог чебоксары," +
              "авитолог бесплатно," +
              "авитолог цена," +
              "авитолог отзывы," +
              "авитолог," +
              "услуги авитолога," +
              "продвижение на авито," +
              "продвижение услуг на авито," +
              "скидка на продвижение авито," +
              "услуги продвижения объявлений на авито," +
              "продвижение объявления на авито," +
              "как увеличить просмотры на авито," +
              "авитолог Москва," +
              "Авитолог Казань," +
              "профессия авитолог," +
              "бесплатный авитолог," +
              "авитолог отзывы," +
              "авитолог цена," +
              "авитолог вакансии," +
              "авитолог на авито," +
              "авитолога сеотика," +
              "авитолог цена услуг," +
              "услуги авитолога Москва," +
              "авито услуги авитолога," +
              "услуги авитологов авитоап," +
              "услуги авитологов сеотика," +
              "авитолог стоимость услуг," +
              "авитолог цена услуг москва"
        },
        {
          name: "og:image",
          content: "https://avitologstract.ru/static/img/ogImage.webp",
        },
        {
          name: "og:title",
          content: "STRACT DIGITAL Агенство - Настроим авито, приведём новых клиентов в ваш бизнес",
        },
        {
          name: "og:description",
          content: "Мы digital Агенство STRACT, помогаем найти новых клиентов для вашего бизнеса. Команда професионалов настроит вам авито и запустит рекламу вашего бизнеса."
        },
        {
          name: "og:site_name",
          content: "Digital агенство STRACT"
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "og:image:width",
          content: "1200",
        },
        {
          name: "og:image:height",
          content: "630",
        },
        {
          name: "og:image:type",
          content: "image/webp",
        },
        {
          name: "og:url",
          content: "https://avitologstract.ru/",
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