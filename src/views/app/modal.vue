<template>
  <div v-if="show" class="fixed z-30 inset-0 overflow-y-auto">
    <i
      class="iconfont icon-close absolute top-0 left-0 cursor-pointer hover:text-white text-2xl text-gray-aa mt-4 ml-4 p-2 z-30"
      @click="show = false"
    ></i>
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 transition-opacity bg-black opacity-75"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full px-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <!-- <video ref="videoPlayer" class="video-js"></video> -->
      </div>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$bus.on('modal-play', (item) => {
      this.show = true
      console.log(item.title)
      //   this.playVideo(item)
    })
  },

  methods: {
    playVideo(option) {
      this.player = videojs(
        this.$refs.videoPlayer,
        {
          autoplay: true, //自动播放
          controls: true, //用户可以与之交互的控件
          loop: true, //视频一结束就重新开始
          muted: false, //默认情况下将使所有音频静音
          aspectRatio: '16:9', //显示比率
          fullscreen: {
            options: { navigationUI: 'hide' },
          },
          sources: [
            {
              src: option.src,
              type: 'video/mp4',
            },
          ],
        },
        function onPlayerReady() {
          console.log('onPlayerReady', this)
        },
      )
    },
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>

<style></style>
