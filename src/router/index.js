import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from 'views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('views/ProductListView.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('views/ProductDetailView.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/CartView.vue'),
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('views/PayView.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('views/MineView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('views/OrderListView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
