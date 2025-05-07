import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        published_date: z.string(),
        revised_date: z.string(),
        categories: z.array(z.string()),
        language: z.enum(["en", "zh"]),
        og_image: z.string(),
      }),
    }),
  },
});
