export const menuList = [
  {
    name: "Essentials",
    label: "基础",
    path: "/essentials",
    children: [
      {
        path: '/essentials/template-syntax',
        name: 'TemplateSyntax',
        label: '模版语法',
        component: () => import('@/views/essentials/template-syntax.vue')
      },
      {
        path: '/essentials/reactivity-fundamentals',
        name: 'ReactivityFundamentals',
        label: '响应式基础',
        component: () => import('@/views/essentials/reactivity-fundamentals.vue')
      },
    ]
  },

]