<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const { t, locale } = useI18n({ useScope: "local" });
const { proxy } = useScriptClarity();
const consent = useCookie("consent-policy", {
  default: () => false,
  sameSite: "strict",
});
const performance = useCookie<boolean>("consent-performance", {
  default: () => true,
  sameSite: "strict",
});
const analytics = useCookie<boolean>("consent-analytics", {
  default: () => true,
  sameSite: "strict",
});

function agree() {
  proxy.clarity("consent");
  const due = new Date();
  due.setFullYear(due.getFullYear() + 1);
  consent.value = due.toISOString();
  performance.value = true;
  analytics.value = true;
}

function decline() {
  const due = new Date();
  due.setDate(due.getDate() + 7);
  consent.value = due.toISOString();
  performance.value = false;
  analytics.value = false;
}

const show = computed(() => {
  if (!consent.value) return true;
  const due = new Date(consent.value);
  if (due < new Date()) return true;
  return false;
});
</script>

<template>
  <Drawer :open="show" :dismissible="false" :handle="false" direction="bottom">
    <DrawerContent
      class="px-8 py-4"
      :no-handle="true"
      @on-overlay-click="agree"
    >
      <div
        class="flex flex-col items-center justify-between gap-4 px-0 sm:flex-row"
      >
        <div class="space-y-2">
          <DrawerTitle class="text-2xl">{{ t("title") }}</DrawerTitle>
          <DrawerDescription v-if="locale === 'zh'" class="text-base">
            我們不會收集您的個人資訊。網站使用 Cookie
            來提升您的瀏覽體驗，並了解訪客如何與本網站互動。這些 Cookie
            有助於提供網站指標資訊，例如訪客人數、跳出率、流量來源等。
          </DrawerDescription>
          <DrawerDescription v-else class="text-base">
            Your personal information is not collected. Cookies are used to
            enhance your browsing experience, and are used to understand how
            visitors interact with this website. These cookies help to provide
            information on metrics such as the number of visitors, bounce rate,
            traffic source, etc.
          </DrawerDescription>

          <Collapsible v-slot="{ open }">
            <CollapsibleTrigger class="flex items-center gap-2 text-base"
              >{{ t("customize") }}
              <Icon
                :name="open ? 'fa6-solid:angles-up' : 'fa6-solid:angles-down'"
            /></CollapsibleTrigger>
            <CollapsibleContent class="py-4">
              <ul class="space-y-2">
                <li class="flex gap-2">
                  <div><Switch id="func" :default-value="true" disabled /></div>
                  <div>
                    <Label for="func" class="text-base">{{
                      t("functional")
                    }}</Label>
                    <p
                      v-if="locale === 'zh'"
                      class="text-muted-foreground text-sm"
                    >
                      這些 Cookie
                      是為了提供您所要求的服務、應用程式或資源而設定的。若未啟用這些
                      Cookie，您的請求將無法正確處理。這類 Cookie
                      通常用於管理您所執行的操作，例如載入網站視覺元素、網頁資源或語言偏好設定等。
                      我們也可能使用這些 Cookie
                      來設定關鍵功能，以確保所提供服務的安全性與效能，例如跨來源資源共用（CORS）防護等措施。
                    </p>
                    <p v-else class="text-muted-foreground text-sm">
                      These cookies are set to provide the service, application
                      or resource requested. Without these cookies, your request
                      cannot be properly delivered. They are usually set to
                      manage actions made by you, such as requesting website
                      visual elements, pages resources or language preferences.
                      We can also use these cookies to set up essential
                      functionalities to guarantee the security and efficiency
                      of the service requested, like CORS protection.
                    </p>
                  </div>
                </li>
                <li class="flex gap-2">
                  <div>
                    <Switch
                      id="perf"
                      :default-value="performance"
                      @update:model-value="performance = $event"
                    />
                  </div>
                  <div>
                    <Label for="perf" class="text-base">{{
                      t("performance")
                    }}</Label>
                    <p
                      v-if="locale === 'zh'"
                      class="text-muted-foreground text-sm"
                    >
                      這些 Cookie 用於提供網站訪客的量化數據。透過這些 Cookie
                      所收集的資訊，將用於評估網站或軟體的關鍵績效指標（KPI），例如效能表現。
                      使用這類
                      Cookie，可協助我們統計網站訪問次數與流量來源，進而持續優化網站與應用程式的效能。若您選擇停用這些
                      Cookie，我們將無法得知您何時造訪過本網站。
                    </p>
                    <p v-else class="text-muted-foreground text-sm">
                      These cookies are set to provide quantitative measures of
                      website visitors. Information collected with these cookies
                      is used in operations to measure website or software KPIs,
                      such as performance. With the usage of these cookies we
                      are able to count visits and traffic sources to improve
                      the performance of our site and application. If you do not
                      allow these cookies, we will not know when you have
                      visited our site.
                    </p>
                  </div>
                </li>
                <li class="flex gap-2">
                  <div>
                    <Switch
                      id="anal"
                      :default-value="analytics"
                      @update:model-value="analytics = $event"
                    />
                  </div>
                  <div>
                    <Label for="anal" class="text-base">{{
                      t("analytics")
                    }}</Label>
                    <p
                      v-if="locale === 'zh'"
                      class="text-muted-foreground text-sm"
                    >
                      這些 Cookie
                      由我們的分析合作夥伴設定，用於提供使用者行為分析資料。它們會收集各類瀏覽資訊，以建立使用者的行為輪廓，並了解使用習慣，以便發展個人化與精準的廣告投放策略。
                      根據您在網站上的瀏覽興趣與行為所建立的使用者輪廓，將被用來自訂您在其他網站上所看到的廣告內容。
                    </p>
                    <p v-else class="text-muted-foreground text-sm">
                      These cookies are set by our analytics partners to provide
                      behavioral analytical data. They collect any type of
                      browsing information necessary to create profiles and to
                      understand user habits in order to develop an individual
                      and specific advertising routine. The profile created
                      regarding your browsing interest and behavior is used to
                      customize the ads you see when you access other websites.
                    </p>
                  </div>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div
          class="flex w-full flex-none flex-col-reverse gap-2 sm:w-fit sm:flex-row-reverse"
        >
          <Button
            size="lg"
            class="bg-sky-500 text-lg hover:bg-sky-400 focus-visible:bg-sky-400 active:bg-sky-600"
            @click="agree"
            >{{ t("accept") }}</Button
          >
          <Button size="lg" class="text-lg" variant="link" @click="decline">{{
            t("decline")
          }}</Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Your privacy is protected.",
    "customize": "Customize cookie settings",
    "functional": "Functional Cookies",
    "performance": "Performance Cookies",
    "analytics": "Analytics Cookies",
    "accept": "Accept",
    "decline": "Decline"
  },
  "zh": {
    "title": "您的隱私是安全的。",
    "customize": "客製化 Cookie 設定",
    "functional": "功能型 Cookie",
    "performance": "效能型 Cookie",
    "analytics": "分析型 Cookie",
    "accept": "接受",
    "decline": "拒絕"
  }
}
</i18n>
