/**
 * 定义本地测试接口，最好与正式接口一致，避免联调阶段修改工作量
 */
// 引入mockjs
import Mock from 'mockjs'
import urls from './urls.js'
import getBanner from './data/banner'
import getRcmd from './data/rcmd'
import getDetail from './data/detail'
import getCart from './data/cart'
import getPay from './data/pay'
import getUser from './data/user'
import getOrder from './data/order'

Mock.setup({
  timeout: 800, // 设置延迟响应，模拟向后端请求数据
})

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(urls.banner, 'get', getBanner)
Mock.mock(urls.rcmd, 'get', getRcmd)
Mock.mock(urls.detail, 'get', getDetail)
Mock.mock(urls.cart, 'get', getCart)
Mock.mock(urls.pay, 'get', getPay)
Mock.mock(urls.user, 'get', getUser)
Mock.mock(urls.order, 'get', getOrder)
