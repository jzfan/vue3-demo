<template>
  <div id="app-section" class=" bg-white">
    <div class="applicationPage__1pEBM">
      <this-header />
      <div class="applicationContainer__JcPuN">
        <this-sections />
      </div>
    </div>
  </div>
  <this-modal />
</template>

<script>
import thisModal from './modal'
import thisHeader from './header'
import thisSections from './sections'

export default {
  components: { thisModal, thisHeader, thisSections },
  data() {
    return {
      //   player: null,
    }
  },
  computed: {},
  methods: {},
}
</script>

<i18n>
{
  "en": {
    "tag": "Q&A"
  },
  "zh": {
    "tag": "包装"
  }
}
</i18n>

<style></style>
