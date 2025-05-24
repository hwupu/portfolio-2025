<script setup lang="ts">
import { Navigation, Scrollbar, A11y, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
</script>

<template>
  <swiper
    :modules="[Navigation, Scrollbar, A11y, EffectCreative]"
    :speed="1000"
    :navigation="true"
    :scrollbar="true"
    :effect="'creative'"
    :creative-effect="{
      prev: {
        translate: [0, 0, -400],
        opacity: 0,
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    class="[--swiper-navigation-sides-offset:1rem] [--swiper-scrollbar-drag-bg-color:white] [--swiper-scrollbar-sides-offset:1rem] [--swiper-theme-color:#926848] sm:[--swiper-scrollbar-sides-offset:max(calc(50vw-39rem),2rem)] min-[90rem]:[--swiper-navigation-sides-offset:4rem]"
  >
    <swiper-slide>
      <BaseContainer class="mb-10 px-16 sm:px-16 min-[90rem]:px-8">
        <div
          class="flex aspect-[2/3] flex-col items-center gap-4 backdrop-blur-xl sm:aspect-[2/1] min-[90rem]:grid min-[90rem]:grid-cols-[60%_40%] min-[90rem]:grid-rows-[40%_60%]"
        >
          <div
            class="aspect-video rounded bg-neutral-500 min-[90rem]:row-span-2"
          ></div>
          <h3 class="self-end text-5xl font-thin">Web Development</h3>
          <p class="self-start">
            My main role is building web experiences. I focus on clean,
            accessible, and user-centered design, with experience across
            frontend technologies and component systems.
          </p>
        </div>
      </BaseContainer>
    </swiper-slide>
    <swiper-slide>
      <BaseContainer class="mb-10 px-16 sm:px-16 min-[90rem]:px-8">
        <div
          class="flex aspect-[2/3] flex-col items-center gap-4 backdrop-blur-xl sm:aspect-[2/1] min-[90rem]:grid min-[90rem]:grid-cols-[60%_40%] min-[90rem]:grid-rows-[40%_60%]"
        >
          <div
            class="aspect-video rounded bg-neutral-500 min-[90rem]:row-span-2"
          ></div>
          <h3 class="self-end text-5xl font-thin">IT Management</h3>
          <p class="self-start">
            I plan and manage IT infrastructure — from purchasing and
            configuring hardware/software, to setting up office networks, PBX
            phone systems, routers and switches. I’ve also worked with services
            like Azure Entra ID, Cloudflare DNS, and AWS CDN to support
            cloud-based operations.
          </p>
        </div>
      </BaseContainer>
    </swiper-slide>
    <swiper-slide>
      <BaseContainer class="mb-10 px-16 sm:px-16 min-[90rem]:px-8">
        <div
          class="flex aspect-[2/3] flex-col items-center gap-4 backdrop-blur-xl sm:aspect-[2/1] min-[90rem]:grid min-[90rem]:grid-cols-[60%_40%] min-[90rem]:grid-rows-[40%_60%]"
        >
          <div
            class="aspect-video rounded bg-neutral-500 min-[90rem]:row-span-2"
          ></div>
          <h3 class="self-end text-5xl font-thin">Factory Setup</h3>
          <p class="self-start">
            I helped set up a full digital UV printing production line —
            including supply chain planning, personnel training, machine
            installation and maintenance, customer service, and quality control.
            It was hands-on, fast-paced, and incredibly rewarding.
          </p>
        </div>
      </BaseContainer>
    </swiper-slide>
    <swiper-slide>
      <BaseContainer class="mb-10 px-16 sm:px-16 min-[90rem]:px-8">
        <div
          class="flex aspect-[2/3] flex-col items-center gap-4 backdrop-blur-xl sm:aspect-[2/1] min-[90rem]:grid min-[90rem]:grid-cols-[60%_40%] min-[90rem]:grid-rows-[40%_60%]"
        >
          <div
            class="aspect-video rounded bg-neutral-500 min-[90rem]:row-span-2"
          ></div>
          <h3 class="self-end text-5xl font-thin">
            Interior Design & Renovation
          </h3>
          <p class="self-start">
            I led renovation projects for both offices and factories. That
            included gathering requirements, ensuring compliance with
            regulations, creating design and engineering plans, managing
            schedules, purchasing materials, and coordinating contractors.
          </p>
        </div>
      </BaseContainer>
    </swiper-slide>
    <swiper-slide>
      <BaseContainer class="mb-10 px-16 sm:px-16 min-[90rem]:px-8">
        <div
          class="flex aspect-[2/3] flex-col items-center gap-4 backdrop-blur-xl sm:aspect-[2/1] min-[90rem]:grid min-[90rem]:grid-cols-[60%_40%] min-[90rem]:grid-rows-[40%_60%]"
        >
          <div
            class="aspect-video rounded bg-neutral-500 min-[90rem]:row-span-2"
          ></div>
          <h3 class="self-end text-5xl font-thin">Graphic Design & Media</h3>
          <p class="self-start">
            From logos and catalogs to marketing materials and videos, I’ve
            created visual content that supports both brand identity and
            communication. I enjoy bridging design and storytelling in
            meaningful ways.
          </p>
        </div>
      </BaseContainer>
    </swiper-slide>
  </swiper>
</template>
