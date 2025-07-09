<template>
  <div class="main">
    <div class="contant">
      <router-view />
    </div>

    <div class="footer">
      <el-button type="primary" @click="prev" :disabled="page <= 1" text>
        <el-icon>
          <ArrowLeft />
        </el-icon>
        上一页
      </el-button>
      <el-button text>第 {{ page }} / {{ pages.length }} 页</el-button>
      <el-button type="primary" @click="next" :disabled="page >= pages.length" text>
        下一页
        <el-icon>
          <ArrowRight />
        </el-icon>
      </el-button>
    </div>
  </div>

</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { computed, onMounted, onUpdated, ref } from 'vue'
import { createPagedRoutes } from '@/common'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const currentPath = ref("")
const pages = createPagedRoutes()

onMounted(() => {
  currentPath.value = route.path
  // 添加pages页面生成路由
  pages.forEach((item) => router.addRoute(route.name, item))
  router.push(`${currentPath.value}/page/${page.value}`)
});

onBeforeRouteLeave((to, from, next) => {
  console.log(`路由离开: to-${to.fullPath}, from-${from.fullPath}`)
  next()
  // 阻止路由跳转
  // next(false)
})

onBeforeRouteUpdate((to, from, next) => {
  console.log(`路由切换: to-${to.fullPath}, from-${from.fullPath}`)
  if (currentPath.value && currentPath.value === to.path) {
    router.push(`${currentPath.value}/page/${page.value}`)
  }
  // 阻止路由跳转
  next()
})

// 从路由中提取页码
const page = computed(() => parseInt(route.meta.page || '1'))

function prev() {
  if (page.value > 1) {
    router.push(`${currentPath.value}/page/${page.value - 1}`)
  }
}

function next() {
  if (page.value < pages.length) {
    router.push(`${currentPath.value}/page/${page.value + 1}`)
  }
}

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contant {
  padding: 10px;
  overflow: auto;
  flex: 1;
}

.footer {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30px;
}
</style>