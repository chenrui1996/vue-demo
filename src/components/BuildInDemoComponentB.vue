<template>
  <p>组件B</p>
  <el-input style="width: 200px;" v-model="val"></el-input>
</template>

<script setup>
import { ref } from 'vue'
const val = ref('')
</script>

<style scoped></style>