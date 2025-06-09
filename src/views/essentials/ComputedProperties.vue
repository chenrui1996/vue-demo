<template>
  <el-card >
    <template #header>基本用法</template>
    
    <!-- template中用变量本身 -->
    <p>姓：{{ lastName }}</p>
    <p>名：{{ firstName }}</p>
    <p>姓名(计算属性)：{{ fullName }}</p>
    <p>姓名(方法)：{{ (() => { return `${lastName} ${firstName} `})() }}</p>
    <el-button @click="generateName">随机生成姓名</el-button>
    
    <p>姓名(可写计算属性)：{{ fullNameWriteable }}</p>
    <el-button @click="generateFullName">随机生成姓名-写入计算属性</el-button>

    <p>姓名(生成记录)：{{ previousName }}</p>
  </el-card>
  <br/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fakerZH_CN as faker } from '@faker-js/faker'

const firstName = ref('')
const lastName = ref('')

const previousName = ref('')

onMounted(() => {
  firstName.value = faker.person.firstName() // 名
  lastName.value = faker.person.lastName()  // 姓
})

// 计算属性
const fullName = computed((previous) => {
  previousName.value = String(previous)
  return `${lastName.value} ${firstName.value} `
})

function generateName(){
  firstName.value = faker.person.firstName() // 名
  lastName.value = faker.person.lastName()  // 姓
}

const fullNameWriteable = computed({
  get(previous) {
    previousName.value = String(previous)
    return `${lastName.value} ${firstName.value}`
  },

  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = String(newValue).split(' ')
  }
})

function generateFullName(){
  fullNameWriteable.value = `${faker.person.firstName()} ${faker.person.lastName()}`
}

</script>

<style scoped>

</style>