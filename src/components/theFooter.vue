<template>
  <footer class="">
    <div class="container__2zaSh">
      <div class="left__3W-3e">
        <div class="nav__2GOMa">
          <span
            ><a
              class="active__1v1oR"
              aria-current="page"
              @click="$router.push('/')"
              >{{ $t('home') }}</a
            ></span
          ><span
            ><a
              class="cursor-pointer"
              :class="$route.path == '/app' ? 'active__1v1oR' : ''"
              @click="$router.push('app')"
              style=""
              aria-current="page"
              >{{ $t('app') }}</a
            ></span
          ><span
            ><a
              class="cursor-pointer"
              :class="$route.path == '/sdk' ? 'active__1v1oR' : ''"
              @click="$router.push('/sdk')"
              >{{ $t('sdk') }}</a
            ></span
          ><span
            ><a
              class="cursor-pointer"
              :class="$route.path == '/press' ? 'active__1v1oR' : ''"
              @click="$router.push('/press')"
              >{{ $t('press') }}</a
            ></span
          ><span
            ><a
              :class="$route.path == '/about' ? 'active__1v1oR' : ''"
              class="cursor-pointer"
              @click="$router.push('/about')"
              >{{ $t('about') }}</a
            ></span
          ><span
            ><a
              class="cursor-pointer"
              :class="$route.path == '/product' ? 'active__1v1oR' : ''"
              @click="$router.push('/product')"
              >{{ $t('product') }}</a
            ></span
          >
        </div>
      </div>
      <div class="right__gd0VX">
        <div class="contact__-Nj1v">
          <a href="mailto:inquiry@dextarobotics.com"
            >{{ $t('contact') }}: inquiry@dextarobotics.com</a
          >
        </div>
        <div>
          <a
            class="active__1v1oR cursor-pointer"
            aria-current="page"
            title="logo"
            @click="$router.push('/')"
            ><svg
              id="svg-logo-2pfGa-G"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 4251.97 505.39"
              class="logo__1ZYDN"
            >
              <title>logo</title>
              <path
                d="M0,35.86H138.81q89,0,146.38,34.39t83.6,89Q395,213.8,395,276.25q0,66.89-31.55,118a212,212,0,0,1-84.86,78.55q-53.33,27.45-117,27.45H0Zm145.75,376q71.29,0,112.94-36.59t41.64-105.37q0-55.51-23-88.33t-53.63-45.43q-30.61-12.61-57.73-12.62H91.49V411.91Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M664.39,414.43l39.12,65.62a240.76,240.76,0,0,1-48,20.19q-25.24,7.57-48,7.57-49.21,0-84.86-18.61T468.8,436.83q-18.31-33.75-18.3-77.29a138.5,138.5,0,0,1,21.14-74.45q21.13-34.07,57.73-53.95t80.13-19.87q59.3,0,97.48,34.7T756.51,345L554.61,409.39q20.19,23.35,54.89,23.35Q636,432.73,664.39,414.43ZM555.24,300.23q-17.67,20.2-17.67,54.26v5.68l121.14-41Q645.46,280,602.56,280,572.89,280,555.24,300.23Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M984.91,500.24l-63.73-82.66-58,82.66h-87.7L877.65,361.43,772.28,224.52H880.81L941.38,304l47.32-79.5h87.7L981.76,356.39l109.79,143.86Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M1257.48,103.37V223.26h66.88V292h-66.88V500.24h-88.33V292h-42.9V223.26h42.9V103.37Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M1688.42,224.52V500.24h-88.33V466.17q-39.75,41.64-92.12,41.64-61.21,0-99.38-36.6T1370.42,362.7q0-45.43,18.61-79.82t49.53-53.32a124.66,124.66,0,0,1,66.25-18.93q36.59,0,58,11a118.75,118.75,0,0,1,37.86,31.23l5.68-28.39Zm-88.33,169.73V326.73a64.41,64.41,0,0,0-26.18-32.18q-18.62-12-43.85-12-29,0-49.53,21.45T1460,358.28a79.15,79.15,0,0,0,10.09,39.44,74.78,74.78,0,0,0,26.82,28.08,68.88,68.88,0,0,0,36.28,10.1Q1579.25,435.89,1600.08,394.24Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M2044.28,500.24l-97.8-147.64h-61.2V500.24h-91.49V35.86h140.7q86.44,0,134.08,42t47.64,114.52a183.79,183.79,0,0,1-18,80.45q-18,37.55-55.21,59l107.89,168.46Zm-159-236h65q37.22,0,54.26-21.77t17-47q0-25.23-14.51-48.27t-56.16-23h-65.62Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M2197.91,283.2q19.88-33.44,56.16-52.68t82.34-19.24q46,0,81.08,19.24t53.95,52.68q18.93,33.45,18.93,75.71t-18.93,76.35q-18.93,34.07-53.95,53.32t-82.34,19.24q-46.07,0-81.71-18t-55.52-51.42Q2178,405,2178,358.91,2178,316.65,2197.91,283.2Zm88,130.92q18.93,21.77,48,21.77,30.29,0,48.9-21.45t18.61-54.89q0-33.44-18.61-54.89t-48.9-21.45q-29,0-48,21.77T2267,359.54Q2267,392.36,2285.93,414.12Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M2818.77,228q30,17.36,47.64,50.16t17.67,78.24q0,45.43-19.56,79.82t-52.37,53a142.15,142.15,0,0,1-71.3,18.61q-56.16,0-92.75-35.33v27.76h-88.33V2.42h87.7v241q17.66-14.51,44.8-23.66t60.57-9.15Q2788.8,210.64,2818.77,228Zm-61.2,195.28a74.89,74.89,0,0,0,26.81-28.08,79.24,79.24,0,0,0,10.1-39.43q0-32.8-21.45-54.26T2721.29,280q-25.88,0-45.43,12t-27.76,32.18v67.51q22.71,41.64,73.19,41.64A68.92,68.92,0,0,0,2757.57,423.27Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M2951.9,283.2q19.88-33.44,56.16-52.68t82.34-19.24q46,0,81.08,19.24t53.95,52.68q18.93,33.45,18.93,75.71t-18.93,76.35q-18.93,34.07-53.95,53.32t-82.34,19.24q-46.07,0-81.71-18t-55.52-51.42Q2932,405,2932,358.91,2932,316.65,2951.9,283.2Zm88,130.92q18.93,21.77,48,21.77,30.29,0,48.9-21.45t18.61-54.89q0-33.44-18.61-54.89t-48.9-21.45q-29,0-48,21.77T3021,359.54Q3021,392.36,3039.92,414.12Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M3428,103.37V223.26h66.88V292H3428V500.24h-88.33V292h-42.9V223.26h42.9V103.37Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M3575.28,94.86Q3590.1,81.93,3609,81.92q18.29,0,32.81,12.93t14.51,31.86q0,18.93-14.51,31.55T3609,170.89a50.59,50.59,0,0,1-33.76-12.62q-14.83-12.61-14.83-31.55T3575.28,94.86Zm75.4,129.66V500.24h-88.33V224.52Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M3929.87,499a175.56,175.56,0,0,1-53.95,8.83Q3804,507.82,3762,469t-42-106.95q0-44.16,20.51-77.29t53.95-50.48a153.92,153.92,0,0,1,71.93-17.35q68.76,0,111.68,36.6l-42.9,56.79q-27.14-21.44-60.57-21.45-27.77,0-47,20.82t-19.24,52.37q0,31.56,20.82,52.68t54.26,21.14q29,0,48-15.77l44.17,55.52Q3957.31,490.16,3929.87,499Z"
                transform="translate(0 -2.42)"
              ></path>
              <path
                d="M4069.62,493.93q-29.66-12-49.22-33.44l36.6-48.58Q4093.59,446,4125.78,446q17,0,27.45-5.36t10.41-16.09q0-12.61-12-19.24a135.35,135.35,0,0,0-26.82-11q-14.83-4.41-19.87-5.68-36-11.36-53.63-33.76a80.69,80.69,0,0,1-17.67-51.42q0-22.08,11.67-43.22t36.28-34.7q24.61-13.56,61.2-13.57,34.07,0,58,6.94a152,152,0,0,1,46.06,22.71l-33.44,51.74a121.36,121.36,0,0,0-28.08-16.72q-15.47-6.63-28.08-6.63-15.15,0-24.61,6.31t-9.46,15.14q-.64,13.25,11,19.87t36.28,13.57c2.53.85,5.15,1.69,7.89,2.52s5.57,1.69,8.52,2.52q65,21.46,65,78.24a92.64,92.64,0,0,1-13.25,48.58q-13.25,22.09-40.06,35.65t-65.3,13.57A168.53,168.53,0,0,1,4069.62,493.93Z"
                transform="translate(0 -2.42)"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>
    <div class="bottom__3XCyh">
      Copyright © 2018 Dexta Robotics. All rights reserved.
      <a href="http://www.miitbeian.gov.cn">??CP?�18071519?�</a>
    </div>
  </footer>
</template>

<script>
// import logoEn from '@/components/svg/logoEn'
export default {
  //   components: { logoEn },
  methods: {},
}
</script>

<i18n>
{
  "en": {
    "home": "Home",
    "app": "Application",
    "sdk": "SDK",
    "press": "Press",
    "about": "About Us",
    "product": "Product Story",
    "contact": "Contact"
  },
  "zh": {
      "home": "主页",
    "app": "应用场景",
    "sdk": "软件支持",
      "press": "媒体报道",
      "about": "关于我们",
      "product": "产品故事",
      "contact": "联系我们"
  }
}
</i18n>

<style></style>
