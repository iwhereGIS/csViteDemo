import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium-next'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { CesiumUIResolver } from "@iw/resolver";

// https://vite.dev/config/
export default function createVitePlugins(viteEnv:any, isBuild= false) {
    // console.log(viteEnv,isBuild)
    return [
        vue(),
        cesium(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver(), CesiumUIResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), CesiumUIResolver()],
        })
    ]
}
