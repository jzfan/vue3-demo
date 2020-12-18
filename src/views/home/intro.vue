<template>
  <section class="bg-gray-f5 pt-16 pb-12 px-2 text-center">
    <div class="text-green-dark md:w-1/2 mx-auto">
      <h3 class="text-2xl md:text-4xl font-bold leading-none  md:w-100 mx-auto">
        {{ $t('title') }}
      </h3>
      <p class="font-medium text-lg mt-7">
        {{ $t('p') }}
      </p>
    </div>
    <ul class="my-4 w-full sm:w-2/3 mx-auto">
      <this-video
        :item="{
          cover: '/img/home-1.png',
          src:
            'https://dextarobotics-bucket-main.oss-cn-beijing.aliyuncs.com/videos/home/dexmo-promo.mp4',
        }"
      />
    </ul>
    <ul class="flex flex-wrap shadow-none md:shadow-card mt-12">
      <video-li
        class="md:w-1/3 md:mt-0 mt-4 w-full"
        v-for="(item, index) in videos"
        :key="index"
        :item="item"
      />
    </ul>
  </section>

  <button
    @click="$router.push('/contact')"
    class="btn btn-green px-6 fixed z-20 left-4 bottom-4"
  >
    联系咨询
  </button>
</template>

<script>
import videoLi from '@/components/theVideo'
import thisVideo from '@/components/theVideo2'
export default {
  components: { videoLi, thisVideo },
  data() {
    return {
      videos: [
        {
          cover: '/img/sy-1.png',
          src:
            'https://oss-main.dextarobotics.com/videos/home/applications_sets.mp4',
        },
        {
          cover: '/img/sy-2.jpg',
          src:
            'https://oss-main.dextarobotics.com/videos/home/dexmo-introduction.mp4',
        },
        {
          cover: '/img/sy-3.jpg',
          src:
            'https://oss-main.dextarobotics.com/videos/home/dexmo-dk1-internal-testing.mp4',
        },
      ],
    }
  },
}
</script>

<i18n>
{
"en": {
    "title": "The virtual world lies within your grasp",
    "p": "Dexmo, the world's first commercialized light weight, wireless, dual hand force feedback glove. It offers the most compelling force feedback experience with both motion capture and force feedback abilities, designed for the use in training, education, medical, gaming, simulation, aerospace and much more."
  },
  "zh": {
    "title": "虚拟世界 尽在掌握",
    "p": "Dexmo是全球第一款商业化便携式双手无线力反馈手套，兼具手部动作捕捉与力反馈功能，带来最激动人心的力反馈互动体验，可广泛应用于航空航天、工业培训、教育科研、医疗康复、仿真建模、游戏社交等各领域。"
  }
}
</i18n>
