<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue'

import { Entity, Viewer } from "cesium";

import {CsViewer, useCsGlobalSettings } from "@iw/cesium-ui";



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

const count = ref(6)

const isShow = ref(false)

const initPos = ref<Array<number|undefined>>([])
onMounted(() => {
  isShow.value = false
  const { lng, lat } = useCsGlobalSettings()
  if(lng && lat) {
    initPos.value = [lng, lat]
    nextTick(()=>{
      isShow.value = true
    })
  }
})
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer @ready="handleReady">
        <cs-entity-label
            v-if="isShow"
            :position="initPos"
            text="测试文字"
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
