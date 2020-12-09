<template>
  <this-header />
  <main class="text-black">
    <div class="max-w-7xl mx-auto">
      <this-intro />
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
import thisHeader from './header'
import thisIntro from './intro'
export default {
  components: {
    VideoLi,
    thisDetails,
    thisParams,
    thisPack,
    thisQuestions,
    thisOrder,
    thisHeader,
    thisIntro,
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
