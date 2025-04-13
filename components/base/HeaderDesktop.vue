<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const router = useRouter();
const { t, locale } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const items = computed<NavigationMenuItem[][]>(() => [
  [],
  [
    {
      label: "CV",
      href: localePath("/cv"),
    },
    {
      label: t("lang"),
      slot: "language",
      onSelect: () => {
        if (locale.value === "en") {
          router.push(switchLocalePath("zh"));
        } else {
          router.push(switchLocalePath("en"));
        }
      },
    },
  ],
]);
</script>
<template>
  <UContainer :id.attr="'wcag-nav'" as="header">
    <UNavigationMenu
      :items
      highlight
      class="border-(--ui-border) data-[orientation=horizontal]:w-full data-[orientation=horizontal]:border-b data-[orientation=vertical]:w-48"
    >
      <template #language-leading
        ><span class="sr-only">{{ t("switch") }}</span></template
      >
    </UNavigationMenu>
  </UContainer>
</template>

<i18n lang="json">
{
  "en": {
    "switch": "語言切換成",
    "lang": "中文"
  },
  "zh": {
    "switch": "Switch language to",
    "lang": "English"
  }
}
</i18n>
