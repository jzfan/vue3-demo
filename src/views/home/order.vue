<template>
  <section class="bg-white py-12 relative" id="order-section">
    <vertical-title class="top-8">联系咨询</vertical-title>
    <ul class="flex flex-wrap space-y-10">
      <li
        v-for="item in all"
        :key="item.name"
        class="w-full md:w-1/3 flex flex-col items-center justify-center"
      >
        <div class="relative flex flex-col items-center justify-center group">
          <div
            class="hidden group-hover:block absolute w-56 x-center top-0 py-6 px-2 text-sm text-white bg-black opacity-75"
          >
            {{ item.detail }}
          </div>
          <img class="w-36" :src="item.img" />
          <div class="mt-6 w-24 h-1 bg-green-dark"></div>
          <div class="mt-5 text-green-dark">{{ item.name }}</div>
        </div>
        <button
          class="mt-4 btn "
          :class="
            item.disable ? 'disabled bg-gray-f5 text-gray-dark' : 'btn-green'
          "
        >
          {{ item.btn }}
        </button>
      </li>

      <!-- <li class="w-full md:w-1/3 flex flex-col items-center justify-center">
        <img class="w-36" src="/img/sy-order.jpg" />
        <div class="mt-6 w-24 h-1 bg-green-dark"></div>
        <div class="mt-5 text-green-dark">消费版</div>
        <button class="mt-4 btn disabled bg-gray-f5 text-gray-dark">
          即将推出
        </button>
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      all: [],
    }
  },
  watch: {
    '$store.state.lang': {
      immediate: true,
      handler: function(newVal) {
        console.log('order: ', newVal)
        // if (newVal == 'zh') {
        this.all = [
          {
            img: '/img/sy-order.jpg',
            name: '开发版',
            btn: '即刻购买',
            detail:
              '[已完成量产，即刻即可购买]主要面对院校，企业等科研机构开放订购，用于早期项目的探索与验证。取决于具体使用场景，采购量和对软件支持的需求，价格会有不同程度的变化。',
          },
          {
            img: '/img/sy-order.jpg',
            name: '企业版',
            btn: '立即购买',
            detail:
              '[已完成量产，即刻即可购买]主要面对院校，企业等科研机构开放订购，用于早期项目的探索与验证。取决于具体使用场景，采购量和对软件支持的需求，价格会有不同程度的变化。',
          },
          {
            img: '/img/sy-7.jpg',
            name: '消费版',
            btn: '即将推出',
            detail:
              '[正在研发中，即将推出]主要面对普通消费者开发订购。目前研发重心主要在降低成本以及完善软件支持，让消费者可以愉快地使用Dexmo。售价未定。预计将在百元美金级别',
            disable: true,
          },
        ]
        // }
      },
    },
  },
}
</script>
