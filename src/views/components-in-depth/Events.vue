<template>
  <el-card>
    <template #header>事件处理</template>

    <p>事件处理参考:</p>
    <el-link href="/Essentials/EventHandling" type="primary">基础>事件处理</el-link>
  </el-card>
  <br />
  <el-card>
    <template #header>组件事件（emit，实现 子 => 父）</template>
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">可以在子组件使用 $emit('eventName', data)
      实现</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">也可以在子组件使用 defineEmits 实现</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">defineEmits
      可以实现数据校验，但校验结果不影响事件传递</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">除此之外，可以使用 defineExpose
      暴露子组件方法供父组件调用</el-tag>
    <br />
    <EventDemoComponent @greet1="handeGreet" @greet2="handeGreet" @submit="submit" @submitwithValidator="submit"
      ref="eventDemoRef" />
  </el-card>
  <br />
  <el-card>
    <template #header>事件总线（mitt，实现 兄弟 => 兄弟）</template>

    <MittChildAComponent />
    <MittChildBComponent />
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import EventDemoComponent from '@/components/EventDemoComponent.vue';
import { ElMessage } from 'element-plus';
import MittChildAComponent from '@/components/MittChildAComponent.vue';
import MittChildBComponent from '@/components/MittChildBComponent.vue';

const props = defineProps();

const emits = defineEmits();

onMounted(() => {
  ElMessage.info({
    showClose: true,
    duration: 5000,
    message: eventDemoRef.value.greet3()
  })
});

const handeGreet = (data, count, sum) => {
  ElMessage.success({
    showClose: true,
    duration: 5000,
    message: data + ` 第${count} / ${sum}次`
  })
}

const submit = (data) => {
  ElMessage.warning({
    showClose: true,
    duration: 5000,
    message: `submited: ${data.email}, ${data.password}`
  })
}

const eventDemoRef = ref()

</script>

<style scoped></style>