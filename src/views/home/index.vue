<script setup lang="ts">

import { Viewer } from "cesium";

import {auth} from "@/api/gen/auth/api.ts";

import {ElMessage} from "element-plus";
import {CsViewer, useCsCursor, useCsGlobalSettings } from "@iw/cesium-ui";

const { terrainUrl } = useCsGlobalSettings();


/**
 * Viewer 加载完成处理
 */
function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)

  useCsCursor('cesiumView1').changeCursor("crosshair")

  auth.user.userInfo.get().then((data: any) =>{
    ElMessage.info("viewer ready:" + data.msg);

    // ElMessage.success(data.msg);
    console.log(data);
  })

}

// const isTest = ref(true)
</script>

<template>
    <div class="hero">
<!--      <cs-viewer id="cesiumView1" @ready="handleReady" />-->
      <cs-viewer
          id="cesiumView1"
          @ready="handleReady">
        <cs-tdt-imagery-layer type="img_w"/>
        <cs-tdt-imagery-layer type="cia_w"/>
        <cs-terrain-provider :url=terrainUrl></cs-terrain-provider>
      </cs-viewer>
    </div>
</template>

<style scoped>
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
