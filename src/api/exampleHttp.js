// src/api/userApi.js
import http from './http'

// 获取用户列表
export const getUserList = (params) => http.get('/users', params)

// 创建用户
export const createUser = (data) => http.post('/users', data)

// 更新用户
export const updateUser = (id, data) => http.put(`/users/${id}`, data)

// 删除用户
export const deleteUser = (id) => http.delete(`/users/${id}`)

// 上传头像文件
export const uploadAvatar = (file) => {
  const formData = new FormData()
  formData.append('file', file)
  return http.upload('/upload/avatar', formData)
}

// 下载用户导出文件
export const downloadUserExcel = (params) =>
  http.download('/export/users', params, '用户列表.xlsx')
