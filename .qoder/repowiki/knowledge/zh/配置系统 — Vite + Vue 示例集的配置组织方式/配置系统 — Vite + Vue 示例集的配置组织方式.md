---
kind: configuration_system
name: 配置系统 — Vite + Vue 示例集的配置组织方式
category: configuration_system
scope:
    - '**'
source_files:
    - vite.config.ts
    - src/main.ts
    - package.json
    - .npmrc
    - tsconfig.json
    - tsconfig.app.json
    - tsconfig.node.json
---

## 概览

本项目是一个基于 Vite + Vue 3 的 Cesium 地理可视化示例集合，没有独立的运行时配置文件（无 `.env`、`config/`、`*.yaml`、`*.toml`）。所有“配置”以三种形式存在：

1. **构建期配置**：`vite.config.ts`
2. **应用启动期硬编码常量**：`src/main.ts` 中直接赋值给全局对象
3. **包管理器与注册源**：`.npmrc`、`package.json`

项目未引入任何运行时配置加载库（如 `dotenv`、`js-yaml`、`conf`），也没有环境变量注入到客户端代码的逻辑。

## 关键文件

- `vite.config.ts`：Vite 构建配置，集中了插件、开发服务器端口等。
- `src/main.ts`：Vue 应用入口，硬编码 Cesium Ion Token、天地图 token、初始经纬度与高度。
- `package.json`：依赖声明、pnpm 版本锁定、脚本命令。
- `.npmrc`：私有 npm registry 地址。
- `tsconfig.*.json`：TypeScript 编译配置（`tsconfig.app.json`、`tsconfig.node.json`、`tsconfig.json`）。

## 架构与约定

### 构建配置 (`vite.config.ts`)

- 使用 `defineConfig` 导出默认配置。
- 插件链顺序：`@vitejs/plugin-vue` → `vite-plugin-cesium-next` → `unplugin-auto-import`（带 ElementPlusResolver）→ `unplugin-vue-components`（带 ElementPlusResolver）。
- 开发服务器固定为 `host: '127.0.0.1'`、`port: 5174`，非从环境变量读取。
- 通过 `vite-plugin-cesium-next` 自动处理 Cesium 资源拷贝与 Worker 打包。

### 运行时配置（硬编码在入口）

`src/main.ts` 中直接写入以下值：

- `Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1Ni...'` — Cesium Ion 访问令牌。
- `app.use(CesiumUI, { lng: 116.3983552214, lat: 39.906463, height: 5_000_000, tdtToken: '8ff7fd50649991cdca26d3e60fbbffd5' })` — 初始视角坐标、高度、天地图 token。

这些值在构建时被内联进最终产物，不存在运行时覆盖机制。CesiumUI 组件通过 props 或全局状态消费这些值（见各 `Demo-*.vue` 示例）。

### 包管理与依赖配置

- `packageManager: "pnpm@10.18.2"` 锁定 pnpm 版本。
- `.npmrc` 将 registry 指向内部镜像 `http://qa.iwhere.com:8109/repository/npm-public/`。
- 生产依赖仅 4 个：`cesium`、`element-plus`、`@iw/cesium-ui`、`color`；其余均为 devDependencies。
- 脚本命令：`dev` / `build` / `preview`，其中 build 先执行 `vue-tsc -b` 做类型检查再构建。

### TypeScript 配置分层

- `tsconfig.json`：根聚合配置。
- `tsconfig.app.json`：前端源码编译选项。
- `tsconfig.node.json`：Node 端（Vite 插件等）编译选项。

## 约定与约束

- **无运行时配置文件**：仓库中没有 `.env`、`.env.*`、`config/` 目录或任何 YAML/TOML/JSON 配置文件被加载器读取。
- **敏感信息硬编码**：Cesium Ion Token 和天地图 token 直接写在 `src/main.ts` 源码中，未走环境变量或外部配置中心。
- **开发环境固定**：Vite 开发服务器 host/port 写死在 `vite.config.ts`，不随环境切换。
- **依赖来源受控**：`.npmrc` 强制使用公司私有 registry，而非官方 npm。
- **示例组件自身携带参数**：每个 `Demo-*.vue` 组件内部自行定义其所需的 Cesium 实体参数（坐标、样式、数据源等），属于“示例级配置”，不是共享配置。

## 结论

该项目采用“最小化配置”策略：构建期由 Vite 管理，运行期参数以字面量硬编码在入口文件中，没有抽象出统一的配置加载层、环境变量注入或 feature flag 机制。若未来需要支持多环境部署，当前结构会在 `main.ts` 和 `vite.config.ts` 两处分别扩展。