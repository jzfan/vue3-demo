<template>
  <div id="main">
    <div>
      <this-header />
      <div class="article__1tkBY">
        <div class="catalogue__Ih0MZ">
          <div>
            <a @click="goAnchor('id1')">{{ $t('a1') }}</a>
          </div>
          <div>
            <a @click="goAnchor('id2')">{{ $t('a2') }}</a>
          </div>
          <div>
            <a @click="goAnchor('id3')">{{ $t('a3') }}</a>
          </div>
          <div>
            <a @click="goAnchor('id4')">{{ $t('a4') }}</a>
          </div>
        </div>
        <component :is="langCmp" />
      </div>
    </div>
  </div>
</template>

<script>
import thisHeader from './header'
import zh from './zh'
import en from './en'
export default {
  components: { thisHeader, zh, en },
  computed: {
    langCmp() {
      return this.$store.state.lang == 'zh' ? zh : en
    },
  },
  methods: {
    goAnchor(id) {
      var anchor = this.$el.querySelector('#' + id)
      //   console.log(anchor.offsetTop)
      window.scrollTo({
        top: anchor.offsetTop - 48,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<i18n>
{
  "en": {
    "a1": "Project Inception",
    "a2": "Why is it Important",
    "a3": "Background Knowledge",
    "a4": "Product Development"
  },
  "zh": {
    "a1": "项目的开端",
    "a2": "为何交互很重要",
    "a3": "背景知识普及",
    "a4": "产品的发展"
  }
}
</i18n>

<style></style>
