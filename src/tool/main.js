// import 'bootstrap-css-only/css/bootstrap.css'
 import 'bootstrap'
 // import bootstrap from 'bootstrap'

 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap-icons/font/bootstrap-icons.css'
 import 'vue-popperjs/dist/vue-popper.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

import VueEllipseProgress from 'vue-ellipse-progress'
import axios from 'axios'
import * as filters from '@/common/filters'
import * as d3 from 'd3'

// import Popper from '@popperjs/core'


// global.Popper = Popper

// import Popper from 'popper.js'
// Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

// import * as popper from '@/assets/popper.min.js'


const APP = 'IBT'
axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`
Vue.config.productionTip = false

// Vue.use(bootstrap)
Vue.use(VueEllipseProgress)

axios.interceptors.response.use(response => {
  return response
}, error => {
  // 401 Unauthorised
  // if (error.response.status === 401) {
  //   // if (process.env.VUE_APP_DEBUG === 'false') {
  //   // }
  // }
  // store.commit('logout')
  console.log(error)
  return error
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
