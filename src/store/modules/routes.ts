import { constantRoutes, dynamicRoutes } from '@/router'
import { hasPermission, hasPermissionOr, PERMISSION_ALL } from '@iw/iwhere-common-auth-library'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

export type MenuRecordRaw = {
    name: string
    path: string
    icon?: any
    children?: MenuRecordRaw[]
}

const useRoutesStore = defineStore('routes', {
    state: () => ({
        routes: [] as RouteRecordRaw[],
        defaultRoutes: [] as RouteRecordRaw[],
        topbarRouters: [] as RouteRecordRaw[],
        sidebarRouters: [] as RouteRecordRaw[],
        menus: [] as MenuRecordRaw[]
    }),
    actions: {
        setRoutes(routes: RouteRecordRaw[]) {
            this.routes = constantRoutes.concat(routes)
        },
        setDefaultRoutes(routes: RouteRecordRaw[]) {
            this.defaultRoutes = constantRoutes.concat(routes)
        },
        setTopbarRoutes(routes: RouteRecordRaw[]) {
            this.topbarRouters = routes
        },
        setSidebarRouters(routes: RouteRecordRaw[]) {
            this.sidebarRouters = routes
        },
        generateRoutes() {
            const asyncRoutes = filterDynamicRoutes(dynamicRoutes)

            this.menus = buildMenu(asyncRoutes)
            this.setRoutes(asyncRoutes)
            this.setSidebarRouters(constantRoutes.concat(asyncRoutes))
            this.setDefaultRoutes(asyncRoutes)
            this.setTopbarRoutes(asyncRoutes)
        }
    }
})

// 动态路由遍历，验证是否具备权限
export function filterDynamicRoutes(routes: RouteRecordRaw[]) {
    const res: RouteRecordRaw[] = []
    routes.forEach((route) => {
        const permissions = route.meta?.permissions as [string]
        if (permissions) {
            if (hasPermissionOr(permissions)) {
                res.push(route)
            }
        } else if (route.children) {
            const children = filterDynamicRoutes(route.children)
            if (children.length > 0) {
                route.children = children
                res.push(route)
            } else {
                delete route.children
            }
        } else if (hasPermission(PERMISSION_ALL)) {
            res.push(route)
        }
    })
    return res
}

const buildMenu = (routes: RouteRecordRaw[]) => {
    const res: MenuRecordRaw[] = []
    routes.forEach((route) => {
        let children: MenuRecordRaw[] | undefined
        if (route.children) {
            children = buildMenu(route.children)
        }
        const menuConfig = route.meta?.menuConfig as any
        if (menuConfig) {
            res.push({
                path: route.path,
                name: menuConfig.name,
                icon: menuConfig.icon,
                children
            })
        }
    })
    return res
}

export default useRoutesStore
