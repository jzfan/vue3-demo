<template>
  <div class="unboxingSection__1D9Dl dexta-section lighter" id="pack-section">
    <div class="dexta-section-tag">包装</div>
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
          <h3 class=" text-lg font-bold">箱子里有什么</h3>
          <ul class="">
            <li class="mt-2">
              Dexmo × 2
            </li>
            <li class="mt-2">
              无线接收器 × 2
            </li>
            <li class="mt-2">
              电源适配器 x 1
            </li>
            <li class="mt-2">
              USB Type-C 数据线 × 2
            </li>
            <li class="mt-2">
              一出四 USB 3.0 分线器 × 1
            </li>
            <li class="mt-2">
              Vive手柄固定器 × 2
            </li>
            <li class="mt-2">
              Vive 定位器固定器 × 2
            </li>
            <li class="mt-2">
              Oculus 手柄固定器 × 2
            </li>
            <li class="mt-2">
              手指绑带 × 10 螺丝 × 10
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
}
</script>

<style>
#pack-section .iconfont {
  color: black;
  font-size: 1.75rem;
}
</style>
