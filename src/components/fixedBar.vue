<template>
  <nav class="fixed z-20 right-0 top30vh p-2 bg-gray-f5 rounded-md">
    <ul class="space-y-2">
      <li class="px-1 rounded-md bg-white" v-for="item in all" :key="item.icon">
        <i
          class="iconfont hover:text-green text-3xl cursor-pointer"
          :class="item.icon"
          @click="onClick(item)"
        ></i>
      </li>
    </ul>

    <transition name="slide-fade">
      <div
        class="origin-top-right absolute top-0 right-12 w-40 rounded-md shadow-md py-2 bg-gray-f5 ring-1 ring-black ring-opacity-5 text-lg text-gray-darkest"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        v-if="showForm"
      >
        <h3 class="text-lg text-center text-green">订阅</h3>
        <div class="m-2">
          <input
            type="text"
            class="px-2 focus:ring-green focus:border-green block w-full shadow-sm sm:text-sm border border-gray-aa "
            placeholder="Your name"
          />
        </div>
        <div class="m-2">
          <input
            type="email"
            class="px-2 focus:ring-green focus:border-green block w-full shadow-sm sm:text-sm border border-gray-aa "
            placeholder="Enter your email"
          />
        </div>
        <div class="m-2 mt-3">
          <button
            class="w-full border border-green text-xs rounded hover:bg-green hover:text-white"
          >
            提交
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      all: [
        { icon: 'icon-email text-gray-dark', act: 'emailForm' },
        {
          icon: 'icon-wechat text-green-light',
          url: 'http://v.qq.com/s/videoplus/1704125876',
        },
        {
          icon: 'icon-weibo text-red',
          url: 'http://v.qq.com/s/videoplus/1704125876',
        },
        {
          icon: 'icon-CN_tencentvideo text-blue-DEFAULT',
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU3NDgwODg4OQ==&mid=100000022&idx=1&',
        },
      ],
    }
  },
  methods: {
    onClick(item) {
      if (item.url) {
        window.open(item.url, '_blank')
        return
      }
      this[item.act](item)
    },
    emailForm(item) {
      if (this.showForm) {
        this.showForm = false
        item.icon = 'icon-email'
      } else {
        this.showForm = true
        item.icon = 'icon-email_open'
      }
      //   console.log(222222)
    },
  },
}
</script>

<style>
.top30vh {
  top: 30vh;
}
</style>
