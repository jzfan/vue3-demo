<template>
  <li
    class="relative group cursor-pointer flex items-end bg-black"
    @click="doPlay"
  >
    <template v-if="!play">
      <img :src="item.cover" class="w-full" alt="" />
      <span
        class="absolute hidden xy-center w-12 h-12 rounded-full bg-white group-hover:flex items-center justify-center"
      >
        <i class="iconfont icon-play  ml-1"></i>
      </span>
    </template>
    <video
      v-else
      :src="item.src"
      controls="true"
      :poster="item.cover"
      preload="auto"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      style="object-fit:fill"
    ></video>
  </li>
</template>

<script>
export default {
  props: {
    item: {},
  },
  data() {
    return {
      play: false,
    }
  },
  methods: {
    doPlay() {
      this.play = true
      this.$nextTick(() => {
        const video = this.$el.querySelector('video')
        // console.log(video)
        video.play()
      })
    },
  },
}
</script>

<style></style>
