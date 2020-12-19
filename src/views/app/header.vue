<template>
  <header class="header__2s37P">
    <video autoplay="true" id="myVideo" muted class="w-full object-cover">
      <source
        src="https://oss-main.dextarobotics.com/videos/application/banner.mp4"
        type="video/mp4"
      />
      &gt;
    </video>
    <div class="headerContentContainer__3Fbl8">
      <h1>应用场景</h1>
      <p>
        Dexmo捕捉全手动作并提供可变力反馈。戴上Dexmo，用户可以真实地感受到虚拟物体，进一步提升虚拟/混合现实的沉浸式体验。
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
