---
kind: configuration_system
name: Vite + pnpm 构建期配置（无运行时配置系统）
category: configuration_system
scope:
    - '**'
source_files:
    - vite.config.ts
    - package.json
    - .npmrc
    - tsconfig.json
    - tsconfig.app.json
    - tsconfig.node.json
---

## 概述

本仓库是一个基于 Vite + Vue 3 的 Cesium 地理可视化示例聚合工程，**不存在运行时配置加载机制**。应用没有 `config/` 目录、没有 `.env*` 文件、没有在业务代码中读取环境变量或配置文件。所有“配置”集中在构建期与包管理层面。

## 使用的系统与工具

- **构建配置**：`vite.config.ts`，使用 `defineConfig` 导出默认配置对象。
- **插件体系**：`@vitejs/plugin-vue`、`vite-plugin-cesium-next`、`unplugin-auto-import`、`unplugin-vue-components`（配合 Element Plus Resolver）。
- **包管理器**：pnpm（由 `package.json` 的 `packageManager: "pnpm@10.18.2"` 锁定），私有 npm registry 通过 `.npmrc` 指定为 `http://qa.iwhere.com:8109/repository/npm-public/`。
- **TypeScript 配置**：根级 `tsconfig.json` 以及 `tsconfig.app.json`、`tsconfig.node.json` 拆分编译目标。

## 关键文件

- `vite.config.ts` — 唯一的构建期配置入口，定义插件、开发服务器 host/port。
- `package.json` — 声明依赖、脚本（`dev` / `build` / `preview`）、包管理器版本。
- `.npmrc` — 私有 npm registry 地址。
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` — TypeScript 编译选项。

## 架构与约定

1. **无运行时配置层**：在 `src/**/*.{ts,vue}` 中搜索 `import.meta.env`、`process.env`、`ENV`、`config` 等关键词均无匹配结果，说明应用不读取任何运行时环境变量或外部配置文件。
2. **构建期硬编码**：开发服务器端口 `5174` 和 host `127.0.0.1` 直接写死在 `vite.config.ts` 的 `server` 选项中，未通过环境变量注入。
3. **示例注册表即“配置”**：`src/examples.ts` 作为示例组件的统一注册表，Element Plus 导航栏据此动态渲染按钮并懒加载对应组件——这是该工程中唯一接近“可配置列表”的结构，但它属于示例路由元数据而非运行配置。
4. **依赖来源集中化**：所有第三方包通过 pnpm 安装，registry 统一指向公司内网 `qa.iwhere.com:8109`，避免开发者本地环境差异。

## 约定与约束

- 构建期配置仅存在于 `vite.config.ts`，不使用 `.env` 文件或 `dotenv` 类库。
- 开发服务器地址固定为 `127.0.0.1:5174`，未在脚本或配置中暴露覆盖方式。
- 包管理器版本被 `packageManager` 字段锁定为 `pnpm@10.18.2`，团队需使用相同 pnpm 版本。
- 私有 npm registry 地址由 `.npmrc` 统一声明，不在 `package.json` 中配置 scope registry。
- 项目类型设为 `"type": "module"`，因此 `vite.config.ts` 以 ESM 语法导出配置。

## 结论

该仓库没有传统意义上的“运行时配置系统”（如 YAML/TOML 配置文件、环境变量注入、Feature Flag 管理等）。其配置关注点完全落在构建期（Vite 配置、pnpm registry、TypeScript 编译选项）与示例路由注册表上。若后续需要引入运行时配置，当前工程结构尚未提供相应的加载器或约定。