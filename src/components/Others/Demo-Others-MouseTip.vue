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


function handleMove(position: []){
  console.log('MouseMove:', position)
}
const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-mouse-tip v-slot="{position}" @onMove="handleMove">
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
