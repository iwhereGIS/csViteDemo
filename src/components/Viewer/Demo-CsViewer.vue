<script setup lang="ts">
import { ref } from 'vue'

// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import vueLogo from '../assets/vue.svg'

import { Viewer, Cartesian3, Color, GeoJsonDataSource } from "cesium";

import { CsViewer, useCsGlobalConfig } from "@iw/cesium-ui";

// 按 key 取全局配置,返回 Ref<number | undefined>,避免对 Ref 对象直接解构得到 undefined
const lng = useCsGlobalConfig('lng');
const lat = useCsGlobalConfig('lat');

/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)

  viewer.entities.add({
    position: Cartesian3.fromDegrees(lng.value!, lat.value!),
    point: {
      pixelSize: 10,
      color: Color.YELLOW,
    },
  });

  const promise = GeoJsonDataSource.load("./simplestyles.geojson");
  promise.then((dataSource) => {
    viewer.dataSources.add(dataSource);
    viewer.zoomTo(dataSource);
  });
}

function changeTest() {
  isTest.value = false
}
const isTest = ref(true)
const count = ref(1)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer :depth-test-against-terrain="isTest" @ready="handleReady" />
    </div>
    <button class="counter" @click="changeTest">改变</button>
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
