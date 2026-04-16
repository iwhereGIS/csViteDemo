<script setup lang="ts">
import {nextTick, ref} from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsMeasurePoint } from "@iw/cesium-ui";


/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

const isShow = ref(true)

function handleDelete(id: string){
  alert('删除坐标拾取工具:' + id)
  isShow.value = false

  nextTick(()=>{
    isShow.value = true
  })
}

const count = ref(17)
</script>

<template>
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <CsMeasurePoint v-if="isShow" id="id-1" @delete="handleDelete"/>
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
