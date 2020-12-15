<template>
  <div id="main" class="text-left text-white">
    <div class="applicationPage__1pEBM">
      <component :is="contentOfLang"></component>
    </div>
  </div>
  <this-modal />
</template>

<script>
import thisModal from './modal'
import zh from './zh'
import en from './en'

export default {
  components: { thisModal, zh, en },
  data() {
    return {
      //   player: null,
    }
  },
  computed: {
    contentOfLang() {
      return this.$store.state.lang == 'zh' ? zh : en
    },
  },
  methods: {},
}
</script>

<style></style>
