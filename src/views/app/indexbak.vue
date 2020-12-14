<template>
  <this-header />
  <main class="relative">
    <div
      class="absolute object-cover w-full h-full opacity-75 bg-black"
      style='background:url("/img/app-1.jpg") no-repeat;'
    >
      <div class="py-16 w-full">aaaa</div>
    </div>
  </main>
</template>

<script>
import thisHeader from './header'
export default {
  components: { thisHeader },
}
</script>

<style></style>
