<script setup lang="ts">
const { t } = useI18n();
useHead({
  titleTemplate: "%s - " + t("global.title"),
});
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
