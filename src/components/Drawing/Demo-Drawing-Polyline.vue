<script setup lang="ts">
import { ref } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsDrawingPolyline, type DegreeAry } from "@iw/cesium-ui";

const positions = ref<Array<DegreeAry>>([])

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

/**
 * 坐标点数组发生变化时触发的事件
 * @param positions
 */
function handleChange(positions: DegreeAry[]){
  console.log('坐标点数组发生变化:' + positions)
}

const count = ref(21)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsDrawingPolyline v-model:positions="positions" @change="handleChange"/>
      </cs-viewer>
    </div>
    <button class="counter" @click="count++">Count is {{ count }}</button>
</template>

<style>
.hero {
  width: 100%;
  height: 100%;
}
#cesium-viewer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
