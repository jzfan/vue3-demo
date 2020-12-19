<template>
  <div id="main" class="text-left text-white">
    <div class="press__1b_tf">
      <div class="header__3pW9c">
        <div class="headerContentContainer__ZeYAV">
          <h1>媒体报道</h1>
          <p>
            如果您是媒体人士，想与Dexta
            Robotics的成员沟通，请发送邮件至cooperation@dextarobotics.com联系我们。
          </p>
        </div>
      </div>
      <div class="mediaWall__iK3g_">
        <img src="/img/press-2.jpg" />
      </div>
      <div class="">
        <div
          class="news__3hDSk"
          v-for="item in all"
          :key="item.title"
          @click="goLink(item.link)"
        >
          <div class="container__QPPmP">
            <div class="leftContent__2k4lZ">
              <h2 class="title__3uKB3">
                {{ item.title }}
              </h2>
              <p class="content__d1lhL">
                {{ item.desc }}
              </p>
              <div class="icon__33iOm">
                <img :src="item.logo" />
              </div>
            </div>
            <div class="rightContent__1-RRI">
              <div class="image__2o3nW">
                <img :src="item.img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" style="color: black; text-align: center; padding: 30px;">
        <div
          v-show="loading"
          class="loading__B-3UD"
          style="height: 70px; min-height: 70px;"
        >
          <div class="ldsDualRing__1Xexi"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      all: [
        {
          title: 'Discovery Channel Unveils Smart China',
          desc:
            'Will this Chinese start-up revolution change the way we all live our lives?',
          logo:
            'https://cms.dextarobotics.com/uploads/197b71ea1b9946318c023c57b51cb4d4.png',
          img:
            'https://cms.dextarobotics.com/uploads/0d75b9f0ec1d4a4cbe10dcf6c2b50e80.png',
          link: 'https://en.prnasia.com/mnr/discoverychina_201712.shtml',
        },
        {
          title: 'Hands-On with Dexmo VR Haptic Exoskeleton!',
          desc:
            'Jeremy and Norm discuss how hand presence has presented itself to consumers over the past three years of virtual reality hardware.',
          logo:
            'https://cms.dextarobotics.com/uploads/1f3d6433a6974230a09109600bee3cd7.png',
          img:
            'https://cms.dextarobotics.com/uploads/afb1d5d86a604d43ac29a314e2a50a7e.png',
          link: 'https://www.youtube.com/watch?v=EAy6aRnUslY',
        },
        {
          title:
            'This Accessory Makes VR So Real a Surgeon Could Train with It',
          desc:
            'Using this exoskeleton in a virtual environment, a baseball feels firm, and an egg light and fragile.',
          logo:
            'https://cms.dextarobotics.com/uploads/3442a71b8fcb441c9996090011902b8b.png',
          img:
            'https://cms.dextarobotics.com/uploads/b9053a54e2554942b7498942a653ec96.jpg',
          link:
            'https://www.technologyreview.com/2016/09/30/70059/this-accessory-makes-vr-so-real-a-surgeon-could-train-with-it/',
        },
        {
          title:
            'Let This Mechanical Hand Centipede Tell You How The Shadow World Feels',
          desc:
            'Dexta has been polishing it for nearly three years now, although there’s still no consumer version planned. As VR accessories go, it’s certainly one of the more interesting ones.',
          logo:
            'https://cms.dextarobotics.com/uploads/964c2f2c1781417192fc4a970d0f6290.png',
          img:
            'https://cms.dextarobotics.com/uploads/8c99d5a728cb453298a0afc479a81985.PNG',
          link:
            'https://www.theverge.com/circuitbreaker/2016/8/24/12624934/dexmo-dexta-robotics-haptic-vr-exoskeleton',
        },
        {
          title: 'The VR glove that allows you to feel',
          desc:
            'Dexta Robotics are working to create a glove that will allow you to feel in a virtual reality space',
          logo:
            'https://cms.dextarobotics.com/uploads/a94c57a0a51a44708829dfd508cfdb48.png',
          img:
            'https://cms.dextarobotics.com/uploads/56d99483d97b49c6a8d4fc79908f6b5b.png',
          link:
            'https://www.bbc.com/news/av/technology-31049807/the-vr-glove-that-allows-you-to-feel',
        },
        // {title: 'title', desc: 'desc', logo: 'logo', img: 'img', link: 'link'},
      ],
    }
  },

  methods: {
    goLink(url) {
      window.open(url, '__blank')
    },
    onScroll() {
      let innerHeight = document.querySelector('#app').clientHeight
      let outerHeight = document.documentElement.clientHeight
      let scrollTop = document.documentElement.scrollTop
      if (outerHeight + scrollTop >= innerHeight) {
        console.log('will show loading...')
        this.getData()
      }
    },
    getData() {
      this.loading = true
      setTimeout(() => {
        if (this.all.length < 40) {
          this.all = this.all.concat(this.all)
        }
        this.loading = false
      }, 1500)
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style></style>
