<template>
  <div
    class="application__rqKfK"
    style="background: black none no-repeat scroll center center / cover; position: relative;"
    v-for="item in all"
    :key="item.title"
  >
    <div
      class="absolute inset-0 opacity-25"
      :style="{
        background:
          'rgba(0, 0, 0, 0) url(' +
          item.bg +
          ') no-repeat scroll center center / cover',
      }"
    ></div>
    <div class="applicationContent__NUXTU" style="z-index: 1;">
      <h2 class="text-3xl">{{ item.title }}</h2>
      <div class="video__XSIRH" v-for="card in item.cards" :key="card.title">
        <div class="videoContainer__2gwEH" @click="onShowVideo(card)">
          <div class="video__bVhmv">
            <div class="videoThumbnail__17_-H shadow__1pyg5 rounded__2pW-K">
              <i class="iconfont icon-play"></i
              ><img :src="card.img" style="width: 200px;" />
            </div>
          </div>
        </div>
        <div class="videoContent__gUcl3">
          <h3>{{ card.title }}</h3>
          <p>
            {{ card.desc
            }}<span
              v-if="card.source"
              class="text-xs"
              style="color: rgb(102, 102, 102);"
            >
              ({{ card.source }})
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import en from './en.json'
import zh from './zh.json'

export default {
  data() {
    return {}
  },
  computed: {
    all() {
      return this.$store.state.lang == 'zh' ? zh : en
    },
  },
  methods: {
    onShowVideo(video) {
      this.$bus.emit('modal-play', video)
    },
  },
}
</script>

<style>
#app-section .videoThumbnail__17_-H i {
  color: white;
}
</style>
