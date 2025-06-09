import { createRouter, createWebHistory } from 'vue-router'
import { menuTree } from '@/menu'
import { findInTree } from '@/common'
import { useTitleStore } from '@/store'


const router = createRouter({
  history: createWebHistory(),
  routes: []
})

router.addRoute({
  path: "/",
  name: "Index",
  component: () => import('@/views/Index.vue'),
  meta: { title: '主页' }
})

function menuToRoutes(menuTree) {
  return menuTree.map(item => {
    const route = {
      path: item.path,
      name: item.name,
      component: item.component,
      meta: item.title ? { title: item.title } : {}
    }

    if (item.children && item.children.length > 0) {
      route.children = menuToRoutes(item.children)
    }

    return route
  })
}

router.addRoute(...menuToRoutes(menuTree))

router.beforeEach((to, from) => {
  if (to.path === "/") {
    useTitleStore().$patch({
      title: "主页",
    })
    return
  }

  let toMenu = findInTree(menuTree, menu => menu.path === to.path);
  if (toMenu) {
    useTitleStore().$patch({
      title: toMenu.title,
    })
    return
  }
})

export default router 
