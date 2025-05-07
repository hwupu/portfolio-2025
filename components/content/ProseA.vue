<template>
  <ExternalLink :to="props.href">
    <slot />
  </ExternalLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: "",
  },
});
</script>
