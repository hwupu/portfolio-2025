<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

const code = computed(() => (locale.value === "zh" ? "zh_tw" : locale.value));
const lang = computed(() => locales[code.value].code);
const dir = computed(() => locales[code.value].dir);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
});
</script>

<template>
  <UApp :locale="locales[code]">
    <NuxtRouteAnnouncer />
    <div class="bg-(--ui-bg)" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
