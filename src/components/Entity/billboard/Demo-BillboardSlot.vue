<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsEntityBillboard } from "@iw/cesium-ui";


/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}


onMounted(() => {
  console.log('mounted')
  const canvas = document.getElementById('slot-canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 10, 150, 100)
  }
})

const count = ref(4)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady"> 
        <cs-entity-billboard
            :position="[110.643227, 32.659204]">
          <template v-slot:canvas="{setCanvas}">
            <canvas id="slot-canvas" :ref="(el)=>setCanvas(el)" style="display: none"></canvas>
          </template>
        </cs-entity-billboard>
          
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
