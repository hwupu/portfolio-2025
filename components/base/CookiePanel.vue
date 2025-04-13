<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { DrawerTitle, DrawerDescription } from "vaul-vue";

const { proxy } = useScriptClarity();
const { t } = useI18n({
  useScope: "local",
});

// Define the cookie without setting maxAge initially
const cookieConsent = useCookie<string | null>("cookie-consent", {
  default: () => null, // Initial value is null (no decision made)
});

// Computed property to determine if the banner should be shown
const showBanner = computed(() => cookieConsent.value === null);

function agree() {
  proxy.clarity("consent");
  // Set cookie with 365 days expiration when accepting
  cookieConsent.value = "accepted";
  document.cookie = `cookie-consent=accepted; max-age=${60 * 60 * 24 * 365}; path=/`;
}

function decline() {
  // Set cookie with 3 days expiration when declining
  cookieConsent.value = "declined";
  document.cookie = `cookie-consent=declined; max-age=${60 * 60 * 24 * 3}; path=/`;
}

/**
 *  Visual effect, scale background only if is on mobile.
 */
const isDesktop = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <UDrawer
    :open="showBanner"
    :dismissible="false"
    :handle="false"
    direction="bottom"
    :inset="isDesktop"
    :should-scale-background="!isDesktop"
  >
    <template #body>
      <UContainer
        class="flex flex-col items-center justify-between gap-4 px-0 sm:flex-row"
      >
        <div class="space-y-2">
          <DrawerTitle class="text-2xl">{{ t("title") }}</DrawerTitle>
          <DrawerDescription>{{ t("message") }}</DrawerDescription>
        </div>
        <div
          class="flex w-full flex-none flex-col-reverse gap-2 sm:w-fit sm:flex-row-reverse"
        >
          <UButton
            size="xl"
            variant="solid"
            class="min-w-20 justify-center"
            :aria-label="t('acceptDescription')"
            @click="agree"
            >{{ t("accept") }}</UButton
          >
          <UButton
            size="xl"
            variant="link"
            class="min-w-20 justify-center"
            :aria-label="t('declineDescription')"
            @click="decline"
            >{{ t("decline") }}</UButton
          >
        </div>
      </UContainer>
    </template>
  </UDrawer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Your privacy is protected",
    "message": "Your personal information are not collected. Cookies are used to enhance your browsing experience, and are used to understand how visitors interact with this website. These cookies help to provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    "decline": "Decline",
    "declineDescription": "Decline cookies policy.",
    "accept": "Okay!",
    "acceptDescription": "Accept cookies to enhance your browsing experience."
  },
  "zh": {
    "title": "保護您的隱私",
    "message": "本網站不會收集您的個人資訊。使用 Cookie 是為了提升瀏覽體驗，並用來了解訪客如何與本網站互動。這些 Cookie 有助於提供關於訪客數量、跳出率、流量來源等指標的資訊。",
    "decline": "退出",
    "declineDescription": "拒絕 Cookie 政策。",
    "accept": "好的",
    "acceptDescription": "接受 Cookie 以提升您的瀏覽體驗。"
  }
}
</i18n>
