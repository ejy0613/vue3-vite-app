import { defineStore } from "pinia";

export const mainStore = defineStore('main', {
  state: () => ({
    count: 0,
    msg: 'first message'
  }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
    addCounter(state){
      this.count += 1;
      // state.count += 1;
    }
  }
})