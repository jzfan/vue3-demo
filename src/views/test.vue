<template>
  <div v-click-away="onClickAway">
    hi
  </div>
</template>

<script>
export default {
  methods: {
    onClickAway(event) {
      console.log(event)
    },
  },
}
</script>
