<template>
  <div>主页</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { initView } from '@/common'

const title = ref("")
onMounted(() => {
  title.value = initView()
});

</script>

<style scoped>

</style>