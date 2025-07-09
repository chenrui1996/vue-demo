<template>
  <el-descriptions title="SubView2" style="padding: 10px;" border>
    <el-descriptions-item label="name">{{ $route.name }}</el-descriptions-item>
    <el-descriptions-item label="path">{{ $route.path }}</el-descriptions-item>
    <el-descriptions-item label="fullPath">{{ $route.fullPath }}</el-descriptions-item>
    <el-descriptions-item label="query">{{ $route.query }}</el-descriptions-item>
    <el-descriptions-item label="params">{{ $route.params }}</el-descriptions-item>
    <el-descriptions-item label="id">{{ id }}</el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
const props = defineProps(['id']);
</script>

<style scoped></style>