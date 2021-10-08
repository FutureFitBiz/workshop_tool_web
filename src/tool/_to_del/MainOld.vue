<template>
<div class="" style="display: flex;">
  <nav :class="{'open': $store.state.showSidebar}" class=" d-md-block h-100 sidebar sidebar-width" style="width:350px;">

    <div class="text-left h-100 pl-2 sidebar-width main-menu">

      <div style="cursor:pointer;" class="sidebar-logo h4 nav-link text-left" @click="goto('/')">
        <!-- <div class="p-0 mt-4 mb-0 ff-font" style="font-size:13px;font-weight:bolder;line-height:0px;"> Future-Fit</div> -->
        <div class="p-0 mt-4 mb-0 ff-font" style="font-size:13px;font-weight:bolder;line-height:0px;"></div>
        <div class="mt-0 ml-0 pl-0 pt-0 h3 ff-font" id="benchmark">{{$store.state.loginTitle}}</div>
      </div>


      <ul class="nav flex-column mb-5 mt-5 nav-text ">
        <li class=" mt-3 5 ml-3 ">
          <div class="  pl-0 mt-2 " v-for="item in $store.state.menuItems" :key="item.title">
            <div class=" ">
              <div v-show="item.title === 'Home' || $store.state.business_activity" class="nav-hover" :class="{ 'active-nav': isActive(item.path)}" @click="goto(`/${item.path}`)">
                <span>{{ item.title }}</span>
              </div>

              <!-- BE -->
              <div v-show="item.path === 'be' && isActive('be')" class="indent ">
                <div class=" p-0 mb-1 mt-1" v-for="item2 in item.items">
                  <div class="nav-hover" :class="{ 'active-nav': isActive(`/${item.path}/${item2.path}`)}" @click="goto(`/${item.path}/${item2.path}`)">
                    <span class="">{{ item2.be }} {{item2.title}} </span>
                  </div>
                </div>

              </div>

              <!-- PPs -->
              <div v-if="item.path === 'pp' && isActive('pp')" class="indent sidebar-item">
                <div class="nav-hover mb-3" :class="{ 'active-nav':isActive('manage') }" @click="goto('/pp/manage')">
                  <span class="link">Manage Activities</span>
                </div>

                <span class="text-black-50 noselect">Activities</span>
                <div style="border-bottom:1px solid lightgrey"></div>

                <div class="sidebar-item p-0 mb-1 mt-2" v-for="product in $store.state.products" :key="product.id">
                  <div class="nav-hover" :class="{ 'active-nav': isActive(product.path)}" style="position:relative;" @click="goto(`/pp/${product.path}`)">
                    <div class="sidebar-status" :class="{'bg-warning': product.percent_complete < 100 && product.percent_complete > 0, 'bg-success': product.percent_complete === 100, 'bg-white': product.percent_complete === 0}"> </div>
                    <span class="link"> {{ product.name }} </span>
                  </div>

                  <div v-if="isActive(product.path)" class="indent mt-1" v-for="productItem in product.menu_items" :key="productItem.path">
                    <div class="nav-hover" :class="{ 'active-nav': isActive(productItem.path), 'nav_progress_bar': productItem.percent_complete != undefined}" style="position:relative;" @click="goto(`/pp/${product.path}/${productItem.path}`)">
                      <div class="sidebar-status" :class="{'bg-warning': productItem.percent_complete < 100 && productItem.percent_complete > 0, 'bg-success': productItem.percent_complete === 100, 'bg-white': productItem.percent_complete === 0}">
                      </div>
                      <span class="link">
                        <span class="align-text-center">{{ productItem.title }}</span>
                      </span>

                    </div>
                  </div>
                </div>
                <div class="mt-3"> </div>
              </div>



              <!-- reports -->

              <!-- <div v-show="item.path === 'reports' && isActive('reports')" class="indent sidebar-item">
                <div class="sidebar-item p-0 mb-1 mt-1" v-for="item2 in item.items">
                  <div class="nav-hover" @click="goto(`/${item.path}/${item2.path}`)">
                    <span class="link" v-bind:class="{ 'active-nav': isActive(`/${item.path}/${item2.path}`)}">{{ item2.title }}</span>
                  </div>
                </div>

                <div class="mt-3"> </div>
              </div> -->

              <!-- </div> -->

            </div>
            <!-- <div class="hb"> </div> -->
          </div>
        </li>

        <li v-show="!prod" class="nav-item mt-4 ml-3" style="d-block">
          </br>
          <div v-show="!$store.state.debugMode">
            <div v-on:click="$store.commit('toggleDebug')" style="cursor: pointer;" class=" text-secondary">
              <span>&#128027;</span>
              Enable DEBUG mode
            </div>
          </div>
          <div v-show="$store.state.debugMode">
            <div v-on:click="$store.commit('toggleDebug')" style="cursor: pointer;" class=" text-secondary">
              <span>&#128030;</span>
              Disable DEBUG mode
            </div>
          </div>
          <div class="mt-2" v-show="$store.state.debugMode">
            <div @click="$store.commit('logout')" style="cursor: pointer;" class="mt-2 text-danger">Logout</div>
            <div @click="$store.dispatch('resetIntro')" style="cursor: pointer;" class="mt-1 text-danger">Reset all data</div>
            <div @click="$store.commit('showWelcome')" style="cursor: pointer;" class="mt-1 text-info">Welcome page</div>
          </div>
        </li>

      </ul>

      </br>
      </br>
      </br>
      </br>
      </br>
    </div>

    <div class="sidebar-width bottom-menu">
      <div class="bottom-menu-border"></div>

      <div class="mt-2 text-black-50">
        <span @click="goto('/profile')" class="nav-icon">

          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
          </svg>

        </span>
        <span class="ml-2 nav-icon" target="_blank" rel="noopener noreferrer" href="https://futurefitbusiness.org/">
          <a target="_blank" rel="noopener noreferrer" href="https://help.sfibt.com/" class="nav-icon">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </a>
        </span>
      </div>
      <div class="nav-text">
        <div class="text-black-50 mt-2">{{$store.state.user.email}}</div>
        <!-- <div class="text-black-50">
          made by
          <a target="_blank" rel="noopener noreferrer" href="https://futurefitbusiness.org/" class="ff-blue ff-link-hover">Future-Fit
            <img class="fflogo-sm pt-1" src="@/assets/logo-sm.png"></img>
          </a>
        </div> -->
      </div>
    </div>
  </nav>

  <div @click="$store.commit('toggleSidebar')" v-if="$store.state.showSidebar" class="sidebar-close-area w-100 h-100 bg-secondary"> </div>

  <main role="main" class="main-view w-100">
    <router-view></router-view>
  </main>
  <!-- <Welcome v-if="!$store.state.welcome" /> -->
</div>
</template>

<script>
import Welcome from '@/tool/components/Welcome'

export default {
  name: 'Main',
  data: function() {
    return {
      prod: process.env.NODE_ENV.includes(['production']),
      showModal: false,
      showTestButtons: true,
    }
  },
  mounted: function() {
    this.$store.dispatch('setCompanyInfo')
    this.$store.dispatch('getProducts')
  },
  components: {
    Welcome
  },
  computed: {},
  methods: {
    goto: function(path) {
      this.$router.push({ path: path }).catch(err => {})
    },
    isActive: function(value, depth) {
      return this.$route.path.includes(value)
    },
  }
}
</script>
