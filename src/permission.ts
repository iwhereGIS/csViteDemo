import router from './router'

import { getToken, authorize } from '@iw/iwhere-common-auth-library'

const whiteList: string[] = []

/**
 * Router 权限配置
 */
export const routerPermission = () => {
  router.beforeEach((to, from) => {
    console.log(from)
    if (whiteList.indexOf(to.path) !== -1) return
    if (!getToken()) return authorize()
  })

  router.afterEach(() => {
    // NProgress.done()
  })
}
