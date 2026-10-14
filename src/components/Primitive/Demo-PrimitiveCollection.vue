<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'

import type { CsPrimitiveCollectionInstance } from '@iw/cesium-ui';

import { createPrimitives, useCsPrimitiveCollection, useCsViewer } from '@iw/cesium-ui';


import {
    Color,
    ColorGeometryInstanceAttribute,
    GeometryInstance,
    PerInstanceColorAppearance,
    Rectangle,
    RectangleGeometry,
    Viewer
} from "cesium";

import { ElMessage } from 'element-plus';

const primitiveCollectionRef = useTemplateRef<CsPrimitiveCollectionInstance>('primitiveCollection')

onMounted(() => {
  const { ready } = useCsViewer('x4fs7p7')
  ready().then((viewer: Viewer) => {
      const {pushPrimitive} = useCsPrimitiveCollection(primitiveCollectionRef)

      const rectangles = []
      rectangles.push(
          new GeometryInstance({
              id: 'id-f4f7e',
              geometry: new RectangleGeometry({
                  rectangle: Rectangle.fromDegrees(110.0, 30.0, 120.0, 40.0)
              }),
              attributes: {
                  color: ColorGeometryInstanceAttribute.fromColor(Color.RED.withAlpha(0.5))
              }
          })
      )

      pushPrimitive(
          createPrimitives(
              {
                  appearance: new PerInstanceColorAppearance({
                      translucent: true,
                      flat: true
                  }),
                  allowPicking: true,
              },
              rectangles
          )
      )

      // 自动定位到矩形范围(camera.flyTo 的 destination 支持 Rectangle)
      viewer.camera.flyTo({ destination: Rectangle.fromDegrees(110.0, 30.0, 120.0, 40.0) })
  })
})

function handleGeometryClick(id: string) {
    ElMessage.success(`点击了 ${id}`);
}
/**
 * Viewer 加载完成处理
 */
// function handleReady(viewer: Viewer){
//   console.log('viewer ready', viewer)
// }

const count = ref(11)
</script>

<template>
  <section id="center">
    <div class="hero">
      <cs-viewer id="x4fs7p7">
        <cs-primitive-collection
            ref="primitiveCollection"
            :allow-picking="true"
            @geometry-instance-click="handleGeometryClick"
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
