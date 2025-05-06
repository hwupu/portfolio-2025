<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from "reka-ui";

const props = defineProps<CollapsibleContentProps>();
</script>

<template>
  <CollapsibleContent
    class="data-[state=closed]:animate-[slideUp_0.3s_ease-in] data-[state=open]:animate-[slideDown_0.3s_ease-out]"
    data-slot="collapsible-content"
    v-bind="props"
  >
    <slot />
  </CollapsibleContent>
</template>
