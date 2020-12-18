<template>
  <header class="sy-bg relative">
    <div
      class="absolute md:bottom-1/3 md:w-160 bottom-10 left-1/10 w-2/3 md:w-1/2 text-left text-white"
    >
      <h1
        class="text-2xl md:text-5xl lg:text-6xl font-bold leading-none text-gray-900"
      >
        {{ $t('title') }}
      </h1>
      <div class="mt-4">
        <button
          class="px-8 py-2 border-white border rounded hover:border-green hover:text-green"
          @click="$router.push('/product')"
        >
          >> {{ $t('btn') }}
        </button>
      </div>
      <p class="mt-4 text-xl">
        {{ $t('p') }}
      </p>
    </div>
    <img
      class="absolute right-6 bottom-6 w-0 md:w-40"
      src="/img/award.png"
      alt=""
    />
  </header>
</template>

<script>
export default {
  watch: {
    '$store.state.lang'(newVal, oldVal) {
      //   console.log(newVal)
      this.$i18n.locale = newVal
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
    "title": "Touch the Untouchable",
    "btn": "Product Story",
    "p": "Dexmo is the most easy-to-use force feedback glove, designed for both researchers, enterprises and consumers. Its natural and intuitive interaction enables everyone to seamlessly touch a truly immersive VR world."
  },
  "zh": {
    "title": "触摸虚实的边界",
    "btn": "产品故事",
    "p": "Dexmo是世界上最便携的力反馈手套，为研究者，企业和消费者而生。它所提供的自然、直觉的触感可以让每一个人都能亲密地触碰真正的沉浸式VR世界。"
  }
}
</i18n>
