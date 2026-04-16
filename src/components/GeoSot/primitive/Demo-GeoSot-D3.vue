<script setup lang="ts">
import {nextTick, ref, watch} from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsGeosotPrimitiveD3 } from "@iw/cesium-ui";


/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

/**
 * 坐标点数组发生变化时触发的事件
 * @param geonum3d
 */
function handleClick(geonum3d: string){
  console.log('点击事件:' + geonum3d)
}

const geoNum3ds = ref<Array<string>>([])
const showGrid = ref(false)

function showGeoGrid() {
  showGrid.value = false
  geoNum3ds.value = ['00131032223033113', '00131032223033117', '00131032223033131', '00131032223033135']
  showGrid.value = true
}


const getRandomColorRgba = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const a = 0.5 // Math.random().toFixed(1) // 0.0 到 1.0 之间的随机数
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const gridFaceColor = ref<string>('#FF787A80')

/**
 * 通过v-if改变网格颜色
 */
function changeGridFaceColor() {
  showGrid.value = false
  nextTick(() => {
    gridFaceColor.value = getRandomColorRgba()
    showGrid.value = true
  })
}

/**
 * 调用调色板修改face颜色
 * @param e
 */
watch(gridFaceColor, (newVal, oldVal) => {
  showGrid.value = false
  nextTick(() => {
    console.log('changeFaceColorPicker:', newVal, oldVal)
    // gridFaceColor.value = newValue
    showGrid.value = true
  })
})


const gridLineColor = ref<string>('rgba(139, 59, 199, 0.5)')

/**
 * 通过v-if改变line颜色
 */
function changeGridLineColor() {
  showGrid.value = false
  nextTick(() => {
    gridLineColor.value = getRandomColorRgba()
    showGrid.value = true
  })
}

/**
 * 调用调色板修改face颜色
 * @param e
 */
watch(gridLineColor, (newVal, oldVal) => {
  showGrid.value = false
  nextTick(() => {
    console.log('changeLineColorPicker:', newVal, oldVal)
    // gridFaceColor.value = newValue
    showGrid.value = true
  })
})


const flagshowFace = ref(true)
function changeFlagshowGridFace(e) {
  showGrid.value = false
  nextTick(() => {
    console.log(e, 'changeFlagshowGridFace')
    flagshowFace.value = e
    showGrid.value = true
  })
}

const flagShowLine = ref(true)
function changeFlagShowLine(e) {
  showGrid.value = false
  nextTick(() => {
    console.log(e, 'changeFlagShowLine')
    flagShowLine.value = e
    showGrid.value = true
  })
}


const count = ref(24)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsGeosotPrimitiveD3
            v-if="showGrid"
            :geonum3ds=geoNum3ds
            :show-face="flagshowFace"
            :faceColor="gridFaceColor"
            :show-outline="flagShowLine"
            :outline-color="gridLineColor"
            :allow-picking="true"
            @click="handleClick"
        />
      </cs-viewer>

      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">

        <el-button @click="showGeoGrid">显示三维网格1</el-button>

        <el-checkbox v-model="flagshowFace" @change="changeFlagshowGridFace" label="显示GridFace" />

        <el-button @click="changeGridFaceColor">改变face颜色</el-button>

        <el-color-picker-panel v-model="gridFaceColor" showAlpha />

        <el-checkbox v-model="flagShowLine" @change="changeFlagShowLine" label="显示GridLine" />


        <el-button @click="changeGridLineColor">改变Line颜色</el-button>
        <el-color-picker-panel v-model="gridLineColor" showAlpha />

      </div>
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
