// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["/public/static/css/style.css",
        "/public/static/fonts/font.css"],
  app: {
    head: {
      title: "АВИТОЛОГ - Маркетолог на Авито кликни и получи бесплатный гайд по Авито",
      meta: [
        {
          name: "description",
          content: "Мы digital Агенство STRACT, помогаем найти новых клиентов для вашего бизнеса. Команда професионалов настроит вам авито и запустит рекламу вашего бизнеса. Находимся в Чебоксарах"
        },
        {
          name: "og:image",
          content: "https://avitologstract.ru/static/img/ogImage.webp",
        },
        {
          name: "og:title",
          content: "АВИТОЛОГ - Маркетолог на Авито кликни и получи бесплатный гайд по Авито",
        },
        {
          name: "og:description",
          content: "Мы digital Агенство STRACT, помогаем найти новых клиентов для вашего бизнеса. Команда професионалов настроит вам авито и запустит рекламу вашего бизнеса. Находимся в Чебоксарах"
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
          content: "600",
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
      script: [
        {
          innerHTML: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(100118154, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
          `,
          type: 'text/javascript',
        },
        {
          innerHTML: `
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({id: "3624459", type: "pageView", start: (new Date()).getTime()});
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
              if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window, "tmr-code");
          `,
          type: 'text/javascript',
        },
        {
          src: 'https://www.google.com/recaptcha/api.js?render=' + process.env.CAPTCHA_TOKEN
        }
      ],
      noscript: [
        {
          innerHTML: `
            <div>
              <img src="https://mc.yandex.ru/watch/100118154" style="position:absolute; left:-9999px;" alt="" />
            </div>
          `,
        },
        {
          innerHTML: `
            <div>
                <img src="https://top-fwz1.mail.ru/counter?id=3624459;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" />
            </div>
          `
        }
      ],
    },
    buildAssetsDir: '/static/_nuxt'
  },
  modules: ['nuxt-lazyimages',
            '@nuxtjs/sitemap',
            '@nuxtjs/robots'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    port: 3000,
    host: '127.0.0.1',
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      CAPTCHA_TOKEN: process.env.CAPTCHA_TOKEN
    },
  },
  site: {
    url: 'https://avitologstract.ru/',
    name: 'STRACT AGENCY - команда професиональных авитологов'
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://avitologstract.ru/sitemap.xml'
  }
})