<template>
  <div class="continer">
    <div class="notfound">
      <img src="/images/404-error_4263703.png" alt="404">
    </div>
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
.continer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notfound img {
  width: 256px;
  height: 256px;
}
</style>