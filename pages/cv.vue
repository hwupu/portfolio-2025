<script setup lang="ts">
const { locale } = useI18n();
</script>
<template>
  <ZhCv v-if="locale === 'zh'" />
  <EnCv v-else />
</template>
