<template>
  <div>
    <el-card>
      <template #header>
        父组件
      </template>
      <el-button type="success" @click="userStore.login(generateUser(), faker.internet.jwt())">
        登录
      </el-button>

      <el-button type="primary" @click="updateUserStore">
        更新
      </el-button>

      <el-button type="primary" @click="updateUser">
        更新user(解构结果)
      </el-button>

      <el-button type="warning" @click="replace">
        替换
      </el-button>

      <el-button type="danger" @click="logoutUser">
        重置
      </el-button>

      <el-button type="success" @click="subscribe">
        订阅
      </el-button>

      <el-button type="danger" @click="unsubscribe">
        取消订阅
      </el-button>
      <el-descriptions title="当前用户：" style="padding: 10px;" border>
        <el-descriptions-item v-for="(value, key) in user" :key="key" :label="key">{{ value }}</el-descriptions-item>
        <el-descriptions-item label="token">
          <template #default>
            <el-tooltip class="box-item" effect="dark" :content="token">
              <template #content>
                <div style="word-break: break-all;  width: 200px;">
                  {{ token }}
                </div>
              </template>
              <div class="ellipsis-text">
                {{ token }}
              </div>
            </el-tooltip>
          </template>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <br />
    <el-card>
      <template #header>
        子组件1
      </template>
      <PiniaView1 />
    </el-card>
    <br />
    <el-card>
      <template #header>
        子组件2
      </template>
      <PiniaView2 />
    </el-card>
  </div>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
import { faker } from '@faker-js/faker'
import { ElMessage } from 'element-plus'
import { stringify } from 'flatted'

import PiniaView1 from './PiniaViews/PiniaView1.vue'
import PiniaView2 from './PiniaViews/PiniaView2.vue'


const userStore = useUserStore()
// storeToRefs后的结构结果，可以实现与store的响应式关联
const { user, token } = storeToRefs(userStore)

function generateUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'admin',
    isActive: true
  }
}

onMounted(() => {
  userStore.login(generateUser(), faker.internet.jwt())
})

// 更新
// 也可以使用userStore.$patch()
function updateUserStore() {
  userStore.updateUser({ name: faker.person.fullName(), email: faker.internet.email() })
}

// storeToRefs后的结构结果，可以实现与store的响应式关联
function updateUser() {
  user.value.name = faker.person.fullName()
}

// 重置
function logoutUser() {
  userStore.logout()
}

// 替换整个 state（不推荐但可用）
function replace() {
  userStore.$state = {
    user: generateUser(),
    token: faker.internet.jwt()
  }
}

// 订阅
let unsubscribeTemp = null

// 类似于 Vuex 的 subscribe 方法，你可以通过 store 的 $subscribe() 方法侦听 state 及其变化。
// 比起普通的 watch()，使用 $subscribe() 的好处是 subscriptions 在 patch 后只触发一次
function subscribe() {
  unsubscribeTemp = userStore.$subscribe((mutation, state) => {
    if (mutation === undefined || state === undefined) {
      return
    }
    ElMessage.info(`用户状态变化: \r\n storeId - ${stringify(mutation.storeId)}, \r\n user - ${stringify(state.user)}`)
  })
}

// 取消订阅
// 当组件被卸载时，它将被自动清理掉。除非 detached 被设置为 true
function unsubscribe() {
  unsubscribeTemp()
}

</script>

<style scoped>
.ellipsis-text {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>