<script setup lang="ts">
import { ref } from 'vue'

import { Viewer } from "cesium";

import { CsViewer, CsMouseTip } from "@iw/cesium-ui";

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}


// 1.13.1 的事件名为 move(非 onMove),参数为可选经纬高数组
function handleMove(position?: [number, number, number]){
  console.log('MouseMove:', position)
}
const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-mouse-tip v-slot="{position}" @move="handleMove">
          <span style="background: lightblue">{{position ? position[0] + ',' + position[1] : ''}}</span>
        </cs-mouse-tip>
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
