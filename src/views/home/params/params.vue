<template>
  <section class="relative py-6 md:pt-6" id="params-section">
    <vertical-title class="top-10">参数</vertical-title>
    <video
      playsinline="true"
      webkit-playsinline="true"
      muted
      autoplay
      fill="true"
    >
      <source
        src="https://oss-main.dextarobotics.com/videos/home/specifications.mp4"
        type="video/mp4"
      />
    </video>
    <div
      class="hidden md:flex justify-between 
      md:absolute z-20 x-center md:top-20 lg:top-35 md:w-4/5
      lg:w-3/5
       text-white"
    >
      <ul class="w-72 mt-20 lg:mt-64">
        <li
          class="flex flex-row-reverse mt-4 lg:mt-7"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <span class="px-4 py-2 bg-green-dark">{{ item.label }}</span>
          <span class="px-4 py-2 bg-gray-aa">{{ item.value }}</span>
        </li>
      </ul>
      <ul class="w-72">
        <li
          class="flex  mt-4 lg:mt-7"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <span class="px-4 py-2 bg-green-dark">{{ item.label }}</span>
          <span class="px-4 py-2 bg-gray-aa">{{ item.value }}</span>
        </li>
      </ul>
    </div>

    <ul class="md:hidden text-white mt-8 ml-4">
      <li class="flex mt-4" v-for="item in all" :key="item.label">
        <span class="px-4 py-2 bg-green-dark">{{ item.label }}</span>
        <span class="px-4 py-2 bg-gray-aa">{{ item.value }}</span>
      </li>
    </ul>
    <button
      class="px-4 py-2 
      text-sm absolute right-6 bottom-6
      rounded bg-green-dark text-white hover:bg-green hover:shadow-btn"
    >
      下载规格书
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      all: [
        { label: '电池容量', value: '1800 mAh' },
        { label: '电池工作时长', value: '6 hrs' },
        { label: '电池充电时长', value: '2 hrs' },
        { label: '电池功耗', value: '~1000 mW(Avg.)' },
        { label: '尺寸', value: '155*100*45 mm (L*W*D)' },
        { label: '重量', value: '~300 g' },
        { label: '电机扭矩', value: '5 kg.cm (0.5 N.m)' },
        { label: '工作温度', value: '-10°C ~ 40°C' },
        { label: '通信距离', value: '5 m(Max.)' },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      //   const video = this.$el.querySelector('video')
      //   console.log(video)
      //   video.play()
    })
  },
  computed: {
    leftList() {
      return this.all.slice(0, 5)
    },
    rightList() {
      return this.all.slice(5)
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style></style>
