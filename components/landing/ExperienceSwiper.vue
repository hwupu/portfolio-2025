<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<template>
  <swiper :space-between="32">
    <swiper-slide class="aspect-video rounded-xl bg-neutral-300"
      >Slide 1</swiper-slide
    >
    <swiper-slide class="aspect-video rounded-xl bg-neutral-300"
      >Slide 2</swiper-slide
    >
    <swiper-slide class="aspect-video rounded-xl bg-neutral-300"
      >Slide 3</swiper-slide
    >
  </swiper>
</template>
