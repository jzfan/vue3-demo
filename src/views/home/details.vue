<template>
  <section class="relative py-16 bg-green text-white px-2 md:bg-detail">
    <div
      class="px-12 text-left md:flex items-center justify-between"
      v-if="all.length"
    >
      <figure class="md:w-80">
        <figcaption class="mt-6 text-2xl font-semibold leading-none">
          {{ all[0].title }}
        </figcaption>
        <template v-for="sub in all[0].ps" :key="sub.subtitle">
          <h4
            class="mt-2 font-bold text-lg cursor-pointer md:text-green"
            @click="toggleShowP(sub.subtitle)"
          >
            <i
              v-if="showSub != sub.subtitle"
              class="iconfont icon-right hidden md:inline-block"
            ></i>
            <i v-else class="iconfont icon-Down-v hidden md:inline-block"></i>
            <span class="ml-2">
              {{ sub.subtitle }}
            </span>
          </h4>
          <transition name="fade">
            <p v-show="showSub == sub.subtitle">
              {{ sub.p }}
            </p>
          </transition>
        </template>
        <div class="">
          <img class="mt-4 w-full" :src="images[0]" />
        </div>
      </figure>
      <div>
        <figure class="md:w-80 md:-ml-8">
          <figcaption class="mt-20 text-2xl font-semibold leading-none">
            {{ all[1].title }}
          </figcaption>
          <template v-for="sub in all[1].ps" :key="sub.subtitle">
            <h4
              class="mt-2 font-bold text-lg cursor-pointer md:text-green"
              @click="toggleShowP(sub.subtitle)"
            >
              <i
                v-if="showSub != sub.subtitle"
                class="iconfont icon-right hidden md:inline-block"
              ></i>
              <i v-else class="iconfont icon-Down-v hidden md:inline-block"></i>
              <span class="ml-2">
                {{ sub.subtitle }}
              </span>
            </h4>
            <transition name="fade">
              <p v-show="showSub == sub.subtitle">
                {{ sub.p }}
              </p>
            </transition>
          </template>
          <div class="">
            <img class="mt-4 w-full" :src="images[1]" />
          </div>
        </figure>

        <figure class="md:w-80">
          <figcaption class="mt-20 text-2xl font-semibold leading-none">
            {{ all[2].title }}
          </figcaption>
          <template v-for="sub in all[2].ps" :key="sub.subtitle">
            <h4
              class="mt-2 font-bold text-lg cursor-pointer md:text-green"
              @click="toggleShowP(sub.subtitle)"
            >
              <i
                v-if="showSub != sub.subtitle"
                class="iconfont icon-right hidden md:inline-block"
              ></i>
              <i v-else class="iconfont icon-Down-v hidden md:inline-block"></i>
              <span class="ml-2">
                {{ sub.subtitle }}
              </span>
            </h4>
            <transition name="fade">
              <p v-show="showSub == sub.subtitle">
                {{ sub.p }}
              </p>
            </transition>
          </template>
          <div class="">
            <img class="mt-4 w-full" :src="images[2]" />
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      all: [],
      showSub: '',
      images: [
        'https://oss-main.dextarobotics.com/images/home/free-to-use-en.gif',
        'https://oss-main.dextarobotics.com/images/home/truly-intuitive-natural-interaction-en.gif',
        'https://oss-main.dextarobotics.com/images/home/mass-production-en.gif',
      ],
    }
  },
  watch: {
    '$store.state.lang': {
      immediate: true,
      handler: function(newVal) {
        this.$i18n.locale = newVal
        this.showSub = ''
        let url = `/json/home-${newVal}.json`
        this.axios.get(url).then((res) => {
          console.log(res)
          this.all = res.data.details
        })
      },
    },
  },
  methods: {
    toggleShowP(sub) {
      this.showSub = this.showSub == sub ? '' : sub
    },
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

<style></style>
