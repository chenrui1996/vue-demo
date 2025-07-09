<template>
  <div class="header">
    <p>
      标题1
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
  background-color: darkblue;
  color: aliceblue;
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