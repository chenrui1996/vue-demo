<template>
  <el-card>
    <template #header>基本用法</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">单向传播，子组件不能修改</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">Boolean 类型转换: booleanProp 相当于
      :booleanProp = 'true'</el-tag>
    <br />
    <PropsDemoComponent :stringProp="stringProp" :numberProp="10" booleanProp :arrayProp="[0, 1, 2]"
      :objectProp="objectProp" ref="propsDemoComponentRef" />

    <el-button @click="stringProp = `父组件修改: ${faker.person.fullName()}`">父组件修改 String</el-button>
    <el-button @click="stringProp = propsDemoComponentRef.updateProps()">子组件修改 String</el-button>
  </el-card>
  <br />
  <el-card>
    <template #header>Prop 校验</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">所有 prop 默认都是可选的，除非声明了 required:
      true。</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">除 Boolean 外的未传递的可选 prop 将会有一个默认值
      undefined。</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">如果声明了 default 值，那么在 prop 的值被解析为
      undefined 时，无论 prop 是未被传递还是显式指明的 undefined，都会改为 default 值。</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">当 prop 的校验失败后，Vue 会抛出一个控制台警告
      (在开发模式下)。</el-tag>
    <br />
    <PropsValidatorComponent :propA="10" propC="stringProp" :propD="null" :propF="objectProp" propG="success"
      :propH="propH" ref="propsDemoComponentRef" />
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { fakerZH_CN as faker } from '@faker-js/faker'

import PropsDemoComponent from '@/components/PropsDemoComponent.vue';
import PropsValidatorComponent from '@/components/PropsValidatorComponent.vue';

const props = defineProps();

const emits = defineEmits();

onMounted(() => {

});

const stringProp = ref('init')
const objectProp = ref({ 'title': '', 'id': 2 })

const propsDemoComponentRef = ref()

const propH = (a, b) => {
  return a + b
}

</script>

<style scoped></style>