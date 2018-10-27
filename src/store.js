import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    menuOn: false,
    projects: [],
    fetchingPage: false
  },
  mutations: {
    finishLoading (state) {
      state.loading = false
    },
    startLoading (state) {
      state.loading = true
    },
    toggleMenu (state) {
      state.menuOn = !state.menuOn
    }
  }
})
