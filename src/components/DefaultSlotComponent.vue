<template>
  <div class="card">
    <!-- 默认插槽 -->
    <slot>默认值</slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps();

const emits = defineEmits();

onMounted(() => {

});

</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
}
</style>