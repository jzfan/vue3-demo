<template>
  <section class="dexta-section center light lighter">
    <div class="dexta-section-content">
      <h1 class="text-6xl font-semibold mb-6">{{ $t('title') }}</h1>
      <p>{{ $t('subtitle') }}</p>
    </div>
    <div class="dexta-section-content behindScenesContent__3wcJT">
      <div>
        <img
          src="https://oss-main.dextarobotics.com/images/stories/customized-components.gif"
        />
        <p class="pt-2">{{ $t('imgs[0]') }}</p>
      </div>
      <div>
        <img
          src="https://oss-main.dextarobotics.com/images/stories/software-development.gif"
        />
        <p class="pt-2">{{ $t('imgs[1]') }}</p>
      </div>
      <div>
        <img
          src="https://oss-main.dextarobotics.com/images/stories/design-and-testing.gif"
        />
        <p class="pt-2">{{ $t('imgs[2]') }}</p>
      </div>
      <div>
        <img
          src="https://oss-main.dextarobotics.com/images/stories/mass-production.gif"
        />
        <p class="pt-2">{{ $t('imgs[3]') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<i18n>
{
  "en": {
    "title": "Behind the scenes",
    "subtitle": "A glimpse into our exciting work at Dexta Robotics",
    "imgs": [
      " Customized components",
      "Software development",
      "Design and testing",
      "Mass production"
    ]
  },
  "zh": {
    "title": "幕后工作",
    "subtitle": "一窥岱仕科技里激动人心的工作",
    "imgs": [
      " 定制化零件",
      "软件开发",
      "设计与测试",
      "大批量生产"
    ]
  }
}
</i18n>

<style></style>
