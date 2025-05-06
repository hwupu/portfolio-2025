<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { Education } from "@/types/cv";
const props = defineProps<Education>();
const { t } = useI18n({ useScope: "local" });
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
      class="xs:grid-cols-[1rem_auto_1rem_9rem] grid grid-cols-[1rem_auto] gap-x-2 print:grid-cols-[0.5rem_auto_0.5rem_6.3rem]"
    >
      <h3 class="order-1 col-span-2 font-bold">
        <span class="sr-only"
          >{{ t("institution") }}&nbsp;{{ props.institution }}</span
        >
        <ExternalLink :to="props.url">
          <span>{{ props.institution }}</span>
        </ExternalLink>
      </h3>
      <p
        class="xs:order-2 order-3 col-span-2 grid grid-cols-subgrid items-center text-base print:text-[8pt]"
      >
        <Icon
          name="fa6-solid:calendar-days"
          class="block size-4 print:size-2"
        />
        <span
          ><span class="sr-only">{{ t("period") }}&nbsp;</span
          >{{ props.startDate }} ~ {{ props.endDate }}</span
        >
      </p>
      <p
        v-if="props.degree"
        class="xs:order-3 order-2 col-span-2 text-base print:text-[8pt]"
      >
        <span class="sr-only">{{ t("degree") }}&nbsp;</span>
        {{ props.degree }}
      </p>
      <p
        v-if="props.description"
        class="xs:order-3 order-2 col-span-2 text-base italic print:text-[8pt]"
      >
        {{ props.description }}
      </p>
      <p v-if="props.gpa" class="order-4 col-span-2 text-base print:text-[8pt]">
        GPA: {{ props.gpa }}
      </p>
      <p
        v-if="props.status"
        class="order-4 col-span-2 text-base italic print:text-[8pt]"
      >
        {{ props.status }}
      </p>
    </div>
  </li>
</template>

<i18n lang="json">
{
  "en": {
    "institution": "Institution",
    "period": "Period",
    "degree": "Degree"
  },
  "zh": {
    "institution": "學府",
    "period": "學期",
    "degree": "學位"
  }
}
</i18n>
