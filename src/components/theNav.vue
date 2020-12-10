<template>
  <nav
    class="fixed top-0 inset-x-0 z-30"
    :class="showMenu ? 'bg-gray-ed' : 'opacity-75 bg-black'"
    v-click-away="away"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <logo-zh v-if="$store.state.lang == 'zh'" />
            <logo-en v-else />
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4 text-green">
            <span
              v-for="link in links"
              :key="link.title"
              class="cursor-pointer px-3 py-2 rounded-md whitespace-nowrap font-medium border  hover:border hover:border-green"
              :class="
                curPath == link.path
                  ? 'border-green shadow-btn'
                  : 'border-transparent'
              "
              @click="$router.push(link.path)"
              >{{ $t(link.title) }}</span
            >

            <!-- <select v-model="$i18n.locale">
              <option>en</option>
              <option>zh</option>
            </select> -->

            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm focus:outline-none hover:bg-gray-dark rounded p-2"
                  id="user-menu"
                  aria-haspopup="true"
                  @click="showFlag = !showFlag"
                >
                  <flag-zh v-if="$i18n.locale == 'zh'" />
                  <flag-en v-else />

                  <i class="iconfont icon-down text-sm ml-2"></i>
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <transition name="slide-fade">
                <div
                  class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-md py-2 bg-white ring-1 ring-black ring-opacity-5 text-lg text-gray-darkest"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                  v-if="showFlag"
                >
                  <button
                    class="w-full flex items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-f5"
                    role="menuitem"
                    @click="setLang('zh')"
                  >
                    <flag-zh /><span class="ml-2">简体中文</span>
                  </button>

                  <button
                    class="w-full flex items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-f5"
                    role="menuitem"
                    @click="setLang('en')"
                  >
                    <flag-en /><span class="ml-2">English</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="text-green inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="h-8 w-8 fill-current"
              :class="showMenu ? 'hidden' : 'block'"
              @click="onShowMenu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="h-8 w-8 fill-current"
              :class="showMenu ? 'block' : 'hidden'"
              @click="showMenu = !showMenu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <transition name="slide-fade">
      <div
        v-if="showMenu"
        class="md:hidden bg-gray-ed"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-left text-green">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:text-white" -->
          <span
            v-for="link in links"
            :key="link.title"
            class="hover:border-green cursor-pointer text-gray-300 border block px-3 py-2 rounded-md text-base font-medium"
            :class="
              curPath == link.path
                ? 'border-green shadow-btn'
                : 'border-transparent'
            "
            @click="goPath(link.path)"
            >{{ $t(link.title) }}</span
          >

          <div class="ml-3 relative">
            <div>
              <button
                class="max-w-xs flex items-center text-sm focus:outline-none hover:bg-gray-dark rounded p-2"
                id="user-menu"
                aria-haspopup="true"
                @click="showFlag = !showFlag"
              >
                <flag-zh v-if="$i18n.locale == 'zh'" />
                <flag-en v-else />

                <i class="iconfont icon-down text-sm ml-2"></i>
              </button>
            </div>
            <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
            <transition name="slide-fade">
              <div
                class="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-md py-2 bg-white ring-1 ring-black ring-opacity-5 text-lg text-gray-darkest"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-if="showFlag"
              >
                <button
                  class="w-full flex items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-f5"
                  role="menuitem"
                  @click="setLang('zh')"
                >
                  <flag-zh /><span class="ml-2">简体中文</span>
                </button>

                <button
                  class="w-full flex items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-f5"
                  role="menuitem"
                  @click="setLang('en')"
                >
                  <flag-en /><span class="ml-2">English</span>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import flagZh from '@/components/svg/flagZh'
import flagEn from '@/components/svg/flagEn'
import logoZh from '@/components/svg/logoZh'
import logoEn from '@/components/svg/logoEn'
export default {
  components: { flagZh, flagEn, logoZh, logoEn },
  data() {
    return {
      showMenu: false,
      showFlag: false,
      links: [
        { path: '/', title: 'home' },
        { path: '/app', title: 'app' },
        { path: '/sdk', title: 'sdk' },
        { path: '/press', title: 'press' },
        { path: '/about', title: 'about' },
        { path: '/product', title: 'product' },
      ],
    }
  },
  computed: {
    curPath() {
      return this.$store.state.curPath
    },
  },
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLang', lang)
      this.showFlag = false
      this.showMenu = false
    },
    goPath(path) {
      this.showMenu = false
      this.showFlag = false
      this.$router.push(path)
    },
    onShowMenu() {
      this.showMenu = !this.showMenu
      this.showFlag = false
    },
    away() {
      this.showMenu = false
      this.showFlag = false
    },
  },
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<i18n>
{
  "en": {
    "home": "Home",
    "app": "Applications",
    "sdk": "SDK",
    "press": "Press",
    "about": "About us",
    "product": "Product Story"
  },
  "zh": {
    "home": "首页",
    "app": "应用",
    "sdk": "软件支持",
    "press": "媒体报道",
    "about": "关于我们",
    "product": "产品故事"
  }
}
</i18n>
