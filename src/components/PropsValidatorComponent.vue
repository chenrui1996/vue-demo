<template>
  <p>propA </p>
  <p>{{ propA }}</p>
  <el-divider></el-divider>
  <p>propB </p>
  <p>{{ propB }}</p>
  <el-divider></el-divider>
  <p>propC </p>
  <p>{{ propC }}</p>
  <el-divider></el-divider>
  <p>propD </p>
  <p>{{ propD }}</p>
  <el-divider></el-divider>
  <p>propE </p>
  <p>{{ propE }}</p>
  <el-divider></el-divider>
  <p>propF </p>
  <p>{{ propF }}</p>
  <el-divider></el-divider>
  <p>propG </p>
  <p>{{ propG }}</p>
  <el-divider></el-divider>
  <p>propH </p>
  <p>{{ propH }}</p>
</template>

<script setup>

const props = defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // 必传但可为 null 的字符串
  propD: {
    type: [String, null],
    required: true
  },
  // Number 类型的默认值
  propE: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propF: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  // 在 3.4+ 中完整的 props 作为第二个参数传入
  propG: {
    validator(value, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propH: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})

</script>

<style scoped></style>