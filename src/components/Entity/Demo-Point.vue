<script setup lang="ts">
import { ref } from 'vue'

import { Color, Entity, Viewer } from "cesium";

import {CsViewer, CsEntityPoint } from "@iw/cesium-ui";



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
}

const count = ref(7)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady"> 
        <cs-entity-point
            :position="[110.643227, 32.659204]"
            :pixel-size="100"
            :color="Color.RED"
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
