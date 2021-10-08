<template>
<div class="">

  <header class="navbar nav-gradient navbar-dark sticky-top bg-nav-ff flex-md-nowrap p-0 shadow">

    <a class="navbar-brand-ff  me-0 px-3 float-start">
      <div class="btn mobile" @click="toggleSidebar">
        <i class="bi bi-list text-white m-3" style="font-size:28px;"></i>
      </div>
      <img width="140" class="" src="@/assets/FF-Business-White.png"></img>
    </a>

    <ul class="navbar-nav px-3 ">
      <li class="nav-item text-nowrap nav-icon-group desktop" style="line-height:0px">
        <span @click="goto('/bug')" class="bi bi-bug-fill pointer" style="font-size:28px"></span>
        <!-- <i @click="goto('/bug')" class="bi bi-circle pointer" style="font-size:30px;position:relative;">
          <span class="bi bi-bug-fill " style="position:absolute;left:5px;top:6px;font-size:20px;line-height:0px;"></span>
        </i> -->
        <span @click="goto('/about')" class="bi bi pointer bi-question-circle ms-2" style="font-size:30px"></span>
        <span @click="goto('/profile')" class="bi bi pointer bi-person-circle ms-2" style="font-size:30px"></span>
      </li>
    </ul>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav :class="{'open': showSidebar}" class="sidebar-width d-md-block sidebar">
        <div class="position-sticky pt-4 text-start">

          <ul class="text-center navbar-nav nav-icon-group mobile p-0 pb-5">
            <li class="nav-item text-nowrap " style="line-height:0px">
              <span class="bi bi-bug-fill " style="font-size:35px"></span>
              <span class="bi bi bi-question-circle ms-2" style="font-size:35px"></span>
              <span @click="goto('/profile')" class="bi bi  bi-person-circle ms-2 pointer" style="font-size:35px"></span>
            </li>
          </ul>

          <h3 class="sidebar-app-title p-2">
            {{$store.state.loginTitle}}
          </h3>

          <div class="ps-3">


            <div @click="goto('/')" :class="{'active': $store.state.activePage === '/'}" class="nav-link-main-item nav-main-non-dropdown">
              Getting started
            </div>

            <!-- pp -->
            <div @click="toggleActiveItem('pp')" :class="{'bold': $store.state.activePage.includes('pp')}" class="nav-link-main-item ">
              Positive Activities
              <span v-if="$store.state.activePage.includes('pp')" class="bi bi bi-chevron-down float-end me-3" style="font-size:12px;line-height:0px;"></span>
              <span v-else class="bi bi bi-chevron-right float-end me-3" style="font-size:12px;line-height:0px;"></span>
            </div>
            <div v-show="$store.state.activePage.includes('pp')" class="mb-4 mt-2">
              <ul class="nav flex-column mb-2 nav-active-list">
                <li @click="goto('/pp/summary')" :class="{'nav-link-item-active': $store.state.activePage.includes('pp/summary')}" class="nav-link nav-link-item w-auto ">
                  Summary
                  <i class="bi bi-question-square float-end"></i>
                </li>

                <li @click="goto(`/pp/new`)" :class="{'nav-link-item-active': $store.state.activePage.includes('pp/new')}" class="nav-link nav-link-item w-auto mt-1">
                  <span class=""> Add Activity </span>
                  <i class="bi bi-plus-square-fill float-end"></i>
                </li>
                <div v-if="Object.keys($store.state.pp).length" style="border-bottom: 2px dotted lightgrey" class="mt-1 mb-1 m-2"> </div>
                <li v-if="Object.keys($store.state.pp).length" @click="goto(`/pp/${activity.code}`)" v-for="activity in $store.state.pp" :class="{'nav-link-item-active': $store.state.activePage.includes(activity.code)}"
                  class="nav-link nav-link-item w-auto mt-1">
                  {{activity.name}}
                </li>
              </ul>
            </div>


            <!-- be -->
            <div @click="toggleActiveItem('be')" :class="{'bold': $store.state.activePage.includes('be')}" class="nav-link-main-item ">
              Negative Risks
              <span v-if="$store.state.activePage.includes('be')" class="bi bi bi-chevron-down float-end me-3" style="font-size:12px;line-height:0px;"></span>
              <span v-else class="bi bi bi-chevron-right float-end me-3" style="font-size:12px;line-height:0px;"></span>
            </div>
            <div v-show="$store.state.activePage.includes('be')" class="mb-4">
              <ul class="nav flex-column mb-2 nav-active-list">
                <li @click="goto('/be/summary')" :class="{'nav-link-item-active': $store.state.activePage.includes('be/summary')}" class="nav-link nav-link-item w-auto ">
                  Summary
                  <i class="bi bi-question-square float-end"></i>
                </li>
                <li @click="goto(`/be/${goal.code}`)" v-for="goal in $store.state.be" :class="{'nav-link-item-active': $store.state.activePage.includes(goal.code)}" class="nav-link nav-link-item w-auto mt-1">
                  {{goal.code}} {{goal.nav_title}}
                </li>
              </ul>
              <div class="mb-4">
              </div>
            </div>

            <div @click="goto('/sdg-contributions')" :class="{'active': $store.state.activePage.includes('/sdg-contributions')}" class="nav-link-main-item nav-main-non-dropdown">
              SDG Contributions
            </div>

            <div @click="goto('/what-next')" :class="{'active': $store.state.activePage.includes('/what-next')}" class="nav-link-main-item nav-main-non-dropdown">
              What's next?
            </div>
          </div>

        </div>
      </nav>
      <div @click="showSidebar = false" v-show="showSidebar" class="sidebar-close-area w-100 h-100 bg-secondary"> </div>

      <main class="">
        <main role="main" class="main-view w-100">
          <router-view></router-view>
        </main>

      </main>
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: 'Main',
  data: function() {
    return {
      // active: [],
      showSidebar: false,
    }
  },
  watch: {
    '$route': 'init'
  },
  created: function() {
    this.$store.commit('updateAuthHeader')
  },
  methods: {
    init: function() {

    },
    toggleSidebar: function() {
      this.showSidebar = !this.showSidebar
    },
    toggleActiveItem: function(name) {
      let active = this.$store.state.activePage.includes(name) ? [] : [name]
      this.$store.commit('setActivePage', active)
    },
    goto: function(path) {
      this.$store.commit('setActivePage', path)
      // this.active = path
      this.showSidebar = false
      this.$router.push({ path: path }).catch(err => {})
    },
  }
}
</script>



<style scoped>
/* overrides */

:root {
  --ff-blue-b2: #e1eff4;
  --ff-blue-b3: #c3dfe9;
  --ff-blue-b4: #a6d0de;
  --ff-blue-b5: #4BA4C0;
}

.sidebar-width {
  width: 100%;
  max-width: 330px;
  /* overflow: hidden; */
  /* Hide scrollbar for Chrome, Safari and Opera */

  /* Hide scrollbar for IE, Edge and Firefox */
  /* .example { */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  /* } */
}

.sidebar-width::-webkit-scrollbar {
  display: none;
}

.navbar-brand-ff {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
}

.nav-icon-color {
  color: var(--ff-blue-b5);
  color: var(--ff-blue-b5);
  color: white;
}

.bg-nav-ff {}

.nav-gradient {
  background-image: linear-gradient(to right, var(--ff-blue-b5), var(--ff-blue-b4));
}

.nav-active-list {
  border-left: 7px solid var(--ff-blue-b2);
  margin-left: 20px;
  user-select: none;
}

.nav-active-list2 {
  border-left: 2px solid #fff6e6;
  border-left: 2px solid #ffeac5;
  border-radius: 3px;
  margin-left: 20px;
}

.bold {
  font-weight: bold !important;
}

.nav-link-main-item {
  font-weight: normal;
  font-size: 14px;
  padding-left: 5px;
  letter-spacing: 0.05em;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  margin: 10px;
  margin-right: 10px;
}

.nav-main-non-dropdown {}

.nav-main-non-dropdown.active {
  background: #a5d0de54;
  /* padding: 8px; */
  border-radius: 10px;
  font-weight: bold;
  color: #44596f;
}

.nav-main-non-dropdown:hover {
  background: #a5d0de54;
  /* padding: 8px; */
  border-radius: 10px;
  /* margin-right: 10px; */
  /* font-weight: bold; */
  color: #44596f;
}


.nav-link-item {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: .01em;
  /* --item-spacing: 6px; */
  /* color: var(--text-color--light); */
  color: grey !important;
  font-size: 13px;
  cursor: pointer;
  margin: 0px 8px 0px 8px;
  border-radius: 8px;
  user-select: none;
  /* letter-spacing: 0.05em; */
}

.nav-link-item:hover {
  background-color: var(--ff-blue-b2);
  /* color: var(--ff-blue-b5) !important; */
}

.nav-link-item-active {
  background-color: var(--ff-blue-b2);
  color: #44596f !important;
  /* color: var(--ff-blue-b5) !important; */
  font-weight: bold !important;
}

.nav-link-active2 {
  background-color: #fff6e6;
  color: #FF9E00 !important;
  font-weight: bold !important;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  font-weight: bold;
}



body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100;

  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

.sidebar-app-title {
  text-transform: uppercase;
  color: #4ba4c0;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  text-align: center !important;
}
</style>
