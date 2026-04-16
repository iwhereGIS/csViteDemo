<script setup lang="ts">
import { ref } from 'vue'

// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'
//

import { Viewer } from "cesium";

import {CsViewer, CsMeasureDistance, CsTdtImageryLayer} from "@iw/cesium-ui";



/**
 * Viewer 加载完成处理
 */

function handleReady1(viewer: Viewer){
  console.log('viewer1 ready', viewer)
}

function handleReady2(viewer: Viewer){
  console.log('viewer2 ready', viewer)
}

const count = ref(13)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady1">
        <cs-tdt-imagery-layer type="img_w"></cs-tdt-imagery-layer>
        <CsMeasureDistance/>
      </cs-viewer>
    </div>
    <div class="hero">
      <cs-viewer @ready="handleReady2">
        <cs-tdt-imagery-layer type="vec_w"></cs-tdt-imagery-layer>
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
