<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/cv";
const props = defineProps<Experience>();
const { t, locale } = useI18n({ useScope: "local" });
</script>

<template>
  <li
    :class="
      cn('space-y-4', {
        'print:hidden': props.hide,
      })
    "
  >
    <div
      class="xs:grid-cols-[1rem_auto_1rem_max-content] grid grid-cols-[1rem_auto] gap-x-2 print:grid-cols-[0.5rem_auto_0.5rem_max-content]"
    >
      <h3 class="order-1 col-span-2 font-bold">
        <span class="sr-only">{{ t("position") }}&nbsp;</span>{{ props.title }}
      </h3>
      <p
        class="xs:order-2 order-3 col-span-2 grid grid-cols-subgrid items-center text-base print:text-[8pt]"
      >
        <Icon
          name="fa6-solid:calendar-days"
          class="block size-4 print:size-2"
        />
        <span
          ><span class="sr-only">{{ t("employment") }}&nbsp;</span
          >{{ props.startDate }} ~ {{ props.endDate }}</span
        >
      </p>
      <p class="xs:order-3 order-2 col-span-2 text-base print:text-[8pt]">
        <span class="sr-only">{{ t("company") }}&nbsp;{{ props.company }}</span>
        <ExternalLink :to="props.url">
          <span>{{ props.company }}</span>
        </ExternalLink>
      </p>
      <p
        class="order-4 col-span-2 grid grid-cols-subgrid items-center text-base print:text-[8pt]"
      >
        <Icon name="fa6-solid:location-dot" class="block size-4 print:size-2" />
        <span
          ><span class="sr-only">{{ t("location") }}&nbsp;</span
          >{{ props.location }}
        </span>
      </p>
    </div>
    <ul
      aria-label="description"
      :class="
        cn('ml-8 list-outside list-disc', {
          'space-y-4': locale === 'en',
          'space-y-2': locale === 'zh',
        })
      "
    >
      <li v-for="(item, index) in props.description" :key="index">
        {{ item }}
      </li>
    </ul>
  </li>
</template>

<i18n lang="json">
{
  "en": {
    "position": "Position",
    "employment": "Employment",
    "company": "Company",
    "location": "Location"
  },
  "zh": {
    "position": "職位",
    "employment": "任職",
    "company": "公司",
    "location": "地區"
  }
}
</i18n>
