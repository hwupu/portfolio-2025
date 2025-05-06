<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { t } = useI18n({ useScope: "local" });
const { y } = useWindowScroll({ behavior: "smooth" });
const scrollToTop = () => {
  y.value = 0;
  document.querySelector("a")?.focus();
};
</script>

<template>
  <div class="sticky right-0 bottom-0 z-10 ml-auto flex h-0 w-fit items-end">
    <div class="isolate mr-4 mb-4 grid *:[grid-area:1/1] sm:mr-8 sm:mb-8">
      <BaseMenuPanelMobile />
      <Transition name="fade">
        <button
          v-if="y > 100"
          type="button"
          class="group xs:grid hidden size-14 place-items-center rounded-full bg-[#92684B] text-white"
          :aria-label="t('scroll-to-top')"
          @click="scrollToTop"
        >
          <Icon
            name="fa6-solid:arrow-up"
            class="size-6 motion-safe:group-hover:animate-bounce lg:size-7"
          />
        </button>
      </Transition>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "scroll-to-top": "Scroll to top"
  },
  "zh": {
    "scroll-to-top": "Scroll to top"
  }
}
</i18n>
