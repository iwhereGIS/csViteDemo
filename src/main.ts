import { createApp } from 'vue'
import {Ion}  from 'cesium'
import './style.css'
import '@iw/cesium-ui/theme-default/index.css'
import App from './App.vue'
import CesiumUI from '@iw/cesium-ui'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Cesium Ion
Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MGUzODNkYy0yOGIxLTQ1ZWItOTkxMC03NzZhZTZmYTg4MGIiLCJpZCI6OTUzNzQsImlhdCI6MTc3MDEwMjQxMn0.Xn4Hc_q7HNF-vnb5IR1wdRPW1Hr7lWlYY410SwRUYUc'
const app = createApp(App)

app.use(ElementPlus)

app.use(CesiumUI,{
    lng: 116.3983552214,
    lat: 39.906463,
    tdtToken: '8ff7fd50649991cdca26d3e60fbbffd5'
})
app.mount('#app')
