<template>
  <header class="sy-bg relative">
    <div
      class="absolute md:bottom-1/3 md:w-160 bottom-10 left-20 w-100 text-left text-white"
    >
      <h1 class="text-5xl font-bold leading-none text-gray-900">
        {{ $t('title') }}
      </h1>
      <div class="mt-4">
        <button
          class="px-4 py-2 border-white border rounded hover:border-green hover:text-green"
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
export default {}
</script>

<style></style>

<i18n>
{
  "en": {
    "title": "Touch the Untouchable",
    "btn": "Product Story",
    "p": "Dexmo is the most easy-to-use force feedback glove, designed for both
        researchers, enterprises and consumers. Its natural and intuitive
        interaction enables everyone to seamlessly touch a truly immersive VR
        world."
  },
  "zh": {
    "title": "触摸虚实的边界",
    "btn": "产品故事",
    "p": "Dexmo是世界上最便携的力反馈手套，为研究者，企业和消费者而生。它所提供的自然、直觉的触感可以让每一个人都能亲密地触碰真正的沉浸式VR世界。",
  }
}
</i18n>
