<template>
<div class="reports col-8 offset-2 text-left">

  <div class="row mt-5  "> </div>
  <h3 class="weight-100">Reports</h3>

  <div class="highlight mt-3" role="alert">
    <div class="mt-1 form-check custom-checkbox">
      <input v-bind:disabled="disabled" v-model="approved" id="approved-check" @change="updateBenchmarkStatus" type="checkbox" class="custom-control-input">
      <input id="approved-check" type="checkbox" class="custom-control-input">
      <label for="approved-check" class="custom-control-label">
        I've completed my assessment, and I'm ready for SF to view the results.
      </label>
    </div>
  </div>

  <div v-if="showSaved" class="alert alert-success mt-5" role="alert">
    Status updated.
  </div>

  <div @click="goto('/reports/positive-pursuits')" class="rep-hover bd-callout bd-callout-success p-3">
    <div class="col-8">
      <h4>Positive Pursuits Report</h4>
      <small>{{$store.state.scores.pp}}% complete.</small>
    </div>
  </div>

  <div @click="goto('/reports/break-evens')" class="rep-hover bd-callout bd-callout-success p-3">
    <div class="col-8">
      <h4>Break-Even Goals Report</h4>
      <small>{{$store.state.scores.be}}% complete.</small>
    </div>
  </div>

  <div @click="goto('/reports/data' )" class="rep-hover bd-callout bd-callout-success p-3">
    <div class="col-8">
      <h4>Report Data</h4>
      <small>A basic summary of the benchmark data, available to download as CSV.</small>
    </div>
  </div>

  <div @click="goto('/reports/download')" class="rep-hover bd-callout bd-callout-success p-3">
    <div class="col-8">
      <h4>PDF Report</h4>
      <small>Preview and download a PDF report.</small>
    </div>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

</div>
</template>

<script>
export default {
  name: 'Report',
  data: function() {
    return {
      approved: false,
      showSaved: false,
      disabled: true,
    }
  },
  created: function() {
    this.getData()
  },
  components: {},
  methods: {
    goto: function(path) {
      this.$router.push({ path: path }).catch(err => {})
    },
    updateBenchmarkStatus: function() {
      this.showSaved = false
      this.$http.post('/benchmark/status', { 'approved': this.approved }).then((response) => {
        if (response.data && response.data.status == 'success') {
          this.showSaved = true
        }
      })
    },
    getData: function() {
      this.showSaved = false
      this.$http.get('/benchmark/status').then((response) => {
        this.disabled = false
        this.approved = response.data.approved
      })
    },
  },
}
</script>

<style>
.rep-hover:hover {
  background: #ececec;
  cursor: pointer;
}
</style>
