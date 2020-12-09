<template>
  <div class="absolute font-thin text-lg text-left text-green vertical-title">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
.vertical-title {
  left: 2rem;
  transform-origin: left;
  transform: rotate(90deg);
}

.vertical-title::before {
  display: inline-block;
  content: '';
  width: 3px;
  height: 14px;
  margin-right: 10px;
  background: #00918a;
}
</style>
