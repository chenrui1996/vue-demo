<template>
  <el-button @click="$emit('greet1', '子组件: greet1')">Greet</el-button>

  <el-button type="primary" @click="submit">submit</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, computed, onMounted } from 'vue';

const props = defineProps();
const emits = defineEmits({
  greet2: null,

  // 没有校验
  submit: null,

  // 校验 submit 事件
  submitwithValidator: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      ElMessage.error('Invalid submit event payload!')
      return false
    }
  }
})

const submit = () => {
  emits('submit', { email: "aa@qq.com" })
  //返回值并不会中断事件传递
  if (!emits('submitwithValidator', { email: null, password: null })) {
    ElMessage.error('事件校验失败依然传递')
  }
}
onMounted(() => {
  //代码执行时也可以使用emits传递

  let count = 0;
  const timer = setInterval(() => {
    count++
    emits('greet2', '子组件: greet2', count, 100)
    if (count === 100) {
      clearInterval(timer); // 停止定时器
    }
  }, 1000)
});


function greet3() {
  return `hello from child`
}

defineExpose({ greet3 })

</script>

<style scoped></style>