<template>
  <el-card >
    <template #header>v-if</template>
    
    <p v-if="loggedIn">欢迎回来！</p>
    <p v-else>请先登录。</p>
    <el-button @click="loggedIn = !loggedIn">切换登录状态</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>v-show</template>
    
    <p v-show="toggle">这段话只是被 display:none 了</p>
    <el-button @click="toggle = !toggle">显示 / 隐藏</el-button>
  </el-card>
</template>

<script setup>
import { ref} from 'vue';

const loggedIn = ref(false)

const toggle = ref(true)

</script>

<style scoped>

</style>