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
      {
        path: '/Essentials/TemplateRefs',
        name: 'TemplateRefs',
        title: '模板引用',
        component: () => import('@/views/essentials/TemplateRefs.vue')
      },

    ]
  },
  {
    name: "ComponentsInDepth",
    title: "组件",
    path: "/ComponentsInDepth",
    children: [
      {
        path: '/ComponentsInDepth/Basic',
        name: 'ComponentsInDepthBasic',
        title: '组件基础',
        component: () => import('@/views/components-in-depth/Basic.vue')
      },
      {
        path: '/ComponentsInDepth/Props',
        name: 'ComponentsInDepthProps',
        title: '组件属性',
        component: () => import('@/views/components-in-depth/Props.vue')
      },
      {
        path: '/ComponentsInDepth/FallthroughAttributes',
        name: 'FallthroughAttributes',
        title: 'Attributes透传',
        component: () => import('@/views/components-in-depth/FallthroughAttributes.vue')
      },
      {
        path: '/ComponentsInDepth/Events',
        name: 'ComponentsInDepthEvents',
        title: '组件事件',
        component: () => import('@/views/components-in-depth/Events.vue')
      },
      {
        path: '/ComponentsInDepth/Slots',
        name: 'ComponentsInDepthSlots',
        title: '组件插槽',
        component: () => import('@/views/components-in-depth/Slot.vue')
      },
      {
        path: '/ComponentsInDepth/ProvideAndInject',
        name: 'ProvideAndInject',
        title: '依赖注入',
        component: () => import('@/views/components-in-depth/ProvideAndInject.vue')
      },
    ]
  },
  {
    name: "Reusability",
    title: "逻辑复用",
    path: "/Reusability",
    children: [
      {
        path: '/Reusability/CustomDirectives',
        name: 'CustomDirectives',
        title: '自定义指令',
        component: () => import('@/views/reusability/CustomDirectives.vue')
      },
      {
        path: '/Reusability/BuiltInComponents',
        name: 'BuiltInComponents',
        title: '内置组件',
        component: () => import('@/views/reusability/BuiltInComponents.vue')
      },
    ]
  },
  {
    name: "ScalingUp",
    title: "规模化",
    path: "/ScalingUp",
    children: [
      {
        path: '/ScalingUp/VueRouter',
        name: 'VueRouter',
        title: 'Vue Router',
        component: () => import('@/views/scaling-up/VueRouter.vue')
      },
      {
        path: '/ScalingUp/Pagination',
        name: 'Pagination',
        title: '分页视图',
        component: () => import('@/views/scaling-up/Pagination.vue')
      },
      {
        path: '/ScalingUp/Pinia',
        name: 'Pinia',
        title: 'Pinia',
        component: () => import('@/views/scaling-up/Pinia.vue')
      },
    ]
  }
]