<script setup>
  import { computed } from 'vue'
  // import { useStore } from 'vuex';
  // let store = useStore();
  // let count = computed(() => store.state.count);
  // let double = computed(() => store.getters.double);

  // const add = () => {
  //   store.commit('addCount', 1);
  // }

  import { mainStore } from '../store/main';
  import { storeToRefs } from 'pinia';
  const store = mainStore();
  const { count, msg } = storeToRefs(store);
  const { addCounter } = store;
  console.log(count, msg);
 
  // let count = computed(() => store.count);
  let doubleCount = computed(() => store.doubleCount);

  const add = () => {
    // store.randomizeCounter()
    // store.addCounter()
    // addCounter()
    store.$patch(state => {
      state.msg = `chang count to ${state.count + 1}`,
      count.value++
    })
  }
</script>

<template>
  <h2>This is About Page</h2>
  <div @click="add">count + 1</div>
  <div>count: {{ count }} && double count: {{ doubleCount }}</div>
  <p>{{ msg }}</p>
</template>
