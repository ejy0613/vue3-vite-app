<!-- <script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // 已启用类型推断
  setup() {
    const count = ref(1)
    count.value.split('')
  }

})
</script> -->
<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
interface 极客时间课程 {
  name: string,
  price: number
}

const msg = ref('') // 根据输入参数推导字符串类型
const msg1 = ref<string>('') // 可以通过泛型显示约束

</script>

<template>
  <h2>This is Home Page</h2>
</template>
