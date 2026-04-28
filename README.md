# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

* src 源码路径
  
   assets 放主页与header相关静态资源，如json数据，图片文件，按照功能新建文件夹，放入，
   其他静态资源和当前页面和功能项目请在同级目录下新建文件夹防止资源。

* com-packages 

   非 cesium-UI 相关公共通用组件、类、函数对象等。

* components 
    
   本系统相关组件，非通用

* Cesium 组件使用 [CesiumUI](http://docs.vpn.iwhere.com:30016/cesium-ui/) 和 [vite-plugin-cesium-next](https://www.npmjs.com/package/vite-plugin-cesium-next)

* 后端接口请求使用 [RequestLib](http://docs.vpn.iwhere.com:30016/request-lib/) 和 [RequestLib代码生成器](http://docs.vpn.iwhere.com:30016/request-lib-generator/)

* 引用组件请查看 package.json 根据项目需要自行增加删除相关组件。

* 登录验证先默认使用  [iwhere-common-auth-library](http://gitlab.iwhere.com:30005/base/common/iwhere-common-auth-library) 等后面确认后如需修改再进行改动 
