<template>
  <el-card>
    <template #header>
      祖先组件（ProvideParent）
    </template>
    <p>当前主题：{{ theme }}</p>
  </el-card>
  <br />
  <el-card>
    <ProvideAndInjectComponentA />
  </el-card>
  <br />
  <el-card>
    <ProvideAndInjectComponentB />
  </el-card>
</template>

<script setup>
import { ref, provide } from 'vue'

import ProvideAndInjectComponentA from '@/components/ProvideAndInjectComponentA.vue'
import ProvideAndInjectComponentB from '@/components/ProvideAndInjectComponentB.vue'

const ThemeKey = Symbol.for('theme')
const theme = ref('light') // 响应式数据
provide(ThemeKey, theme)
</script>
