<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});

const list = [
  { id: "#wcag-nav", label: t("nav") },
  { id: "#wcag-main", label: t("main") },
  { id: "#wcag-footer", label: t("footer") },
];
</script>

<template>
  <a
    v-for="link in list"
    :key="link.id"
    :href="link.id"
    class="bg-foreground text-background fixed top-4 left-0 z-40 block w-fit translate-x-[-150%] p-2 outline-offset-0 focus-visible:translate-x-4 motion-safe:transition-transform print:hidden"
    >{{ link.label }}</a
  >
</template>

<i18n lang="json">
{
  "en": {
    "nav": "Skip to main navigation",
    "main": "Skip to main content",
    "footer": "Skip to footer"
  },
  "zh": {
    "nav": "跳到主導覽列",
    "main": "跳到主內容",
    "footer": "跳到頁尾"
  }
}
</i18n>
