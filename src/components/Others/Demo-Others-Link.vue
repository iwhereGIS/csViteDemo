<script setup lang="ts">
import { ref } from 'vue'

import { Cartesian3, Viewer } from "cesium";

import { CsViewer, CsLink, type DegreeAry } from "@iw/cesium-ui";


const position = ref<DegreeAry>([110.643227, 32.659204, 100])

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)

  // 相机飞至覆盖物位置上空
  const [lng = 0, lat = 0, h = 0] = position.value
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(lng, lat, h + 10000),
  })
}

const count = ref(30)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-link :position="position"></cs-link>
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
