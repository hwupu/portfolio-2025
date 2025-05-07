<template>
  <div
    v-if="props.id && !props.noAnchor"
    ref="el"
    class="not-prose pointer-events-none sticky inset-x-0 top-0 z-[29] h-0 overflow-y-visible print:hidden"
  >
    <div
      :class="
        cn(
          'xs:pl-14 xs:mx-0 xs:bg-transparent xs:backdrop-none xs:shadow-none -mx-4 flex h-[var(--ui-header-height)] items-center bg-white/75 px-4 text-lg opacity-0 shadow-xl backdrop-blur duration-500 motion-safe:transition-opacity sm:pl-14 md:pl-0',
          {
            'opacity-0 duration-0': top > 0 || top < 0,
            'pointer-events-auto opacity-100 duration-500': top == 0 && y > 100,
          },
        )
      "
    >
      <SectionAnchor :href="`#${props.id}`"><slot /></SectionAnchor>
    </div>
  </div>
  <h2 :id="props.id" class="scroll-mt-[var(--ui-header-height)]">
    <a v-if="props.id && generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useElementBounding, useWindowScroll } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { computed, useRuntimeConfig, useTemplateRef } from "#imports";

const el = useTemplateRef("el");
const { y } = useWindowScroll();
const { top } = useElementBounding(el);

const props = defineProps<{ id?: string; noAnchor?: boolean }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h2)),
);
</script>
