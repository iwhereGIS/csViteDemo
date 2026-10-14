<script setup lang="ts">
import { ref } from 'vue'

import { Cartesian3, Viewer } from "cesium";

import {CsViewer, CsInfoWindow, type DegreeAry} from "@iw/cesium-ui";

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)

  // 相机飞至信息窗口位置上空
  const [lng = 0, lat = 0] = position.value
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(lng, lat, 10000),
  })
}

const position = ref<DegreeAry>([110.643227, 32.659204])

const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-info-window
            :position="position"
            :show-link="true"
            :offset="{x: 100, y: -100}"
        >
          <div style="background: lightblue;width: 100px">信息窗口带线内容</div>
        </cs-info-window>
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
