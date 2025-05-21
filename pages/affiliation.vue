<script setup lang="ts">
import { BaseContainer } from "#components";

const { t } = useI18n({ useScope: "local" });

useHead({
  title: t("title"),
});
</script>

<template>
  <BaseHeaderShade
    v-slot="{ active }"
    variant="static"
    class="bg-white/75 dark:bg-neutral-800/75"
  >
    <SectionAnchor href="#affiliation" :title="t('title')" :active />
  </BaseHeaderShade>
  <BaseContainer padding-y="default" class="space-y-20">
    <h1 id="affiliation" class="scroll-mt-[var(--ui-header-height)] text-3xl">
      {{ t("title") }}
    </h1>

    <ul class="space-y-20">
      <li class="space-y-4">
        <h2 class="text-xl">Siam P&W Technic Co., Ltd.</h2>
        <p>
          Family business founded in 1999, Thailand. Started of selling laser
          cutting machine, and rapidly expanded to engraving and marking
          machines. Today, it covers UV Printing and CNC router across signage
          and packaging industries.
        </p>
        <div class="grid w-fit gap-4 sm:grid-cols-2">
          <picture class="block aspect-[4/3] h-auto w-full max-w-md border">
            <source
              srcset="@/assets/images/affiliation/pw512.avif"
              type="image/avif"
            />
            <img
              src="@/assets/images/affiliation/pw512.webp"
              alt=""
              class="h-full w-full object-cover"
            />
          </picture>
          <picture class="block aspect-[4/3] h-auto w-full max-w-md">
            <source
              srcset="@/assets/images/affiliation/7W0A1498_cloaked.avif"
              type="image/avif"
            />
            <img
              src="@/assets/images/affiliation/7W0A1498_cloaked.webp"
              alt=""
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
      </li>
      <li class="space-y-4">
        <h2 class="text-xl">A1 Workshop</h2>
        <p>
          Marketing brand under Siam P&W Technic focused on Made-To-Order
          Digital Fabrication service.
        </p>
        <div class="grid w-fit gap-4 sm:grid-cols-2">
          <picture class="block aspect-[4/3] h-auto w-full max-w-md border">
            <source
              srcset="@/assets/images/affiliation/a1w.avif"
              type="image/avif"
            />
            <img
              src="@/assets/images/affiliation/a1w.webp"
              alt=""
              class="h-full w-full object-cover"
            />
          </picture>
        </div>
      </li>
    </ul>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Affiliation"
  },
  "zh": {
    "title": "Affiliation"
  }
}
</i18n>
