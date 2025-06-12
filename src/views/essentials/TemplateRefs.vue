<template>
  <el-card >
    <template #header>元素上的 ref</template>
    
    <input style="margin-bottom: 10px;" ref="myInput" />
    <br>
    <el-button type="primary" @click="focusInput">聚焦input</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>组件的 ref</template>

    <el-tag type="danger" size="large" style="font-size: .8em;font-weight: bold;">HTML 属性默认传入的值都是字符串类型, 特别number属性注意使用 :（即 v-bind）绑定，否则就是字符串</el-tag>
    <!-- HTML 属性默认传入的值都是字符串类型, 特别注意使用 :（即 v-bind）绑定，否则就是字符串。 -->
    <ChildComponent :id = "1" title="子组件" ref="childRef" />
    <el-button type="primary" @click="callChildSayHollow">调用子组件方法</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>v-for 中的模板引用</template>
    
    <el-tag type="danger" size="large" style="font-size: .8em;font-weight: bold;">需要v3.5 及以上版本</el-tag>
    <ul>
      <li v-for="item in list" ref="itemRefs">
        {{ item }}
      </li>
    </ul>
    <el-button type="primary" @click="callItemRefs">显示引用</el-button>
  </el-card>
  <br/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue'
import { ElMessage } from 'element-plus';
import { fakerZH_CN as faker } from '@faker-js/faker' 

onMounted(() => {
 
});

const myInput = ref(null)

const focusInput = () => {
   myInput.value.focus()  // 直接操作 DOM
}

const childRef = ref(null)

const callChildSayHollow = () => {
   ElMessage.primary(childRef.value.sayHello()) 
}

const list = ref(Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => ({
  item: faker.word.words({ count: Math.floor(Math.random() * 10) + 1 })
})))
const itemRefs = ref([])

const callItemRefs = () => {
  console.log(itemRefs.value)
  itemRefs.value.forEach((item, index) => {
      ElMessage({
        message: item.innerHTML, 
        type: 'primary' 
      })
  })
}

</script>

<style scoped>

</style>