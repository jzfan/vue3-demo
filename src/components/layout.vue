<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <!-- <the-nav /> -->
    <slot></slot>
  </div>
</template>

<script>
import theNav from './theNav'
export default {
  components: { theNav },
}
</script>

<style></style>
