<template>
  <this-header />
  <main class="text-black">
    <div class="max-w-7xl mx-auto">
      <this-intro />
      <this-product />
      <this-app />
      <this-params />
      <div class="md:hidden h-2 w-full bg-green-dark"></div>
      <this-pack />
      <this-questions />
      <this-order />
    </div>
  </main>
</template>

<script>
import thisProduct from './product'
import thisParams from './params'
import thisPack from './pack'
import thisQuestions from './questions/index'
import thisOrder from './order'
import thisHeader from './header'
import thisIntro from './intro'
import thisApp from './app'
export default {
  components: {
    thisProduct,
    thisParams,
    thisPack,
    thisQuestions,
    thisOrder,
    thisHeader,
    thisIntro,
    thisApp,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
