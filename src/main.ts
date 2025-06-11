import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

///持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'

import router from './router'

createApp(App)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(ElementPlus)
  .use(router)
  .mount('#app')
