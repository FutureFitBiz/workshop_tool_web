import Vue from 'vue'
import VueRouter from 'vue-router'

// general
import Main from '@/tool/views/Main.vue'
import Login from '@/common/views/Login.vue'
import UrlNotFound from '@/common/components/UrlNotFound.vue'
import GettingStarted from '@/tool/components/GettingStarted.vue'
import Intro from '@/tool/components/Intro.vue'
import Profile from '@/tool/components/Profile.vue'
import About from '@/tool/components/About.vue'
import Bug from '@/tool/components/Bug.vue'
import SDGContributions from '@/tool/components/SDGContributions.vue'
import WhatNext from '@/tool/components/WhatNext.vue'

// Break-Even Goals
import BEGoal from '@/tool/components/be/Goal.vue'
import beSummary from '@/tool/components/be/Summary.vue'

// Positive Pursuits
import Activity from '@/tool/components/pp/Activity.vue'
import AddActivity from '@/tool/components/pp/AddActivity.vue'
import ppSummary from '@/tool/components/pp/Summary.vue'

import store from '@/tool/store.js'

Vue.use(VueRouter)

function requireAuth(to, from, next) {

  if (store.state.auth_token.length === 0) {
    console.log('logged out')
    router.push({ path: '/login'})
  }
  // else if (next.path !== '/intro' && !store.state.user.onboarding_complete) {
  //   console.log('redirect onboarding')
  //   next({ path: '/intro'})
  // }

   else {
    next()
  }
}
function introGuard(to, from, next) {
  // sidebar(to.path)
  if (store.state.auth_token.length === 0) {
    console.log('redirect login from intro')
    next({ path: '/login'})
  }
   else {
    next()
  }
}

function pageChecks(to, from, next) {
  // sidebar(to.path)
  next()
}

// function sidebar(path) {
//   if (path != 'reports/download') {
//     store.commit('setShowSidebar', true)
//   }
// }

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/intro', component: Intro, beforeEnter: introGuard },
  {
    path: '/',
    component: Main,
    beforeEnter: requireAuth,
    children: [
      // { path: '/', redirect: '/getting_started', beforeEnter: pageChecks },
      { path: '/', component: GettingStarted, beforeEnter: pageChecks },
      { path: '/bug', component: Bug, beforeEnter: pageChecks },
      { path: '/about', component: About, beforeEnter: pageChecks },
      { path: '/sdg-contributions', component: SDGContributions, beforeEnter: pageChecks },
      { path: '/what-next', component: WhatNext, beforeEnter: pageChecks },

      { path: 'be', redirect: '/be/summary', beforeEnter: pageChecks },
      { path: 'be/summary', component: beSummary, beforeEnter: pageChecks },
      { path: 'be/:goal', component: BEGoal, beforeEnter: pageChecks },

      { path: 'pp/summary', component: ppSummary, beforeEnter: pageChecks },
      { path: 'pp/new', component: AddActivity, beforeEnter: pageChecks },
      { path: 'pp/:product_code', component: Activity, beforeEnter: pageChecks },

      { path: 'profile', component: Profile, beforeEnter: pageChecks },
    ],
  },
  { path: '*', component: UrlNotFound, beforeEnter: requireAuth }
]

const router = new VueRouter({
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     // return to the top of the page
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes,
  mode: process.env.VUE_APP_DEBUG === 'true' ? 'hash' : 'history'
})


export default router
