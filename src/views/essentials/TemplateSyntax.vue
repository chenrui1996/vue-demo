<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
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
  <!-- <span>{{ useTitleStore().title }}</span> -->
  <!-- 插值语法 -->
  <el-card >
    <template #header>插值语法</template>
    <h1>{{ message }}</h1>
    <!-- 双向绑定 -->
    <input v-model="message" placeholder="修改 message" />
  </el-card>
  <br/>

  <el-card >
    <template #header>属性绑定</template>
    <!-- 属性绑定 -->
    <a :href="url" target="_blank">访问链接</a>
  </el-card>
  <br/>

  <el-card >
    <template #header>事件处理</template>
    <!-- 事件处理 -->
    <p>v-on</p>
    <el-button v-on:click="handleClick">点击我</el-button>
    <p>@简写</p>
    <el-button @click="handleClick">点击我</el-button>
  </el-card>
  <br/>

  <el-card >
    <template #header>绑定 class 和 style</template>
    <!-- 绑定 class 和 style -->
    <!-- 插值语法不起作用，插值语法不会被当作属性解析 -->
    <p :class="{ active: isActive }" :style="{ color: textColor }">
      动态 class 和 style 示例
    </p>

  </el-card>
</template>


<style lang="sass" scoped>

</style>