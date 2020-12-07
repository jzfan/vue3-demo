import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
  },
  {
    path: '/sdk',
    name: 'Sdk',
    component: () =>
      import(/* webpackChunkName: "sdk" */ '../views/sdk/index.vue'),
  },
  {
    path: '/app',
    name: 'App',
    component: () =>
      import(/* webpackChunkName: "application" */ '../views/app/index.vue'),
  },
  {
    path: '/press',
    name: 'Press',
    component: () =>
      import(/* webpackChunkName: "press" */ '../views/press/index.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/product/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to, from) => {
  if (to.name) {
    store.commit('setCurPath', to.fullPath)
  } else {
    // console.log(to)
  }
})
export default router
