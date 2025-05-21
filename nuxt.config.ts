import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "nuxt-security",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxt/scripts",
    "@nuxthub/core",
    "shadcn-nuxt",
  ],
  app: {
    head: {
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
      // @ts-expect-error https://www.shadcn-vue.com/docs/components/drawer.html#scale-background
      "vaul-drawer-wrapper": "",
      class: "bg-white",
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "asset",
        dir: "./assets/icons",
      },
    ],
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "portfolio-2025",
        owner: "hwupu",
        url: "https://github.com/hwupu/portfolio-2025",
      },
    },
  },
  image: {
    format: ["avif", "webp"],
    dir: "assets/images",
    cloudflare: {
      baseURL: "https://phwu.dev",
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
          "data:",
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
    detectBrowserLanguage: {
      cookieSecure: true,
    },
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
});
