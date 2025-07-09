<template>
  <div class="footer">
    <p>@footer2</p>
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
.footer {
  background-color: lightsalmon;
  color: black;
  text-align: center;
  height: 20px;
}

.footer p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
}
</style>