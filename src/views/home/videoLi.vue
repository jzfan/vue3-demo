<template>
  <li
    class="md:w-1/3 md:mt-0 mt-4 w-full bg-black relative group cursor-pointer"
    @click="play = !play"
  >
    <template v-if="!play">
      <img :src="item.cover" class="w-full" alt="" />
      <span
        class="absolute hidden xy-center w-12 h-12 rounded-full bg-white group-hover:flex items-center justify-center"
      >
        <i class="iconfont icon-play text-xl ml-1"></i>
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
  props: ['item'],
  data() {
    return {
      play: false,
    }
  },
}
</script>

<style></style>
