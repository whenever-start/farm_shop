<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">HomeView</router-link>
      <router-link to="/product">产品</router-link>
      <router-link to="/detail">详情</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/pay">支付</router-link>
      <router-link to="/mine">我的</router-link>
      <router-link to="/order">订单</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  created () {
    console.log('create', screen.availHeight)
  },
}
</script>

<style lang="less">
html {
  font-size: 13.3333333333334vw;
}
body {
  font-size: 0.32rem;
}
html,
body,
#app {
  height: 100%;
}
a {
  color: #333;
}

.nav {
  a {
    margin-right: 0.2rem;
    &.router-link-exact-active {
      color: #07c160;
    }
  }
}
</style>
