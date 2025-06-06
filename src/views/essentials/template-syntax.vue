<script setup>
import { ref, onMounted } from 'vue'
import { initView }from '@/common'

const title = ref("")
onMounted(() => {
  title.value = initView()
})

const message = ref('Hello Vue!')
const url = ref('https://vuejs.org')
const isVisible = ref(true)
const items = ref(['苹果', '香蕉', '橘子'])
const isActive = ref(true)
const textColor = ref('blue')

function handleClick() {
  alert('按钮被点击了！')
}
</script>

<template>
  <!-- 插值语法 -->
  <h1>{{ message }}</h1>

  <!-- 双向绑定 -->
  <input v-model="message" placeholder="修改 message" />

  <hr/>

  <!-- 属性绑定 -->
  <a :href="url" target="_blank">访问链接</a>

  <hr/>
  <!-- 条件渲染 -->
  <input v-model="isVisible" type="checkbox" />

  <p v-if="isVisible" style="display: inline-block;">这个段落是可见的。</p>
  <p v-else style="display: inline-block;">这个段落是不可见的。</p>

  <hr/>

  <!-- 列表渲染 -->
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ index + 1 }} - {{ item }}
    </li>
  </ul>

  <hr/>

  <!-- 事件处理 -->
  <button v-on:click="handleClick">点击我</button>
  <button @click="handleClick">点击我</button>

  <hr/>

  <!-- 绑定 class 和 style -->
  <!-- 插值语法不起作用，插值语法不会被当作属性解析 -->
  <p :class="{ active: isActive }" :style="{ color: textColor }">
    动态 class 和 style 示例
  </p>
</template>


<style lang="sass" scoped>

</style>