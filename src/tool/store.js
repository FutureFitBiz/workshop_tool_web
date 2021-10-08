import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import router from '@/tool/router.js'


Vue.use(Vuex)
var alertTimeout

var plugins = process.env.VUE_APP_DEBUG === 'true' ? [] : [createPersistedState({ key: HASH })]
var plugins = [createPersistedState({ key: HASH })]
console.log(HASH)

export default new Vuex.Store({
  plugins: plugins,
  state: {
    app: 'PIONEER',
    auth_token: '',
    user: {},
    company: {},
    supportEmail: 'info@futurefitbusiness.org',
    alert: {},
    showSidebar: true,
    loginTitle: 'SDG Workshop',
    be: {},
    pp: {},
    activePage: '',
    heatmapQuestions: {},
    pageVisited: {
      be: false,
      pp: false,
      newActivity: false,
    }
  },
  mutations: {
    logout(state) {
      state.auth_token = ''
      router.push({ path: '/login' })
    },
    updateAuthHeader(state) {
      // possible race condition, think of something better than this
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${state.auth_token}`
    },
    login(state, data) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${data.auth_token}`
      state.auth_token = data.auth_token
      state.user = data.user
      state.company = data.company
      state.activePage = '/'
    },
    setBreakEvens(state, data) {
      state.be = data
    },
    // reloadToken(state, data) {
    //   state.be = data
    // },
    setActivePage(state, name) {
      state.activePage = name
    },
    setActivities(state, data) {
      state.pp = data
    },
    setHeatmapQuestions(state, data) {
      state.heatmapQuestions = data
    },

    setShowSidebar(state, status) {
      state.showSidebar = status
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar
    },
    setPageVisited(state, page) {
      state.pageVisited[page] = true
    },
    setIntro(state, data) {
      state.user.onboarding_complete = true
      state.company.business_activity = data.business_activity
      state.company.name = data.company_name
    },
    updateUserInfo(state, data) {
      state.user.email = data.email
      state.company.business_activity = data.business_activity
      state.company.name = data.company_name
    },
  },
  actions: {
    login: function(state, data) {
      // bodge for 'segments missing'
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${data.auth_token}`
      this.commit('login', data)
      this.dispatch('getBreakEvens')
      this.dispatch('getActivities')
      router.push({ path: '/' })
    },
    finishIntro: function(state, data) {
      this.commit('setIntro', data)
      this.dispatch('getBreakEvens')
      router.push({ path: '/' })
    },
    updateUserInfo: function(state, data) {
      this.commit('updateUserInfo', data)
      this.dispatch('getBreakEvens')
      // router.push({ path: '/' })
    },
    getBreakEvens: function(state) {
      Vue.prototype.$http.get('be').then((response) => {
        state.commit('setBreakEvens', response.data)
      })
    },
    getActivities: function(state) {
      Vue.prototype.$http.get('pp').then((response) => {
        state.commit('setActivities', response.data)
      })
    },
    getHeatmapQuestions: function(state) {
      Vue.prototype.$http.get('survey/business_activity_questions').then((response) => {
        state.commit('setHeatmapQuestions', response.data)
        console.log('res heatmap q', response.data)
      })
    },


  },
  modules: {},
  getters: {},
})
