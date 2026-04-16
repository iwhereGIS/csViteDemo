<script setup lang="ts">
import { ref } from 'vue'
import DemoCsViewer from './components/Viewer/Demo-CsViewer.vue'
import DemoVrCsViewer from './components/Viewer/Demo-VrCsViewer.vue'
import DemoCsEntityBillboard from './components/Entity/billboard/Demo-Billboard.vue'
import DemoBillboardSlot from './components/Entity/billboard/Demo-BillboardSlot.vue'
import DemoEllipse from './components/Entity/Demo-Ellipse.vue'
import DemoCsLabelEntity from './components/Entity/Demo-Label.vue'
import DemoCsPointEntity from './components/Entity/Demo-Point.vue'
import DemoCsPolygonEntity from './components/Entity/Demo-Polygon.vue'
import DemoCsPolylineEntity from './components/Entity/Demo-Polyline.vue'
import DemoCsWallEntity from './components/Entity/Demo-Wall.vue'
import DemoPrimitiveCollection from './components/Primitive/Demo-PrimitiveCollection.vue'
import DemoAMap from "./components/Provider/Layers/Demo-AMap.vue";
import DemoTDTMap from "./components/Provider/Layers/Demo-TDTMap.vue";
import DemoTDTMapStyleHelper from "./components/Provider/Layers/Demo-TDTMap-Style-Helper.vue";
import DemoWMS from "./components/Provider/Layers/Demo-WMS.vue";
import DemoTerrain from "./components/Provider/terrain/Demo-Terrain.vue";
import DemoMeasurePoint from "./components/Measure/Demo-Measure-Point.vue";
import DemoMeasureDistance from "./components/Measure/Demo-Measure-Distance.vue";
import DemoMeasureAreaCircle from "./components/Measure/Area/Demo-Measure-AreaCircle.vue";
import DemoMeasureAreaPolygon from "./components/Measure/Area/Demo-Measure-AreaPolygon.vue";
import DemoDrawingPolyline from "./components/Drawing/Demo-Drawing-Polyline.vue";
import DemoDrawingWallCircle from "./components/Drawing/Wall/Demo-Drawing-WallCircle.vue";
import DemoDrawingWallPolygon from "./components/Drawing/Wall/Demo-Drawing-WallPolygon.vue";
import DemoGeoSotD2 from "./components/GeoSot/primitive/Demo-GeoSot-D2.vue";
import DemoGeoSotD3 from "./components/GeoSot/primitive/Demo-GeoSot-D3.vue";
import DemoOthersMouseTip from "./components/Others/Demo-Others-MouseTip.vue";
import DemoOthersToolTip from "./components/Others/Demo-Others-ToolTip.vue";
import DemoOthersInfoWindow from "./components/Others/InfoWindow/Demo-Others-InfoWindow.vue";

import DemoOthersInfoWindowWithLine from "./components/Others/InfoWindow/Demo-Others-InfoWindowWithLine.vue";
import DemoOthersLink from "./components/Others/Demo-Others-Link.vue";
import DemoOthersIcon from "./components/Others/Demo-Others-Icon.vue";
const exampleId = ref(0)

</script>

<template>

  <DemoCsViewer v-if="exampleId==1"></DemoCsViewer>
  <DemoVrCsViewer v-else-if="exampleId==2"></DemoVrCsViewer>
  <DemoCsEntityBillboard v-else-if="exampleId==3"></DemoCsEntityBillboard>
  <DemoBillboardSlot v-else-if="exampleId==4"></DemoBillboardSlot>
  <DemoEllipse v-else-if="exampleId==5"></DemoEllipse>
  <DemoCsLabelEntity v-else-if="exampleId==6"></DemoCsLabelEntity>
  <DemoCsPointEntity v-else-if="exampleId==7"></DemoCsPointEntity>
  <DemoCsPolygonEntity v-else-if="exampleId==8"></DemoCsPolygonEntity>
  <DemoCsPolylineEntity v-else-if="exampleId==9"></DemoCsPolylineEntity>
  <DemoCsWallEntity v-else-if="exampleId==10"></DemoCsWallEntity>
  <DemoPrimitiveCollection v-else-if="exampleId==11"></DemoPrimitiveCollection>
  <DemoAMap v-else-if="exampleId==12"></DemoAMap>
  <DemoTDTMap v-else-if="exampleId==13"></DemoTDTMap>
  <DemoTDTMapStyleHelper v-else-if="exampleId==14"></DemoTDTMapStyleHelper>
  <DemoWMS v-else-if="exampleId==15" ></DemoWMS>
  <DemoTerrain v-else-if="exampleId==16"></DemoTerrain>
  <DemoMeasurePoint v-else-if="exampleId==17"></DemoMeasurePoint>
  <DemoMeasureDistance v-else-if="exampleId==18"></DemoMeasureDistance>
  <DemoMeasureAreaCircle v-else-if="exampleId==19"></DemoMeasureAreaCircle>
  <DemoMeasureAreaPolygon v-else-if="exampleId==20"></DemoMeasureAreaPolygon>
  <DemoDrawingPolyline v-else-if="exampleId==21"></DemoDrawingPolyline>
  <DemoDrawingWallCircle v-else-if="exampleId==22"></DemoDrawingWallCircle>
  <DemoDrawingWallPolygon v-else-if="exampleId==23"></DemoDrawingWallPolygon>
  <DemoGeoSotD2 v-else-if="exampleId==24"></DemoGeoSotD2>
  <DemoGeoSotD3 v-else-if="exampleId==25"></DemoGeoSotD3>
  <DemoOthersToolTip v-else-if="exampleId==26"></DemoOthersToolTip>
  <DemoOthersMouseTip v-else-if="exampleId==27"></DemoOthersMouseTip>
  <DemoOthersInfoWindow v-else-if="exampleId==28"></DemoOthersInfoWindow>
  <DemoOthersInfoWindowWithLine v-else-if="exampleId==29"></DemoOthersInfoWindowWithLine>
  <DemoOthersLink v-if="exampleId==30"></DemoOthersLink>
  <DemoOthersIcon v-if="exampleId==31"></DemoOthersIcon>

  <div>
    <el-button @click="exampleId=1">viewer初始化</el-button>
    <el-button @click="exampleId=2">virtual viewer</el-button>
    <el-button @click="exampleId=3">Billboard</el-button>
    <el-button @click="exampleId=4">BillboardSlot</el-button>
    <el-button @click="exampleId=5">Ellipse</el-button>
    <el-button @click="exampleId=6">Label</el-button>
    <el-button @click="exampleId=7">Point</el-button>
    <el-button @click="exampleId=8">Polygon</el-button>
    <el-button @click="exampleId=9">Polyline</el-button>
    <el-button @click="exampleId=10">Wall</el-button>
    <el-button @click="exampleId=11">PrimitiveCollection</el-button>
    <el-button @click="exampleId=12">高德地图</el-button>
    <el-button @click="exampleId=13">天地图</el-button>
    <el-button @click="exampleId=14">天地图样式</el-button>
    <el-button @click="exampleId=15">WMS地图</el-button>
    <el-button @click="exampleId=16">地形</el-button>
    <el-button @click="exampleId=17">坐标拾取</el-button>
    <el-button @click="exampleId=18">测距</el-button>
    <el-button @click="exampleId=19">测量圆形面积</el-button>
    <el-button @click="exampleId=20">测量多边形面积</el-button>
    <el-button @click="exampleId=21">绘制线</el-button>
    <el-button @click="exampleId=22">绘制圆形墙</el-button>
    <el-button @click="exampleId=23">绘制多边形墙</el-button>
    <el-button @click="exampleId=24">GeoSot二维网格</el-button>
    <el-button @click="exampleId=25">GeoSot三维网格</el-button>
    <el-button @click="exampleId=26">ToolTip</el-button>
    <el-button @click="exampleId=27">MouseTip</el-button>
    <el-button @click="exampleId=28">InfoWindow</el-button>
    <el-button @click="exampleId=29">带线InfoWindow</el-button>
    <el-button @click="exampleId=30">Link</el-button>
    <el-button @click="exampleId=31">Icon</el-button>
  </div>
</template>

<style scoped>

</style>
