<script setup>
import { ref, onMounted } from 'vue'
import { initView } from '@/common'

const title = ref("")
onMounted(() => {
  title.value = initView()
})

</script>

<template>
  <span>{{ title }}</span>
</template>


<style>

</style>