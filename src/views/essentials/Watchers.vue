<template>
  <el-card >
    <template #header>监听数据</template>
    
    <el-input-number v-model="num" :min="1" :max="10" />
  </el-card>
  <br/>
  <el-card >
    <template #header>
      监听对象
    </template>
    <div>
       <span>一次回调</span> &nbsp
       <el-checkbox v-model="onceFlag" @change="onceFlagChange($event)"></el-checkbox>
    </div>
    <div>
       <span>立即回调</span> &nbsp
       <el-checkbox v-model="immediateFlag" @change="immediateFlagChange($event)"></el-checkbox>
    </div>
    <div>
       <span>深层侦听</span> &nbsp
       <el-checkbox v-model="deepFlag" @change="deepFlagChange($event)"></el-checkbox>
    </div>
    <el-divider></el-divider>

    <div>
      <span>监听ref对象</span>
      <el-tag type="warning">ref 默认不会深度监听，需要手动使用 deep:true</el-tag>
    </div>

    <ul>
      <li v-for="(value, key) in personRef" :key="key">
        <template v-if="getType(value) === 'Object'">
          {{ key }}:
          <ul>
            <li v-for="(v, k) in value" :key="key">{{ k }}: {{ v }}</li>
          </ul>
        </template>
        <template v-else>
          {{ key }}: {{ value }}
        </template>
      </li>
    </ul>
    <el-button @click="generatePersonRef">随机生成人员信息</el-button>
    <el-button @click="updatePersonFullNameRef">随机修改人员信息</el-button>

    <el-divider></el-divider>

    <div>
      <span>监听reactive对象</span>
      <el-tag type="warning">reactive 替换对象实例后失去响应性；但默认开启深度监听</el-tag>
    </div>
    
    <ul>
      <li v-for="(value, key) in personReactive" :key="key">
        <template v-if="getType(value) === 'Object'">
          {{ key }}:
          <ul>
            <li v-for="(v, k) in value" :key="key">{{ k }}: {{ v }}</li>
          </ul>
        </template>
        <template v-else>
          {{ key }}: {{ value }}
        </template>
      </li>
    </ul>
    <el-button @click="generatePersonReactive">随机生成人员信息</el-button>
    <el-button @click="updatePersonFullNameReactive">随机修改人员信息</el-button>
  </el-card>

</template>

<script setup>
import { ElMessage } from 'element-plus';
import { fa, fakerZH_CN as faker } from '@faker-js/faker' 
import { getType } from '@/common'
import { ref, reactive, computed, onMounted, watch, watchEffect, toRef } from 'vue';
import { useWatchStore } from'@/store'

const store = useWatchStore()

onMounted(() => {
  startWatchRef()
  startWatchReactive()
});

//监听数据
const num = ref(1)

watch(num, async (newValue, oldValue) => {
  ElMessage.success(`newValue: ${newValue}, oldValue: ${oldValue}`)
})

const generatePersonData = () => {
  return {
    fullName: faker.person.fullName(),
    address: {
      country: faker.location.country(),
      city: faker.location.city(),
      street: faker.location.streetAddress(),
      zipCode: faker.location.zipCode(),
    },
  }
}

const onceFlag = ref(store.onceFlag)

const onceFlagChange = (value) => {
  store.$patch((state) => {
    state.onceFlag = value
  })
  stopWatchRef()
  startWatchRef()
  stopWatchReactive()
  startWatchReactive()
}

const immediateFlag = ref(store.immediateFlag)

const immediateFlagChange = (value) => {
  store.$patch((state) => {
    state.immediateFlag = value
  })
  stopWatchRef()
  startWatchRef()
  stopWatchReactive()
  startWatchReactive()
}

const deepFlag = ref(store.deepFlag)

const deepFlagChange = (value) => {
  store.$patch((state) => {
    state.deepFlag = value
  })
  stopWatchRef()
  startWatchRef()
  stopWatchReactive()
  startWatchReactive()
}

//监听对象
//ref
const personRef = ref(generatePersonData())

const generatePersonRef = () => {
  personRef.value = generatePersonData()
}

const updatePersonFullNameRef = () => {
  personRef.value.fullName = faker.person.fullName()
  personRef.value.address.city = faker.location.city()
}

let stopWatchRefTemp = null

const startWatchRef = () => {
  if(stopWatchRefTemp) 
    return
  stopWatchRefTemp = watch(personRef, 
    async (newValue, oldValue) => 
    {
      ElMessage.success(`ref watch: [newValue: ${newValue.fullName}, oldValue: ${oldValue ? oldValue.fullName : ""}]`)
    }, 
    {
      deep: deepFlag.value,
      once: onceFlag.value,
      immediate: immediateFlag.value
    }
  )
}

const stopWatchRef = () => {
  //调用返回函数
  stopWatchRefTemp()
  //清空以便下次赋值
  stopWatchRefTemp = null
}

//监听对象
//reactive
let personReactive = reactive(generatePersonData())

const generatePersonReactive = () => {
  //失去响应性
  // personReactive = generatePersonData()
  let person = generatePersonData()
  for(let key in person){
    personReactive[key] = person[key]
  }
}

const updatePersonFullNameReactive = () => {
  personReactive.fullName = faker.person.fullName()
  personReactive.address.city = faker.location.city()
}

let stopWatchReactiveTemp = null

const startWatchReactive = () => {
  if(stopWatchReactiveTemp) 
    return
  stopWatchReactiveTemp = watch(personReactive, 
    async (newValue, oldValue) => 
    {
      ElMessage.success(`reactive watch: [newValue: ${newValue.fullName}, oldValue: ${oldValue ? oldValue.fullName : ""}]`)
    },
    {
      once: onceFlag.value,
      immediate: immediateFlag.value
    }
  )
}

const stopWatchReactive = () => {
  //调用返回函数
  stopWatchReactiveTemp()
  //清空以便下次赋值
  stopWatchReactiveTemp = null
}
</script>

<style scoped>

</style>