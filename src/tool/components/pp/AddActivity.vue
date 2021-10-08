<template>
<div class="text-left mt-5 col-10 offset-1 col-xl-8 offset-xl-2 text-start">

  <!-- {{part1Questions}} -->

  <h1 class="modal-title">Add a new Activity ({{currentPage}} of 2)</h1>
  <div class="" v-if="currentPage === 1">
    <div class="mb-3 mt-3">
      <h5 for="1-1" class="form-label">Name</h5>
      <input v-model.trim="name" class="form-control" id="1-1">

      <!-- <popper :options="tooltipOptions">
        <div class="popper">
          Popper Content
        </div>

        <button slot="reference">
          Reference Element
        </button>
      </popper> -->
    </div>

    <div v-for="item in part1Questions" class="question">
      <p v-if="item.header" class=""><strong><u>{{item.header}}</u></strong></p>
      <h5 v-if="item.title" class="question-title mt-5"> {{item.title}} </h5>
      <div v-if="item.type === 'checkbox'" class=" ml-2 mt-2">
        <div v-for="item1 in item.options" class="mform-check custom-checkbox">
          <div class="form-check">
            <input class="form-check-input pointer" type="checkbox" v-model="part1Answers" v-bind:value="item1.value" v-bind:id="item1.value">
            <label :class="{'selected-option': part1Answers.includes(item1.value)}" class="form-check-label pointer" v-bind:for="item1.value">
              {{item1.title}}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showWarning" class="alert alert-danger mt-5" role="alert">
      Please enter a name
    </div>

    <button @click="nextPage" class="btn btn-success float-end mb-5 mt-5">Next</button>

  </div>

  <!-- {{loading}} -->

  <div class="" v-if="currentPage === 2 && loading">
    <div class="mt-5 mb-5">
      Loading Questions
    </div>
    <button @click="currentPage -= 1" class="btn btn-light float-start mb-5 mt-5">Back</button>
    <button @click="finish" class="btn btn-success float-end mb-5 mt-5">Submit</button>

  </div>

  <div class="" v-if="currentPage === 2 && !loading">



    <div class="accordion mt-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header w-100" id="headingOne">
          <button :class="{'collapsed': startCollapsed}" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            Info
          </button>
        </h2>

        <div id="collapseOne" ref="infoCollapsepp" :class="{'show': !startCollapsed}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="mt-3">
              Please select all options that describe how this activity benefits people or the environment.
            </p>


            Selecting certain options will give you a choice of further sub-options to more precisely define your activity.
            However, <b>you do not need to select any sub-options if they are not relevant</b>.
            <!-- You don't have to select every sub-option, as some will not make sense to the activity at hand. -->
            <!-- <div class="bd-callout bd-callout-info row"> -->
            <!-- <div class=" mt-3 row">
              <div class="offset-md-2 float-end col-md-3 mt-4 text-success">
                This is fine
              </div>
              <img width="20" class="col-md-3 float-start" src="@/assets/example_2.png"></img>
            </div> -->
          </div>
        </div>
      </div>
    </div>





    <div v-for="item in part2Questions" class="question">
      <p v-if="item.header" class=""><strong><u>{{item.header}}</u></strong></p>
      <h5 v-if="item.title" class="question-title mt-5"> {{item.title}} </h5>
      <div v-if="item.type === 'checkbox'" class=" ml-2 mt-2">

        <div v-for="item1 in item.options" class="mform-check custom-checkbox">
          <div class="form-check">
            <input class="form-check-input pointer" type="checkbox" v-model="part2Answers" v-bind:value="item1.value" v-bind:id="item1.value">
            <label class="form-check-label pointer" :class="{'selected-option': part2Answers.includes(item1.value)}" v-bind:for="item1.value">
              {{item1.title}}
            </label>
          </div>

          <!-- 2 -->
          <div v-show="!hiddenOptions.includes(item2.value) && part2Answers.includes(item1.value)" v-for="item2 in item1.options" class="mt-2 ms-4">
            <div class="form-check ">
              <input class="form-check-input pointer" type="checkbox" v-model="part2Answers" v-bind:value="item2.value" v-bind:id="item2.value">
              <label :class="{'selected-option': part2Answers.includes(item2.value)}" class="form-check-label pointer" v-bind:for="item2.value">
                {{item2.title}}
              </label>
            </div>
            <!-- 3 -->
            <div v-show="!hiddenOptions.includes(item3.value) && part2Answers.includes(item2.value)" v-for="item3 in item2.options" class="mt-1 ms-4">
              <div class="form-check">
                <input class="form-check-input pointer" type="checkbox" v-model="part2Answers" v-bind:value="item3.value" v-bind:id="item3.value">
                <label :class="{'selected-option': part2Answers.includes(item3.value)}" class="form-check-label pointer" v-bind:for="item3.value">
                  {{item3.title}}
                </label>
              </div>
              <!-- 4 -->
              <div v-show="!hiddenOptions.includes(item4.value) && part2Answers.includes(item3.value)" v-for="item4 in item3.options" class="mt-1 ms-4">
                <div class="form-check">
                  <input class="form-check-input pointer" type="checkbox" v-model="part2Answers" v-bind:value="item4.value" v-bind:id="item4.value">
                  <label :class="{'selected-option': part2Answers.includes(item4.value)}" class="form-check-label pointer" v-bind:for="item4.value">
                    {{item4.title}}
                  </label>
                </div>
                <!-- 5 -->
                <!-- there is only one of these.......>> -->
                <div v-show="!hiddenOptions.includes(item5.value) && part2Answers.includes(item4.value)" v-for="item5 in item4.options" class="mt-1 ms-4">
                  <div class="form-check">
                    <input class="form-check-input pointer" type="checkbox" v-model="part2Answers" v-bind:value="item5.value" v-bind:id="item5.value">
                    <label :class="{'selected-option': part2Answers.includes(item5.value)}" class="form-check-label pointer" v-bind:for="item5.value">
                      {{item5.title}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

    <div v-show="showWarning" class="alert alert-danger mt-5" role="alert">
      Please select at least one option
    </div>


    <button @click="currentPage -= 1" class="btn btn-light float-start mb-5 mt-5">Back</button>
    <button @click="finish" class="btn btn-success float-end mb-5 mt-5">Submit</button>

  </div>





</div>
</template>

<script>
// import Popper from '@popperjs/core'
import Popper from 'vue-popperjs';

export default {
  name: 'AddActivity',
  data: function() {
    return {
      loading: false,
      showWarning: false,
      name: '',
      activity: {},
      startCollapsed: false,
      currentPage: 1,
      part1Questions: {},
      part2Questions: {},
      part1Answers: [],
      part2Answers: [],
      hiddenOptions: [],
      tooltipOptions: { placement: 'top', modifiers: { offset: { offset: '0,10px' } } },
    }
  },
  components: {
    Popper
  },
  created: function() {
    this.getPart1Questions()
  },
  mounted() {
    this.startCollapsed = this.$store.state.pageVisited.newActivity
    this.$store.commit('setPageVisited', 'newActivity')
    // this.$nextTick(function() {
    //   var popper = new Popper(this.$refs["tooltip"], {
    //     placement: 'bottom-start'
    //   });
    // });
  },


  methods: {
    save: function() {
      this.$http.post('product', { data: this.answers }).then((response) => {})
    },
    setup: function() {
      this.getData()
    },
    nextPage: function() {
      if (this.name.length === 0) {
        this.showWarning = true
        return
      }
      this.showWarning = false
      this.getPart2Questions()
      this.currentPage += 1
    },
    getPart1Questions: function() {
      this.$http.get('pp/activity_questions/part1').then((response) => {
        this.part1Questions = response.data
      })
    },
    getPart2Questions: function() {
      this.loading = true
      this.$http.post('pp/activity_questions/part2', this.part1Answers).then((response) => {
        // console.log('what')
        this.part2Questions = response.data.questions
        this.hiddenOptions = response.data.hidden_options
        this.loading = false
      })
    },
    finish: function() {
      if (this.part2Answers.length === 0) {
        this.showWarning = true
        return
      }
      this.showWarning = false
      // check if part2Answers is empty
      let data = {
        name: this.name,
        part_1_answers: this.part1Answers,
        part_2_answers: this.part2Answers
      }
      this.$http.post('pp/activity/new', data).then((response) => {
        console.log(response.data)
        this.$store.dispatch('getActivities')
        let path = `/pp/${response.data.code}`
        this.$store.commit('setActivePage', path)
        this.$router.push({ path: path })
        // this.part1Questions = response.data
      })

    },





  }

}
</script>

<style scoped>
.selected-option {
  color: var(--ff-blue-b5);
  color: #2C7F99;
  background: #fbfbfb;
}
</style>
