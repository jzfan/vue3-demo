<template>
  <section class="py-16 bg-green text-white">
    <div class="w-100 mx-auto text-left">
      <div v-for="item in all" :key="item.title">
        <h3 class="mt-20 text-2xl font-semibold leading-none">
          {{ item.title }}
        </h3>
        <template v-for="sub in item.ps" :key="sub.subtitle">
          <h4 class="mt-2 font-bold text-xl">{{ sub.subtitle }}</h4>
          <p>
            {{ sub.p }}
          </p>
        </template>
        <img class="mt-4 w-full" :src="item.img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      all: [],
    }
  },
  created() {
    this.axios.get('/json/home.json').then((res) => {
      console.log(res.data)
      this.all = res.data.details
    })
  },
}
</script>

<style></style>
