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
        class="origin-top-right absolute top-0 right-16 w-40 rounded-md shadow-md py-2 bg-gray-f5 ring-1 ring-black ring-opacity-5 text-lg text-gray-darkest"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        v-if="showForm"
      >
        <div
          class="h-3 w-3 transform rotate-45 absolute -mr-1 right-0 top-6 bg-gray-f5"
        ></div>
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
      showForm: true,
      all: [
        { icon: 'icon-email_open text-gray-dark', act: 'emailForm' },
        {
          icon: 'icon-wechat text-green-light',
          url:
            'https://mp.weixin.qq.com/s?__biz=MzU3NDgwODg4OQ==&mid=100000022&idx=1&sn=848a07eac9d69b11159c650ca7cc13ac&chksm=7d2df7404a5a7e56c5432eb25c9099161e31c1c7a79270e82a852cb915f54937d28d97bf678b&mpshare=1&scene=1&srcid=&key=96e286bf1fa90d3e5f06ec0e6cca7b2fd81b5fab092d2b1f2d888a037a3e7191bad746dc8e376f1d14cf7752fcc6d8b8a3cadf30411adcdcbd281d5fd2dcaf8878fa5e8a0ac5b78d0de13c6052397fea&ascene=1&uin=MjA1NzMzNDEyMQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=KGMcEj3D7Q7o3mGQGCdwmdYdHkwbCi6yy6RTL%2BLKFSb%2F9GmYLvxO9GNOkaj0%2BEzk',
        },
        {
          icon: 'icon-weibo text-red',
          url: 'https://weibo.com/dextarobotics',
        },
        {
          icon: 'icon-CN_tencentvideo text-blue-DEFAULT',
          url: 'http://t.cn/Ai9jObrU',
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
