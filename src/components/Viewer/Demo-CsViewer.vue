<script setup lang="ts">
import { ref } from 'vue'

// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'

import { Viewer } from "cesium";

import { CsViewer } from "@iw/cesium-ui";

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

function changeTest() {
  isTest.value = false
}
const isTest = ref(true)
const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer :depth-test-against-terrain="isTest" @ready="handleReady" />
    </div>
    <button class="counter" @click="changeTest">改变</button>
    <button class="counter" @click="count++">Count is {{ count }}</button>
  </section>
</template>

<style>
.hero {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#cesium-viewer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
