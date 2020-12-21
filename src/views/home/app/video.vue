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
  watch: {
    '$store.state.lang'(val) {
      console.log(val)
      if (this.player) {
        this.player.poster(this.item[`cover_${val}`])
      }
    },
  },

  methods: {},

  mounted() {
    let lang = this.$store.state.lang
    this.options.poster = this.item[`cover_${lang}`]
    this.options.sources[0].src = this.item.src
    this.player = videojs(this.$refs.videoPlayer, this.options)
    // console.log(this.player)
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
