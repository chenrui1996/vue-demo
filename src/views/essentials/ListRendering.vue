<template>
  <el-card >
    <template #header>v-for 遍历数组</template>
    
    <ul>
      <li v-for="(airline, i) in airlines" :key="i">{{ i }} - {{ airline }}</li>
    </ul>
    <el-button @click="generateAirlines">随机生成飞机</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>v-for 遍历对象</template>
    
    <ul>
      <li v-for="(value, key) in person" :key="key">
        <template v-if="getType(value) === 'Object'">
          {{ key }}:
          <ul>
            <li v-for="(value, key) in value" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </template>
        <template v-else>
          {{ key }}: {{ value }}
        </template>
      </li>
    </ul>
    <el-button @click="generatePerson">随机生成人员信息</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>v-for 遍历指定次数 <el-tag>win + 。可以输入表情</el-tag></template>
    
    <el-button @click="generateNumber">随机n个:</el-button>
    <el-input v-model="icon" style="width: 40px"/>
    <div>
      <span v-for="n in number" :key="n">{{icon}}</span>
    </div>

  </el-card>
  <br/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fakerZH_CN as faker } from '@faker-js/faker' 
import { getType } from '@/common'

const airlines = ref([])
const person = ref({})
const number = ref(0)
const icon = ref('😊')

onMounted(() => {
  generateAirlines()
  generatePerson()
  generateNumber()
});

function generateAirlines(){
  airlines.value.length = 0;
  for (let index = 0; index < 10; index++) {
    airlines.value.push(faker.airline.airline())
  }
}

function generatePerson(){
  person.value = {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    gender: faker.person.sexType(),
    birthday: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      country: faker.location.country(),
      city: faker.location.city(),
      street: faker.location.streetAddress(),
      zipCode: faker.location.zipCode(),
    },
    avatar: faker.image.avatar(),
    job: {
      title: faker.person.jobTitle(),
      type: faker.person.jobType(),
      area: faker.person.jobArea(),
    },
  }
}

function generateNumber(){
  number.value = Math.floor(Math.random() * 100) + 1
}

</script>

<style scoped>

</style>