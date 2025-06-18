<template>
  <el-button @click="count++">You clicked me {{ count }} times.</el-button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

</script>

<style scoped></style>