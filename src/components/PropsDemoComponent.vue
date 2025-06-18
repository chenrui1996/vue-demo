<template>
  <p>String: </p>
  <p>{{ stringProp }}</p>
  <el-divider></el-divider>
  <p>Number </p>
  <p>{{ numberProp }}</p>
  <el-divider></el-divider>
  <p>Boolean </p>
  <p>{{ booleanProp }}</p>
  <el-divider></el-divider>
  <p>Array </p>
  <p>{{ arrayProp }}</p>
  <el-divider></el-divider>
  <p>Object </p>
  <p>{{ objectProp }}</p>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { watchEffect } from 'vue';

const props = defineProps({
  stringProp: String,
  numberProp: Number,
  booleanProp: Boolean,
  arrayProp: Array,
  objectProp: Object
})

watchEffect(() => {
  // 在 3.5 之前只运行一次
  // 在 3.5+ 中在 "foo" prop 变化时重新执行
  ElMessage.warning(props.stringProp)
})

function updateProps() {
  //单向数据流 会报错
  props.stringProp = "child updated"
}

defineExpose({ updateProps })

</script>

<style scoped></style>