<!-- MyInput.vue -->
<template>
  <AttributeDemoComponent @click="onClick" />
</template>

<script setup>
import AttributeDemoComponent from './AttributeDemoComponent.vue';
import { ElMessage } from 'element-plus'
import { useAttrs, defineProps } from 'vue'
const props = defineProps({
  nestedAttr: String,
});
const attrs = useAttrs()
const onClick = () => {
  ElMessage.primary({
    duration: 30000,
    showClose: true,
    message: `中间组件组件触发, nestedAttr:${props.nestedAttr}已消费`
  })
  for (let key in attrs) {
    ElMessage.error({
      duration: 30000,
      showClose: true,
      message: `属性：${key}  ${attrs[key]} 已透传`
    })
  }
}
</script>

<style scoped></style>
