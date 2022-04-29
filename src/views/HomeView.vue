<template>
  <div class="home">
    <h1>主页</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  created () {
    this.$api.banner()
      .then(res => {
        console.log('banner:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.rcmd()
      .then(res => {
        console.log('rcmd:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.detail()
      .then(res => {
        console.log('detail:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.cart()
      .then(res => {
        console.log('cart:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.pay()
      .then(res => {
        console.log('pay:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.user()
      .then(res => {
        console.log('user:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })

    this.$api.order()
      .then(res => {
        console.log('order:', res)
      })
      .catch(err => {
        console.log('err:', err)
      })
  },
}
</script>

<style lang="less" scoped>
.home {
  color: @primary;
}
</style>
