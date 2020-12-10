<template>
  <footer class="relative z-40 bg-gray-26 pt-4 text-green md:px-8">
    <div
      class="md:flex-row md:justify-between flex flex-col justify-center items-center md:items-baseline"
    >
      <ul class="flex flex-wrap text-sm space-x-6">
        <li>> 主页</li>
        <li>应用场景</li>
        <li>软件支持</li>
        <li>媒体报道</li>
        <li>关于我们</li>
        <li>产品故事</li>
      </ul>
      <div class="flex flex-col justify-center items-center">
        <p class="mt-4">联系我们: inquiry@dextarobotics.com</p>
        <logo-en class="mt-4 w-40 fill-current" />
      </div>
    </div>
    <div class="w-full mt-4 py-2 copyright text-center text-xs">
      Copyright © 2018 Dexta Robotics. All rights reserved. ??CP?�18071519?�
    </div>
  </footer>
</template>

<script>
import logoEn from '@/components/svg/logoEn'
export default {
  components: { logoEn },
}
</script>

<style>
.copyright {
  background: #232323;
  color: #565656;
}
</style>
