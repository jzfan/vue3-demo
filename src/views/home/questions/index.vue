<template>
  <section
    class="relative pt-6 pb-8 bg-gray-f5 text-green-dark"
    id="que-section"
  >
    <vertical-title class="top-6">问答</vertical-title>
    <swiper
      class="mt-20 pb-8 text-white w-full"
      :slides-per-view="perView"
      :space-between="30"
      :pagination="{ clickable: true }"
      :centeredSlides="false"
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
  methods: {},
  computed: {
    perView() {
      let w = document.body.clientWidth
      console.log(w)
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
          console.log(res)
          this.all = res.data
        })
      },
    },
  },
}
</script>

<style lang="scss"></style>
