<script setup lang="ts">
import { ref, onMounted, reactive,toRefs } from 'vue'

onMounted(() => {
})

const count = ref(0);

function increment() {
  //js中用.value
  count.value++
}

const person = ref({
  name: 'Seven Chen',
  age: 28,
  child:{
    name: 'Little Seven Chen',
    age: 9,
  }
});

function incrementAge() {
  //js中用.value
  //包装在第一层
  person.value.age++
}

function incrementChildAge() {
  //js中用.value
  //包装在第一层
  person.value.child.age++
}

const personList = ref([
{
  name: 'SC',
  age: 30,
  child:[
  {
    name: 'LSC',
    age: 10,
  }]
},
{
  name: 'SCA',
  age: 31,
  child:[
  {
    name: 'LSCA1',
    age: 11,
  }]
}
])

function decreaseListAge(){
  personList.value.forEach(person => {
    person.age --
    if(person.child){
      person.child.forEach(child => {
        child.age--
      })
    }
  })
}

function incremenListtAge(){
  personList.value.forEach(person => {
    person.age ++
    if(person.child){
      person.child.forEach(child => {
        child.age++
      })
    }
  })
}

function removePerson(){
  personList.value.forEach(person => {
    if(person.child){
      person.child.pop()
    }
  })
}

function addPerson(){
  personList.value.forEach(person => {
    if(person.child){
      person.child.push({
        name: 'ADD',
        age: 11,
      })
    }
  })
}

const person2 = reactive({
  name: 'Seven Chen',
  age: 28,
  child:{
    name: 'Little Seven Chen',
    age: 9,
  }
});

function incrementAge2() {
  //reactive返回对象代理，无需使用.value
  person2.age++
}

function incrementChildAge2() {
  //reactive返回对象代理，无需使用.value
  person2.child.age++
}

function rawAndproxy(){
  const raw = {}
  const proxy = reactive(raw)

  // 代理对象和原始对象不是全等的
  console.log(proxy === raw) // false

  const raw1 = {}
  const proxy1 = ref(raw1)

  // 代理对象和原始对象不是全等的
  console.log(proxy1 === raw1) // false 
  console.log(proxy1.value === raw1) // false 
}

rawAndproxy()

let replaceCounter = 0;

let replace1 = reactive({ count1: 0 })

function replaceReactive() {
  replace1 = { count1: replaceCounter++ } // 旧引用失效，原有响应断裂
}

let replace2 =  ref({ count2: 0 })

function replaceRef() {
  replace2.value =  { count2: replaceCounter++ }  // 没有问题，视图正常更新
}

//Unwrapping
const state1 = reactive({ count: 0 })

// 解构 reactive 对象时，获取的是原始值的副本，不是响应式代理。
// 当解构时，count 已经与 state.count 断开连接
// 无法追踪 state.count 的变化
// const { count1 } = state1

// 因此当其他函数调用时我们必须传入整个对象以保持响应性
function addState(state: { count: number; }){
  state.count ++
}

//传入解构后的参数无效
function addStateWithPro(para: number){
  para ++
}

function incReactive() {
  let { count } = state1
  addStateWithPro(count)
}

const state2 = ref({ count: 0 })

function incRef() {
  let { count } = state2.value
  addStateWithPro(count)
}

</script>

<template>
  <el-card >
    <template #header>ref 创建响应式变量</template>
    
    <!-- template中用变量本身 -->
    <el-button @click="count--">-</el-button>
    <span style="margin: 0 10px;">{{count}}</span>
    <el-button @click="increment">+</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>ref 创建响应式对象</template>
    
    <!-- template中用变量本身 -->

    <p>{{ person.name }}</p>
    <el-button @click="person.age--">-</el-button>
    <span style="margin: 0 10px;">{{ person.age }}</span>
    <el-button @click="incrementAge">+</el-button>

    <p>{{ person.child.name }}</p>
    <el-button @click="person.child.age--">-</el-button>
    <span style="margin: 0 10px;">{{ person.child.age }}</span>
    <el-button @click="incrementChildAge">+</el-button>
    <p>{{ person }}</p>
  </el-card>
  <br/>
  <el-card >
    <template #header>ref 创建响应式对象数组</template>
    
    <!-- template中用变量本身 -->
    <p>操作属性</p>
    <el-button @click="decreaseListAge">-</el-button>
    <el-button @click="incremenListtAge">+</el-button>
    <p>操作对象</p>
    <el-button @click="removePerson">-</el-button>
    <el-button @click="addPerson">+</el-button>
    <p>{{ personList }}</p>
  </el-card>
  <br/>
  <el-card >
    <template #header>reactive 创建响应式对象</template>
    
    <p>{{ person2.name }}</p>
    <el-button @click="person2.age--">-</el-button>
    <span style="margin: 0 10px;">{{ person2.age }}</span>
    <el-button @click="incrementAge2">+</el-button>

    <p>{{ person2.child.name }}</p>
    <el-button @click="person2.child.age--">-</el-button>
    <span style="margin: 0 10px;">{{ person2.child.age }}</span>
    <el-button @click="incrementChildAge2">+</el-button>
    <p>{{ person2 }}</p>
  </el-card>
  <br/>
  <el-card >
    <template #header>reactive 与 ref 替换整个响应式值对比</template>
    
    <p>reactive</p>
    <p>{{ replace1 }}</p>
    <el-button @click="replaceReactive">replace</el-button>
    <el-divider/>

    <p>ref</p>
    <p>{{ replace2 }}</p>
    <el-button @click="replaceRef">replace</el-button>
  </el-card>
  <br/>
  <el-card >
    <template #header>
      <p>reactive 与 ref 解构对比</p>
      <el-tag style="font-size: .9em;" type="danger">无论是reactive还是ref，只要解构对象内部属性，拿到的都是值类型，因此所拿到的变量与原对象不再有关联。</el-tag>
      <br/>
      <el-tag style="font-size: .9em;" type="danger">如果需要结构后的变量具有响应式，使用"toRefs"</el-tag>
      <br/>
      <el-tag style="font-size: .9em;" type="warning">官网中ref解决 结构/解构响应性丢失 的问题是指以 ref为整体时保持响应式</el-tag>
    </template>


    <p>reative</p>
    <p>state.count：{{ state1.count }}</p>
    <span style="margin: 0 10px 10px 0;display: inline-block;">state作为参数</span>
    <el-button  @click="addState(state1)">+</el-button>
    <br>
    <span style="margin: 0 10px 10px 0;display: inline-block;">state.count作为参数(副本，丧失响应式)</span>
    <el-button @click="addStateWithPro(state1.count)">+</el-button>
    <el-button @click="incReactive">+</el-button>
    <el-divider/>
    <p>ref</p>
    <p>state.count：{{ state2.count }}</p>
    <span style="margin: 0 10px 10px 0;display: inline-block;">state作为参数</span>
    <el-button  @click="addState(state2)">+</el-button>
    <br>
    <span style="margin: 0 10px 10px 0;display: inline-block;">state.count作为参数(副本，丧失响应式)</span>
    <el-button @click="addStateWithPro(state2.count)">+</el-button>
    <el-button @click="incRef">+</el-button>
  </el-card>
</template>


<style scoped>

</style>