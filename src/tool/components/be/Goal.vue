
<template >
<div class=" text-start">

  <div class="col-10 offset-1">

    <!-- <Breadcrumb :crumbs="crumbs" class="mt-4" /> -->
    <!-- {{$store.state.be[goalCode].questions}} -->

    <!-- <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div> -->



    <div v-if="goalCode.length" class="mt-5">

      <!-- {{answers}} -->

      <h2 class="mt-1 d-flex">
        <div class="me-2"> {{goalCode}} </div>
        <!-- <h2 v-if="overallRisk === 'Unlikely'" class="badge rounded-pill bg-light text-dark">Unlikely</h2> -->
        <!-- <span v-if="overallRisk === 'High'" class="badge rounded-pill bg-danger">High</span> -->
        <!-- <span v-if="overallRisk === 'Moderate'" class="badge rounded-pill bg-warning">Moderate</span> -->
      </h2>
      <div>

        <h1 class="title-underline">
          {{$store.state.be[goalCode].nav_title}}
        </h1>
      </div>
      <p>
        {{$store.state.be[goalCode].text}}
      </p>
      <div class="">
        <a target="_blank" :href="'https://futurefitbusiness.org/goals/' + goalCode"> More info.. </a>

      </div>


      <h2 class="mt-5">
        Goal Risk level:
        <span class="">
          <span v-if="$store.state.be[goalCode].risk === 'Low'" class="badge rounded-pill bg-success text-white">Low</span>
          <span v-if="$store.state.be[goalCode].risk === 'Unlikely'" class="badge rounded-pill bg-light text-secondary">Unlikely</span>
          <span v-if="$store.state.be[goalCode].risk === 'High'" class="badge rounded-pill bg-danger text-white">High</span>
          <span v-if="$store.state.be[goalCode].risk === 'Moderate'" class="badge rounded-pill bg-warning text-white">Moderate</span>

        </span>
      </h2>

      <div class="mt-4">
        <div v-for="question in $store.state.be[goalCode].questions" class="mt-4 question-container">
          <div class="">

            <div class="" style="display:flex;font-size:19px;">
              <div class="question-number "> {{question.number}} </div>
              <span v-if="question.risk === 'Unlikely'" class="badge rounded-pill bg-light text-dark">Unlikely</span>
              <span v-if="question.risk === 'Low'" class="badge rounded-pill bg-success">Low</span>
              <div v-if="question.risk === 'High'" style="height:23px;" class=" badge rounded-pill bg-danger">High</div>
              <div @click="goto(`/be/${question.be}`)" v-if="question.duplicate" class="badge rounded-pill bg-light text-dark cursor-hover">
                Answered at {{question.location}}
                <i class="bi bi-box-arrow-up-right align-text-top ml-1" width="10" height="10"></i>

              </div>

              <div class="ms-1" v-show="question.example || question.notes" @click="clickHelp(question.code)">
                <HelpCircle :clicked="showHelp.includes(question.code)" />
              </div>

            </div>


            <div class="row">

              <div class="col-9">

                <div class=" mt-1">
                  {{question.text}}

                </div>
              </div>
              <div class="col-3    text-end" role="group" aria-label="Basic example">
                <div class="btn-group " role="group" aria-label="Basic example">
                  <button :disabled="question.duplicate" @click="setQuestionValue(question.code, true)" :class="{'active': answers[question.code].value == true}" type="button" class="btn btn-light">Yes</button>
                  <button :disabled="question.duplicate" @click="setQuestionValue(question.code, false)" :class="{'active': answers[question.code].value == false}" type="button" class="btn btn-light">No</button>
                </div>
              </div>
            </div>

          </div>
          <div v-show="showHelp.includes(question.code)" class="alert alert-secondary col-10 mt-3" role="alert">
            <div class="">
              <p v-show="question.example">
                <!-- {{question}} -->
                <b>
                  Example
                </b>
              </p>
              <div class="">
                {{question.example}}
              </div>
              <p v-show="question.notes">
                <b>
                  Certified Professionals notes
                </b>
              </p>
              <div class="">
                {{question.notes}}
              </div>

            </div>
          </div>

        </div>
      </div>
      <div class="mt-5">
        <button v-show="!saving" @click="saveGoal()" type="button" class="btn btn-success float-end">Save</button>
        <button v-show="saving" type="button" disabled class="btn btn-success float-end" style="width:62px;">
          <div class="rotate-slowly">
            <i class="bi bi-star-fill" width="16" height="16"></i>
          </div>
        </button>

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
import { addOrRemove } from '@/tool/utils/utils'
import HelpCircle from '@/common/components/HelpCircle'
import Breadcrumb from '@/tool/components/Breadcrumb'

export default {
  name: 'beAssessment',
  created: function() {
    this.init()
  },
  watch: {
    '$route': 'init',
  },
  data: function() {
    return {
      goalCode: '',
      showHelp: [],
      answers: {},
      changes: false,
      saving: false,
    }
  },
  components: {
    HelpCircle,
    Breadcrumb
  },

  computed: {},
  methods: {
    init: function() {
      this.showHelp = []
      this.goalCode = this.$route.params.goal
      this.answers = this.$store.state.be[this.goalCode].answers
      this.crumbs = [
        { title: 'Negative Risks', path: 'be' },
        { title: this.goalCode, }
      ]
    },
    clickHelp: function(code) {
      this.showHelp = addOrRemove(code, this.showHelp)
    },
    goto: function(path) {
      this.$store.commit('setActivePage', path)
      this.$router.push({ path: path }).catch(err => {})
    },
    saveGoal: function() {
      // console.log(question.id)
      this.saving = true
      this.$http.post(`be/${this.goalCode}`, this.answers).then((response) => {
        this.$store.dispatch('getBreakEvens')
        this.saving = false
      })
    },
    setQuestionValue: function(code, value) {
      console.log(code, value)
      this.answers[code].value = value
    },
    // next: function() {},
    // back: function() {},
  }
}
</script>

<style scoped>
.duplicate-goalCode {
  color: #fff;
  background-color: #c8c8c8;
  border-color: #c8c8c8;
}

.duplicate-goalCode:hover {
  color: #fff;
  background-color: #c8c8c8;
  border-color: #c8c8c8;
}

.duplicate-btn {
  color: #7d7d7d;
  background-color: #ececec;
  border-color: #ececec;
}

.duplicate-btn:hover {
  color: #7d7d7d;
  background-color: #ececec;
  border-color: #ececec;
}
</style>
