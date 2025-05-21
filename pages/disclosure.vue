<script setup lang="ts">
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
    <SectionAnchor href="#disclosure" :title="t('title')" :active />
  </BaseHeaderShade>
  <BaseContainer padding-y="default" class="space-y-20">
    <h1 id="disclosure" class="scroll-mt-[var(--ui-header-height)] text-3xl">
      {{ t("title") }}
    </h1>

    <section class="space-y-4">
      <h2 class="text-xl">AI Usage Disclosure</h2>
      <ul class="ml-6 list-outside list-disc space-y-4">
        <li>
          <p>
            Homepage cover image is generated using OpenAI o3 model, and
            retouched with Adobe Firefly generative AI in May 2025.
          </p>
          <picture class="block aspect-[4/3] h-auto w-full max-w-md border">
            <source
              srcset="@/assets/images/disclosure/parallax-2505.avif"
              type="image/avif"
            />
            <img
              src="@/assets/images/disclosure/parallax-2505.webp"
              alt=""
              class="h-full w-full object-cover"
            />
          </picture>
        </li>
        <li>
          Code completion and generation are used. Models may include: Claude
          3.7 Sonnet
        </li>
        <li>
          Several AI tools are used for spelling and grammar correction. It may
          includes, but not limited to, OpenAI and other built-in features from
          Apple, Microsoft, and Google.
        </li>
      </ul>
    </section>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Disclosure"
  },
  "zh": {
    "title": "Disclosure"
  }
}
</i18n>
