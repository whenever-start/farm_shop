import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Button } from 'vant'

// api
import './mock'
import './api'

// css
import 'assets/style/common.less'

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
