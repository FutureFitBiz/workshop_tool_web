<template>
<div class=" text-start mt-5">
  <form @submit.prevent="updateProfile">
    <h2>Company Profile</h2>
    <div class="form-group">
      <label>Name</label>
      <input v-model.trim="company.name" class="form-control" maxlength="120">
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea class="form-control" v-model="company.description" rows="3"></textarea>
    </div>



    <div class="mt-5 mb-5">
      <!-- <div v-on:click.prevent="$store.commit('logout')" class="btn btn-outline-danger float-end">Logout</div> -->
      <!-- so enter doesn't submit the form -->
      <button type="submit" disabled style="display: none" aria-hidden="true"></button>
      <button type="submit" class="btn btn-success float-end">Save</button>
    </div>
    <br>
    <br>
    <br>
  </form>
</div>
</template>


<script>
export default {
  name: 'ProfileCompany',
  data: function() {
    return {
      company: {},
    }
  },
  watch: {
    '$route': 'init',
  },
  created: function() {
    // get company from store
    this.company.name = this.$store.state.company_name
  },
  methods: {
    getProfile: function() {
      this.$http.get('company/profile').then((response) => {
        this.$store.dispatch('setCompanyInfo')
        // show store message
      })
    },
    updateProfile: function() {
      // this.$http.post('user/profile', { data: this.user }).then((response) => {
      //     this.$store.dispatch('setCompanyInfo')
      //     // show store message
      //   }
    }
  },

}
</script>
