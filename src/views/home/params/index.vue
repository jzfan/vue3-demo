<template>
  <div
    class="specificationsSection__Cp0nG dexta-section dark bg-white"
    id="params-section"
  >
    <div class="dexta-section-tag">{{ $t('tag') }}</div>
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
          <div class="specificationTitle__yRcyg">{{ $t('p1') }}</div>
          <div class="specificationContent__nfG9c">1800 mAh</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p2') }}</div>
          <div class="specificationContent__nfG9c">6 hrs</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p3') }}</div>
          <div class="specificationContent__nfG9c">2 hrs</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p4') }}</div>
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
          <div class="specificationTitle__yRcyg">{{ $t('p5') }}</div>
          <div class="specificationContent__nfG9c">155*100*45 mm (L*W*D)</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p6') }}</div>
          <div class="specificationContent__nfG9c">~300 g</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p7') }}</div>
          <div class="specificationContent__nfG9c">5 kg.cm (0.5 N.m)</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p8') }}</div>
          <div class="specificationContent__nfG9c">-10°C ~ 40°C</div>
        </div>
        <div class="specificationContainer__2B3CR">
          <div class="specificationTitle__yRcyg">{{ $t('p9') }}</div>
          <div class="specificationContent__nfG9c">5 m(Max.)</div>
        </div>
      </div>
    </transition>
    <div class="specificationsPdfContainer__1aNKK">
      <a
        ripple="true"
        class="mdc-button mdc-button--raised mdc-ripple-upgraded"
        :href="'/' + $t('pdf')"
        target="__blank"
      >
        {{ $t('download') }}
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
}
</script>

<i18n>
{
  "en": {
        "tag": "Specifications",
        "pdf": "specifications_en-us.pdf",
        "download": "Download Specifications",
        "p1": "Battery Capacity",
        "p2": "Battery Life",
        "p3": "Charge Time",
        "p4": "Power Consumption",
        "p5": "Size",
        "p6": "Weight",
        "p7": "Motor Torque",
        "p8": "Working Temperature",
        "p9": "Communication Range"
  },
  "zh": {
        "tag": "参数",
        "pdf": "specifications_zh-cn.pdf",
        "download": "下载规格书",
        "p1": "电池容量",
        "p2": "电池工作时长",
        "p3": "电池充电时长",
        "p4": "电池功耗",
        "p5": "尺寸",
        "p6": "重量",
        "p7": "电机扭矩",
        "p8": "工作温度",
        "p9": "通信距离"
  }
}
</i18n>
