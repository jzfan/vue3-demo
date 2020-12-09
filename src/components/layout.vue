<template>
  <div>
    <the-nav />
    <slot></slot>
    <the-footer />
  </div>
</template>

<script>
import theNav from './theNav'
import theFooter from './theFooter'
export default {
  components: { theNav, theFooter },
}
</script>

<style></style>
