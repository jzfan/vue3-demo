<template>
  <section
    class="relative pb-16 px-16 bg-white flex flex-col md:flex-row md:items-start"
    id="pack-section"
  >
    <vertical-title class="top-8">包装</vertical-title>

    <div class="md:flex md:w-5/6 md:mx-auto items-start justify-center">
      <ul class="shadow-card w-full md:w-3/4 lg:w-3/5 mb-8 mt-24">
        <this-video class="w-full" :item="video" />
      </ul>

      <div
        class="text-left ml-4 text-green-dark w-full md:w-1/4 lg:w-2/5 md:ml-8 lg:ml-24 md:mt-24"
      >
        <h3 class="text-lg font-bold">箱子里有什么</h3>
        <ul class="">
          <li class="mt-2">
            Dexmo × 2
          </li>
          <li class="mt-2">
            无线接收器 × 1
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
            螺丝 × 10
          </li>
        </ul>
        <img class="w-64 mt-6" src="/img/sy-6.png" alt="" />
      </div>
    </div>
  </section>
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

<style></style>
