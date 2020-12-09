import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tw.css'
import store from './store'

import { createI18n } from 'vue-i18n'
console.log(createI18n)

const i18n = createI18n({
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
})

createApp(App)
  .use(axios)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app')
