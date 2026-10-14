---
kind: frontend_style
name: 基于 CSS 变量 + Element Plus 的轻量前端样式体系
slug: frontend_style
category: frontend_style
scope:
    - '**'
---

## 1. 使用的系统与工具

- **CSS 原生变量（CSS Custom Properties）**：所有主题色、字号、阴影等通过 `:root` 下的 `--text` / `--bg` / `--accent` / `--shadow` 等变量集中声明，是本项目唯一的“设计令牌”来源。
- **无预处理器**：仓库中不存在 `.scss` / `.less` / `tailwind.config.*`，样式全部为纯 CSS（含嵌套语法，由 Vite 原生支持）。
- **组件库**：依赖 `element-plus@^2.13.6`，并通过 `unplugin-vue-components` + `ElementPlusResolver` 在 `vite.config.ts` 中实现按需自动导入；同时引入第三方 Cesium UI 包 `@iw/cesium-ui@1.13.1`。
- **图标系统**：使用阿里 iconfont 生成的字体图标，资源位于 `src/assets/iconfont/`，配套 `demo.css` 仅作为示例页样式，非业务样式。
- **构建工具链**：Vite 8 + Vue 3 `<script setup>`，样式以单文件组件 `<style scoped>` 为主，全局样式集中在 `src/style.css`。

## 2. 关键文件

- `src/style.css`：唯一的全局样式入口，定义 CSS 变量、暗色模式、基础排版与布局。
- `vite.config.ts`：配置 `ElementPlusResolver`，使 Element Plus 组件可被自动按需导入。
- `package.json`：声明 `element-plus`、`@iw/cesium-ui`、`color` 等视觉相关依赖。
- `src/components/Ui/AsyncError.vue`、`src/components/Ui/AsyncLoading.vue`：UI 层通用组件，使用 `<style scoped>`。
- `src/index.vue`：应用外壳，包含一个 `<style scoped>` 块。
- `src/assets/iconfont/demo.css`：iconfont 示例页样式，与业务无关。

## 3. 架构与设计约定

### 设计令牌（Design Tokens）
`src/style.css` 顶部 `:root` 集中声明以下类别的 token：
- 色彩：`--text`、`--text-h`、`--bg`、`--border`、`--code-bg`、`--accent`、`--accent-bg`、`--accent-border`、`--social-bg`
- 阴影：`--shadow`（双层 box-shadow）
- 字体族：`--sans`、`--heading`、`--mono`

这些变量在 `body` 上通过 `font` 简写设置默认字号 `18px`、行高 `145%`，并启用 `color-scheme: light dark` 以触发浏览器原生暗色模式。

### 暗色模式
通过 `@media (prefers-color-scheme: dark)` 覆盖同一组 CSS 变量，切换文本、背景、边框、强调色及阴影。对 `#social .button-icon` 额外添加 `filter: invert(1) brightness(2)` 适配图标反色。

### 响应式策略
- 断点统一使用 `@media (max-width: 1024px)`，在 `h1`、`h2`、`#center`、`#next-steps`、`#spacer` 等处重复出现。
- 未采用移动优先或栅格系统，而是针对桌面端固定宽度（`#app` 固定 `width: 1126px; max-width: 100%`），在小屏下缩小字号、改为纵向布局。

### 组件样式组织
- 业务组件位于 `src/components/*/Demo-*.vue`，绝大多数为展示型示例，不单独维护样式文件。
- 仅有三个组件显式使用 `<style scoped>`：`src/components/Ui/AsyncError.vue`、`src/components/Ui/AsyncLoading.vue`、`src/index.vue`。
- 其余组件依赖全局 `src/style.css` 中的 CSS 变量和基础排版规则，未使用 BEM / CSS Modules / CSS-in-JS。

### 与 Element Plus 的集成
`vite.config.ts` 通过 `AutoImport({ resolvers: [ElementPlusResolver()] })` 和 `Components({ resolvers: [ElementPlusResolver()] })` 让 `<el-button>` 等组件无需手动 import 即可使用，但项目并未自定义 Element Plus 的主题变量（如 `$--color-primary`），也未引入 `element-plus/theme-chalk/dark/css-vars.css`，因此暗色模式主要由项目自身的 CSS 变量驱动，而非 Element Plus 内置暗色主题。

## 4. 约定与约束

- **颜色与字体只从 CSS 变量读取**：业务组件中未见硬编码的颜色值，均通过 `var(--text)`、`var(--accent)` 等引用，保证主题一致性。
- **单一全局样式入口**：全仓只有一个 `src/style.css` 作为全局样式源，组件内样式一律使用 `<style scoped>`，避免样式泄漏。
- **无 SCSS/Less/Tailwind**：仓库未安装任何 CSS 预处理器或原子化框架，样式语言仅为原生 CSS（含嵌套）。
- **暗色模式跟随系统偏好**：通过 `color-scheme: light dark` + `@media (prefers-color-scheme: dark)` 实现，未在代码中提供手动切换开关。
- **响应式断点固定为 1024px**：所有媒体查询统一使用该断点，未定义其他断点。
- **Element Plus 按需加载**：通过 `unplugin-vue-components` 的 `ElementPlusResolver` 自动解析组件，减少打包体积（见 `vite.config.ts` 第 13–17 行）。
- **图标统一走 iconfont 字体**：业务图标通过 `src/assets/iconfont/` 下的字体文件使用，而非 SVG sprite 或图片资源。