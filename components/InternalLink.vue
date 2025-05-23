<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { NuxtLinkProps } from "nuxt/app";

const props = defineProps<NuxtLinkProps>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>
<template>
  <NuxtLinkLocale
    v-bind="delegatedProps"
    :class="
      cn(
        'group inline-flex w-fit items-center gap-2 *:decoration-amber-600 *:decoration-2 *:underline-offset-2 hover:text-amber-600 focus-visible:text-amber-600 motion-safe:transition-colors print:flex-wrap [&>*:not(span.iconify)]:underline print:[&>*:not(span.iconify)]:no-underline',
        props.class,
      )
    "
    ><slot
  /></NuxtLinkLocale>
</template>
