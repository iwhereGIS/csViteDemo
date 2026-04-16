<script setup lang="ts">
import { ref, watch } from 'vue'

import Color from 'color'

import { Viewer, GeographicTilingScheme, ImageryLayer, WebMercatorTilingScheme } from "cesium";

import {CsViewer, CsWebMapTileServiceImageryProvider } from "@iw/cesium-ui";

//#region data
const type = ref<string>("vec_w")
const brightness = ref<number>(ImageryLayer.DEFAULT_BRIGHTNESS)
const contrast = ref<number>(ImageryLayer.DEFAULT_CONTRAST)
const hue = ref<number>(ImageryLayer.DEFAULT_HUE)
const saturation = ref<number>(ImageryLayer.DEFAULT_SATURATION)
const gamma = ref<number>(ImageryLayer.DEFAULT_GAMMA)
const invertColor = ref(false)
const fillColor = ref()
let $viewer: Viewer
let $layer: ImageryLayer
let $provider: CsWebMapTileServiceImageryProvider
//#endregion

//#region watch
watch(type,() => {
  changeLayer()
})

// 亮度
watch(brightness, (newVal) => {
  $layer.brightness = newVal
})

// 对比度
watch(contrast, (newVal) => {
  $layer.contrast = newVal
})

// 色调
watch(hue, (newVal) => {
  $layer.hue = newVal
})

// TODO: 提交
// 饱和度
watch(saturation, (newVal) => {
  $layer.saturation = newVal
})

// 伽马值
watch(gamma, (newVal) => {
  $layer.gamma = newVal
})

watch(invertColor, () => {
  changeLayer()
})

watch(fillColor, () => {
  changeLayer()
})
//#endregion


/**
 * Viewer 加载完成处理
 */

function handleReady(viewer: Viewer){
  console.log('viewer ready', viewer)
  $viewer = viewer
  changeLayer()
}

function changeLayer(){
  console.log('layer')

  // 天地图ImageLayer
  // 地图二级域名
  const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7']

  // 切片类型
  const typeVal = type.value
  const setId = typeVal.substring(typeVal.indexOf('_')+1, typeVal.length)

  $provider = new CsWebMapTileServiceImageryProvider({
    url: 'https://t{s}.tianditu.gov.cn/' + typeVal + '/wmts?tk=8ff7fd50649991cdca26d3e60fbbffd5',
    layer: typeVal.substring(0, typeVal.indexOf('_')),
    format: 'tiles',
    style: 'default',
    tileMatrixSetID: setId,
    subdomains: subdomains,
    // 天地图目前只支持到18级
    maximumLevel: 18,
    // 瓦片平铺方式
    tilingScheme: setId === 'w' ? new WebMercatorTilingScheme() : new GeographicTilingScheme()
  })

  $layer = new ImageryLayer($provider)

  // 设置值
  $layer.brightness = brightness.value
  $layer.contrast = contrast.value
  $layer.hue = hue.value
  $layer.gamma = gamma.value
  $provider.invertColor = invertColor.value
  if(fillColor.value){
    const color = new Color(fillColor.value)
    $provider.fillColor = [color.red(), color.green(), color.blue(), color.alpha()];
  }

  $viewer.imageryLayers.removeAll()
  $viewer.imageryLayers.add($layer)

}

const count = ref(13)
</script>

<template>
  <el-container style="width: 100%; height: 920px;margin-top:20px">
    <el-aside width="400px;">
      <el-form-item label="图层名称">
        <el-select v-model="type">
          <el-option label="矢量底图" value="vec_w" />
          <el-option label="矢量注记" value="cva_w" />
          <el-option label="影像底图" value="img_w" />
          <el-option label="影像注记" value="cia_w" />
          <el-option label="地形晕渲" value="ter_w" />
        </el-select>
      </el-form-item>
      <el-divider />
      <el-card header="瓦片样式">
        <el-form label-width="4em">
          <el-form-item label="反色">
            <el-radio-group v-model="invertColor">
              <el-radio :value="true">是</el-radio>
              <el-radio :value="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="填充色">
            <el-color-picker-panel v-model="fillColor" show-alpha />
          </el-form-item>
        </el-form>
      </el-card>
      <el-divider />
      <el-card header="图层样式">
        <el-form label-width="4em">
          <el-form-item label="亮度">
            <el-input-number v-model="brightness" :step="0.1" />
          </el-form-item>
          <el-form-item label="对比度">
            <el-input-number v-model="contrast" :step="0.1" />
          </el-form-item>
          <el-form-item label="色调">
            <el-input-number v-model="hue" :step="0.1" />
          </el-form-item>
          <el-form-item label="饱和度">
            <el-input-number v-model="saturation" :step="0.1" />
          </el-form-item>
          <el-form-item label="伽马值">
            <el-input-number v-model="gamma" :step="0.1" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-aside>
    <el-container>
      <cs-viewer @ready="handleReady" />
    </el-container>
  </el-container>

  <button class="counter" @click="count++">Count is {{ count }}</button>
</template>

<style>
.hero {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#cesium-viewer {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
</style>
