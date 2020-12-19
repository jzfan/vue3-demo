<template>
  <this-header />
  <main class="text-black">
    <div class="max-w-7xl mx-auto">
      <this-intro />
      <this-product />
      <this-app />
      <this-params />
      <!-- <div class="md:hidden h-2 w-full bg-green-dark"></div> -->
      <this-pack />
      <this-questions />
      <this-order />
    </div>
  </main>
</template>

<script>
import thisProduct from './product2'
import thisParams from './params/index'
import thisPack from './pack2'
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
  created() {
    this.$bus.on('scroll-id', (id) => {
      console.log('scroll anchor: ', id)
      var anchor = document.querySelector('#' + id)
      window.scrollTo({
        top: anchor.offsetTop - 48,
        behavior: 'smooth',
      })
      //   this.scrollById(id)
    })

    let id = this.$route.params.anchor_id
    if (id) {
      this.scrollById(id)
    }
  },
  methods: {
    scrollById(id) {
      this.$nextTick(() => {
        var anchor = document.querySelector('#' + id)
        window.scrollTo({
          top: anchor.offsetTop - 48,
          behavior: 'smooth',
        })
      })
    },
  },
  beforeUnmount() {
    this.$bus.all.clear()
  },
}
</script>

<style></style>
