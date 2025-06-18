<!-- MyInput.vue -->
<template>
  <div class="field">
    <el-button type="primary" class="inner-input" v-bind="$attrs" @click="onClick">{{ label }}</el-button>
  </div>
</template>

<script setup>
// defineOptions({ inheritAttrs: false })
defineProps(['label'])
import { ElMessage } from 'element-plus'
import { useAttrs } from 'vue'

const attrs = useAttrs()


const onClick = () => {
  ElMessage.info({
    duration: 30000,
    showClose: true,
    message: `子组件触发`
  })
  for (let key in attrs) {
    ElMessage.warning({
      duration: 30000,
      showClose: true,
      message: `属性：${key}  ${attrs[key]} 已透传`
    })
  }
}
</script>

<style>
.field {
  padding: 4px;
}

.inner-input {
  width: 100%;
}
</style>
