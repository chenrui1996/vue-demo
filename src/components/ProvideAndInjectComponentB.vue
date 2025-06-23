<!-- ChildB.vue -->
<template>
  <div>
    <h3>子组件 B</h3>
    <p>当前读取的主题：{{ theme }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const ThemeKey = Symbol.for('theme')
const theme = inject(ThemeKey, 'default') // 提供默认值
</script>
