<template>
  <footer
    class="bg-gray-26 pt-4 text-green flex flex-col justify-center items-center"
  >
    <ul class="flex text-sm space-x-6">
      <li>> 主页</li>
      <li>应用场景</li>
      <li>软件支持</li>
      <li>媒体报道</li>
      <li>关于我们</li>
      <li>产品故事</li>
    </ul>
    <p class="mt-4">联系我们: inquiry@dextarobotics.com</p>
    <logo-sm class="mt-4 w-40 fill-current" />
    <div class="w-full mt-2 py-2 copyright text-center text-xs">
      Copyright © 2018 Dexta Robotics. All rights reserved. ??CP?�18071519?�
    </div>
  </footer>
  <!-- <footer class="relative bg-gray-26">
    <div class="text-center p-3 mx-auto">
      <div class="pb-5">
        <div class="inline-block">
          <span><a class="" aria-current="page" href="/zh-cn/">主页</a></span
          ><span
            ><a class="" style="" href="/zh-cn/application">应用场景</a></span
          ><span><a class="" style="" href="/zh-cn/sdk">软件支持</a></span
          ><span><a class="" style="" href="/zh-cn/press">媒体报道</a></span
          ><span><a class="" style="" href="/zh-cn/stories">关于我们</a></span
          ><span
            ><a class="" style="" href="/zh-cn/experience">产品故事</a></span
          >
        </div>
      </div>
      <div class="right__gd0VX">
        <div class="contact__-Nj1v">
          <a href="mailto:inquiry@dextarobotics.com"
            >联系我们: inquiry@dextarobotics.com</a
          >
        </div>
        <div>
          <a class="active__1v1oR" aria-current="page" href="/zh-cn/"
            ></a>
        </div>
      </div>
    </div>
    <div class="bottom__3XCyh">
      Copyright © 2018 Dexta Robotics. All rights reserved.
      <a href="http://www.miitbeian.gov.cn">??CP?�18071519?�</a>
    </div>
  </footer> -->
</template>

<script>
import logoSm from '@/components/svg/logoSm'
export default {
  components: { logoSm },
}
</script>

<style>
.copyright {
  background: #232323;
  color: #565656;
}
</style>
