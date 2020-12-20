<template>
  <div class="sdk__2TYSW">
    <div class="header__3Ij1E">
      <div class="headerContentContainer__3wxZq">
        <h1>{{ $t('title') }}</h1>
        <p>
          {{ $t('subtitle') }}
        </p>
        <div class="headerContentImage__2MDce">
          <img src="/img/sdk-logo.png" class="inline-block" /><img
            class="inline-block"
            src="/img/sdk-logo2.png"
          />
        </div>
      </div>
    </div>
    <section
      class="dexta-section center light lighter trackingSystemSection__3qcYS"
      id="trackingSystem"
    >
      <div class="diagramHeader__2DXbl">
        <img class="inline-block" src="/img/sdk-2.png" /><img
          class="inline-block"
          src="/img/sdk-3.png"
        />
      </div>
      <div class="dexta-section-content">
        <h1 class="text-6xl font-semibold mb-6">{{ $t('title2') }}</h1>
        <p>
          {{ $t('desc2') }}
        </p>
      </div>
      <div class="diagramFooter__2tUIB">
        <img class="inline-block" src="/img/sdk-4.jpg" /><img
          class="inline-block"
          src="/img/sdk-5.png"
        />
      </div>
    </section>
    <section
      class="dexta-section center light dexterityEngineSection__1lSLu"
      id="dexterityEngine"
    >
      <div class="dexta-section-content">
        <h1 class="text-6xl font-semibold mb-6">{{ $t('title3') }}</h1>
        <p>
          {{ $t('desc3') }}
        </p>
      </div>
      <div class="scenarioContainer__1Fw-V text-left">
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-1.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/tele-operation.gif"
            />
            <p>{{ $t('img1') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-2.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/variable-stiffness.gif"
            />
            <p>{{ $t('img2') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-3.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/finger-flicking.gif"
            />
            <p>{{ $t('img3') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-4.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/finger-tapping.gif"
            />
            <p>{{ $t('img4') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-5.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/rotating-discs.gif"
            />
            <p>{{ $t('img5') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-6.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/button-pressing.gif"
            />
            <p>{{ $t('img6') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-7.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/pushing-and-pulling-tasks.gif"
            />
            <p>{{ $t('img7') }}</p>
          </div>
        </div>
        <div class="scenario__3JzCM">
          <div class="scenarioContent__1kL8c">
            <img class="static__a_E_3" src="/img/sdk-list-8.jpg" /><img
              class="gif__2FVkg"
              src="https://oss-main.dextarobotics.com/images/sdk/scenarios/finger-pinching-spinning.gif"
            />
            <p>{{ $t('img8') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import zh from './zh'
import en from './en'

export default {
  components: { zh, en },
  data() {
    return {
      //   player: null,
    }
  },
  computed: {
    contentOfLang() {
      return this.$store.state.lang == 'zh' ? zh : en
    },
  },
  methods: {},
}
</script>

<i18n>
{
  "en": {
    "title": "SDK",
     "subtitle": "The SDK Dexta Robotics provide has a complete set of hand interaction physics engine called the Dexterity Engine that allows users to easily build their programs with modules of motions.",
    "title2": "Tracking System",
    "title3": "Dexterity Engine",
    "desc2": "Dexmo can share the 6DoF position data from almost any existing tracking systems, such as the OptiTrack tracking solution, Oculus's Constellation tracking solution, Sony's PSVR tracking system, or Valve's Lighthouse tracking system. Spatial tracking is achieved by attaching trackers or tracked controllers to its body via a changeable mount. As long as there is a 6DoF data input, Dexmo is compatible with that tracking system.",
    "desc3": "Dexmo's SDKs provide a complete set of hand-object interactions. Our physics engine, the Dexterity Engine, allows developers to easily build their applications with modules of interactions. For any object in the application that users need to touch, grasp, squeeze, pinch, flip, flick or rotate with their hands, the Dexterity Engine will do the work.",
    "img1": "Tele-operation",
    "img2": "Stiffness Simulation",
    "img3": "Finger-flicking",
    "img4": "Pinching",
    "img5": "Wheel-scrolling",
    "img6": "Button-pressing",
    "img7": "Lever-pulling",
    "img8": "Knob-turning"
  },
  "zh": {
    "title": "软件支持",
    "subtitle": "Dexta Robotics提供的SDK具有完整的手部交互物理引擎——灵巧引擎，用户可以通过运动模组轻松地构建他们的程序。",
    "title2": "定位追踪系统",
    "title3": "灵巧引擎",
    "desc2": "Dexmo可以共享几乎任何现有追踪系统的6自由度位置数据解决方案，如OptiTrack追踪方案，Oculus的Constellation追踪方案，索尼的PSVR追踪系统，Valve的Lighthouse追踪系统等。空间追踪是通过将定位器或控制器通过一个可更换的支架连接到Dexmo来实现的。只要有6自由度的数据输入，Dexmo就可以与该追踪系统兼容。",
    "desc3": "Dexmo的SDK提供一套完整的手部交互方案。我们的物理引擎——灵巧引擎——可以让开发者通过交互模块轻松构建他们的应用程序。在应用程序中，灵巧引擎可以实现用户与对象间的触摸、抓取、挤压、揉捏、弹拨或旋转等互动。",
    "img1": "远程操作",
    "img2": "可变刚度",
    "img3": "轻弹/敲击",
    "img4": "按压/弹拨",
    "img5": "旋转/拨动",
    "img6": "按压按钮",
    "img7": "推拉动作",
    "img8": "揉捏/拧转"

  }
}
</i18n>

<style></style>
