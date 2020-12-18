<template>
  <div
    class="dexta-section dark productSectionV2__3xNzZ text-left"
    id="product-section"
    v-if="all.length"
  >
    <vertical-title class="top-8">产品</vertical-title>
    <div class="productSectionV2Container__2O7Kq">
      <div
        class="innerContainer__3NBpB"
        style="z-index: 1; position: relative;"
      >
        <div class="productSectionV2Content__3hrny">
          <h1>{{ all[0].title }}</h1>
        </div>
        <div class="productSectionV2Content__3hrny">
          <template v-for="(sub, index) in all[0].ps" :key="index">
            <div
              class="productSectionV2ContentPart__2czkH"
              :class="showSubIndex == '0' + index ? 'active__27aEM' : ''"
            >
              <h2 @click="toggleShowP('0' + index)">
                {{ sub.subtitle }}
              </h2>
              <p>
                {{ sub.p }}
              </p>
            </div>
          </template>
        </div>
        <div>
          <img
            src="https://oss-main.dextarobotics.com/images/home/free-to-use-ch.gif"
          />
        </div>
      </div>
    </div>
    <div class="productSectionV2ContainerRight__8rE6R">
      <div
        class="innerContainer__3NBpB"
        style="z-index: 1; position: relative;"
      >
        <div class="productSectionV2Content__3hrny">
          <h1>{{ all[1].title }}</h1>
        </div>
        <div class="productSectionV2Content__3hrny">
          <template v-for="(sub, index) in all[1].ps" :key="index">
            <div
              class="productSectionV2ContentPart__2czkH"
              :class="showSubIndex == '1' + index ? 'active__27aEM' : ''"
            >
              <h2 @click="toggleShowP('1' + index)">
                {{ sub.subtitle }}
              </h2>
              <p>
                {{ sub.p }}
              </p>
            </div>
          </template>
        </div>
        <div>
          <img
            src="https://oss-main.dextarobotics.com/images/home/truly-intuitive-natural-interaction-ch.gif"
          />
        </div>
      </div>
      <div
        class="innerContainer__3NBpB innerContainerB__2TgD4"
        style="z-index: 1; position: relative;"
      >
        <div class="productSectionV2Content__3hrny">
          <h1>{{ all[2].title }}</h1>
        </div>
        <div class="productSectionV2Content__3hrny">
          <template v-for="(sub, index) in all[2].ps" :key="index">
            <div
              class="productSectionV2ContentPart__2czkH"
              :class="showSubIndex == '2' + index ? 'active__27aEM' : ''"
            >
              <h2 @click="toggleShowP('2' + index)">
                {{ sub.subtitle }}
              </h2>
              <p>
                {{ sub.p }}
              </p>
            </div>
          </template>
        </div>
        <div>
          <img
            src="https://oss-main.dextarobotics.com/images/home/mass-production-ch.gif"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: [],
      showSubIndex: '00',
    }
  },
  watch: {
    '$store.state.lang': {
      immediate: true,
      handler: function(newVal) {
        this.$i18n.locale = newVal
        this.showSubIndex = '00'
        let url = `/json/home-${newVal}.json`
        this.axios.get(url).then((res) => {
          this.all = res.data.details
        })
      },
    },
  },
  methods: {
    toggleShowP(index) {
      this.showSubIndex = this.showSubIndex == index ? '' : index
    },
  },
}
</script>

<i18n>
{
  "en": {
    "title": "The virtual world lies within your grasp",
    "p": "Dexmo, the world's first commercialized light weight, wireless, dual hand force feedback glove. It offers the most compelling force feedback experience with both motion capture and force feedback abilities, designed for the use in training, education, medical, gaming, simulation, aerospace and much more."
  },
  "zh": {
    "title": "虚拟世界 尽在掌握",
    "p": "Dexmo是全球第一款商业化便携式双手无线力反馈手套，兼具手部动作捕捉与力反馈功能，带来最激动人心的力反馈互动体验，可广泛应用于航空航天、工业培训、教育科研、医疗康复、仿真建模、游戏社交等各领域。"
  }
}
</i18n>

<style></style>
