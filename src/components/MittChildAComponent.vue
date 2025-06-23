<template>
  <div>这是组件A</div>
  <el-button typr="primary" @click="handleClick">传递事件</el-button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import emitter from '@/mitt/eventBus'
import { fakerZH_CN as faker } from '@faker-js/faker'


const props = defineProps();

const emits = defineEmits();

const handleClick = () => {
  emitter.emit('MCB', '来自A的数据: ' + faker.person.fullName(),)
}

onMounted(() => {

});

</script>

<style scoped></style>