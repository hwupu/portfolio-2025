<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

useHead({
  title: t("title"),
});
</script>

<template>
  <BaseHeaderShade variant="static" class="bg-white/75" />
  <h1>{{ t("title") }}</h1>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Blog"
  },
  "zh": {
    "title": "部落格"
  }
}
</i18n>
