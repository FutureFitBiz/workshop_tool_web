<template>
<!-- <div class=" "> -->
<div class=" col-md-8 offset-md-1 col-xl-6 offset-xl-2 mt-5">
  <div class="row">

  </div>

  <div class="text-start">
    <h4> Profile</h4>
    <div class="">
      <label for="exampleInputPassword1" class="form-label">Email</label>
      <input v-model="email" class="form-control" id="exampleInputPassword1">
    </div>

    <div class="mt-3">
      <label for="pw2" class="form-label">New Password</label>
      <input v-model="password" class="form-control" id="pw2">
    </div>

    <h4 class="mt-5">Company Profile</h4>
    <div class="">
      <label for="exampleInputPassword1" class="form-label">Name</label>
      <input v-model="companyName" class="form-control" id="exampleInputPassword1">
    </div>

    <div class="mt-4">
      <p class="form-label">Primary Business activity</p>
      <input v-model="businessActivity" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="form-check mt-4">
      <input v-model="resetRisks" type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Reset all Negative Risks on save</label>
    </div>
  </div>
  <div class="mt-5 float-end">
    <div v-on:click.prevent="$store.commit('logout')" class=" btn btn-outline-danger">Logout</div>
    <div @click="saveProfile" class="ms-3 btn btn-success">Save</div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Login',
  data: function() {
    return {
      businessActivity: '',
      companyName: '',
      email: '',
      password: '',
      resetRisks: false,
    }
  },
  created: function() {
    this.init()
  },
  watch: {
    '$route': 'init',
  },
  methods: {
    saveProfile: function() {
      let data = {
        'business_activity': this.businessActivity,
        'company_name': this.companyName,
        'email': this.email,
        'password': this.password,
        'reset_risks': this.resetRisks,
      }
      this.$http.post('/user/info', data).then((response) => {
        this.$store.dispatch('updateUserInfo', response.data)
        console.log('saved profile', response.data)
      })
    },
    init: function() {
      this.businessActivity = this.$store.state.company.business_activity
      this.companyName = this.$store.state.company.name
      this.email = this.$store.state.user.email
    }
  }
}
</script>
