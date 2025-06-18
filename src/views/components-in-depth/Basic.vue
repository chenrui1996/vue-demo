<template>
  <el-card>
    <template #header>SFC单组件</template>

    <SFCBasicComponent></SFCBasicComponent>
    <SFCBasicComponent></SFCBasicComponent>
    <SFCBasicComponent></SFCBasicComponent>
  </el-card>
  <br />
  <el-card>
    <template #header>Js对象定义组件</template>

    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">需要在 vite.config.js 添加 alias- vue:
      'vue/dist/vue.esm-bundler.js' </el-tag>
    <br />
    <JsComponent></JsComponent>
    <JsComponent></JsComponent>
    <JsComponent></JsComponent>
  </el-card>
  <br />
  <el-card>
    <template #header>全局注册组件</template>

    <ScGlobalComponent></ScGlobalComponent>
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SFCBasicComponent from '@/components/SFCBasicComponent.vue'
import JsComponent from '@/components/JsComponent.js'

const props = defineProps();

const emits = defineEmits();

onMounted(() => {

});

</script>

<style scoped></style>