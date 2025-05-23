<script setup lang="ts">
import { cn, type ClassValue } from "@/lib/utils";
const props = defineProps<{
  src: string;
  alt: string;
  class?: ClassValue;
  pictureClass?: ClassValue;
}>();
</script>

<template>
  <picture :class="cn('block flex-none', props.pictureClass)">
    <source
      :srcset="`${props.src.replace('.webp', '.avif')}`"
      type="image/avif"
    />
    <source :srcset="props.src" type="image/webp" />
    <img :src="props.src" :alt="props.alt" :class="cn(props.class)" />
  </picture>
</template>
