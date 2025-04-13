<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead();
const title = computed(() => route.meta.title ?? t("layouts.header.title"));
useSeoMeta({
  ogImage: "/og-image/cubic-center.png",
  ogTitle: t("layouts.header.title"),
  ogDescription: t("layouts.header.description"),
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.hid">
        <Link
          :id="link.hid"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta
          :id="meta.hid"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body>
      <BaseCookiePanel />
      <BaseJumpLinks />
      <BaseHeaderDesktop />
      <BaseCallToAction />
      <main
        id="wcag-main"
        class="min-h-[calc(100vh-var(--ui-header-height))] pt-10"
      >
        <slot />
      </main>
    </Body>
  </Html>
</template>
