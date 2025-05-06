<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { NuxtLinkProps } from "nuxt/app";

const props = withDefaults(defineProps<NuxtLinkProps>(), {
  target: "_blank",
  external: true,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const isActive = ref(false);
const { t } = useI18n({ useScope: "locale" });

const goto = () => {
  window.open(props.to, "_blank");
};
</script>

<template>
  <NuxtLink
    v-bind="delegatedProps"
    :class="
      cn(
        'group inline-flex w-fit items-center gap-2 *:decoration-amber-600 *:decoration-2 *:underline-offset-2 hover:text-amber-600 focus-visible:text-amber-600 motion-safe:transition-colors print:flex-wrap [&>*:not(span.iconify)]:underline print:[&>*:not(span.iconify)]:no-underline',
        props.class,
      )
    "
    @click.prevent.stop="isActive = true"
    ><slot /><span class="sr-only">{{ t("external") }}</span>
    <Icon
      name="fa6-solid:up-right-from-square"
      class="size-3 opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity print:hidden"
    />
    <span
      class="hidden text-[6pt] break-all print:inline-block"
      aria-hidden="true"
      >({{ props.to }})</span
    >
  </NuxtLink>
  <Dialog v-model:open="isActive">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ t("title") }}</DialogTitle>
        <DialogDescription
          >{{ t("description") }}{{ props.to }}</DialogDescription
        >
      </DialogHeader>
      <DialogFooter>
        <DialogClose as-child
          ><Button variant="link">{{ t("close") }}</Button></DialogClose
        >
        <DialogClose as-child
          ><Button :aria-label="`${t('visit')} ${props.to}`" @click="goto">{{
            t("visit")
          }}</Button></DialogClose
        >
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<i18n lang="json">
{
  "en": {
    "title": "External Link",
    "description": "You are about to leave this page. Are you sure to open in a new tab for this external link: ",
    "lose": "Close",
    "visit": "Visit",
    "external": "(external link)"
  },
  "zh": {
    "title": "外部連結",
    "description": "您將離開此頁面，是否確定要在新分頁開啟開此連結：",
    "lose": "關閉",
    "visit": "前往",
    "external": "(外部連結)"
  }
}
</i18n>
