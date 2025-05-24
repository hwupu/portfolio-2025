<script setup lang="ts">
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { primary, secondary } from "@/lib/navigation";
import type { Locales } from "@/types/locale";

const isActive = ref(false);
const { t, locale } = useI18n({ useScope: "local" });
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <Drawer v-model:open="isActive">
    <DrawerTrigger as-child>
      <button
        type="button"
        class="xs:hidden grid size-14 place-items-center rounded-full bg-[#92684B] text-white"
        :aria-label="isActive ? t('collapse') : t('expand')"
      >
        <Icon name="fa-solid:bars" class="size-6" />
      </button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerTitle class="sr-only"></DrawerTitle>
      <DrawerDescription class="sr-only"></DrawerDescription>
      <ul class="grid w-full" @click.capture="isActive = false">
        <li v-for="item in primary[locale as Locales]" :key="item.href">
          <NuxtLinkLocale
            :to="item.href"
            class="block px-4 py-2 text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            active-class="opacity-100"
            >{{ item.title }}</NuxtLinkLocale
          >
        </li>
        <li v-for="item in secondary[locale as Locales]" :key="item.href">
          <NuxtLinkLocale
            :to="item.href"
            class="block px-4 py-2 text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            active-class="opacity-100"
            >{{ item.title }}</NuxtLinkLocale
          >
        </li>
        <li>
          <NuxtLink
            :to="switchLocalePath(locale === 'en' ? 'zh' : 'en')"
            class="block px-4 py-2 text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            >{{ t("lang") }}</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-end justify-end">
        <Icon name="asset:logo" class="size-6 opacity-50" aria-hidden="true" />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<i18n lang="json">
{
  "en": {
    "lang": "中文",
    "title": "Menu Panel",
    "expand": "Expand navigation menu panel.",
    "collapse": "Collapse navigation menu panel."
  },
  "zh": {
    "lang": "English",
    "title": "導覽選單",
    "expand": "開啟導覽選單。",
    "collapse": "關閉導覽選單。"
  }
}
</i18n>
