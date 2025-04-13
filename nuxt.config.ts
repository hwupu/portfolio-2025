import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/eslint",
    "nuxt-security",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxthub/core",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt", // default fallback title
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "32x32",
          href: "/favicon.ico",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
    rootAttrs: {
      "data-vaul-drawer-wrapper": "",
      class: "bg-(--ui-bg)",
    },
  },
  scripts: {
    registry: {
      clarity: {
        id: "qom3dgopw9",
      },
    },
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'none'"],
        "connect-src": [
          "'self'",
          "https://*.clarity.ms/collect",
          "ws://*.phwu.dev",
          "ws://localhost:4000",
        ],
        "img-src": [
          "'self'",
          "https://*.clarity.ms/c.gif",
          "https://c.bing.com/c.gif",
        ],
        "script-src": [
          "'nonce-{{nonce}}'",
          "'strict-dynamic'",
          "'self'",
          "https://*.phwu.dev",
          "'wasm-unsafe-eval'",
          "'unsafe-inline'",
        ],
      },
    },
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: "https://phwu.dev",
    strategy: "prefix_and_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        file: "en.json",
      },
      {
        code: "zh",
        name: "中文",
        language: "zh-Hant",
        file: "zh.json",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
