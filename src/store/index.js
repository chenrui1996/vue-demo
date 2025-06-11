import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      title: '',
    }
  },
})

export const useWatchStore = defineStore('immediateFlag', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      immediateFlag: false,
      deepFlag: false,
      onceFlag: false
    }
  },
  //自动持久化到 localStorage
  //存储在内存
  persist: true
})