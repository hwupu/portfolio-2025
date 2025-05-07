<script setup lang="ts">
import { primary, secondary } from "@/lib/navigation";
import type { Locales } from "@/types/locale";
const { locale } = useI18n();
</script>

<template>
  <footer
    id="wcag-footer"
    class="flex min-h-[var(--ui-footer-height)] flex-col justify-between gap-8 bg-[oklch(0.25_0.05_245)] py-4 text-white sm:py-8 print:hidden"
  >
    <BaseContainer class="w-full">
      <ul class="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
        <li v-for="item in primary[locale as Locales]" :key="item.href">
          <NuxtLinkLocale
            :to="item.href"
            class="text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            active-class="opacity-100"
            >{{ item.title }}</NuxtLinkLocale
          >
        </li>
        <li v-for="item in secondary[locale as Locales]" :key="item.href">
          <NuxtLinkLocale
            :to="item.href"
            class="text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            active-class="opacity-100"
            >{{ item.title }}</NuxtLinkLocale
          >
        </li>
      </ul>
    </BaseContainer>
    <BaseContainer class="flex w-full items-end justify-between">
      <p class="text-sm opacity-50">© 2025 Pu-Hsuan Wu</p>
      <Icon name="asset:logo" class="size-6 opacity-50" aria-hidden="true" />
    </BaseContainer>
  </footer>
</template>
