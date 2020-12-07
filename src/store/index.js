import { createStore } from 'vuex'

export default createStore({
  state: {
    curPath: '/',
  },
  mutations: {
    setCurPath(state, path) {
      state.curPath = path
    },
  },
  actions: {},
  modules: {},
})
