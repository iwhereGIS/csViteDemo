---
kind: build_system
name: 基于 Vite + pnpm 的前端构建与打包
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.ts
    - .npmrc
    - tsconfig.app.json
    - tsconfig.node.json
    - tsconfig.json
    - auto-imports.d.ts
    - components.d.ts
---

## 1. 使用的系统/工具

本项目是一个纯前端单页应用，构建体系完全基于 **Vite 8**（`vite.config.ts`）+ **Vue 3**（`@vitejs/plugin-vue`），包管理器为 **pnpm 10.18.2**（通过 `package.json` 的 `packageManager` 字段锁定）。TypeScript 编译由 `vue-tsc -b` 在构建前执行，产物由 Vite 输出。Cesium 资源通过 `vite-plugin-cesium-next` 插件注入。

## 2. 关键文件

- `package.json`：声明依赖、脚本入口、包管理器版本。
- `vite.config.ts`：Vite 配置，注册 Vue、Cesium、Element Plus 自动导入与组件解析插件，并固定开发服务器 host/port。
- `.npmrc`：将 npm registry 指向内网镜像 `http://qa.iwhere.com:8109/repository/npm-public/`。
- `tsconfig.app.json` / `tsconfig.node.json` / `tsconfig.json`：TS 多项目配置（被 `vue-tsc -b` 使用）。
- `auto-imports.d.ts` / `components.d.ts`：由 `unplugin-auto-import` 与 `unplugin-vue-components` 自动生成的类型声明。

## 3. 架构与约定

- **脚本约定**（见 `package.json#scripts`）：
  - `pnpm dev` → `vite` 启动开发服务器。
  - `pnpm build` → 先运行 `vue-tsc -b` 做 TypeScript 类型检查，再 `vite build` 产出静态资源。
  - `pnpm preview` → `vite preview` 预览构建产物。
- **插件链**（见 `vite.config.ts`）：按顺序加载 `@vitejs/plugin-vue` → `vite-plugin-cesium-next` → `unplugin-auto-import`（带 ElementPlusResolver）→ `unplugin-vue-components`（带 ElementPlusResolver）。该顺序保证 Cesium 资源在 Vue 模板处理之前可用，且 Element Plus 的 API 与组件可被自动按需引入。
- **开发服务器**：默认监听 `127.0.0.1:5174`（硬编码于 `vite.config.ts` 的 `server.host` / `server.port`）。
- **包管理**：`package.json` 中 `"packageManager": "pnpm@10.18.2"` 配合 `pnpm-lock.yaml` 锁定依赖树；`.npmrc` 强制所有包从内网私有 registry 拉取。

## 4. 约定与约束

- **包管理器锁定**：`package.json` 的 `packageManager` 字段要求使用 pnpm 10.18.2（由 pnpm 自身校验）。
- **Registry 强制**：`.npmrc` 将默认 registry 设为内网地址，任何未显式指定 scope registry 的包都走该源。
- **构建顺序约束**：`build` 脚本以 `vue-tsc -b && vite build` 串联，意味着 TypeScript 类型检查失败会阻止后续打包（shell `&&` 短路）。
- **无 CI/Docker/Makefile**：仓库根目录不存在 `Dockerfile`、`Makefile`、`build*.sh`、`.github/workflows` 等 CI/容器化/发布流水线文件，也未发现任何 release 或版本号自动化逻辑——版本仍停留在 `0.0.0`，由人工维护。
- **TypeScript 多项目**：存在 `tsconfig.app.json`、`tsconfig.node.json` 与根 `tsconfig.json`，由 `vue-tsc -b` 并行检查多个 tsconfig（这是 `vue-tsc -b` 的行为约定）。

## 5. 缺失项说明

本仓库没有后端编译、跨平台交叉编译、容器镜像构建或自动化发布流程；构建仅覆盖前端静态资源的开发与打包。