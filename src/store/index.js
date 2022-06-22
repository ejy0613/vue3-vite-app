import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload;
    }
  },
  actions: {},
  modules: {}
})

export default store