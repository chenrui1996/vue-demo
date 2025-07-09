<template>
  <div class="header">
    <p>
      标题2
    </p>
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
.header {
  background-color: lightsalmon;
  color: black;
  text-align: center;
  height: 60px;
}

.header p {
  margin: 0;
  line-height: 60px;
  font-size: large;
  font-weight: bold;
}
</style>