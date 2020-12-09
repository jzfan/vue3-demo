<template>
  <nav class="fixed right-0 top30vh p-2 bg-gray-f5 rounded-md">
    <ul class="">
      <li v-for="item in all" :key="item.icon">
        <i
          class="iconfont hover:text-green text-3xl cursor-pointer"
          :class="item.icon"
          @click="onClick(item)"
        ></i>
      </li>
    </ul>

    <transition name="slide-fade">
      <div
        class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-md py-2 bg-white ring-1 ring-black ring-opacity-5 text-lg text-gray-darkest"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        v-if="showForm"
      >
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first_name"
            class="block text-sm font-medium text-gray-700"
            >First name</label
          >
          <input
            type="text"
            name="first_name"
            id="first_name"
            autocomplete="given-name"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
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
      item.icon = 'icon-'
      this.showForm = true
      console.log(222222)
    },
  },
}
</script>

<style>
.top30vh {
  top: 30vh;
}
</style>
