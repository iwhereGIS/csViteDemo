---
kind: dependency_management
name: pnpm + npm 私有仓库的依赖管理
category: dependency_management
scope:
    - '**'
source_files:
    - package.json
    - .npmrc
    - pnpm-lock.yaml
---

## 1. 使用的系统/方案

- **包管理器**: pnpm（通过 `package.json` 中的 `"packageManager": "pnpm@10.18.2"` 字段锁定版本，配合 `.npmrc` 指定 registry）。
- **构建工具链**: Vite 8.0.5 + Vue 3.5.30 + TypeScript ~5.9.3，作为 devDependencies 声明。
- **运行时依赖**: Cesium 地理可视化示例聚合工程的核心第三方库集中在 `dependencies` 中：`cesium`、`element-plus`、`vue`、`color`、`@iw/cesium-ui`。
- **私有源**: 项目通过 `.npmrc` 将 npm registry 指向内部地址 `http://qa.iwhere.com:8109/repository/npm-public/`，所有包解析均走该私有源。

## 2. 关键文件

- `package.json` — 依赖清单、脚本、包管理器版本锁定。
- `.npmrc` — npm/pnpm 的 registry 配置。
- `pnpm-lock.yaml` — pnpm 生成的锁文件（与 `package.json` 共同保证安装一致性）。

## 3. 架构与约定

- **依赖分类**：运行时代码直接使用的库放入 `dependencies`；仅构建期使用的工具（Vite、Vue 插件、TypeScript、`vue-tsc`、`unplugin-*`）放入 `devDependencies`，符合语义化依赖划分。
- **版本策略**：
  - 核心运行时库使用 `^` 前缀（如 `cesium ^1.139.1`、`element-plus ^2.13.6`、`vue ^3.5.30`），允许小版本/补丁升级。
  - 构建工具链部分使用精确版本（如 `vite 8.0.5`、`typescript ~5.9.3`），以稳定构建行为。
  - `packageManager` 字段固定 pnpm 主版本为 `10.18.2`，确保团队成员和 CI 使用同一版本的包管理器。
- **私有注册表**：`.npmrc` 将默认 registry 替换为公司内 `qa.iwhere.com:8109`，意味着所有非本地安装的包都从该镜像拉取，而非官方 npm 源。
- **无 vendor 目录**：项目未采用源码级 vendoring（无 `vendor/`、`node_modules` 提交），依赖通过 pnpm 的 node_modules 机制解析。

## 4. 约定与约束

- **包管理器锁定**：`package.json` 中的 `packageManager` 字段强制使用 pnpm 10.18.2（由 pnpm 自身在 install 时校验）。
- **registry 统一**：`.npmrc` 全局覆盖 registry，所有依赖解析走公司内部 npm 仓库，禁止直接访问官方 npm 源。
- **锁文件**：`pnpm-lock.yaml` 存在且应随代码提交，用于复现完全一致的依赖树。
- **依赖范围**：只有 `dependencies` 中的包会被打包进生产产物；`devDependencies` 仅在开发/构建阶段可用。