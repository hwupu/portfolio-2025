<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const { t, locale } = useI18n({ useScope: "local" });

useHead({
  title: t("title"),
});

const performance = useCookie<boolean>("consent-performance", {
  default: () => true,
  sameSite: "strict",
});
const analytics = useCookie<boolean>("consent-analytics", {
  default: () => true,
  sameSite: "strict",
});
</script>

<template>
  <BaseHeaderShade v-slot="{ active }" variant="static" class="bg-white/75">
    <SectionAnchor href="#privacy-policy" :title="t('title')" :active />
  </BaseHeaderShade>
  <BaseContainer padding-y="default" class="space-y-20">
    <h1
      id="privacy-policy"
      class="scroll-mt-[var(--ui-header-height)] text-3xl"
    >
      {{ t("title") }}
    </h1>
    <section class="space-y-4">
      <h2 class="text-xl">Google Analytics</h2>
      <p v-if="locale === 'zh'">
        本網站使用由 Google 提供的網站分析服務 Google
        Analytics，以收集並分析您使用本網站的相關資訊。這些資訊有助於我們了解使用者與網站的互動方式，進而改善網站的設計與功能。收集的資料可能包括您的
        IP 位址、瀏覽器類型以及造訪的頁面等資訊。Google Analytics
        可能會將這些資料傳輸至美國，並儲存長達 12 個月。您可透過安裝 Google
        Analytics 停用瀏覽器外掛程式來選擇不參與資料收集。如需進一步了解 Google
        Analytics 的隱私權實務，請參閱
        <ExternalLink to="https://policies.google.com/privacy"
          ><span>Google 隱私權政策</span></ExternalLink
        >。您有權要求查閱、修改或刪除您的個人資料。如對我們的資料收集方式或
        Google Analytics 有任何疑問，請聯絡
        <ExternalLink to="https://support.google.com/policies?p=privpol_privts"
          ><span>Google 支援</span></ExternalLink
        >。
      </p>
      <p v-else>
        This website uses Google Analytics, a web analytics service provided by
        Google, to collect and analyze information about your use of our
        website. This information is used to understand how you interact with
        our site, allowing us to improve its design and functionality. This
        includes collecting data like your IP address, browser type, and pages
        visited. Google Analytics may transfer this data to the United States
        and store it for 12 months. You can opt out of Google Analytics by using
        the Google Analytics opt-out browser add-on. For more information about
        Google Analytics' privacy practices, please refer to
        <ExternalLink to="https://policies.google.com/privacy"
          ><span>Google's Privacy Policy</span></ExternalLink
        >. You have the right to request a copy of your data, to have it
        rectified, or to have it deleted. If you have any questions about our
        data collection practices or Google Analytics, please contact
        <ExternalLink to="https://support.google.com/policies?p=privpol_privts"
          ><span>Google Support</span></ExternalLink
        >.
      </p>
    </section>
    <section class="space-y-4">
      <h2 class="text-xl">Microsoft Clarity</h2>
      <p v-if="locale === 'zh'">
        本網站使用 Microsoft Clarity
        來記錄您在網站上的使用行為與互動情形，透過行為數據、熱區圖（Heatmaps）及操作重播（Session
        Replay）等工具，以協助我們優化網站並推廣產品／服務。網站使用資料是透過第一方與第三方
        Cookie
        及其他追蹤技術收集，用以分析產品／服務的受歡迎程度及線上活動狀況。此外，這些資訊也將用於網站優化、防詐欺／安全性用途及廣告投放等目的。如需進一步了解
        Microsoft 如何收集與使用您的資料，請參閱
        <ExternalLink to="https://www.microsoft.com/privacy/privacystatement"
          ><span>Microsoft 隱私權聲明</span></ExternalLink
        >。
      </p>
      <p v-else>
        This website uses Microsoft Clarity to capture how you use and interact
        with our website through behavioral metrics, heatmaps, and session
        replay to improve and market our products/services. Website usage data
        is captured using first and third-party cookies and other tracking
        technologies to determine the popularity of products/services and online
        activity. Additionally, we use this information for site optimization,
        fraud/security purposes, and advertising. For more information about how
        Microsoft collects and uses your data, visit the
        <ExternalLink to="https://www.microsoft.com/privacy/privacystatement"
          ><span>Microsoft Privacy Statement</span></ExternalLink
        >.
      </p>
    </section>
    <section class="space-y-4">
      <h2 class="text-xl">{{ t("customize") }}</h2>
      <ul class="space-y-4">
        <li class="flex items-center gap-4 rounded-lg border p-4">
          <div class="w-full flex-auto">
            <Label for="functional-cookies" class="text-lg">{{
              t("functional")
            }}</Label>
            <p v-if="locale === 'zh'" class="text-base">
              這些 Cookie
              是為了提供您所要求的服務、應用程式或資源而設定的。若未啟用這些
              Cookie，您的請求將無法正確處理。這類 Cookie
              通常用於管理您所執行的操作，例如載入網站視覺元素、網頁資源或語言偏好設定等。
              我們也可能使用這些 Cookie
              來設定關鍵功能，以確保所提供服務的安全性與效能，例如跨來源資源共用（CORS）防護等措施。
            </p>
            <p v-else class="text-base">
              These cookies are set to provide the service, application or
              resource requested. Without these cookies, your request cannot be
              properly delivered. They are usually set to manage actions made by
              you, such as requesting website visual elements, pages resources
              or language preferences. We can also use these cookies to set up
              essential functionalities to guarantee the security and efficiency
              of the service requested, like CORS protection.
            </p>
          </div>
          <div>
            <Switch id="functional-cookies" :default-value="true" disabled />
          </div>
        </li>
        <li class="flex items-center gap-4 rounded-lg border p-4">
          <div class="w-full flex-auto">
            <Label for="performance-cookies" class="text-lg">{{
              t("performance")
            }}</Label>
            <p v-if="locale === 'zh'" class="text-base">
              這些 Cookie 用於提供網站訪客的量化數據。透過這些 Cookie
              所收集的資訊，將用於評估網站或軟體的關鍵績效指標（KPI），例如效能表現。
              使用這類
              Cookie，可協助我們統計網站訪問次數與流量來源，進而持續優化網站與應用程式的效能。若您選擇停用這些
              Cookie，我們將無法得知您何時造訪過本網站。
            </p>
            <p v-else class="text-base">
              These cookies are set to provide quantitative measures of website
              visitors. Information collected with these cookies is used in
              operations to measure website or software KPIs, such as
              performance. With the usage of these cookies we are able to count
              visits and traffic sources to improve the performance of our site
              and application. If you do not allow these cookies, we will not
              know when you have visited our site.
            </p>
          </div>
          <div>
            <Switch
              id="performance-cookies"
              :default-value="performance"
              @update:model-value="performance = $event"
            />
          </div>
        </li>
        <li class="flex items-center gap-4 rounded-lg border p-4">
          <div class="w-full flex-auto">
            <Label for="analytics-cookies" class="text-lg">{{
              t("analytics")
            }}</Label>
            <p v-if="locale === 'zh'" class="text-base">
              這些 Cookie
              由我們的分析合作夥伴設定，用於提供使用者行為分析資料。它們會收集各類瀏覽資訊，以建立使用者的行為輪廓，並了解使用習慣，以便發展個人化與精準的廣告投放策略。
              根據您在網站上的瀏覽興趣與行為所建立的使用者輪廓，將被用來自訂您在其他網站上所看到的廣告內容。
            </p>
            <p v-else class="text-base">
              These cookies are set by our analytics partners to provide
              behavioral analytical data. They collect any type of browsing
              information necessary to create profiles and to understand user
              habits in order to develop an individual and specific advertising
              routine. The profile created regarding your browsing interest and
              behavior is used to customize the ads you see when you access
              other websites.
            </p>
          </div>
          <div>
            <Switch
              id="analytics-cookies"
              :default-value="analytics"
              @update:model-value="analytics = $event"
            />
          </div>
        </li>
      </ul>
    </section>
  </BaseContainer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Privacy Policy",
    "customize": "Customize cookies settings",
    "functional": "Functional cookies",
    "analytics": "Analytics cookies",
    "performance": "Performance cookies"
  },
  "zh": {
    "title": "隱私權政策",
    "customize": "自訂 Cookie 設定",
    "functional": "功能 Cookie",
    "analytics": "分析 Cookie",
    "performance": "效能 Cookie"
  }
}
</i18n>
