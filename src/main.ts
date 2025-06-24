import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

///持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'

import router from './router'

import ScGlobalComponent from '@/components/ScGlobalComponent.vue'

import { drag } from '@/common'


createApp(App)
  .directive('drag', {
    created(el, binding) {
      console.log('created', el)
    },
    beforeMount(el, binding) {
      console.log('beforeMount', el)
    },
    mounted(el, binding) {
      console.log('mounted', el)
      drag(el, binding)
    },
    beforeUpdate(el, binding) {
      console.log('beforeUpdate', el)
    },
    updated(el, binding) {
      console.log('updated', el)
      drag(el, binding)
    },
    beforeUnmount(el, binding) {
      console.log('beforeUnmount', el)
    },
    unmounted(el, binding) {
      console.log('unmounted', el)
    }
  })
  .component('ScGlobalComponent', ScGlobalComponent)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(ElementPlus)
  .use(router)
  .mount('#app')
