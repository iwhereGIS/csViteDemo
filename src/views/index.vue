<script setup lang="ts">

import comHeader from '@/components/header/index.vue'

</script>

<template>
  <el-container style="height: 100vh">
    <el-header height="70px" style="--el-header-padding: 0">
      <comHeader> </comHeader>
    </el-header>
    <el-main style="--el-main-padding: 0">
      <RouterView />
    </el-main>
  </el-container>
</template>
