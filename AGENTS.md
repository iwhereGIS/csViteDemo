# AGENTS.md

本文件为 AI 编码代理提供项目上下文与操作规范。所有事实均基于代码与实际执行验证。

## 项目概述

**csViteDemo** 是 Cesium + Vue 地理可视化示例集：基于 Vite 的单页应用，聚合 31 个示例（实体、绘图、测量、图层、GeoSot 网格、信息窗口等），通过 Element Plus 按钮栏动态导航切换。

## 技术栈

| 类别 | 选型 | 版本 |
|---|---|---|
| 框架 | Vue 3（Script Setup） | ^3.5.30 |
| 语言 | TypeScript | ~5.9.3 |
| 构建 | Vite | 8.0.5 |
| 3D 引擎 | Cesium | ^1.139.1 |
| 组件库 | @iw/cesium-ui（**内网私有包**） | 1.13.1 |
| UI | Element Plus | ^2.13.6 |
| 包管理 | pnpm（packageManager 字段锁定） | 10.18.2 |

## 常用命令

```bash
pnpm install        # 安装依赖（必须用 pnpm，勿用 npm，原因见"已知坑点"）
pnpm dev            # 开发服务器 → http://127.0.0.1:5174（host/port 硬编码于 vite.config.ts）
pnpm build          # vue-tsc -b 类型检查 && vite build（类型错误会阻断打包）
pnpm preview        # 预览构建产物
npx vue-tsc -b      # 仅类型检查（修改代码后的标准验证手段，退出码 0 为通过）
```

## 项目结构

```
src/
├── main.ts              # 入口：注册 ElementPlus、CesiumUI（含全局 lng/lat/height/tdtToken）、Cesium Ion token
├── App.vue              # 薄壳，渲染 <index />
├── index.vue            # 示例导航容器：exampleId 状态 + <component :is> 动态渲染 + el-button 列表
├── examples.ts          # 示例注册表：{ id, label, comp }，lazy() 包装 defineAsyncComponent（loading/error/重试3次）
├── style.css            # 全局 CSS 变量主题（含 dark mode）
└── components/
    ├── Viewer/          # CsViewer / VirtualViewer 示例
    ├── Entity/          # 点/线/面/墙/椭圆/标签/Billboard 示例
    ├── Drawing/         # 交互式绘制（折线、圆形墙、多边形墙）
    ├── Measure/         # 交互式测量（坐标拾取、距离、面积）
    ├── Provider/        # 图层（高德/天地图/WMS）与地形
    ├── GeoSot/          # GeoSot 二/三维网格 primitive
    ├── Primitive/       # PrimitiveCollection
    ├── Others/          # Icon/Link/MouseTip/ToolTip/InfoWindow
    └── Ui/              # AsyncLoading / AsyncError（异步组件占位）
```

依赖方向单向：`main → App → index → examples → components/*`。

自动生成文件（**勿手改**）：`auto-imports.d.ts`、`components.d.ts`（unplugin 生成）。

## 新增示例的约定

1. 在 `src/components/<功能域>/` 下创建 `Demo-<名称>.vue`（Script Setup + TS）。
2. 在 `src/examples.ts` 注册：递增 `id`、中文 `label`、`lazy(() => import(...))`。
3. 示例骨架约定：`<cs-viewer @ready="handleReady">` 包裹内容；`.hero` 容器 `width/height: 100%`。
4. 静态对象示例需在实体 `@ready="(viewer, entity)"` 回调中调用 `viewer.flyTo(entity)` 定位（Cesium 不会自动移动相机）。
5. 交互式示例（Drawing/Measure/按钮触发的 GeoSot）**不做**自动定位，避免破坏交互语义。
6. 修改后必须通过 `npx vue-tsc -b`（项目开启 noUnusedLocals，未使用的导入/函数会报错）。

## @iw/cesium-ui 1.13.1 使用要点（已验证）

- **全局配置**：`app.use(CesiumUI, { lng, lat, height, tdtToken })`。`CsViewer` 的初始定位（`initWithGlobalDestination` 默认 true）要求 **lng、lat、height 三者齐全**才会执行 `camera.setView`，缺一即静默跳过。
- **useCsGlobalConfig**：
  - 带 key：`useCsGlobalConfig('lng')` → `Ref<number | undefined>`（推荐，使用处 `.value`）。
  - 无参：返回 `Ref<ConfigProviderContext>`，**不可直接解构**（`const { lng } = useCsGlobalConfig()` 得到 undefined）。
- **事件名以包内 `types/**/*.d.ts` 的 emits 声明为准**（vue-tsc 不检查模板层事件名）：
  - 实体组件：`ready(viewer: Viewer, entity: Entity)`
  - CsMouseTip：`move(position?: [number, number, number])`（**不是** `onMove`；模板写 `@move`）
  - Measure 系列：`delete(id: string)`
  - CsDrawingPolyline：有 `change(positions)`；**CsDrawingWallCircle/WallPolygon 无 change 事件**，用 `watch` 监听 v-model 值替代
  - CsPrimitiveCollection：`geometryInstanceClick(id, attributes, instance?)`
- **v-model**：Drawing 系列使用具名 v-model（`v-model:position`、`v-model:positions`、`v-model:radius`、`v-model:height`、`v-model:extrudedHeight`、`v-model:editMode`）。
- **useCsViewer(id)**：`ready()` 返回 `Promise<Viewer>`；跨组件获取 viewer 用 `<cs-viewer id="...">` + `useCsViewer('...')`。
- **CsWebMapTileServiceImageryProvider**：继承 Cesium WMTS Provider，额外提供实例字段 `invertColor: boolean`、`fillColor?: [r,g,b,a]`。
- 排查包内实现时注意：**pnpm 的 node_modules 条目是符号链接**，ripgrep 默认不跟随会产生假阴性；应解析 `.Target` 到 `node_modules/.pnpm/@iw+cesium-ui@1.13.1_*/` 真实路径再搜索。

## Cesium 通用注意事项

- `viewer.entities.add()` 等操作**从不**改变相机；定位必须显式调用 `zoomTo` / `flyTo` / `camera.setView`。
- `Cartesian3.fromDegrees(lng, lat)` 对参数做严格类型校验，传 undefined 抛 `DeveloperError`。
- 异步数据源（GeoJSON/3D Tiles）必须在加载完成回调中定位，否则 boundingSphere 未计算、定位静默失效。
- `Viewer.flyTo` 只接受 Entity/DataSource/ImageryLayer/Cesium3DTileset 等；**Rectangle 定位用 `viewer.camera.flyTo({ destination: rectangle })`**。

## 已知坑点

1. **私有包安装**：`@iw/cesium-ui` 仅存在于内网 registry（`.npmrc` → `http://qa.iwhere.com:8109/repository/npm-public/`，无凭证）。用 `npm install` 会因 404 触发 arborist 崩溃，报误导性的 `Cannot read properties of null (reading 'matches')`——**始终使用 pnpm**。
2. **vue-tsc 盲区**：第三方组件模板层的 props 名/事件名/slot 名不受严格类型检查，API 兼容性审查必须对照安装版本的 `types/*.d.ts`。
3. **Vue 事件名编译规则**：模板 `@move` → `onMove` prop；若误写 `@onMove` 会编译成 `onOnMove`，监听永不触发且无任何报错。
4. **换行符**：Windows 环境，git 提示 `LF will be replaced by CRLF` 属正常现象。

## Git 提交规范

Conventional Commits 中文格式 + emoji 前缀，`类型(范围): 描述`：

- `✨feat(示例): ...` / `🐞fix(示例): ...` / `🦄refactor(...)` / `🐳chore(依赖): ...` / `🌈style(...)` / `📃docs: ...` / `🎈perf: ...` / `🔧build: ...`

提交前自查：`npx vue-tsc -b` 通过；不提交凭证类文件；`.qoder/`（repowiki 文档）已纳入跟踪，文档更新可随代码提交。
