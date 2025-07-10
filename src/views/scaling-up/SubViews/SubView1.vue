<template>
  <el-descriptions title="SubView1" style="padding: 10px;" border>
    <el-descriptions-item label="name">{{ $route.name }}</el-descriptions-item>
    <el-descriptions-item label="path">{{ $route.path }}</el-descriptions-item>
    <el-descriptions-item label="fullPath">{{ $route.fullPath }}</el-descriptions-item>
    <el-descriptions-item label="query">{{ $route.query }}</el-descriptions-item>
    <el-descriptions-item label="params">{{ $route.params }}</el-descriptions-item>

  </el-descriptions>
</template>

<script setup>


</script>

<style scoped></style>