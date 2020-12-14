<template>
  <section
    class="relative pt-6 pb-8 bg-gray-f5 text-green-dark zoom-in"
    id="que-section"
  >
    <vertical-title class="top-6">问答</vertical-title>
    <swiper
      class="mt-20 pb-8 h-64 text-white w-full"
      :slides-per-view="perView"
      :space-between="30"
      :pagination="{ clickable: true }"
      :centeredSlides="true"
      :slideToClickedSlide="true"
      :loop="true"
    >
      <swiper-slide v-for="(item, index) in all" :key="index">
        <this-card :item="item" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

SwiperCore.use([Pagination, A11y])

import thisCard from './card'
export default {
  components: { Swiper, SwiperSlide, thisCard },
  data() {
    return {
      all: [],
    }
  },
  created() {},
  methods: {},
  computed: {
    perView() {
      let w = document.body.clientWidth
      //   console.log(w)
      if (w > 700) {
        return 3.5
      }
      if (w > 500) {
        return 2
      }
      return 1
    },
  },
  watch: {
    '$store.state.lang': {
      immediate: true,
      handler: function(newVal) {
        this.$i18n.locale = newVal
        let url = `/json/questions-${newVal}.json`
        this.axios.get(url).then((res) => {
          //   console.log(res)
          this.all = res.data
          this.$nextTick(() => {
            var mySwiper = this.$el.querySelector('.swiper-container').swiper
            mySwiper.slidePrev()
          })
        })
      },
    },
  },
}
</script>

<style lang="scss">
#que-section {
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
    transform: scale(0.8) translateY(-10%);
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
