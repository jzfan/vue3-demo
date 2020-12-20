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
      <h1>{{ $t('title') }}</h1>
      <p>
        {{ $t('p') }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  methods: {},
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
    "title": "应用场景",
    "p": "Dexmo捕捉全手动作并提供可变力反馈。戴上Dexmo，用户可以真实地感受到虚拟物体，进一步提升虚拟/混合现实的沉浸式体验。"
  }
}
</i18n>
