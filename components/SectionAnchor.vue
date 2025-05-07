<script setup lang="ts">
const props = defineProps<{
  id?: string;
  href: string;
  title?: string;
  active?: boolean;
}>();
</script>

<template>
  <a
    :id="props.id"
    :href="props.href"
    :tabindex="props.active ? 0 : -1"
    class="group inline-flex items-center gap-2 hover:text-amber-600 focus-visible:text-amber-600 motion-safe:transition-colors"
    ><span
      class="text-2xl opacity-25 group-hover:opacity-75 group-focus-visible:opacity-75 motion-safe:transition-opacity"
      >#</span
    ><slot>{{ props.title }}</slot></a
  >
</template>
