<script setup lang="ts">
import { ref } from 'vue'
import { Viewer } from "cesium";

import {CsViewer, CsMeasureDistance, CsVirtualViewer, CsAMapImageryLayer } from "@iw/cesium-ui";

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}


const count = ref(2)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer id="cesium-viewer" @ready="handleReady"> <CsMeasureDistance/></cs-viewer>
    </div>
    <cs-virtual-viewer to="cesium-viewer">
      <cs-a-map-imagery-layer type="7"></cs-a-map-imagery-layer>
    </cs-virtual-viewer>
    
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
