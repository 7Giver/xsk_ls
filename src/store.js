import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    navbarIndex: 0,
  },
  mutations: {
    setToken(state, token) {
			state.token = token
    },
    setNavbarIndex(state, index) {
      state.navbarIndex = index
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
