---
kind: external_dependency
name: Cesium 三维地球引擎
slug: cesium-三维地球引擎
category: external_dependency
scope:
    - '**'
---

### 身份与角色
- 运行时对坐标参数有严格类型校验：传入 `undefined` 到 `Cartesian3.fromDegrees` 会抛出 `DeveloperError: Expected longitude to be typeof number, actual typeof was undefined`。

### 稳定约束
- 异步数据（GeoJSON、3D Tiles）必须在加载完成后的回调中调用 zoomTo/flyTo，否则 boundingSphere 尚未计算，定位静默失效。

### 方向
任何绕过 `@iw/cesium-ui` 直接使用 Cesium 的代码都需遵循上述参数校验与定位时机约束。