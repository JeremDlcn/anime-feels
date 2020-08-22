import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

Vue.use(VScrollLock)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
