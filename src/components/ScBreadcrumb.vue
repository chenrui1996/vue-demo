<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="sc-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }"> 主页 </el-breadcrumb-item>
    <el-breadcrumb-item v-if="route.path!='/'" v-for="(item, index) in breadcrumbs" :key="item.path"  :to="item.children ? null : { path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched.filter(r => r.meta && r.meta.title)
})
</script>

<style scoped>
.sc-breadcrumb{
  margin: 0 0 15px 0;
}
</style>
