<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HtmlHTMLAttributes["class"];
      paddingY?: "default";
    }
  >(),
  {
    as: "div",
    class: undefined,
    paddingY: undefined,
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Primitive
    :class="
      cn(
        'mx-auto max-w-7xl px-4 sm:px-8',
        {
          'py-4 pb-20 sm:py-8 sm:pb-40': props.paddingY === 'default',
        },
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
