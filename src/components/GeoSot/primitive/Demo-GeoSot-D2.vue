<script setup lang="ts">
import {ref, nextTick, watch} from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsGeosotPrimitiveD2, CsMouseTip } from "@iw/cesium-ui";


/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

/**
 * 坐标点数组发生变化时触发的事件
 * @param geonum2d
 */
function handleClick(geonum2d: string){
  alert('点击事件:' + geonum2d)
}

const gridNums = ref<string[]>([])
const showGrid = ref<boolean>(false)


const getRandomColorRgba = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const a = 0.5 // Math.random().toFixed(1) // 0.0 到 1.0 之间的随机数
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

/**
 * 通过v-if显示网格
 */
function showGeoGrid() {
  showGrid.value = false
  gridNums.value = ['G00131032223033113', 'G00131032223033131']
  showGrid.value = true
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
        <CsGeosotPrimitiveD2
            ref="childRef"
            v-if="showGrid"
            :geonum2ds="gridNums"
            :showFace="flagshowFace"
            :faceColor="gridFaceColor"
            :showOutline="flagShowLine"
            :outlineColor="gridLineColor"
            :allow-picking="false"
            @click="handleClick"
        />
        <cs-mouse-tip v-slot="{position}">
          <span style="background: lightblue">{{position ? position[0] + ',' + position[1] : ''}}</span>
        </cs-mouse-tip>
      </cs-viewer>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">

        <el-button @click="showGeoGrid">显示二维网格1</el-button>

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
