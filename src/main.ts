import { createApp } from 'vue'
import  '@/style.css'
import '@iw/cesium-ui/theme-default/index.css'
import App from './App.vue'
import CesiumUI from '@iw/cesium-ui'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 路由
import router from '@/router'

import store from '@/store'

import { routerPermission } from '@/permission'

// 授权
import { AuthService, authorize } from '@iw/iwhere-common-auth-library'
import useRoutesStore from '@/store/modules/routes'


const app = createApp(App)

app.use(store)

app.use(router)

app.use(ElementPlus)


// console.log('VITE_APP_DEFAULT_LNG:', import.meta.env.VITE_APP_DEFAULT_LNG)
// console.log('VITE_APP_DEFAULT_LAT:', import.meta.env.VITE_APP_DEFAULT_LAT)
// console.log('VITE_APP_TDT_KEY:', import.meta.env.VITE_APP_TDT_KEY)

app.use(CesiumUI,{
    lng: parseFloat(import.meta.env.VITE_APP_DEFAULT_LNG), //116.3983552214,
    lat: parseFloat(import.meta.env.VITE_APP_DEFAULT_LAT),
    terrainUrl: import.meta.env.VITE_APP_TERRAIN,
    tdtToken: import.meta.env.VITE_APP_TDT_KEY
})


new AuthService(app,{
    baseUrl: import.meta.env.VITE_APP_AUTH_API,
    clientId: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
    redirectUri: import.meta.env.VITE_APP_AUTH_REDIRECT_URI
})
    .init()
    .then(() =>{
        useRoutesStore().generateRoutes()
        routerPermission()
    })
    .catch(() => {
        authorize()
    })
    .finally(()=>{
            app.mount('#app')
        }
    )
