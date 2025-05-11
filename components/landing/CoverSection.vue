<script setup lang="ts">
import { secondary } from "@/lib/navigation";
const { locale } = useI18n();

import layer0Avif from "@/assets/images/parallax-2505/layer0.avif";
import layer0Webp from "@/assets/images/parallax-2505/layer0.webp";
import layer0Jpg from "@/assets/images/parallax-2505/layer0.jpg";
import layer0MbAvif from "@/assets/images/parallax-2505/layer0-mb.avif";
import layer0MbWebp from "@/assets/images/parallax-2505/layer0-mb.webp";
import layer0MbJpg from "@/assets/images/parallax-2505/layer0-mb.jpg";

import layer1Avif from "@/assets/images/parallax-2505/layer1.avif";
import layer1Webp from "@/assets/images/parallax-2505/layer1.webp";
import layer1Png from "@/assets/images/parallax-2505/layer1.png";
import layer1MbAvif from "@/assets/images/parallax-2505/layer1-mb.avif";
import layer1MbWebp from "@/assets/images/parallax-2505/layer1-mb.webp";
import layer1MbPng from "@/assets/images/parallax-2505/layer1-mb.png";

import layer2Avif from "@/assets/images/parallax-2505/layer2.avif";
import layer2Webp from "@/assets/images/parallax-2505/layer2.webp";
import layer2Png from "@/assets/images/parallax-2505/layer2.png";
import layer2MbAvif from "@/assets/images/parallax-2505/layer2-mb.avif";
import layer2MbWebp from "@/assets/images/parallax-2505/layer2-mb.webp";
import layer2MbPng from "@/assets/images/parallax-2505/layer2-mb.png";

const layer0 = [
  {
    srcset: layer0Avif,
    media: "(min-width: 512px)",
    type: "image/avif",
  },
  {
    srcset: layer0Webp,
    media: "(min-width: 512px)",
    type: "image/webp",
  },
  {
    srcset: layer0Jpg,
    media: "(min-width: 512px)",
    type: "image/png",
  },
  {
    srcset: layer0MbAvif,
    type: "image/avif",
  },
  {
    srcset: layer0MbWebp,
    type: "image/webp",
  },
  {
    srcset: layer0MbJpg,
    type: "image/png",
  },
];

const layer1 = [
  {
    srcset: layer1Avif,
    media: "(min-width: 512px)",
    type: "image/avif",
  },
  {
    srcset: layer1Webp,
    media: "(min-width: 512px)",
    type: "image/webp",
  },
  {
    srcset: layer1Png,
    media: "(min-width: 512px)",
    type: "image/png",
  },
  {
    srcset: layer1MbAvif,
    type: "image/avif",
  },
  {
    srcset: layer1MbWebp,
    type: "image/webp",
  },
  {
    srcset: layer1MbPng,
    type: "image/png",
  },
];

const layer2 = [
  {
    srcset: layer2Avif,
    media: "(min-width: 512px)",
    type: "image/avif",
  },
  {
    srcset: layer2Webp,
    media: "(min-width: 512px)",
    type: "image/webp",
  },
  {
    srcset: layer2Png,
    media: "(min-width: 512px)",
    type: "image/png",
  },
  {
    srcset: layer2MbAvif,
    type: "image/avif",
  },
  {
    srcset: layer2MbWebp,
    type: "image/webp",
  },
  {
    srcset: layer2MbPng,
    type: "image/png",
  },
];
</script>

<template>
  <section
    class="xs:mt-[calc(-1*var(--ui-header-height))] relative isolate z-10 h-screen bg-neutral-300 text-white lg:z-20 dark:bg-neutral-800"
  >
    <picture class="absolute inset-x-0 bottom-0 z-[-1] w-full">
      <source
        v-for="item in layer2"
        :key="item.srcset"
        :srcset="item.srcset"
        :media="item.media"
        :type="item.type"
      />
      <img :src="layer2MbPng" alt="" class="w-full object-cover" />
    </picture>
    <picture class="absolute inset-x-0 bottom-0 z-[-2] w-full">
      <source
        v-for="item in layer1"
        :key="item.srcset"
        :srcset="item.srcset"
        :media="item.media"
        :type="item.type"
      />
      <img :src="layer1MbPng" alt="" class="w-full object-cover" />
    </picture>
    <picture class="absolute inset-0 z-[-3] h-full w-full">
      <source
        v-for="item in layer0"
        :key="item.srcset"
        :srcset="item.srcset"
        :media="item.media"
        :type="item.type"
      />
      <img :src="layer0MbJpg" alt="" class="h-full w-full object-cover" />
    </picture>
    <BaseContainer class="grid h-full place-items-center">
      <h1 class="texl-2xl text-center font-thin md:text-4xl lg:text-6xl">
        Good Day!
      </h1>
    </BaseContainer>
    <div class="absolute inset-x-0 bottom-4 md:bottom-8">
      <BaseContainer class="flex items-end justify-end md:justify-between">
        <ul
          class="hidden items-center gap-8 text-sm opacity-0 transition-discrete delay-1000 duration-1000 motion-safe:transition-opacity md:flex md:opacity-100 starting:opacity-0"
        >
          <li v-for="item in secondary[locale]" :key="item.href">
            <NuxtLinkLocale
              :to="item.href"
              class="opacity-50 hover:opacity-100 focus-visible:opacity-100 motion-safe:transition-opacity"
              >{{ item.title }}</NuxtLinkLocale
            >
          </li>
        </ul>
        <Icon
          name="asset:logo"
          class="xs:block xs:opacity-50 hidden size-6 opacity-0 transition-discrete delay-1000 duration-1000 motion-safe:transition-opacity starting:opacity-0"
          aria-hidden="true"
        />
      </BaseContainer>
    </div>
  </section>
</template>
