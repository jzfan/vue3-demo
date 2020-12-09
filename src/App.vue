<template>
  <the-layout class="min-h-screen" style="height: 5000px">
    <router-view />
    <fixed-bar />
  </the-layout>
</template>

<script>
import theLayout from '@/components/layout'
import fixedBar from '@/components/fixedBar'
export default {
  components: { theLayout, fixedBar },
  created() {},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
