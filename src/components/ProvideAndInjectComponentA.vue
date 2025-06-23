<!-- ChildA.vue -->
<template>
  <div>
    <h3>子组件 A</h3>
    <el-button @click="switchTheme">切换主题</el-button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const ThemeKey = Symbol.for('theme')
const theme = inject(ThemeKey)

function switchTheme() {
  if (!theme)
    throw new Error('未找到主题提供者')
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
