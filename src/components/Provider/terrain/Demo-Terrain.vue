<script setup lang="ts">

// ⭐️⭐️⭐️⭐️⭐️
// 地形图推荐全局配置 main.ts
// const app = createApp(App)
//
// app.use(CesiumUI, {
//   terrainUrl: 'https://kzlw.shiyan.iwhere.com:9443/demdgx/'
// })
// app.mount('#app')
// ⭐️⭐️⭐️⭐️⭐️

import { ref } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsTerrainProvider } from "@iw/cesium-ui";

function handleReady1(viewer: Viewer){
  console.log('viewer1 ready', viewer)
}

const count = ref(16)

</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady1">
<!--        <cs-a-map-imagery-layer type="6"></cs-a-map-imagery-layer>-->
        <cs-terrain-provider url="https://kzlw.shiyan.iwhere.com:9443/demdgx/"></cs-terrain-provider>

      </cs-viewer>
    </div>
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
