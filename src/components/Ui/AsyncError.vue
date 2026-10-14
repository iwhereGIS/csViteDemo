<template>
  <div class="async-error">
    <div>加载失败</div>
    <div v-if="msg" class="detail">{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
// defineProps 是 Vue 编译器宏,无需显式 import
const props = defineProps<{ msg?: string }>()
</script>

<style scoped>
.async-error{
  padding: 12px;
  color: #c00;
}
.async-error .detail{
  margin-top:6px;
  font-size:12px;
  color:#900;
}
</style>

