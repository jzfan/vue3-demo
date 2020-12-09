<template>
  <header class="sy-bg relative">
    <div
      class="absolute md:bottom-1/3 md:w-160 bottom-10 left-20 w-100 text-left text-white"
    >
      <h1 class="text-5xl font-bold leading-none text-gray-900">
        Touch the Untouchable
      </h1>
      <div class="mt-4">
        <button
          class="px-4 py-2 border-white border rounded hover:border-green hover:text-green"
        >
          >> Product Story
        </button>
      </div>
      <p class="mt-4 text-xl">
        Dexmo is the most easy-to-use force feedback glove, designed for both
        researchers, enterprises and consumers. Its natural and intuitive
        interaction enables everyone to seamlessly touch a truly immersive VR
        world.
      </p>
    </div>
    <img
      class="absolute right-6 bottom-6 w-0 md:w-40"
      src="/img/award.png"
      alt=""
    />
  </header>
  <main class="text-black">
    <div class="max-w-7xl mx-auto">
      <section class="bg-gray-f5 pt-16 pb-12">
        <div class="text-green-dark md:w-1/2 mx-auto">
          <h3 class="text-4xl font-bold leading-none w-100 mx-auto">
            The virtual world lies within your grasp
          </h3>
          <p class="font-medium text-lg mt-7">
            Dexmo, the world's first commercialized light weight, wireless, dual
            hand force feedback glove. It offers the most compelling force
            feedback experience with both motion capture and force feedback
            abilities, designed for the use in training, education, medical,
            gaming, simulation, aerospace and much more.
          </p>
        </div>
        <ul class="flex flex-wrap shadow-none md:shadow-card mt-12">
          <video-li v-for="(item, index) in videos" :key="index" :item="item" />
        </ul>
      </section>
      <this-details />
      <this-params />
      <div class="h-2 w-full bg-green-dark"></div>
      <this-pack />
      <this-questions />
      <this-order />
    </div>
  </main>
</template>

<script>
import VideoLi from './videoLi.vue'
import thisDetails from './details'
import thisParams from './params'
import thisPack from './pack'
import thisQuestions from './questions'
import thisOrder from './order'
export default {
  components: {
    VideoLi,
    thisDetails,
    thisParams,
    thisPack,
    thisQuestions,
    thisOrder,
  },
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

<style></style>
