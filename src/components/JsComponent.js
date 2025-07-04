import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <el-button @click="count++">
      You clicked me {{ count }} times.
    <el-/button>`
  // 也可以针对一个 DOM 内联模板：
  // template: '#my-template-element'
}