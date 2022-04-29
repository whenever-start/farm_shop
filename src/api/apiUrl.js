/**
 * 统一处理接口
 * 1. get 无参数: this.$api.demo1().then().catch()
 * 2. get 参数: this.$api.demo2({ params: { name: '' } }).then().catch()
 * 3. post 参数: this.$api.demo3({ method: 'post', params: {...} }).then().catch()
 */

/**
 * url 中有 3 中参数
 *  params: 属于路径中的一部分, 如 /api/xxx/:id
 *  query: ? 后的部分, 如 /api/xxx?name=xxx
 *  请求体: 通常只有 put 和 post 请求才会有请求体
 * axios 中
 *  params 直接写在路径中, 如 /api/xxx/params
 *  query 写在 params 参数中
 *  请求体 写在 data 参数中
 */

import urls from '@/mock/urls'

export const apiUrl = urls
