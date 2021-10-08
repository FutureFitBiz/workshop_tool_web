
<template>
<div class="text-left mt-5 col-10 offset-1 col-xl-10 offset-xl-1">

  <div v-if="!$store.state.business_activity" class="mt-5">
    <!-- <h5>{{$store.state.company_name}}</h5> -->
    <h2>
      Welcome to the tool
    </h2>

    <div v-show="!business_activity">
      <div class="mt-5">
        <p>
          Firstly we need you to describe your company’s <b>primary business activity</b>.
        </p>

        <div class="mb-3">
          <div class="mb-3">
          </div>
          <select @change="clearSubOptions1" class="custom-select" v-model="selected1">
            <option disabled value="">Choose...</option>
            <option :value="option.code" v-for="option in heatmapQuestions">{{option.text}}</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>

        <div v-if="selected1" class="mb-3">
          <div class="mb-3">
          </div>
          <select @change="clearSubOptions2" class="custom-select" v-model="selected2">
            <option disabled value="">Choose...</option>
            <option :value="option.code" v-for="option in options2">{{option.text}}</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>

        <div v-if="selected1 && selected2 && options3.length" class="mb-3">
          <div class="mb-3">
          </div>
          <select class="custom-select" v-model="selected3">
            <option disabled value="">Choose...</option>
            <option :value="option.code" v-for="option in options3">{{option.text}}</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>


        <div v-if="heatmap_finished" class="mt-5">
          We'll use this to pre-populate most of the Break-Even assessment questions.
        </div>
        <div class="mt-4 ">
          <div v-if="heatmap_finished" @click="confirmHeatmap" class="btn btn-success  ">
            Confirm
          </div>
        </div>
      </div>
    </div>

    <div v-if="business_activity" class="">
      Primary Business Activity:
      <b>
        {{business_activity}}
      </b>
      <div @click="business_activity=''" class="ml-2 btn btn-sm btn-light "> edit </div>

      <!-- {{$store.state.BElayout}} -->
      <div class="row p-0 m-0">
        <div @click="goto(name)" class="p-0 m-0" v-for="(be, name) in $store.state.BElayout" style="width: 10.1rem;">

          <div :class="{
            'bg-danger': goalRisks[name] ==='High',
            'bg-warning': goalRisks[name] ==='Moderate',
            'bg-success': goalRisks[name] ==='Low',
            'bg-light': goalRisks[name] ==='Unlikely'
            }" class="card p-0 ff-font m-1 be-hover">
            <!-- <div v-for="(be, name) in $store.state.BElayout" class="card bg-light mb-3" style="max-width: 18rem;"> -->
            <div class="card-header mb-2 d-flex align-items-start flex-column" style="height:6em;">
              <div style="font-size:1em;" class="">
                <h6>
                  {{be.title}}
                </h6>
              </div>
              <div class="" style="font-size:1.3em;">{{name}}</div>
              <!-- {{name}} -->
            </div>
            <div class="card-body p-2 pl-4">
              <div class="">{{goalRisks[name]}}</div>
              <!-- <h5 class="card-title">{{be.title}}</h5> -->
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

  <div v-if="$store.state.business_activity">
    <!-- <h5>{{$store.state.company_name}}</h5> -->
    <h5 class="mt-5">Progress Overview</h5>
    <h3>Break-Even Goals</h3>
    <div class="row mt-4 p-2">
      <table class="table table-sm col-6">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Goal</th>
            <th scope="col">Risk Level</th>
            <!-- <th scope="col">Handle</th> -->
          </tr>
        </thead>
        <tbody>
          <tr @click="goto(`be/${key}`)" class="be-hover-home" v-for="key in Object.keys($store.state.BElayout).slice(0, 12)">
            <td>{{key}}</td>
            <td>{{$store.state.BElayout[key].title}}</td>
            <td>
              <span class="badge rounded-pill " :class="{
                'bg-danger': goalRisks[key] ==='High',
                'bg-warning': goalRisks[key] ==='Moderate',
                'bg-success': goalRisks[key] ==='Low',
                'bg-light': goalRisks[key] ==='Unlikely'
                }">
                {{goalRisks[key]}}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-sm col-6">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Goal</th>
            <th scope="col">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          <tr @click="goto(`be/${key}`)" class="be-hover-home" v-for="key in Object.keys($store.state.BElayout).slice(12)">
            <td>{{key}}</td>
            <td>{{$store.state.BElayout[key].title}}</td>
            <td>
              <span class="badge rounded-pill" :class="{
                'bg-danger': goalRisks[key] ==='High',
                'bg-warning': goalRisks[key] ==='Moderate',
                'bg-success': goalRisks[key] ==='Low',
                'bg-light': goalRisks[key] ==='Unlikely'
                }">
                {{goalRisks[key]}}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="mt-5">Positive Pursuits</h3>

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
      // heatmap_questions: {},
      // heatmap_answers: {},
      heatmap_complete: false,
      // heatmap: '',
      selected1: '',
      selected2: '',
      selected3: '',
    }
  },

  computed: {
    options2: function() {
      if (this.selected1) {
        return this.getOptionsWithCode(this.heatmapQuestions[this.selected1])
      }
    },
    options3: function() {
      if (this.selected1 && this.selected2) {
        return this.getOptionsWithCode(this.heatmapQuestions[this.selected1][this.selected2])
      }
    },
    heatmap_finished: function() {
      return this.selected1 && this.selected2 && (this.selected3 || this.options3.length === 0)
    },
    goalRisks: function() {
      if (Object.keys(this.$store.state.beAssessment).length) {
        return this.$store.state.beAssessment.goal_risks
      } else {
        return {}
      }
    },
    heatmapQuestions: function() {
      return this.$store.state.heatmpaQuestions
    },
    business_activity: function() {
      return this.$store.state.business_activity
    },
  },
  methods: {
    init: function() {},
    goto: function(name) {
      // let path = '/be/' + name
      this.$router.push({ path: name }).catch(err => {})
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
        // this.heatmap = response.data
        this.$store.commit('setBusinessActivity', response.data)
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
