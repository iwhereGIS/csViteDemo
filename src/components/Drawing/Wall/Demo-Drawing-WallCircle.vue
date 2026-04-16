<script setup lang="ts">
import { ref } from 'vue'

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

/**
 * 坐标点数组发生变化时触发的事件
 * @param positions
 */
function handleChange(positions: DegreeAry[]){
  alert('坐标点数组发生变化:' + positions)
}

const count = ref(22)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsDrawingWallCircle
            v-model:position="position"
            v-model:radius="radius"
            v-model:height="height"
            v-model:extrudedHeight="extrudeHeight"
            @change="handleChange"/>
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
