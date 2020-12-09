import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tw.css'
import store from './store'

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: store.state.lang || 'zh',
  fallbackLocale: 'zh',
})

import verticalTitle from '@/components/verticalTitle'

import VueClickAway from 'vue3-click-away'

createApp(App)
  .use(axios)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .component('vertical-title', verticalTitle)
  .mount('#app')
