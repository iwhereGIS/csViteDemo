<script setup lang="ts">
import { ref, watch } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsDrawingWallCircle, type DegreeAry } from "@iw/cesium-ui";

const position = ref<DegreeAry>([])
const radius = ref<number>(1)
const height = ref<number>(0)
const extrudeHeight = ref<number>(1200)

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

// TODO: 绘制完成后，显示的二维的图形，而不是墙

// 1.13.1 的 CsDrawingWallCircle 未提供 change 事件,改用 watch 监听 v-model 坐标变化
watch(position, (val) => {
  console.log('坐标点发生变化:', val)
})

const count = ref(22)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsDrawingWallCircle
            v-model:position="position"
            v-model:radius="radius"
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
