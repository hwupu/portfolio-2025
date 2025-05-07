<script setup lang="ts">
import { useTemplateRef } from "#imports";
import { useElementBounding, useWindowScroll } from "@vueuse/core";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: "static";
}>();

const el = useTemplateRef("el");
const { y } = useWindowScroll();
const { top } = useElementBounding(el);
</script>

<template>
  <div
    ref="el"
    :class="
      cn(
        'pointer-events-none sticky inset-x-0 top-0 z-[29] overflow-y-visible print:hidden',
        {
          'h-[var(--ui-header-height)]': props.variant === 'static',
          'h-0': props.variant !== 'static',
          'xs:block hidden': !$slots.default,
        },
      )
    "
  >
    <div
      :class="
        cn(
          'h-[var(--ui-header-height)] text-lg backdrop-blur motion-safe:transition-opacity',
          props.class,
          {
            'shadow-xl': top <= 0 && y > 100,
            'opacity-100 duration-500': top <= 0,
            'opacity-0 duration-0': top > 0,
          },
        )
      "
      :aria-hidden="$slots.default ? 'true' : 'false'"
    >
      <BaseContainer
        :class="
          cn(
            'xs:pl-18 flex h-full items-center opacity-0 duration-500 motion-safe:transition-opacity sm:pl-22 md:pl-8',
            {
              'pointer-events-auto opacity-100': top <= 0 && y > 100,
            },
          )
        "
        :aria-hidden="top > 0 || y <= 100"
      >
        <slot :active="top <= 0 && y > 100" />
      </BaseContainer>
    </div>
  </div>
</template>
