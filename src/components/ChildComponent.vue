<template>
  <div>
    <p>子组件</p>
    <p>{{ id }} ： {{ title }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  id: Number,
  title: String,
});

const emits = defineEmits();

onMounted(() => {

});

function sayHello() {
  return `hello from child [${ props.id || 0 }: ${ props.title || ""}]`
}

defineExpose({ sayHello }) 

</script>

<style scoped>

</style>
