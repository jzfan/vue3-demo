<template>
  <header class="relative overflow-hidden w-full">
    <div class="sm:w-screen w800">
      <video autoplay="" loop="" class="w-full h-full">
        <source
          src="https://oss-main.dextarobotics.com/videos/application/banner.mp4"
          type="video/mp4"
        />
        &gt;
      </video>
    </div>
    <div
      class="absolute w-full bottom-0 px-4 md:px-12 xy-center text-left text-white"
    >
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-gray-900"
      >
        {{ $t('title') }}
      </h1>
      <p class="mt-4 md:mt-6 lg:mt-8 text-xl w-3/4 md:w-1/2">
        {{ $t('p') }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  watch: {
    '$store.state.lang'(val) {
      this.$i18n.locale = val
    },
  },
  methods: {
    change() {
      console.log(this.locale)
      //   this.$i18n.locale = this.$i18n.locale == 'zh' ? 'en' : 'zh'
    },
  },
}
</script>

<style></style>

<i18n>
{
  "en": {
    "title": "Applications",
    "p": "Dexmo captures all hand motions and provides virtual force feedback. With it, users could feel virtual objects physically, taking immersion experience of virtual/mixed reality to a further step."
  },
  "zh": {
    "title": "触摸虚实的边界",
    "p": "Dexmo是世界上最便携的力反馈手套，为研究者，企业和消费者而生。它所提供的自然、直觉的触感可以让每一个人都能亲密地触碰真正的沉浸式VR世界。"
  }
}
</i18n>
