<template>
  <swiper
    class="mt-16 pb-8 text-white h-64 w-full"
    :slides-per-view="perView"
    :space-between="40"
    :centeredSlides="true"
    :slideToClickedSlide="true"
    :loop="true"
  >
    <swiper-slide v-for="(item, index) in all" :key="index">
      <img :src="item" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([A11y])

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      all: [
        '/img/dd-1.png',
        '/img/dd-2.png',
        '/img/dd-3.png',
        '/img/dd-4.png',
        '/img/dd-5.png',
        '/img/dd-6.png',
        '/img/dd-7.png',
        '/img/dd-8.png',
        '/img/dd-9.png',
        '/img/dd-10.png',
        '/img/dd-11.png',
        '/img/dd-12.png',
        '/img/dd-13.jpg',
        '/img/dd-14.png',
      ],
    }
  },
  computed: {
    perView() {
      let w = document.body.clientWidth
      if (w > 700) {
        return 3.5
      }
      if (w > 500) {
        return 2
      }

      return 1
    },
  },
}
</script>

<style></style>
