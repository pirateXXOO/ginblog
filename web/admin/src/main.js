import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugin/antui'
import './plugin/http'
import axios from 'axios'
import './assets/css/style.css'

axios.defaults.baseURL = 'http://malcorp.test/api/v1'

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.sessionStorage.getItem('token')}`
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
