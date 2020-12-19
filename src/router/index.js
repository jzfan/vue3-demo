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
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/contact'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to, from) => {
  //   console.log(to.path)
  if (to.name) {
    store.commit('setCurPath', to.fullPath)
  }
  if (!from.params.hasOwnProperty('anchor_id') || to.path != '/') {
    // console.log(from.params)
    window.scrollTo(0, 0)
  }
})
export default router
