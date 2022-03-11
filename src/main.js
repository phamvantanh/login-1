import Vue from 'vue'
import App from './App'
import {router} from './routers'
import store from './store'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
