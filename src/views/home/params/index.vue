<template>
  <div
    class="specificationsSection__Cp0nG dexta-section dark bg-white"
    id="params-section"
  >
    <div class="dexta-section-tag">参数</div>
    <div
      data-vjs-player="true"
      class="specificationsSectionVideoContainer__3x8-5"
    >
      <this-video ref="video" :options="videoOptions" />
    </div>
    <transition name="fade">
      <div
        v-if="showList"
        class="specificationsContainer__36atT rightSpecificationsContainer__3eRId active__27aEM"
      >
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">电池容量</div>
          <div class="specificationContent__nfG9c">1800 mAh</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">电池工作时长</div>
          <div class="specificationContent__nfG9c">6 hrs</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">电池充电时长</div>
          <div class="specificationContent__nfG9c">2 hrs</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">电池功耗</div>
          <div class="specificationContent__nfG9c">~1000 mW(Avg.)</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="showList"
        class="specificationsContainer__36atT leftSpecificationsContainer__1pTts active__27aEM"
      >
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">尺寸</div>
          <div class="specificationContent__nfG9c">155*100*45 mm (L*W*D)</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">重量</div>
          <div class="specificationContent__nfG9c">~300 g</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">电机扭矩</div>
          <div class="specificationContent__nfG9c">5 kg.cm (0.5 N.m)</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">工作温度</div>
          <div class="specificationContent__nfG9c">-10°C ~ 40°C</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">通信距离</div>
          <div class="specificationContent__nfG9c">5 m(Max.)</div>
        </div>
      </div>
    </transition>
    <div class="specificationsPdfContainer__1aNKK">
      <a
        ripple="true"
        class="mdc-button mdc-button--raised mdc-ripple-upgraded"
        :href="'/' + $t('pdf')"
        download="specifications.pdf"
        target="__blank"
      >
        > 下载规格书
      </a>
    </div>
  </div>
</template>

<script>
import thisVideo from './video'
export default {
  components: {
    thisVideo,
  },
  data() {
    return {
      showList: false,
      videoOptions: {
        autoplay: false,
        controls: false,
        muted: true,
        sources: [
          {
            src:
              'https://oss-main.dextarobotics.com/videos/home/specifications.mp4',
            type: 'video/mp4',
          },
        ],
      },
    }
  },
  mounted() {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry.target)
            entry.target.play()
            videoObserver.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -200px 0px',
      },
    )

    const player = this.$refs.video.player
    player.one('ended', (e) => {
      //   console.log('ended', e)
      this.showList = true
    })

    const playerEl = this.$refs.video.$el
    videoObserver.observe(playerEl)
  },

  methods: {
    // play() {
    //   const player = this.$refs.video.player
    //   player.play()
    // },
  },
  watch: {
    '$store.state.lang'(newVal) {
      this.$i18n.locale = newVal
    },
  },
}
</script>

<i18n>
{
  "en": {
        "pdf": "specifications_en-us.pdf"
  },
  "zh": {
        "pdf": "specifications_zh-cn.pdf"
  }
}
</i18n>
