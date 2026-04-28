import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [

]
// 动态路由，基于用户权限动态去加载
export const dynamicRoutes: RouteRecordRaw[] = [

    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
            menuConfig: {
                name: '主页'
            }
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/index.vue'),
        meta: {
            menuConfig: {
                name: '关于'
            }
        },
    },
]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        ...constantRoutes,
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/index.vue'),
            children: dynamicRoutes
        }
    ]
})

export default router
