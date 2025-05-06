<script setup lang="ts">
import { DialogClose } from "reka-ui";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { primary, secondary } from "@/lib/navigation";
import type { Locales } from "@/types/locale";

const props = defineProps<{
  variant?: "fancy";
}>();

const isActive = ref(false);
const { t, locale } = useI18n({ useScope: "local" });
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <Sheet v-model:open="isActive">
    <SheetTrigger as-child>
      <button
        type="button"
        :class="
          cn(
            'xs:grid pointer-events-auto hidden place-items-center rounded-full p-1 ease-in-out data-[state=closed]:duration-300 data-[state=open]:translate-x-[75vw] data-[state=open]:duration-500 motion-safe:transition-transform sm:data-[state=open]:translate-x-[24rem] md:hidden',
            {
              'xs:opacity-100 opacity-0 transition-discrete delay-1000 duration-1000 motion-safe:transition-opacity md:opacity-0 starting:opacity-0':
                props.variant === 'fancy',
            },
          )
        "
        :aria-label="isActive ? t('collapse') : t('expand')"
      >
        <Icon v-if="!isActive" name="fa6-solid:bars" class="size-6" />
        <Icon v-else name="fa6-solid:x" class="size-6" />
      </button>
    </SheetTrigger>
    <SheetContent side="left" :close="false" class="justify-between p-4 sm:p-8">
      <DialogClose
        class="absolute top-4 -right-12 size-8 translate-x-px rounded-full sm:-right-16"
        :aria-label="t('collapse')"
      />
      <SheetTitle class="sr-only">{{ t("title") }}</SheetTitle>
      <SheetDescription class="sr-only"> </SheetDescription>
      <ul class="grid w-full gap-4" @click.capture="isActive = false">
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
        <li>
          <NuxtLink
            :to="switchLocalePath(locale === 'en' ? 'zh' : 'en')"
            class="text-base opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
            >{{ t("lang") }}</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-end justify-end">
        <Icon name="asset:logo" class="size-6 opacity-50" aria-hidden="true" />
      </div>
    </SheetContent>
  </Sheet>
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
