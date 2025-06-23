<template>
  <div>这是组件B</div>
  <p>{{ dataB }}</p>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import emitter from '@/mitt/eventBus'
import { ElMessage } from 'element-plus';

const dataB = ref();

onMounted(() => {
  emitter.on("*", (data) => {
    console.log(data)
  })

  emitter.on("MCB", (data) => {
    ElMessage.info(data)
    dataB.value = data
  })
});

onUnmounted(() => {
  emitter.off("MCB")
  //取消注册所有事件
  emitter.all.clear()
});

</script>

<style scoped></style>