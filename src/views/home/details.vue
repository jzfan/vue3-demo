<template>
  <section class="relative py-16 bg-green text-white">
    <div class="w-100 mx-auto text-left">
      <div v-for="(item, index) in all" :key="index">
        <h3 class="mt-20 text-2xl font-semibold leading-none">
          {{ item.title }}
        </h3>
        <template v-for="sub in item.ps" :key="sub.subtitle">
          <h4 class="mt-2 font-bold text-xl">{{ sub.subtitle }}</h4>
          <p>
            {{ sub.p }}
          </p>
        </template>
        <img class="mt-4 w-full" :src="images[index]" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      all: [],
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
        let url = `/json/home-${newVal}.json`
        this.axios.get(url).then((res) => {
          console.log(res)
          this.all = res.data.details
        })
      },
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
