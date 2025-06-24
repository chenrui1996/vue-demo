<template>
  <el-card>
    <template #header>
      &lt;component/&gt; （动态组件）<br />
      &lt;KeepAlive/&gt; （缓存状态）
    </template>
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">使用 shallowRef 来创建组件引用是为了避免
      组件实例的深层响应式追踪
    </el-tag>
    <br />

    <el-button type="primary" style="margin-bottom: 5px;"
      @click="currentComponent = currentComponent === BuildInDemoComponentA ? BuildInDemoComponentB : BuildInDemoComponentA">切换组件</el-button>
    <br />
    <el-checkbox v-model="keepAlive">KeepAlive</el-checkbox>

    <el-divider></el-divider>
    <KeepAlive v-if="keepAlive">
      <component :is="currentComponent" />
    </KeepAlive>
    <component v-else :is="currentComponent" />
  </el-card>
  <br />
  <el-card>
    <template #header>
      &lt;transition/&gt; （动画）
    </template>
    <p>Transition</p>
    <el-button @click="show = !show">切换显示状态</el-button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <el-divider></el-divider>
    <p>TransitionGroup</p>
    <el-button @click="items.splice(2, 0, faker.word.noun())">添加</el-button>
    <el-button @click="items.splice(4, 1)">删除</el-button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </el-card>
  <br />
  <el-card>
    <template #header>
      &lt;Teleport/&gt; （将内容传送到 DOM 的其他位置）
    </template>
    <el-checkbox v-model="teleportToBody">传送到body</el-checkbox>
    <div style="position: relative; height: 200px;">
      <teleport v-if="teleportToBody" to="body">
        <div v-drag:parent class="suspension">
          <span style="line-height: 100px;">悬浮框</span>
        </div>
      </teleport>
      <div v-else v-drag:parent class="suspension">
        <span style="line-height: 100px;">悬浮框</span>
      </div>
    </div>

  </el-card>
</template>

<script setup>
import { ref, shallowRef, computed, onMounted } from 'vue';
import { fakerZH_CN as faker } from '@faker-js/faker'

import BuildInDemoComponentA from '@/components/BuildInDemoComponentA.vue';
import BuildInDemoComponentB from '@/components/BuildInDemoComponentB.vue';

const currentComponent = shallowRef(BuildInDemoComponentA)

const keepAlive = ref(true)

const show = ref(true)

const teleportToBody = ref(false)

const items = ref([])

onMounted(() => {
  for (let index = 0; index < 10; index++) {
    items.value.push(faker.word.noun())
  }
})
</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}

.suspension {
  position: absolute;
  background-color: darkcyan;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* margin: auto; */
  text-align: center;
}
</style>