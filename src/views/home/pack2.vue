<template>
  <div class="unboxingSection__1D9Dl dexta-section lighter" id="pack-section">
    <vertical-title class="top-8">{{ $t('tag') }}</vertical-title>
    <div class="dexta-section-content unboxingSectionContent__1l1eI">
      <div class="unboxingSectionLeft__2yUel">
        <div class="video__bVhmv">
          <div
            class="videoThumbnail__17_-H shadow__1pyg5"
            style="position: relative;"
          >
            <ul>
              <this-video class="w-full" :item="video" />
              <!-- <img src="/img/sy-5.jpg" style="width: 100%;" /> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="unboxingSectionMiddle__2aRIf"></div>
      <div class="unboxingSectionRight__1GGZK">
        <div class="ml-10 text-left">
          <h3 class=" text-lg font-bold">{{ $t('title') }}</h3>
          <ul class="">
            <li class="mt-2" v-for="index in 8" :key="index">
              {{ $t(`list.${index - 1}`) }}
            </li>
          </ul>
          <img class="mt-4" src="/img/sy-6.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import thisVideo from '@/components/theVideo'
export default {
  components: { thisVideo },
  data() {
    return {
      video: {
        cover: '/img/sy-5.jpg',
        src: 'https://oss-main.dextarobotics.com/videos/home/unboxing.mp4',
      },
    }
  },
  methods: {},
}
</script>

<i18n>
{
  "en": {
    "tag": "Unboxing",
    "title": "What's in the Box",
    "list": [
        "Dexmo × 2",
        "Dongle × 1",
        "Power Adaptor × 1",
        "USB Type-C Cable × 2",
        "1-to-4 USB 3.0 Hub × 1",
        "Vive Controller Connector × 2",
        "Vive Tracker Connector × 2",
        "Oculus Controller Connector × 2",
        "Screws × 10"
    ]
  },
  "zh": {
    "tag": "包装",
    "title": "箱子里有什么",
    "list": [
        "Dexmo × 2",
        "无线接收器 × 1",
        "电源适配器 x 1",
        "USB Type-C 数据线 × 2",
        "一出四 USB 3.0 分线器 × 1",
        "Vive手柄固定器 × 2",
        "Vive 定位器固定器 × 2",
        "Oculus 手柄固定器 × 2",
        "螺丝 × 10"
    ]
  }
}
</i18n>

<style>
#pack-section .iconfont {
  color: black;
  font-size: 1.75rem;
}
</style>
