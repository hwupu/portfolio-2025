import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blogEn: defineCollection({
      type: "page",
      source: "en/blog/**/*.md",
    }),
    blogZh: defineCollection({
      type: "page",
      source: "zh/blog/**/*.md",
    }),
  },
});
