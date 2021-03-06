import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from '@/plugins/index'
import '@/directive/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  plugin,
  render: h => h(App)
}).$mount('#app')
