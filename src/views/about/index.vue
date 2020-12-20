<template>
  <div id="main">
    <div class="stories__13svm">
      <this-header />
      <section class="dexta-section center" id="iterativeProduct">
        <this-intro />
        <this-products />
      </section>
      <this-work />
      <this-team />
    </div>
  </div>
</template>

<script>
import thisIntro from './intro'
import thisProducts from './products'
import thisHeader from './header'
import thisTeam from './team/index'
import thisWork from './work'
export default {
  components: { thisIntro, thisProducts, thisHeader, thisTeam, thisWork },
}
</script>

<style></style>
