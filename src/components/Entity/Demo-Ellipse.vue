<script setup lang="ts">
import { ref } from 'vue'

import { Entity, Viewer } from "cesium";

import {CsViewer, CsEntityEllipse } from "@iw/cesium-ui";



/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
}

/**
 * Entity 加载完成处理
 * @param viewer 
 * @param entity 
 */
function handleEntityReady(viewer: Viewer, entity: Entity){
  console.log('viewer1 ready', viewer)

  console.log('entity ready', entity)

  // 自动定位到实体位置
  viewer.flyTo(entity)
}

const count = ref(5)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady"> 
        <cs-entity-ellipse
            :position="[110.643227, 32.659204]"
            :semi-major-axis="500"
            :semi-minor-axis="500"    
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
