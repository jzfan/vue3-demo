<template>
  <div class="p-6 text-green text-center bg-white shadow-md">
    <h3 class="text-lg">
      {{ item.ask }}
    </h3>
    <p class="text-sm mt-6">
      {{ item.answer }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style></style>
