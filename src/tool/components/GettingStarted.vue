
<template>
<div class="text-start mt-5 col-lg-10 offset-lg-1">
  <div class="mb-5">
    <!-- {{$store.state.company}} -->
    <!-- {{$store.state.user}} -->
    <div class="container col-10 offset-1" v-show="editing">
      <!-- <h3>Edit Setup</h3> -->

      <div class="">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input v-model="companyName" class="form-control" id="exampleInputPassword1">
      </div>

      <div class="mt-4">
        <p class="form-label">Primary Business activity</p>
        <input v-model="businessActivity" class="form-control" id="exampleInputPassword1">
        <!-- <HeatmapDropdown class="" :onFinish="heatmapFinished" /> -->

      </div>


      <!-- <div class="alert alert-warning mt-3 " role="alert"> -->
      <div class="form-check mt-4">
        <input v-model="resetRisks" type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Reset all Negative Risks on save</label>
      </div>

      <!-- </div> -->
      <div class="float-end mt-4">
        <div @click="editing = false" class=" btn btn-outline-secondary">
          Cancel
        </div>
        <button v-show="!(businessActivity && businessActivity.length) || !companyName.length" disabled class="ms-2 btn btn-outline-secondary">
          Save
        </button>
        <div v-show="(businessActivity && businessActivity.length) && companyName.length" @click="save" class="ms-2 btn btn-success">
          Save
        </div>
      </div>
    </div>
  </div>

  <div v-show="!editing" class="mb-5">
    <div class="alert bg-light" role="alert">
      <a @click="editing = true" class="pointer text-secondary">
        Edit
      </a>

      <div class="mt-2 text-secondary">
        <div class="row">
          <div class="col-6 "> Company Name</div>
          <div class="col-6 ">
            <b>
              {{$store.state.company.name}}
            </b>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 ">Primary Business Activity</div>
          <div class="col-6 ">
            <b>
              {{$store.state.company.business_activity}}
            </b>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h1> Getting started </h1>
      <p class="mt-4">
        The Sustainable Development Goals — or SDGs — offer a shared vision for the global problems we must solve. All nations have agreed to strive to reach these goals by 2030.
      </p>
      <p>
        This is an ambitious timeline, because achieving the SDGs will require a major shift in how our economy operates today. Every business has to play its part in making this happen.
      </p>
      <p>
        Many current business practices are slowing down our collective progress, while some game-changing solutions which could speed up our progress are going largely unnoticed.
      </p>
      <p>
        That’s why we’ve built this tool, based on the Future-Fit Business Benchmark. It will help you pinpoint where your business is impacting the SDGs, both positively and negatively.
      </p>
      <p>
        Identifying your SDG impacts — and how to improve them — is the first step on the journey to becoming a responsible, regenerative and resilient business fit for the 21st Century.
      </p>
      <p class="">
        Use the menu on the left to get started.
      </p>

    </div>
  </div>
</div>
</template>

<script>
// import HeatmapDropdown from '@/tool/components/HeatmapDropdown.vue'

export default {
  name: 'Home',

  components: {
    // HeatmapDropdown,
  },
  mounted: function() {
    this.companyName = this.$store.state.company.name
    this.businessActivity = this.$store.state.company.business_activity
    // init
  },
  data: function() {
    return {
      editing: false,
      companyName: '',
      businessActivity: '',
      resetRisks: false,
    }
  },
  watch: {
    '$route': 'reset',
  },
  computed: {},
  methods: {
    reset: function() {
      this.editing = false
    },
    // init: function() {
    // },
    goto: function(name) {
      this.$router.push({ path: name }).catch(err => {})
    },
    // heatmapFinished: function(name) {
    //   this.heatmap = name
    // },
    save: function() {
      let data = {
        'business_activity': this.businessActivity,
        'company_name': this.companyName,
        'reset_risks': this.resetRisks
      }
      this.$http.post('/user/info', data).then((response) => {
        this.$store.dispatch('updateUserInfo', response.data)
        this.editing = false
      })
    }
    // saveHeatmap: function() {
    //   let data = {
    //     'heatmap': this.heatmap,
    //     'company_name': this.companyName
    //   }
    //   this.$http.post('/user/intro', data).then((response) => {
    //     this.$store.dispatch('finishIntro', response.data)
    //     this.editing = false
    //   })
    //   console.log('save heatmap')
    // }
  }
}
</script>

<style >

</style>
