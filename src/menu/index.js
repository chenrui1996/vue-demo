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
        component: () => import('@/views/Essentials/TemplateSyntax.vue')
      },
      {
        path: '/Essentials/ReactivityFundamentals',
        name: 'ReactivityFundamentals',
        title: '响应式基础',
        component: () => import('@/views/Essentials/ReactivityFundamentals.vue')
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
    ]
  },

]