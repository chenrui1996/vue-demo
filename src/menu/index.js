export const menuTree = [
  {
    name: "Essentials",
    title: "基础",
    path: "/Essentials",
    children: [
      {
        path: '/Essentials/TemplateSyntax',
        name: 'TemplateSyntax',
        title: '模版语法',
        component: () => import('@/views/essentials/TemplateSyntax.vue')
      },
      {
        path: '/Essentials/ReactivityFundamentals',
        name: 'ReactivityFundamentals',
        title: '响应式基础',
        component: () => import('@/views/essentials/ReactivityFundamentals.vue')
      },
      {
        path: '/Essentials/ComputedProperties',
        name: 'ComputedProperties',
        title: '计算属性',
        component: () => import('@/views/essentials/ComputedProperties.vue')
      },
      {
        path: '/Essentials/ConditionalRendering',
        name: 'ConditionalRendering',
        title: '条件渲染',
        component: () => import('@/views/essentials/ConditionalRendering.vue')
      },
      {
        path: '/Essentials/ListRendering',
        name: 'ListRendering',
        title: '列表渲染',
        component: () => import('@/views/essentials/ListRendering.vue')
      },
      {
        path: '/Essentials/EventHandling',
        name: 'EventHandling',
        title: '事件处理',
        component: () => import('@/views/essentials/EventHandling.vue')
      },
      {
        path: '/Essentials/FormInputBindings',
        name: 'FormInputBindings',
        title: '表单输入绑定',
        component: () => import('@/views/essentials/FormInputBindings.vue')
      },
      {
        path: '/Essentials/Watchers',
        name: 'Watchers',
        title: '侦听器',
        component: () => import('@/views/essentials/Watchers.vue')
      },
    ]
  },

]