---
kind: dependency_management
name: pnpm + npm 私有源依赖管理
slug: dependency_management
category: dependency_management
scope:
    - '**'
---

## 1. 使用的系统/工具

- **包管理器**: pnpm（通过 `package.json` 中的 `"packageManager": "pnpm@10.18.2"` 锁定版本，配合根目录的 `pnpm-lock.yaml` 作为锁文件）。
- **构建工具链**: Vite 8.0.5 + Vue 3.5.30 + TypeScript ~5.9.3，通过 `unplugin-auto-import` 与 `unplugin-vue-components` 实现自动导入和组件注册。
- **运行时依赖**: Cesium (`cesium ^1.139.1`)、Element Plus (`^2.13.6`)、`@iw/cesium-ui` (内部包, `1.13.1`)、Vue 3、color。
- **开发依赖**: `vite-plugin-cesium-next` 用于在 Vite 中集成 Cesium，`vue-tsc` 负责类型检查。

## 2. 关键文件

- `package.json`：声明所有依赖及脚本（`dev` / `build` / `preview`），并通过 `type: "module"` 启用 ESM。
- `pnpm-lock.yaml`：pnpm 生成的精确锁文件，确保安装结果可复现。
- `.npmrc`：配置 npm 私有仓库地址 `http://qa.iwhere.com:8109/repository/npm-public/`，作为默认 registry。

## 3. 架构与约定

- **私有源优先**：`.npmrc` 将默认 registry 指向公司内网 npm 镜像（`qa.iwhere.com:8109`），所有第三方包（包括公开包）均从该源解析。`@iw/cesium-ui` 这类以 `@iw` scope 命名的包即为内部发布的私有包。
- **pnpm 严格模式**：使用 pnpm 的 symlink/hardlink 策略，依赖不 vendored 到本地 `node_modules` 树中，而是通过内容寻址存储；`pnpm-lock.yaml` 是唯一的版本约束来源。
- **依赖分类清晰**：运行时代码仅依赖 `dependencies` 下的五个包；构建、类型检查、Vite 插件等全部放在 `devDependencies`，避免产物污染。
- **Cesium 集成方式**：通过 `vite-plugin-cesium-next` 在 Vite 构建时注入 Cesium worker 和资源，而非手动拷贝静态资源。

## 4. 约定与约束

- **包管理器锁定**：`package.json` 中声明了 `packageManager: "pnpm@10.18.2"`，强制团队使用指定版本的 pnpm（由 pnpm 自身校验）。
- **版本范围策略**：运行时依赖普遍使用 `^` 语义化版本范围（如 `^1.139.1`、`^2.13.6`、`^3.5.30`），允许小版本升级；TypeScript 使用 `~5.9.3` 更严格的补丁级锁定。
- **私有包命名空间**：内部包统一使用 `@iw/*` scope（例如 `@iw/cesium-ui`），便于与公共 npm 包区分。
- **构建脚本顺序**：`build` 脚本先执行 `vue-tsc -b` 进行类型检查，再执行 `vite build`，类型错误会阻止构建产出。
- **无 vendoring**：项目未使用任何源码级 vendoring（无 `vendor/`、`third_party/` 等目录），所有依赖均通过 pnpm 从 registry 拉取。