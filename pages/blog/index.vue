<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
useHead({
  title: t("title"),
});

const route = useRoute();
const { data: articles } = await useAsyncData(route.path, () => {
  return queryCollection("blog")
    .order("revised_date", "DESC")
    .select(
      "title",
      "path",
      "description",
      "revised_date",
      "language",
      "categories",
      "published_date",
      "og_image",
    )
    .limit(3)
    .all();
});
</script>

<template>
  <BaseHeaderShade
    v-slot="{ active }"
    variant="static"
    class="bg-white/75 dark:bg-neutral-800/75"
  >
    <SectionAnchor href="#blog" :title="t('title')" :active />
  </BaseHeaderShade>
  <BaseContainer padding-y="default" class="space-y-20">
    <h1 id="blog" class="scroll-mt-[var(--ui-header-height)] text-3xl">
      {{ t("title") }}
    </h1>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in articles"
        :key="post.path"
        class="group relative isolate space-y-2"
      >
        <PublicPicture
          class="aspect-video rounded-lg bg-gray-200 object-cover"
          :src="post.og_image"
          alt=""
        />
        <h2 class="line-clamp-1 flex-auto">{{ post.title }}</h2>
        <p class="line-clamp-2 text-base">{{ post.description }}</p>
        <ul
          :aria-label="t('attr')"
          class="absolute top-2 right-2 flex gap-2 text-xs"
        >
          <li>
            <span class="sr-only">{{ t("category") }}</span>
            <ul class="flex gap-2">
              <li v-for="cat in post.categories" :key="cat">
                <span class="bg-background rounded px-1 py-0.5">{{
                  t(cat)
                }}</span>
              </li>
            </ul>
          </li>
          <li>
            <span class="sr-only">{{ t("lang") }}</span>
            <span class="bg-background rounded px-1 py-0.5">{{
              t(post.language)
            }}</span>
          </li>
        </ul>
        <NuxtLinkLocale
          :to="post.path"
          class="absolute inset-0"
          :aria-label="`${t('readMore')} ${post.title}`"
        ></NuxtLinkLocale>
      </article>
    </div>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Blog",
    "readMore": "Read on blog post:",
    "attr": "blog post details",
    "lang": "blog post language",
    "en": "ENG",
    "zh": "CHT",
    "category": "blog post category",
    "emt": "EMT",
    "web": "WEB"
  },
  "zh": {
    "title": "部落格",
    "readMore": "閱讀文章：",
    "attr": "文章屬性",
    "lang": "文章語言",
    "en": "英文",
    "zh": "中文",
    "category": "文章類別",
    "emt": "EMT",
    "web": "WEB"
  }
}
</i18n>
