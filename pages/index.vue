<script setup lang="ts">
definePageMeta({
  variant: "fancy",
});
const { t, locale } = useI18n();
useHead({
  title: t("global.title"),
  titleTemplate: "%s",
});
</script>

<template>
  <BaseHeaderShade />
  <LandingCoverSection />
  <div class="bg-[#677F88] font-mono">
    <BaseHeaderShade class="bg-blue-950/50 text-white shadow-blue-700/10" />
    <div
      class="mt-[var(--ui-header-height)] grid min-h-screen place-items-center"
    >
      <BaseContainer
        padding-y="default"
        class="flex flex-col gap-x-16 gap-y-8 py-20 sm:flex-row"
      >
        <PublicPicture
          src="/images/avatar/gura.webp"
          alt="profile icon"
          class="size-14 rounded-full sm:size-20 lg:size-40"
        />
        <div class="space-y-6 sm:mt-3">
          <template v-if="locale === 'zh'">
            <p>
              您好，我是
              Henry，一位喜愛設計與科技的前端開發者。我在泰國與台灣兩地長大，在求學期間因見識到
              iMac
              的簡約設計與友善介面，而深深受到啟發，引起我對於電腦運作的好奇，也讓我開始思考該如何讓提升數位體驗。
            </p>
            <p>
              我主修資訊工程，並擁有跨領域的實務經歷，涵蓋平面設計、工業製造與商業管理。我具備快速學習的能力與解決問題的思維，善於整合不同領域的知識與經驗，提出創新且務實的解決方案。
            </p>
          </template>
          <template v-else>
            <p>
              Hi, I’m Henry — a web developer with a passion for design and
              technology. I grew up between Thailand and Taiwan, and during
              childhood, I was inspired by the simplicity of the iMac and its
              user-friendly interface, which led to my curiosity to explore how
              computers work — and how to make digital experiences work better
              for people.
            </p>
            <p>
              I majored in Computer Science and have built a broad range of
              experience across graphic design, industrial manufacturing, and
              business management. I’m a fast learner and a natural
              problem-solver, always eager to connect ideas across disciplines
              and turn them into thoughtful solutions.
            </p>
          </template>
          <InternalLink
            to="/cv"
            class="*:decoration-white hover:text-sky-200 focus-visible:text-sky-200"
          >
            <span v-if="locale === 'zh'">閱覽履歷</span>
            <span v-else>Peak my CV</span>
            <Icon name="fa6-solid:arrow-right" />
          </InternalLink>
        </div>
      </BaseContainer>
    </div>
  </div>
  <div class="bg-[#B4A79A]">
    <BaseHeaderShade class="bg-amber-950/50 text-white shadow-amber-700/10">
      <a id="experience" href="#experience">{{
        locale === "zh" ? "我的經歷" : "My Experience"
      }}</a>
    </BaseHeaderShade>
    <div class="mt-[var(--ui-header-height)] min-h-screen">
      <BaseContainer padding-y="default" class="flex flex-col gap-y-8 py-20">
        <h2 class="text-center text-4xl font-bold">
          {{ locale === "zh" ? "我的經歷" : "My Experience" }}
        </h2>
        <LandingExperienceSwiper class="w-full flex-none" />
      </BaseContainer>
    </div>
  </div>
  <div class="bg-orange-200 text-black">
    <BaseHeaderShade class="bg-orange-600/60 text-white shadow-orange-400/20">
      <a id="motivation" href="#motivation">{{
        locale === "zh" ? "我的啟發" : "My Motivation"
      }}</a>
    </BaseHeaderShade>
    <div class="mt-[var(--ui-header-height)] min-h-screen">
      <BaseContainer padding-y="default" class="flex flex-col gap-y-8 py-20">
        <h2 class="text-center text-4xl font-bold">
          {{ locale === "zh" ? "我的啟發" : "My Motivation" }}
        </h2>
        <p>
          What inspires me most is the intersection of people and technology —
          how design can shape how we feel, think, and interact. My early
          inspiration came from Apple’s product philosophy and MIT’s research on
          human-computer interaction. Since then, I’ve been exploring how design
          and engineering can come together to solve real-world problems.
        </p>
        <p>
          I don’t see myself as just a developer, or a designer — but as someone
          who’s always learning, adapting, and building. I believe good work
          comes from curiosity, discipline, and a genuine interest in people and
          how they experience the world.
        </p>
      </BaseContainer>
    </div>
  </div>
</template>
