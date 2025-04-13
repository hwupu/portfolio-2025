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
  <div>
    <a
      v-for="link in list"
      :key="link.id"
      :href="link.id"
      class="bg-foreground text-background fixed top-0 left-4 z-10 block w-fit -translate-y-full p-2 focus:translate-y-4 motion-safe:transition-transform"
      >{{ link.label }}</a
    >
  </div>
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
