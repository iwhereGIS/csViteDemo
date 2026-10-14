<script setup lang="ts">
import { ref } from 'vue'

import { Viewer } from "cesium";

import {CsViewer, CsEntityBillboard } from "@iw/cesium-ui";


import vueSvg from '../../../assets/vue.svg'

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

function handleEntityReady(viewer: Viewer, entity: any){
  console.log('entity ready', entity)

  // 自动定位到实体位置
  viewer.flyTo(entity)
}

const count = ref(3)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-entity-billboard
            :position="[116.3983552214, 39.906463]"
            :image="vueSvg"
            @ready="handleEntityReady"
        />
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
