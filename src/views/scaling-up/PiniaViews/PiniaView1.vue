<template>
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

  <el-descriptions title="当前用户（子组件1）：" style="padding: 10px;" border>
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

</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
import { faker } from '@faker-js/faker'
import { ElMessage } from 'element-plus'
import { stringify } from 'flatted'


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

</script>

<style scoped>
.ellipsis-text {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>