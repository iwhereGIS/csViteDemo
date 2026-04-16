<script setup lang="ts">
import { ref } from 'vue'

import { Viewer } from "cesium";

import { CsViewer, CsLink, type DegreeAry } from "@iw/cesium-ui";


const position = ref<DegreeAry>([110.643227, 32.659204, 100])

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

const count = ref(30)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-link :position="position"></cs-link>
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
