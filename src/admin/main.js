import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

import axios from 'axios'
import 'bootstrap-css-only/css/bootstrap.css'

document.getElementById('app-title').text = 'Admin'
// document.getElementById('app-icon').href.replace('favicon.ico', 'admin.favicon.ico')

axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`
Vue.config.productionTip = false

axios.interceptors.response.use(response => {
  return response
}, error => {
  // 401 Unauthorised
  // if (error.response.status === 401) {
  //   // if (!process.env.VUE_APP_DEBUG) {
  //   // }
  // }
  store.commit('logout')
  console.log(error)
  return error
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
