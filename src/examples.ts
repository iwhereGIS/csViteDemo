import { defineAsyncComponent } from 'vue'
import AsyncLoading from './components/Ui/AsyncLoading.vue'
import AsyncError from './components/Ui/AsyncError.vue'

// helper to create lazy-loaded components with sensible defaults
const lazy = (loader: () => Promise<any>) => defineAsyncComponent({
  loader,
  loadingComponent: AsyncLoading,
  errorComponent: AsyncError,
  delay: 200,
  timeout: 10000,
  onError(_err, retry, fail, attempts) {
    if (attempts <= 3) {
      retry()
    } else {
      fail()
    }
  }
})

export type ExampleDef = { id: number; label: string; comp: any }

export const examples: ExampleDef[] = [
  { id: 1, label: 'viewer初始化', comp: lazy(() => import('./components/Viewer/Demo-CsViewer.vue')) },
  { id: 2, label: 'virtual viewer', comp: lazy(() => import('./components/Viewer/Demo-VrCsViewer.vue')) },
  { id: 3, label: 'Billboard', comp: lazy(() => import('./components/Entity/billboard/Demo-Billboard.vue')) },
  { id: 4, label: 'BillboardSlot', comp: lazy(() => import('./components/Entity/billboard/Demo-BillboardSlot.vue')) },
  { id: 5, label: 'Ellipse', comp: lazy(() => import('./components/Entity/Demo-Ellipse.vue')) },
  { id: 6, label: 'Label', comp: lazy(() => import('./components/Entity/Demo-Label.vue')) },
  { id: 7, label: 'Point', comp: lazy(() => import('./components/Entity/Demo-Point.vue')) },
  { id: 8, label: 'Polygon', comp: lazy(() => import('./components/Entity/Demo-Polygon.vue')) },
  { id: 9, label: 'Polyline', comp: lazy(() => import('./components/Entity/Demo-Polyline.vue')) },
  { id: 10, label: 'Wall', comp: lazy(() => import('./components/Entity/Demo-Wall.vue')) },
  { id: 11, label: 'PrimitiveCollection', comp: lazy(() => import('./components/Primitive/Demo-PrimitiveCollection.vue')) },
  { id: 12, label: '高德地图', comp: lazy(() => import('./components/Provider/Layers/Demo-AMap.vue')) },
  { id: 13, label: '天地图', comp: lazy(() => import('./components/Provider/Layers/Demo-TDTMap.vue')) },
  { id: 14, label: '天地图样式', comp: lazy(() => import('./components/Provider/Layers/Demo-TDTMap-Style-Helper.vue')) },
  { id: 15, label: 'WMS地图', comp: lazy(() => import('./components/Provider/Layers/Demo-WMS.vue')) },
  { id: 16, label: '地形', comp: lazy(() => import('./components/Provider/terrain/Demo-Terrain.vue')) },
  { id: 17, label: '坐标拾取', comp: lazy(() => import('./components/Measure/Demo-Measure-Point.vue')) },
  { id: 18, label: '测距', comp: lazy(() => import('./components/Measure/Demo-Measure-Distance.vue')) },
  { id: 19, label: '测量圆形面积', comp: lazy(() => import('./components/Measure/Area/Demo-Measure-AreaCircle.vue')) },
  { id: 20, label: '测量多边形面积', comp: lazy(() => import('./components/Measure/Area/Demo-Measure-AreaPolygon.vue')) },
  { id: 21, label: '绘制线', comp: lazy(() => import('./components/Drawing/Demo-Drawing-Polyline.vue')) },
  { id: 22, label: '绘制圆形墙', comp: lazy(() => import('./components/Drawing/Wall/Demo-Drawing-WallCircle.vue')) },
  { id: 23, label: '绘制多边形墙', comp: lazy(() => import('./components/Drawing/Wall/Demo-Drawing-WallPolygon.vue')) },
  { id: 24, label: 'GeoSot二维网格', comp: lazy(() => import('./components/GeoSot/primitive/Demo-GeoSot-D2.vue')) },
  { id: 25, label: 'GeoSot三维网格', comp: lazy(() => import('./components/GeoSot/primitive/Demo-GeoSot-D3.vue')) },
  { id: 26, label: 'ToolTip', comp: lazy(() => import('./components/Others/Demo-Others-ToolTip.vue')) },
  { id: 27, label: 'MouseTip', comp: lazy(() => import('./components/Others/Demo-Others-MouseTip.vue')) },
  { id: 28, label: 'InfoWindow', comp: lazy(() => import('./components/Others/InfoWindow/Demo-Others-InfoWindow.vue')) },
  { id: 29, label: '带线InfoWindow', comp: lazy(() => import('./components/Others/InfoWindow/Demo-Others-InfoWindowWithLine.vue')) },
  { id: 30, label: 'Link', comp: lazy(() => import('./components/Others/Demo-Others-Link.vue')) },
  { id: 31, label: 'Icon', comp: lazy(() => import('./components/Others/Demo-Others-Icon.vue')) }
]

export default examples

