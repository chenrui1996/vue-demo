<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTitleStore } from '@/store'

onMounted(() => {
});

</script>

<template>
   <!-- <span>{{ useTitleStore().title }}</span> -->
   <p>这是{{ useTitleStore().title }}</p>
</template>



<style scoped>

</style>