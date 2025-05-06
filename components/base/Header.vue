<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { primary } from "@/lib/navigation";
import type { HTMLAttributes } from "vue";
import type { Locales } from "@/types/locale";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: "fancy";
}>();

const { t, locale } = useI18n({ useScope: "local" });
const switchLocalePath = useSwitchLocalePath();
const { y } = useWindowScroll();
</script>

<template>
  <header
    id="wcag-header"
    :class="
      cn(
        'xs:block pointer-events-none sticky inset-x-0 top-0 z-30 hidden print:hidden',
        {
          'text-white': props.variant === 'fancy',
          'inset-shadow-2xs inset-shadow-white/10': y > 100,
        },
        props.class,
      )
    "
  >
    <BaseContainer
      class="flex h-[var(--ui-header-height)] items-center justify-between gap-4 md:justify-end"
    >
      <BaseMenuPanelTablet />
      <nav id="wcag-nav" class="pointer-events-auto">
        <ul
          :class="
            cn('hidden items-center justify-between gap-8 md:flex', {
              'opacity-0 transition-discrete delay-1000 duration-1000 motion-safe:transition-opacity md:opacity-100 starting:opacity-0':
                props.variant === 'fancy',
            })
          "
        >
          <li v-for="item in primary[locale as Locales]" :key="item.href">
            <NuxtLinkLocale
              :to="item.href"
              :class="
                cn('text-base', {
                  'hover:text-amber-600 focus-visible:text-amber-600 motion-safe:transition-colors':
                    !props.variant,
                  'opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity':
                    props.variant === 'fancy',
                })
              "
              :active-class="
                cn({
                  'underline decoration-2 decoration-amber-600 underline-offset-4':
                    !props.variant,
                  'opacity-100': props.variant === 'fancy',
                })
              "
              >{{ item.title }}</NuxtLinkLocale
            >
          </li>
          <li>
            <NuxtLink
              :to="switchLocalePath(locale === 'en' ? 'zh' : 'en')"
              :class="
                cn('text-base', {
                  'hover:text-amber-600 focus-visible:text-amber-600 motion-safe:transition-colors':
                    !props.variant,
                  'opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity':
                    props.variant === 'fancy',
                })
              "
              >{{ t("lang") }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </BaseContainer>
  </header>
</template>

<i18n lang="json">
{
  "en": {
    "lang": "中文"
  },
  "zh": {
    "lang": "English"
  }
}
</i18n>
