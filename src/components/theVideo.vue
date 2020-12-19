<template>
  <li class="relative group cursor-pointer flex items-end">
    <video
      ref="videoPlayer"
      class="video-js vjs-fluid vjs-big-play-centered"
    ></video>
  </li>
</template>

<script>
import videojs from 'video.js'

export default {
  props: {
    item: {},
  },
  data() {
    return {
      play: false,
      player: null,
      controls: true, //用户可以与之交互的控件
      options: {
        autoplay: false,
        controls: true,
        muted: true,
        sources: [
          {
            src: '',
            type: 'video/mp4',
          },
        ],
      },
    }
  },
  methods: {},

  mounted() {
    this.options.poster = this.item.cover
    this.options.sources[0].src = this.item.src
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      //   function onPlayerReady() {
      //     console.log('onPlayerReady', this)
      //   },
    )
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
      console.log('disposed...')
    }
  },
}
</script>

<style></style>
