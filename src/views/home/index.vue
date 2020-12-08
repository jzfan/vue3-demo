<template>
  <header class="sy-bg">
    <div class="absolute bottom-10 left-20 w-100 text-left text-white">
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
  </header>
  <main class="text-black">
    <div class="max-w-7xl mx-auto">
      <div class="bg-gray-f5 pt-16 pb-12">
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
        <ul class="flex shadow-card mt-12">
          <li
            v-for="(video, index) in videos"
            :key="index"
            class="flex-1 relative group cursor-pointer"
          >
            <img :src="video.cover" class="w-full" alt="" />
            <span
              class="absolute hidden xy-center w-12 h-12 rounded-full bg-white group-hover:flex items-center justify-center"
            >
              <i class="">A</i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { cover: '/img/sy-1.png' },
        { cover: '/img/sy-2.jpg' },
        { cover: '/img/sy-3.jpg' },
      ],
    }
  },
}
</script>

<style></style>
