<script setup lang="ts">
definePageMeta({
  variant: "fancy",
});
const { t } = useI18n();
useHead({
  title: t("global.title"),
  titleTemplate: "%s",
});
</script>

<template>
  <BaseHeaderShade />
  <LandingCoverSection />
  <div class="h-screen bg-[#677F88]">
    <BaseHeaderShade class="bg-blue-950/50 shadow-blue-700/10" />
  </div>
  <div class="h-screen bg-[#B4A79A]">
    <BaseHeaderShade class="bg-amber-950/50 shadow-amber-700/10">
      <a id="section3" href="#section3">Section 3</a>
    </BaseHeaderShade>
  </div>
</template>
