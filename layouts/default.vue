<script setup lang="ts">
const route = useRoute();
const head = useLocaleHead();
const { t } = useI18n({ useScope: "local" });
useSeoMeta({
  ogImage: "/og-image/cubic-center.jpg",
  ogTitle: t("title"),
  ogDescription: t("description"),
  twitterCard: "summary",
  twitterImage: "https://phwu.dev/og-image/cubic-center.jpg",
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
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
      <BaseJumpLinks />
      <BaseHeader :variant="(route.meta?.variant as 'fancy') ?? undefined" />
      <main
        id="wcag-main"
        class="min-h-[calc(100svh-var(--ui-header-height)-var(--ui-footer-height)+4rem)]"
      >
        <slot />
      </main>
      <BaseCallToActions />
      <BaseFooter />
      <BaseCookiePanel />
      <svg class="sr-only">
        <filter id="pixelate" x="0" y="0">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feColorMatrix
            type="matrix"
            in="blur"
            values="0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 1 0"
            result="alphaMask"
          />
          <feFlood x="4" y="4" height="2" width="2" />
          <feComposite width="10" height="10" />
          <feTile result="a" />
          <feComposite in="alphaMask" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="5" />
        </filter>
      </svg>
    </Body>
  </Html>
</template>

<i18n lang="json">
{
  "en": {
    "title": "From where I came",
    "description": "🚀 The world needs no more, but yet comes another wrapper for programming, designs, and games. oAO"
  },
  "zh": {
    "title": "我的小小故事",
    "description": "🚀 在奇幻的魔法世界裡，又來了一個極為常見的「程式、設計、遊戲」泡泡紙，應該不會有人直接丟掉吧 oAO"
  }
}
</i18n>
