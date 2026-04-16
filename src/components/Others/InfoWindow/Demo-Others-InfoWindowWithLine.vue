<script setup lang="ts">
import { ref } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsInfoWindow, type DegreeAry} from "@iw/cesium-ui";

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

const position = ref<DegreeAry>([110.643227, 32.659204])

const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-info-window
            :position="position"
            :show-link="true"
            :offset="{x: 100, y: -100}"
        >
          <div style="background: lightblue;width: 100px">信息窗口带线内容</div>
        </cs-info-window>
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
