<script setup lang="ts">
import { ref } from 'vue'

import {Cartesian3, Viewer} from "cesium";

import {CsViewer, CsMeasureDistance, CsWmsImageryLayer, CsTdtImageryLayer} from "@iw/cesium-ui";

let $viewer: Viewer

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
  $viewer = viewer
  $viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(-95.4382,38.6992,1250000),
    //orientation: viewerState.orientation
  })
}

const count = ref(15)

//TODO: 提交
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-wms-imagery-layer url="https://ahocevar.com/geoserver/wms" layers="topp:states" />

<!--        <cs-tdt-imagery-layer type="vec_w"></cs-tdt-imagery-layer>-->
<!--        <CsMeasureDistance/>-->
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
