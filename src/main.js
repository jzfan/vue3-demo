import axios from './plugins/axios'
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tw.css'
import store from './store'

createApp(App)
  .use(axios)
  .use(store)
  .use(router)
  .mount('#app')