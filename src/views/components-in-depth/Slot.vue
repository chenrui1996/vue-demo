<template>
  <el-card>
    <template #header>默认插槽（default slot）</template>
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">默认插槽中父组件所有未被具名插槽包裹的内容</el-tag>
    <br />
    <el-tag type="warning" size="large" style="font-size: .8em;font-weight: bold;">内容可以是文本，也可以是任何其他东西。如果没有就是默认值</el-tag>
    <br />
    <!-- 默认值 -->
    <DefaultSlotComponent></DefaultSlotComponent>
    <!-- 文本 -->
    <DefaultSlotComponent>可以是文本</DefaultSlotComponent>
    <!-- 元素 -->
    <DefaultSlotComponent>
      <div style="background-color: lightblue;">还可以是元素</div>
    </DefaultSlotComponent>
  </el-card>
  <br />
  <el-card>
    <template #header>具名插槽（named slot）</template>
    <el-tag type="warning" size="large"
      style="font-size: .8em;font-weight: bold;">与header不同的是，条件渲染的插槽（default，footer）如果不写则不渲染。header即使不传div也会渲染</el-tag>
    <br />
    <el-button type="primary" style="margin-bottom: 10px;"
      @click="headerSlotFlag ? headerSlotFlag = false : headerSlotFlag = true"> 切换header插槽渲染状态</el-button>
    <el-button type="primary" style="margin-bottom: 10px;"
      @click="defultSlotFlag ? defultSlotFlag = false : defultSlotFlag = true"> 切换defalut插槽渲染状态</el-button>
    <el-button type="primary" style="margin-bottom: 10px;"
      @click="footerSlotFlag ? footerSlotFlag = false : footerSlotFlag = true"> 切换fotter插槽渲染状态</el-button>
    <el-button type="warning" style="margin-bottom: 10px;"
      @click="dynamicSlotName == 'dynamicSlotName1' ? dynamicSlotName = 'dynamicSlotName2' : dynamicSlotName = 'dynamicSlotName1'">
      切换动态插槽</el-button>
    <NamedSlotComponent>
      <template v-if="headerSlotFlag" #header>
        <p>这是 header</p>
      </template>
      <template v-if="defultSlotFlag">
        <p>这是内容</p>
      </template>
      <template v-if="footerSlotFlag" #footer>
        <p>这是 footer</p>
      </template>
      <template #[dynamicSlotName]>

      </template>
    </NamedSlotComponent>
  </el-card>
  <br />
  <el-card>
    <template #header>作用域插槽（scoped slot）</template>
    <el-tag type="warning" size="large"
      style="font-size: .8em;font-weight: bold;">子组件将数据传递给插槽内容，由父组件决定如何使用这些数据进行渲染。</el-tag>
    <br />
    <ScopedSlotComponent>
      <template #namedSlotProps="{ message }">
        <div style="background-color: aquamarine; min-height: 50px;">
          <p style="line-height: 50px;">{{ message }}</p>
        </div>
        <el-divider />
      </template>

      <template #item="{ name, iataCode }">
        <div class="item" style="background-color: lightblue; min-height: 30px;">
          <p>{{ name }} | {{ iataCode }}</p>
        </div>
      </template>
    </ScopedSlotComponent>
  </el-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import DefaultSlotComponent from '@/components/DefaultSlotComponent.vue';
import NamedSlotComponent from '@/components/NamedSlotComponent.vue';
import ScopedSlotComponent from '@/components/ScopedSlotComponent.vue';

const dynamicSlotName = ref('dynamicSlotName1')
const headerSlotFlag = ref(true)
const defultSlotFlag = ref(true)
const footerSlotFlag = ref(true)

const props = defineProps();

const emits = defineEmits();

onMounted(() => {

});

</script>

<style scoped></style>