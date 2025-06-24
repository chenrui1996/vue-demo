<template>
  <el-card>
    <template #header>
      局部注册指令（获取焦点）
    </template>
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">更新绑定元素时触发指令updated</el-tag>
    <br />
    <el-button type="primary" @click="changeInputWidth">
      修改输入框长度，{{ inputWidth }}
    </el-button>
    <br />
    <!-- 不推荐在组件上使用自定义指令。当组件具有多个根节点时可能会出现预期外的行为。 -->
    <input id="input" v-focus :style="{ width: inputWidth, 'margin-top': '10px' }" />
  </el-card>
  <br />

  <el-card>
    <template #header>
      全局注册指令（拖拽）
    </template>

    <el-button type="primary" @click="changeDragScope">
      切换为拖动参数为：{{ dragArg === 'parent' ? '视口' : '父容器' }}
    </el-button>
    <div :style="{ position: dargParentStyle, height: '200px', margin: '5px 0', border: 'solid 1px' }">
      <!-- 这里需要再元素update时加载，因为需要使用按钮更新行为 -->
      <div v-drag:[dragArg]
        :style="{ height: '70px', width: '70px', 'background-color': 'darkgoldenrod', 'left': dragDemoLeft, 'top': dragDemoTop }">
      </div>
    </div>
  </el-card>

</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, computed, onMounted } from 'vue';

const dragArg = ref('')

const dargParentStyle = computed(() => {
  return dragArg.value === 'parent' ? 'relative' : 'static'
})

const changeDragScope = () => {
  dragArg.value = dragArg.value === 'parent' ? '' : 'parent'
}

const dragDemoLeft = ref("0px")
const dragDemoTop = ref("0px")

const inputWidth = ref("100px")

const changeInputWidth = () => {
  inputWidth.value = `${Math.floor(Math.random() * 1000) + 100}px`
}

const vFocus = {
  created(el, binding) {
    ElMessage.info('v-focus binding element created')
  },
  beforeMount(el, binding) {
    ElMessage.info('v-focus binding element beforeMount')
  },
  mounted: (el) => {
    el.focus()
    ElMessage.info('v-focus binding element mounted')
  },
  beforeUpdate(el, binding) {
    ElMessage.info('v-focus binding element beforeUpdate')
  },
  updated(el, binding) {
    ElMessage.info('v-focus binding element updated')
  },
  beforeUnmount(el, binding) {
    ElMessage.info('v-focus binding element beforeUnmount')
  },
  unmounted(el, binding) {
    ElMessage.info('v-focus binding element unmounted')
  }
}

onMounted(() => {
  dragArg.value = 'parent'
  // changeInputWidth()
})

</script>

<style scoped></style>