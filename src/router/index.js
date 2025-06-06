import { createRouter, createWebHistory } from 'vue-router'
import { menuList } from '@/menu'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

router.addRoute({
  path: "/",
  name: "Index",
  component: () => import('@/views/index.vue')
})

function addRoutesFromMenu(menuItems) {
  menuItems.forEach(item => {
    if (item.children) {
      addRoutesFromMenu(item.children)
    } else {
      router.addRoute({
        path: item.path,
        name: item.name,
        component: item.component
      })
    }
  })
}

addRoutesFromMenu(menuList)

export default router 
