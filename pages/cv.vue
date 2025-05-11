<script setup lang="ts">
import { experiences, education } from "@/content/cv";
import type { Locales } from "@/types/locale";

const { t, locale } = useI18n({ useScope: "local" });

useHead({
  title: t("title"),
});

const socialLinks = [
  {
    icon: "fa6-brands:linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/puhsuanwu",
  },
  {
    icon: "fa6-brands:github",
    title: "GitHub",
    href: "https://github.com/hwupu",
  },
  {
    icon: "fa6-brands:dev",
    title: "Dev.to",
    href: "https://dev.to/hwupu",
  },
  {
    icon: "fa6-brands:behance",
    title: "Behance",
    href: "https://www.behance.net/phwu",
  },
];
</script>

<template>
  <BaseHeaderShade variant="static" class="bg-white/75" />
  <BaseContainer
    padding-y="default"
    class="flex flex-col gap-x-4 gap-y-20 sm:gap-x-8 lg:flex-row xl:gap-x-16 print:flex-row print:gap-x-16 print:pb-4"
  >
    <section class="lg:w-1/3 print:w-1/4">
      <div class="top-[var(--ui-header-height)] space-y-10 lg:sticky">
        <Icon
          name="asset:logo"
          class="mx-auto block size-20 translate-y-4"
          aria-hidden="true"
        />
        <h1 class="text-center text-4xl sm:text-5xl print:text-xl">
          <template v-if="locale === 'en'">
            <span class="sr-only">Curriculum vitae of </span
            ><span>Henry Wu</span>
          </template>
          <template v-else>
            <span>Henry Wu</span><span class="sr-only">的履歷</span>
          </template>
        </h1>
        <p class="text-center font-serif text-balance italic">
          <template v-if="locale === 'en'">
            <span class="whitespace-nowrap">Front-end Developer</span> with
            expertise in
            <span class="whitespace-nowrap">Graphic and Industrial Design</span>
          </template>
          <template v-else
            ><span class="whitespace-nowrap">擅長前端開發、</span
            ><span class="whitespace-nowrap">平面設計和工業設計</span></template
          >
        </p>
        <ul class="space-y-2 print:space-y-4" :aria-label="t('social')">
          <li v-for="link in socialLinks" :key="link.href">
            <ExternalLink :to="link.href"
              ><Icon :name="link.icon" class="size-5 print:size-3" /><span>{{
                link.title
              }}</span></ExternalLink
            >
          </li>
        </ul>
      </div>
    </section>
    <div
      class="flex flex-col gap-y-20 *:w-full lg:w-2/3 print:w-3/4 print:gap-y-10"
    >
      <section
        class="space-y-4 print:order-1 print:break-inside-avoid print:space-y-2"
      >
        <h2 class="text-3xl print:text-lg">
          {{ locale === "en" ? "Profile" : "簡介" }}
        </h2>
        <p v-if="locale === 'en'">
          A well-rounded developer and mentor with 5+ years of experiences,
          skilled in delivering impactful results through technical expertise
          and strategic planning.
        </p>
        <p v-else>
          具備五年以上經驗的全方位開發者與指導者，善於運用技術專長與策略規劃，展現具影響力的成果。
        </p>
      </section>

      <section
        class="space-y-4 print:order-4 print:break-inside-avoid print:space-y-2"
      >
        <h2 class="text-3xl print:text-lg">
          {{ locale === "en" ? "Projects" : "專案" }}
        </h2>
        <p>todo</p>
      </section>

      <section
        class="space-y-4 print:order-2 print:break-inside-avoid print:space-y-2"
      >
        <h2 class="text-3xl print:text-lg">
          {{ locale === "en" ? "Experience" : "工作經歷" }}
        </h2>
        <ul class="space-y-6">
          <CvExperience
            v-for="(item, index) in experiences[locale as Locales]"
            :key="index"
            v-bind="item"
          />
        </ul>
      </section>

      <section
        class="space-y-4 print:order-3 print:break-inside-avoid print:space-y-2"
      >
        <h2 class="text-3xl print:text-lg">
          {{ locale === "en" ? "Education" : "教育程度" }}
        </h2>
        <ul class="space-y-6">
          <CvEducation
            v-for="(item, index) in education[locale as Locales]"
            :key="index"
            v-bind="item"
          />
        </ul>
      </section>

      <section
        class="space-y-4 print:order-3 print:break-inside-avoid print:space-y-2"
      >
        <h2 class="text-3xl print:text-lg">
          {{ locale === "en" ? "Certifications" : "證照" }}
        </h2>
        <ul class="ml-6 list-outside list-disc space-y-4">
          <li class="space-y-4">
            <h3>
              {{
                locale === "en"
                  ? "Emergency Medical Technician (EMT-1)"
                  : "初級救護技術員（EMT-1）"
              }}
            </h3>
          </li>
        </ul>
      </section>
    </div>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "CV",
    "social": "Social Media"
  },
  "zh": {
    "title": "履歷",
    "social": "社群媒體"
  }
}
</i18n>
