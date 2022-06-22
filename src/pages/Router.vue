<script setup>

</script>

<template>
  <h2>vue-router带来什么?</h2>
  <div>
    <span>hash模式</span>
    <p>http://www.xx.com/#/login</p>
    <p>页面进行跳转的操作时，hash值的变化并不会导致浏览器页面的刷新，只会触发 hashchange 事件</p>
  </div>
  <div>
    <span>history模式</span>
    <p>浏览器新增了两个api：pushState 和 replaceState</p>
    <p>通过监听popstate事件，可以监听到通过pushstate修改路由的变化</p>
  </div>
</template>