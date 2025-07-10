
import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, error => Promise.reject(error))

// 响应拦截器
http.interceptors.response.use(response => {
  if (response.data?.code && response.data.code !== 200) {
    // ElMessage.error(response.data.message || '请求失败')
    return Promise.reject(response.data)
  }
  return response
}, error => {
  const msg = error.response?.data?.message || '网络异常'
  // ElMessage.error(msg)
  return Promise.reject(error)
})

// 常规方法封装
const get = (url, params = {}, config = {}) =>
  http.get(url, { params, ...config })

const post = (url, data = {}, config = {}) =>
  http.post(url, data, config)

const put = (url, data = {}, config = {}) =>
  http.put(url, data, config)

const del = (url, config = {}) =>
  http.delete(url, config)

// 上传文件方法（FormData）
const upload = (url, formData, config = {}) =>
  http.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    ...config
  })

// 下载文件方法（可用于 blob 下载）
const download = (url, params = {}, filename = 'file') =>
  http.get(url, {
    params,
    responseType: 'blob'
  }).then(response => {
    const blob = new Blob([response.data])
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    link.click()
    window.URL.revokeObjectURL(link.href)
  })

export default {
  get,
  post,
  put,
  delete: del,
  upload,
  download,
  instance: http // 原始 axios 实例
}
