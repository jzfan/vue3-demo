<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <anchored-heading :level="1">hello world</anchored-heading>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {},
};
</script>
