<template>
  <el-card>
    <template #header>监听数据</template>

    <el-input-number v-model="num" :min="1" :max="10" />
  </el-card>
  <br />
  <el-card>
    <template #header>
      监听对象
    </template>
    <el-tag type="danger" size="large" style="font-size: .8em;font-weight: bold;">once、immediate、deep
      在watch注册时已经赋值，切换时需要【关闭侦听】再【开启侦听】</el-tag>
    <br />
    <el-tag type="danger" size="large" style="font-size: .8em;font-weight: bold;">【关闭侦听】：使用注册watch的返回函数</el-tag>
    <br />
    <div>
      <span>一次回调(once)</span> &nbsp
      <el-checkbox v-model="onceFlag" @change="onceFlagChange($event)"></el-checkbox>
    </div>
    <div>
      <span>立即回调(immediate)</span> &nbsp
      <el-checkbox v-model="immediateFlag" @change="immediateFlagChange($event)"></el-checkbox>
    </div>
    <div>
      <span>深层侦听(deep)</span> &nbsp
      <el-checkbox v-model="deepFlag" @change="deepFlagChange($event)"></el-checkbox> &nbsp
      <el-tag type="primary" size="large"
        style="font-size: .8em;font-weight: bold;">reactive默认开启深度监听，注册时未赋值，使用默认值，以对比展示</el-tag>
    </div>
    <el-divider></el-divider>

    <div>
      <span>监听ref对象</span> &nbsp
      <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">ref 默认不会深度监听，需要手动使用
        deep:true</el-tag>
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
      <span>监听reactive对象 </span> &nbsp
      <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">reactive
        替换对象实例后失去响应性；但默认开启深度监听</el-tag>
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

  <br />
  <el-card>
    <template #header>watchEffect</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">只会监听方法中调用的属性</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">相对于watch，在 watchEffect
      内改变其正在监听的变量时，不会导致无限递归或循环调用。</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">默认开启immediate、deep</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">
      未避免下次监听改变时 keyword 发生了变化，使用onWatcherCleanup【vue 3.5+】取消上次请求。不能在异步函数的 await 语句之后调用它
    </el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">
      < onCleanup 函数还可以作为第三个参数传递给侦听器回调，以及 watchEffect 作用函数的第一个参数。 </el-tag>
        <br />
        <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">默认异步批量触发</el-tag>
        <br />
        <el-input v-model.trim="keyword" placeholder="输入关键词…" />
        <p v-if="loading">加载中...</p>
        <ul v-else>
          <li v-for="item in results" :key="item.id">{{ item.title }}</li>
        </ul>
  </el-card>

</template>

<script setup>
import { ElMessage } from 'element-plus'
import { fakerZH_CN as faker } from '@faker-js/faker'
import { getType } from '@/common'
import { ref, reactive, computed, onMounted, watch, watchEffect, toRef } from 'vue';
import { useWatchStore } from '@/store'

/**
 * watch
 */
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
  if (stopWatchRefTemp)
    return
  stopWatchRefTemp = watch(personRef,
    async (newValue, oldValue) => {
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
  //遍历赋值不会失去响应性
  let person = generatePersonData()
  for (let key in person) {
    personReactive[key] = person[key]
  }
}

const updatePersonFullNameReactive = () => {
  personReactive.fullName = faker.person.fullName()
  personReactive.address.city = faker.location.city()
}

let stopWatchReactiveTemp = null

const startWatchReactive = () => {
  if (stopWatchReactiveTemp)
    return
  stopWatchReactiveTemp = watch(personReactive,
    async (newValue, oldValue) => {
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

/**
 * watchEffect 
 */
const loading = ref(false)
const keyword = ref('')
//正在请求的Keyword
const requestingKeyword = ref('')
const results = ref([])

watchEffect((onInvalidate) => {
  if (!keyword.value) {
    results.value = []
    return
  }

  loading.value = true
  //相对于watch，虽然监听但不会无限递归
  requestingKeyword.value = keyword.value
  ElMessage.primary(`正在请求, keyword: ${keyword.value}`)
  let canceled = false

  // 未避免下次监听改变时 keyword 发生了变化
  // 每次 keyword 改变时取消之前的“请求”
  onInvalidate(() => {
    if (loading.value) {
      ElMessage.error(`取消请求, keyword: ${requestingKeyword.value}`)
      canceled = true
    }
  })

  // 模拟 API 异步延时延迟
  setTimeout(() => {
    if (!canceled) {
      // 使用 faker 生成 5 条假数据
      results.value = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => ({
        id: faker.string.uuid(),
        title: faker.word.words({ count: Math.floor(Math.random() * 10) + 1 })
      }))
      loading.value = false
      ElMessage.success(`请求成功, keyword: ${keyword.value}`)
    }
  }, 1000 * (Math.floor(Math.random() * 10) + 1))
})

</script>

<style scoped></style>