import { createApp } from 'vue'
import './style.css'
import '@iw/cesium-ui/theme-default/index.css'
import App from './App.vue'
import CesiumUI from '@iw/cesium-ui'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)

app.use(CesiumUI,{
    lng: 116.3983552214,
    lat: 39.906463,
    tdtToken: '8ff7fd50649991cdca26d3e60fbbffd5'
})
app.mount('#app')
