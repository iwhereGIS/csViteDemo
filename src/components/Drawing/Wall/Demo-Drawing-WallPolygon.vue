<script setup lang="ts">
import { ref, watch } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsDrawingWallPolygon, type DegreeAry } from "@iw/cesium-ui";

const positions = ref<Array<DegreeAry>>([])
const height = ref<number>(0)
const extrudeHeight = ref<number>(220)

// TODO: 绘制完成后，显示的二维的图形，而不是墙

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

// 1.13.1 的 CsDrawingWallPolygon 未提供 change 事件,改用 watch 监听 v-model 坐标变化
watch(positions, (val) => {
  console.log('坐标点数组发生变化:', val)
})

const count = ref(23)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsDrawingWallPolygon
            v-model:positions="positions"
            v-model:height="height"
            v-model:extrudedHeight="extrudeHeight"/>
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
