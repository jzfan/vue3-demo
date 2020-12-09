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
  created() {
    this.axios
      .post(
        'https://www.fastmock.site/mock/507a85e6b7c4ee9a9665cd6420519068/api/login',
        {},
      )
      .then((res) => {
        console.log(res.data)
      })
  },
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
