<script setup lang="ts">
const { t, locale } = useI18n({
  useScope: "local",
});
const { data: home } = await useAsyncData(() =>
  queryCollection(locale.value === "zh" ? "blogZh" : "blogEn").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <UContainer>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>{{ t("not-found") }}</div>
  </UContainer>
</template>

<i18n lang="json">
{
  "en": {
    "not-found": "Not found"
  },
  "zh": {
    "not-found": "無資料"
  }
}
</i18n>
