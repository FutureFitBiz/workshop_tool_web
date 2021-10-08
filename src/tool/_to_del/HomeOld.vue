
<template>
<div class="text-left mt-5 col-10 offset-1 col-xl-10 offset-xl-1">

  <div class="mt-5">
    <h2>
      Break-Even Goals
    </h2>
    <div class="">
      <div class="row p-0 m-0">
        <div @click="goto(item.code)" class="p-0 m-0" v-for="item in $store.state.beAssessment.goal_stats" style="width: 10.1rem;">

          <div :class="{
            'bg-danger': item.risk ==='High',
            'bg-warning': item.risk ==='Moderate',
            'bg-success': item.risk ==='Low',
            'bg-light': item.risk ==='Unlikely'
            }" class="card p-0 ff-font m-1 be-hover">
            <div class="card-header mb-2 d-flex align-items-start flex-column" style="height:6em;">
              <div style="font-size:1em;" class="">
                <h6>
                  {{$store.state.BElayout[item.code].title}}
                </h6>
              </div>
              <div class="" style="font-size:1.3em;">{{item.code}}</div>
            </div>
            <div class="card-body p-2 pl-4">
              <div class="">{{$store.state.beAssessment.goal_risks[item.code]}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <br>
  <br>
  <br>
  <br>

</div>
</template>

<script>
export default {
  name: 'breakEvenAssessment',
  created: function() {
    this.init()
  },
  watch: {
    '$route': 'init',
  },
  data: function() {
    return {
      heatmap_questions: {},
      heatmap_answers: {},
      heatmap_complete: false,
      heatmap: '',
      selected1: '',
      selected2: '',
      selected3: '',
    }
  },

  computed: {
    options2: function() {
      if (this.selected1) {
        return this.getOptionsWithCode(this.heatmap_questions[this.selected1])
      }
    },
    options3: function() {
      if (this.selected1 && this.selected2) {
        return this.getOptionsWithCode(this.heatmap_questions[this.selected1][this.selected2])
      }
    },
    heatmap_finished: function() {
      return this.selected1 && this.selected2 && (this.selected3 || this.options3.length === 0)
    },
  },
  methods: {
    init: function() {
      this.heatmap = this.$store.state.heatmap
      this.heatmap_questions = this.$store.state.heatmpaQuestions
    },
    goto: function(name) {
      let path = '/be/' + name
      this.$router.push({ path: path }).catch(err => {})
    },
    getOptionsWithCode: function(obj) {
      let options = []
      for (var i in obj) {
        if (obj[i].code) {
          options.push(obj[i])
        }
      }
      return options
    },

    confirmHeatmap: function() {
      let data = {
        1: this.selected1,
        2: this.selected2,
        3: this.selected3,
      }
      this.$http.post('/be/heatmap_identification', { 'data': data }).then((response) => {
        this.heatmap = response.data
        this.$store.commit('setHeatmap', response.data)
        this.$store.dispatch('getRiskProfile', response.data)
        // this.setProgress()

      })
    },
    clearSubOptions1: function(val) {
      this.selected2 = ''
      this.selected3 = ''
    },
    clearSubOptions2: function(val) {
      this.selected3 = ''
    },

  }
}
</script>

<style >
.active-btn {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
