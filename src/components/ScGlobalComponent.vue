<template>
  <div>这是个全局组件</div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
// 生命周期钩子
onBeforeMount(() => {
  ElMessage.warning({
    showClose: true,
    message: '组件即将挂载 (onBeforeMount)'
  })
})

onMounted(() => {
  ElMessage.warning({
    showClose: true,
    message: '组件已挂载 (onMounted)'
  })
})

onBeforeUpdate(() => {
  ElMessage.warning({
    showClose: true,
    message: '数据更新前 (onBeforeUpdate)'
  })
})

onUpdated(() => {
  ElMessage.warning({
    showClose: true,
    message: '数据已更新 (onUpdated)'
  })
})

onBeforeUnmount(() => {
  ElMessage.warning({
    showClose: true,
    message: '组件即将卸载 (onBeforeUnmount)'
  })
})

onUnmounted(() => {
  ElMessage.warning({
    showClose: true,
    message: '组件已卸载 (onUnmounted)'
  })
})
</script>

<style scoped></style>