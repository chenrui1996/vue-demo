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


export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: null,
      name: '',
      email: '',
      role: 'guest',
      isActive: false
    },
    token: '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    userRole: (state) => state.user.role
  },
  actions: {
    login(userData, token) {
      this.user = userData
      this.token = token
    },
    logout() {
      this.$reset()
    },
    updateUser(partialUser) {
      this.user = { ...this.user, ...partialUser }
    },
    async fetchUserFromApi() {
      const response = await fetch('/api/user')
      const data = await response.json()
      this.user = data
    }
  },
  // persist: true
})