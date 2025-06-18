<template>
  <el-card>
    <template #header>Attribute 透传</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">多根节点，或者外层包裹div时，需要使用 v-bind="$attrs"
      指定透传目标元素。未声明的属性透传至根元素。 </el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">class、style 会合并 </el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">原生事件监听器也会透传 </el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">可以使用 defineOptions({ inheritAttrs:
      false })
      阻止透传</el-tag>
    <br />
    <AttributeDemoComponent id="sc-button" class="custom-input" @click="onClick" label="点我" nestedAttr='嵌套属性' />
  </el-card>
  <br />
  <el-card>
    <template #header>深层组件继承</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">声明过的 props 和侦听函数不再透传，其他可以透传 </el-tag>
    <br />
    <AttributeNestedDemoComponent id="sc-button" class="custom-input" @click="onClick" label="点我" nestedAttr='嵌套属性' />
  </el-card>
</template>

<script setup>
import AttributeDemoComponent from '@/components/AttributeDemoComponent.vue';
import AttributeNestedDemoComponent from '@/components/AttributeNestedDemoComponent.vue';
import { ElMessage } from 'element-plus'


const onClick = () => {
  ElMessage.info({ duration: 30000, showClose: true, message: `父组件触发` })
}

</script>

<style scoped></style>