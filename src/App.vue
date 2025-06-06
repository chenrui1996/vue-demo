<script setup>

import {
  Document,
  Menu as IconMenu,
  WarningFilled,
  ElemeFilled,
  Setting,
} from '@element-plus/icons-vue'

import { useTitleStore } from '@/store'
import { menuList } from './menu'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const store = useTitleStore()
const router = useRouter()

onMounted(() => {
  store.$patch({
    title: "主页",
  })
})

function handleCurtainClick(arg){
  store.$patch({
    title: "主页",
  })
  router.push({ name: "Index", params: { label: "主页" } })
  
}

function handleMenuClick(item) {
  store.$patch({
    title: item.label,
  })
  router.push({ name: item.name, params: { label: item.label } })
}
</script>

<template>
  <div class="container">
    <aside class="sidebar">
      <div class="curtain" @click="handleCurtainClick">
        <el-icon style="height: 60px; justify-content: center; align-items: center; margin: 0 10px 0 30px;"><ElemeFilled /></el-icon>
        <span>Vue Demo</span>
      </div>
      <el-divider />
      <div>
        <el-menu
        style="background-color: #f4f4f4;"
        :default-active="$route.path"
        class="el-menu-vertical-demo">
        <template v-for="item in menuList">
          <el-sub-menu v-if="item.children" :key="item.path" :index="item.path">
            <template #title>{{ item.label }}</template>
            <el-menu-item
              style="background-color: #f4f4f4;"
              v-for="sub in item.children"
              :key="sub.path"
              :index="sub.path"
              @click="handleMenuClick(sub)"
            >
              {{ sub.label }}
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item
            v-else
            :index="item.path"
          >
            {{ item.label }}
          </el-menu-item>
        </template>
      </el-menu>
      </div>
      
    </aside>
   
    
    <div class="main">
      <header>
        <h1>{{store.title}}</h1>
      </header>

      <el-divider />

      <div class="content">
        <RouterView />
      </div>
    </div>

  </div>
</template>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

/* Flex 容器 */
.container {
  display: flex;
  /* 横向排列 */
  flex-direction: row;
  /* 视口高度 */
  height: 100vh;
  /* 也可以使用fixed布局实现填充视口高度 */
  /* position: fixed;
  height: 100%; */
}

/* 侧边栏 */
.sidebar {
  background-color: #f4f4f4;
  width: 200px;
  /* 侧边栏内容溢出时显示滚动条 */
  overflow-y: auto;
  /* 侧边栏充满主区域的高度 */
  /* 父元素有高度 */
  height: 100%;

  display: flex;
  flex-direction: column;
}

.sidebar .curtain{
  height: 60px;
  text-align:center;
  display: flex;
  flex-direction: row;
}

.sidebar .curtain span{
  margin: 0;
  font-size: larger;
  line-height: 60px;
}

.sidebar .el-divider{
  margin: 0;
}

/* 主体部分 */
.main {
  display: flex;
  flex-direction: column;
  /* 吸收剩余空间 */
  flex: 1;
  /* 防止溢出 */
  overflow: hidden;
}

/* 页头 */
header {
  text-align: center;
  height: 60px;
  
}

header h1{
  margin: 0;
  font-size: larger;
  line-height: 60px;
}

.main .el-divider{
  margin: 0;
}

/* 主内容 */
.content {
  /* 吸收剩余空间 */
  flex: 1;
  padding: 20px;
  /* 主内容区域溢出时显示滚动条 */
  overflow-y: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main {
    /* 屏幕较小，侧边栏和主内容垂直排列 */
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
