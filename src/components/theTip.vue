<template>
  <transition name="fade">
    <div
      v-show="showTip"
      class="fixed bg-opacity-75 top-1/3 x-center z-50 px-6 py-3 w-64 rounded-md bg-green text-white"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showTip: false,
    }
  },
  methods: {
    show() {
      this.showTip = true
      setTimeout(() => {
        this.showTip = false
      }, 3000)
    },
  },
}
</script>

<style></style>
