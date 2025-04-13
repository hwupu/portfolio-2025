<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <footer id="wcag-footer" class="bg-neutral-200 dark:bg-neutral-900">
    <UContainer>
      <div class="border-(--ui-border) py-4 lg:py-8 dark:border-t">
        <p class="text-sm">{{ t("copyright") }}</p>
      </div>
    </UContainer>
  </footer>
</template>

<i18n lang="json">
{
  "en": {
    "copyright": "Copyright © 2025"
  },
  "zh": {
    "copyright": "© 2025 版權所有"
  }
}
</i18n>
