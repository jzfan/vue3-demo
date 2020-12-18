<template>
  <section class="relative px-16 pt-2 pb-8 zoom-in bg-white" id="app-section">
    <vertical-title>应用</vertical-title>
    <swiper
      class="mt-16 pb-8 text-white h-64 w-full"
      :slides-per-view="perView"
      :space-between="30"
      :pagination="{ clickable: true }"
      :centeredSlides="true"
      :slideToClickedSlide="true"
      :loop="true"
    >
      <swiper-slide v-for="(item, index) in videos" :key="index">
        <video-li :item="item" class="text-black w-full" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Pagination, A11y])

import videoLi from '@/components/theVideo'
export default {
  components: { videoLi, Swiper, SwiperSlide },
  data() {
    return {
      videos: [
        {
          cover: '/img/sy-a1.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/aerospace-1.mp4',
        },
        {
          cover: '/img/sy-a2.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/gaming-1.mp4',
        },
        {
          cover: '/img/sy-a3.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/training-1.mp4',
        },
        {
          cover: '/img/sy-a4.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/medical-1.mp4',
        },
        {
          cover: '/img/sy-a5.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/simulation-1.mp4',
        },
        {
          cover: '/img/sy-a6.png',
          src:
            'https://oss-main.dextarobotics.com/videos/application/education-1.mp4',
        },
      ],
    }
  },
  methods: {},
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
}
</script>

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
