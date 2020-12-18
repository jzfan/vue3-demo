<template>
  <div class="relative h-screen w-full font-sans">
    <div class="absolute inset-0">
      <img src="/img/bg-contact.jpg" class="w-full h-full object-cover" />
    </div>
    <div
      class="absolute inset-0 z-10 flex flex-row-reverse items-center text-white"
    >
      <div
        class="flex-shrink-0 w-full sm:w-5/6 md:w-2/3 lg:w-1/2  
      md:px-6 px-4
      lg:px-12 "
      >
        <h1 class="text-5xl leading-normal tracking-widest">
          VR的进步，<br />从触摸开始。
        </h1>
        <p class="text-lg mt-4 tracking-wider">
          感谢您为推动VR进步做出的选择，要购买Dexmo手套版，<br />
          请通过<span
            id="email"
            @click="copyEmail"
            class="cursor-pointer"
            data-clipboard-text="111122222222333333"
            style="color:rgb(0,145,137)"
            >order@dextarobotics.com</span
          >联系我们进行商务咨询。
        </p>
        <input type="text" id="forCopy" class="opacity-0 appearance-none" />
      </div>
    </div>
    <the-tip ref="tip">邮箱地址已复制</the-tip>
  </div>
</template>

<script>
import theTip from '@/components/theTip'
export default {
  components: { theTip },
  data() {
    return {}
  },
  methods: {
    copyEmail() {
      const text = this.$el.querySelector('#email').innerText //复制文本
      console.log(text)
      const input = this.$el.querySelector('#forCopy') //承载复制内容
      input.value = text // 修改文本框的内容
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
      this.$refs.tip.show()
    },
  },
}
</script>

<style>
.contact {
  background: '/img/bg-contact.jpg';
}
</style>
