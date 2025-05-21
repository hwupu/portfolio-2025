<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });
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
    <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in articles"
        :key="post.path"
        class="relative isolate space-y-2 p-4"
      >
        <div class="aspect-video rounded-lg bg-gray-200"></div>
        <h2 class="line-clamp-1">{{ post.title }}</h2>
        <p class="line-clamp-2">{{ post.description }}</p>
        <NuxtLink
          :to="post.path"
          class="absolute inset-0"
          :aria-label="`${t('readMore')} ${post.title}`"
        ></NuxtLink>
      </article>
    </div>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Blog",
    "readMore": "Read on blog post:"
  },
  "zh": {
    "title": "部落格",
    "readMore": "閱讀更多"
  }
}
</i18n>
