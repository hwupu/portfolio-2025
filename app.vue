<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
});
useSeoMeta({
  ogImage: "/og-image/cubic-center.png",
  ogTitle: "Cubic Center",
  ogDescription: "A portfolio website for Cubic Center",
});
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
