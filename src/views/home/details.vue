<template>
  <section class="relative py-16 bg-green text-white">
    <vertical-title>应用</vertical-title>
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
    this.axios.get('/json/home-en.json').then((res) => {
      this.all = res.data.details
    })
  },
}
</script>

<style></style>
