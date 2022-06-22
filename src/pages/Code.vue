<template>
 <h2>面试 - 数据结构与算法</h2>
 <div>题目: <br> {{ topic }}</div>
  <div>答案: <br> {{ answer }}</div>
</template>

<script setup>
  import topicList from '../util/topic';
  import { ref } from 'vue';
  let topic = topicList[0];
  let answer = ref('');
</script>

<style lang="less">
  
</style>