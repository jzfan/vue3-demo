import { createStore } from 'vuex'

export default createStore({
  state: {
    curPath: '/',
    lang: localStorage.getItem('lang') || 'zh',
  },
  mutations: {
    setCurPath(state, path) {
      state.curPath = path
    },
    setLang(state, lang) {
      state.lang = lang
      localStorage.setItem('lang', lang)
    },
  },
  actions: {},
  modules: {},
})
