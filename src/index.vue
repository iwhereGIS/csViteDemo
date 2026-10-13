<script setup lang="ts">
import { ref, computed } from 'vue'
import examples from './examples'

// 当前示例 id
const exampleId = ref(0)

const currentExample = computed(() => examples.find(e => e.id === exampleId.value) ?? null)

const currentComponent = computed(() => currentExample.value ? currentExample.value.comp : null)

</script>

<template>

  <!-- 标题（当前示例） -->
  <div v-if="currentExample" class="example-title">{{ currentExample.label }}</div>

  <!-- 动态渲染当前示例组件 -->
  <component :is="currentComponent" v-if="currentComponent" />

  <!-- 按钮从 examples 数组生成 -->
  <div class="examples-btns">
    <el-button
      v-for="ex in examples"
      :key="ex.id"
      :class="{ active: ex.id === exampleId }"
      @click="exampleId = ex.id"
    >
      {{ ex.label }}
    </el-button>
  </div>
</template>

<style scoped>
.example-title{
  font-weight: 600;
  margin: 12px 0;
}
.examples-btns{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}
.examples-btns .el-button{
  background: transparent;
}
.examples-btns .el-button.active{
  background: #409EFF; /* element-plus primary */
  color: #fff;
  border-color: transparent;
}
</style>
