<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const router = useRouter();
const { t, locale } = useI18n({
  useScope: "local",
});
const switchLocalePath = useSwitchLocalePath();

const items = computed<NavigationMenuItem[][]>(() => [
  [],
  [
    {
      label: t("switch"),
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
    />
  </UContainer>
</template>

<i18n lang="json">
{
  "en": {
    "switch": "切換成中文"
  },
  "zh": {
    "switch": "Switch to English"
  }
}
</i18n>
