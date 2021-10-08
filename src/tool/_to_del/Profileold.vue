<template>
<!-- <div class=" "> -->
<div class=" col-md-10 offset-md-1 col-xl-8 offset-xl-2 mt-5">
  <div v-on:click.prevent="$store.commit('logout')" class="m-3 btn btn-outline-danger float-end">Logout</div>

  <ul class="nav nav-tabs">
    <li @click="active = 'user'" class="nav-item">
      <a href="#" class="nav-link" :class="{'active': active == 'user'}">Profile</a>
    </li>
    <li @click="active = 'company'" class="nav-item">
      <a href="#" class="nav-link" :class="{'active': active == 'company'}">Company</a>
    </li>
    <!-- <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li> -->
  </ul>



  <!-- <ul class="nav nav-pills nav-justified">
  </ul> -->

  <profile-user v-show="active === 'user'" />
  <profile-company v-show="active === 'company'" />
</div>
</template>


<script>
import ProfileUser from '@/tool/components/profile/User'
import ProfileCompany from '@/tool/components/profile/Company'

export default {
  name: 'Login',
  data: function() {
    return {
      active: 'user'
    }
  },
  components: { ProfileUser, ProfileCompany, },
  created: function() {

  },
  methods: {}
}
</script>
