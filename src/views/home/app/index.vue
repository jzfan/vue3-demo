<template>
  <section class="relative px-16 pt-2 pb-8 zoom-in bg-white" id="app-section">
    <vertical-title>{{ $t('tag') }}</vertical-title>
    <swiper
      ref="swiper"
      class="mt-16 pb-8 text-white h-64 w-full"
      :slides-per-view="perView"
      :space-between="30"
      :pagination="{ clickable: true }"
      :centeredSlides="true"
      :slideToClickedSlide="true"
      :loop="true"
    >
      <swiper-slide v-for="(item, index) in videos" :key="index">
        <this-video :item="item" class="text-black w-full" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Pagination, A11y])

import thisVideo from './video'
import { computed } from 'vue'
export default {
  components: { thisVideo, Swiper, SwiperSlide },
  data() {
    return {
      videos: [
        {
          cover_zh: '/img/sy-a1.png',
          cover_en: '/img/sy-a1-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/aerospace-1.mp4',
        },
        {
          cover_zh: '/img/sy-a2.png',
          cover_en: '/img/sy-a2-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/gaming-1.mp4',
        },
        {
          cover_zh: '/img/sy-a3.png',
          cover_en: '/img/sy-a3-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/training-1.mp4',
        },
        {
          cover_zh: '/img/sy-a4.png',
          cover_en: '/img/sy-a4-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/medical-1.mp4',
        },
        {
          cover_zh: '/img/sy-a5.png',
          cover_en: '/img/sy-a5-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/simulation-1.mp4',
        },
        {
          cover_zh: '/img/sy-a6.png',
          cover_en: '/img/sy-a6-en.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/education-1.mp4',
        },
      ],
    }
  },
  computed: {
    perView() {
      let w = document.body.clientWidth
      if (w > 700) {
        return 3
      }
      if (w > 500) {
        return 2
      }
      return 1
    },
  },
  methods: {},
}
</script>

<i18n>
{
  "en": {
    "tag": "Application"
  },
  "zh": {
    "tag": "应用"
  }
}
</i18n>

<style lang="scss">
#app-section {
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8) translateY(10%);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1) translateY(0);
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
