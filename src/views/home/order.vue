<template>
  <section class="bg-white py-12 relative" id="order-section">
    <vertical-title class="top-8">{{ $t('tag') }}</vertical-title>

    <ul class="flex flex-wrap md:space-y-0 space-y-10 lg:w-1/2 mx-auto">
      <li
        v-for="index in 3"
        :key="index"
        class="w-full md:w-1/3 flex flex-col items-center justify-center"
      >
        <div class="relative flex flex-col items-center justify-center group">
          <div
            class="hidden group-hover:block absolute w-56 x-center top-0 py-6 px-2 text-sm text-white bg-black opacity-75"
          >
            {{ $t(`list.${index - 1}.detail`) }}
          </div>
          <img class="w-36" :src="$t(`list.${index - 1}.img`)" />
          <div class="mt-6 w-24 h-1 bg-green-dark"></div>
          <div class="mt-5 text-green-dark">
            {{ $t(`list.${index - 1}.name`) }}
          </div>
        </div>
        <button
          @click="index == 3 || $router.push('/contact')"
          class="mt-4 btn "
          :class="
            index == 3
              ? 'appearance-none bg-gray-ed text-gray-dark'
              : 'btn-green'
          "
        >
          {{ $t(`list.${index - 1}.btn`) }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<i18n>
{
  "en": {
    "tag": "Contact Us",
    "list": [
        {
            "img": "/img/sy-order.jpg",
            "name": "Developer Edition",
            "btn": "CONTACT US",
            "detail": "[Completed mass production, Ready to Ship NOW] Mainly facing colleges, enterprises and other scientific research institutions for exploration and verification purpose of early stage projects. Depending on the specific use case, purchasing volume and demand for software support, the price will vary. "
        },
        {
            "img": "/img/sy-order.jpg",
            "name": "Enterprise Edition",
            "btn": "CONTACT US",
            "detail": "[Completed R&D, Coming Soon] Mainly facing commercial users with specific field of applications, such as VR arcade, training simulation, education and entertainment. Depending on the specific use case, purchasing volume and customization requirements, the price will vary. "
        },
        {
            "img": "/img/sy-7.jpg",
            "name": "Consumer Edition",
            "btn": "COMMING SOON",
            "detail": "[Under R&D, coming soon] mainly built for the general consumers. Currently our R&D focuses on costs reduction and software support improvements so that consumers can enjoy Dexmo when getting theirs. The price is to be determined. It is expected to be of hundred dollars.",
            "disable": true
        }
    ]
  },
  "zh": {
    "tag": "联系咨询",
    "list": [
        {
            "img": "/img/sy-order.jpg",
            "name": "开发版",
            "btn": "联系咨询",
            "detail": "[已完成量产，即刻即可购买]主要面对院校，企业等科研机构开放订购，用于早期项目的探索与验证。取决于具体使用场景，采购量和对软件支持的需求，价格会有不同程度的变化。"
        },
        {
            "img": "/img/sy-order.jpg",
            "name": "企业版",
            "btn": "联系咨询",
            "detail": "[已完成量产，即刻即可购买]主要面对院校，企业等科研机构开放订购，用于早期项目的探索与验证。取决于具体使用场景，采购量和对软件支持的需求，价格会有不同程度的变化。"
        },
        {
            "img": "/img/sy-7.jpg",
            "name": "消费版",
            "btn": "即将推出",
            "detail": "[正在研发中，即将推出]主要面对普通消费者开发订购。目前研发重心主要在降低成本以及完善软件支持，让消费者可以愉快地使用Dexmo。售价未定。预计将在百元美金级别",
            "disable": true
        }
    ]

  }
}
</i18n>
