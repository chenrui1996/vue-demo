<template>
  <el-card >
    <template #header>基本用法</template>
    <!-- 方法处理 -->
    <p>方法事件处理器</p> 
    <el-button @click="sayHello">点击问好</el-button>

    <!-- 内联事件处理器 -->
    <p>内联事件处理器 当前计数：{{ count }}</p> 
    <el-button @click="count++">+</el-button>

    <!-- 内联事件处理器调用方法 -->
    <p>内联事件处理器调用方法</p> 
    <el-button @click="sayMessage('四十二号混凝土')">点击弹框</el-button>

    <!-- 在内联事件处理器中访问事件参数 -->
    <p>在内联事件处理器中访问事件参数</p> 
    <!-- 使用特殊的 $event 变量 -->
    <el-button @click="warn('Form cannot be submitted yet.', $event)">
      提交1
    </el-button>
    <!-- 使用内联箭头函数 -->
    <el-button @click="(event) => warn('Form cannot be submitted yet.', event)">
      提交2
    </el-button>
  </el-card>
  <br/>
  <el-card>
    <template #header>事件修饰符</template>
    <p>stop 单击事件将停止传递</p>
    <!-- stop单击事件将停止传递 -->
    <!-- 不会触发 -->
    <div style="height:150px;background-color: aliceblue; margin: 10px 0;" @click="parentClicked('parent3', $event)">
      <!-- 会触发 -->
      <div style="height:100px;background-color: aquamarine;" @click.stop="parentClicked('parent2', $event)">
        <!-- 会触发 -->
        <div style="height:60px;background-color: aqua;" @click="parentClicked('parent1', $event)">
          <el-button @click="handleSelfClick">点击按钮</el-button>
          <br/>
          parent1
        </div>
        parent2
      </div>
      parent3
    </div>
    <el-divider/>

    <p>self 仅当 event.target 是元素本身时才会触发事件处理器</p>
    <!-- self 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <!-- 不会触发 -->
    <div style="height:100px;background-color: aquamarine; margin: 10px 0;" @click="parentClicked('parentwithself', $event)">
      <!-- 会触发 -->
      <div  style="height:60px;background-color: aqua;" @click.self="parentClicked('parentwithoutself', $event)">
        <el-button @click="handleSelfClick">点击按钮</el-button>
        <br/>
        parentwithoutself
      </div>
      parentwithself
    </div>
    <el-divider/>

    <p>once 点击按钮只触发一次; prevent 点击按钮时阻止默认行为； 可以链式调用</p>
    <el-tag>使用 @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。</el-tag>
    <form @submit.prevent="handleSubmit" style="margin: 10px 0;">
      <el-button @click.stop.once="handleClickOnce">点击我（一次性按钮）</el-button>
    </form>

    <el-divider/>

    <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
    <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
    <p>使用 `capture` 捕获模式，指向内部元素的事件，在被内部元素处理前，先被外部(parent1)处理 </p>
    <div style="height:60px;background-color: aqua;margin: 10px 0;" @click.capture="parentClicked('parent1', $event)">
      <el-button @click="handleSelfClick">捕获按钮</el-button>
      <br/>
      parent1
    </div>
    <el-divider/>

    <!-- 被动监听滚动（不会阻止默认滚动）-->
    <!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
    <!-- 以防其中包含 `event.preventDefault()` -->
    <p>passive 被动监听 例如被动监听滚动（不会阻止默认滚动）</p>
    <p>passive 修饰符一般用于触摸事件的监听器，可以用来改善移动端设备的滚屏性能。</p>
    <div
      style="height:100px;background-color: aqua;margin: 10px 0;overflow: auto;"
      @wheel.passive="handleScroll"
    >
      <div style="height:200px;">
        <ul>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
          <li>滚动我</li>
        </ul>
      </div>
      
    </div>
  </el-card>
  <br/>
  <el-card>
    <template #header>键盘事件</template>
    <el-input
      autosize
      type="textarea"
      v-model="message"
      @keydown.enter.ctrl="submitMessage"
      @keydown.esc="cancelEdit"
      @keydown.tab.prevent="insertTab"
      placeholder="Ctrl + Enter 提交，Esc 取消，Tab 插入缩进"
    ></el-input>
    <p v-if="submitted">✅ 提交成功：{{ submitted }}</p>
  </el-card>
  <br/>
  <el-card>
    <template #header>鼠标事件</template>
    <!-- 单击事件 -->
    <p>单击事件</p>
    <el-button  @click="handleClick" style="margin:10px 0">单击我</el-button >
    <el-divider></el-divider>
    <!-- 双击事件 -->
    <p>双击事件</p>
    <el-button @dblclick="handleDoubleClick" style="margin:10px 0">双击我</el-button>
    <el-divider></el-divider>
    <!-- 按下和松开 -->
    <div
      class="box"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      style="height: 100px; margin:10px 0;background-color: cadetblue;"
    >
      {{ mouseDownUp }}
    </div>
    <el-divider></el-divider>
    <!-- 鼠标进入和离开 -->
    <div
      class="box"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      style="height: 100px; margin:10px 0;background-color: cadetblue;"
    >
      {{mouseEnterLeave}}
    </div>
    <el-divider></el-divider>
    <!-- 鼠标移动 -->
    <div
      class="box"
      @mousemove="handleMouseMove"
      style="height: 100px; margin:10px 0;background-color: cadetblue;"
    >
      鼠标移动区域，移动位置：X: {{ mouseX }}, Y: {{ mouseY }}
    </div>
  </el-card>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';
import { ElMessage, MessageParamsWithType} from 'element-plus'

const count = ref(0)

onMounted(() => {

});

function sayHello(){
  ElMessage.primary("你家人好嘛？")
}

function sayMessage(message: MessageParamsWithType){
  ElMessage.primary(message)
}

function warn(message: any, event: { preventDefault: () => void; srcElement: { innerText: any; }; }) {
  // 这里可以访问原生事件
  if (event) {
    // 阻止默认行为，如表单提交链接跳转
    event.preventDefault()
    ElMessage.primary(`${event.srcElement.innerText} : ${message}`)
  }
  
}

function handleSubmit() {
  ElMessage.primary("表单提交被阻止！");
}

function handleClickOnce() {
  ElMessage.primary("你只会看到这一次！");
}

function handleSelfClick() {
  ElMessage.primary("你点击按钮！");
}

function parentClicked(from: any, event: { target: any; currentTarget: any; }) {
  if(event.target !== event.currentTarget){
    ElMessage.primary(`父元素${from} 被点击（冒泡）`);
  }
  ElMessage.primary(`父元素${from} 被点击（本身）`);
}

function handleScroll() {
  ElMessage.primary("滚动事件触发");
}

const message = ref('')
const submitted = ref('')

function submitMessage() {
  if (message.value.trim()) {
    submitted.value = message.value
    message.value = ''
  } else {
    ElMessage.primary('内容不能为空')
  }
}

function cancelEdit() {
  message.value = ''
  ElMessage.primary('编辑已取消')
}

function insertTab(event: { target: any; }) {
  const textarea = event.target
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const value = textarea.value

  // 插入4个空格
  textarea.value = value.substring(0, start) + '    ' + value.substring(end)
  textarea.selectionStart = textarea.selectionEnd = start + 4

  // 手动触发 v-model 更新
  message.value = textarea.value
}

const mouseX = ref(0);
const mouseY = ref(0);

const mouseDownUp = ref("按下或松开鼠标")
const mouseEnterLeave = ref("鼠标进入和离开区域")

function handleClick(event: any) {
  ElMessage.primary('单击事件触发');
}

function handleDoubleClick(event: any) {
  ElMessage.primary('双击事件触发');
}

function handleMouseDown(event: any) {
  mouseDownUp.value = `鼠标按下`
}

function handleMouseUp(event: any) {
  mouseDownUp.value = `鼠标松开`
}

function handleMouseEnter(event: any) {
  mouseEnterLeave.value = `鼠标进入`
}

function handleMouseLeave(event: any) {
  mouseEnterLeave.value = `鼠标离开`
}

function handleMouseMove(event: { offsetX: number; offsetY: number; }) {
  mouseX.value = event.offsetX;
  mouseY.value = event.offsetY;
}
</script>

<style scoped>

</style>