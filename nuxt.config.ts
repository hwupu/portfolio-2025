import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "nuxt-security",
    "@nuxt/scripts",
    "@nuxthub/core",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt", // default fallback title
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
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
        "connect-src": ["'self'", "https://*.clarity.ms/collect"],
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
          "'unsafe-inline'",
        ],
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "zh_tw",
        name: "中文",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});