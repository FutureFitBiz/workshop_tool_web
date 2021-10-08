
<template>
<div class="text-start mt-5 col-10 offset-1 col-xl-10 offset-xl-1">

  <div class="mt-5 text-start">
    <h1 class="title-underline">
      Negative Risks
    </h1>

    <div class="accordion mt-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header w-100" id="headingOne">
          <button :class="{'collapsed': startCollapsed}" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About
          </button>
        </h2>

        <div id="collapseOne" class="accordion-collapse collapse" :class="{'show': !startCollapsed}" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>
              Our global economy has evolved to value financial gains above planetary and human health. As a result, many widely-accepted business practices are taking us in the wrong direction.
            </p>
            <p>
              The Future-Fit Business Benchmark identifies what these practices are — covering all key topics, from procurement to product design — and how they must be transformed.
            </p>
            <p>
              Every topic is covered by what we call a Break-Even Goal. Each one sets out a threshold of performance that must be met, and defines how to assess progress along the way.
            </p>
            <p>
              There are 23 Break-Even Goals. Together they mark the line in the sand every company must strive to reach, to be sure it is in no way undermining society’s progress toward the SDGs.
            </p>
            <p>
              In this section you can fine tune the risks associated with each Break-Even Goal for your business. All companies are unique, so by modifying the answers to the various yes/no questions you will find when you select a specific
              Break-Even Goal, you will create your own Company Risk Profile.
            </p>

            <p>
              At any point you can switch to viewing the relevant SDG links, to see how taking action on each topic will reduce the risk of you inadvertently slowing down society’s progress.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <h3 class="mt-4">Summary</h3>

    </div>


    <div class="mt-4">
      <div class="row p-0 m-0">
        <div @click="goto(item.code)" class="p-0 m-0" v-for="item in $store.state.be" style="width: 10.1rem;">

          <div :class="{
            'bg-danger': item.risk ==='High',
            'bg-warning': item.risk ==='Moderate',
            'bg-success': item.risk ==='Low',
            'bg-light': item.risk ==='Unlikely'
            }" class="card p-0 ff-font m-1 be-hover">
            <div class="card-header mb-2 d-flex align-items-start flex-column" style="height:6em;">
              <div style="font-size:1em;" class="">
                <h6>
                  {{item.title}}
                </h6>
              </div>
              <div class="" style="font-size:1.3em;">{{item.code}}</div>
            </div>
            <div class="card-body p-2 pl-4">
              <div class="">
                {{item.risk}}
              </div>
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
  name: 'beSummary',
  // created: function() {
  //   this.init()
  // },

  // watch: {
  //   '$route': 'init',
  // },
  mounted: function() {
    this.startCollapsed = this.$store.state.pageVisited.be
    this.$store.commit('setPageVisited', 'be')
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
      startCollapsed: false,
    }
  },

  computed: {
    // options2: function() {
    //   if (this.selected1) {
    //     return this.getOptionsWithCode(this.heatmap_questions[this.selected1])
    //   }
    // },
    // options3: function() {
    //   if (this.selected1 && this.selected2) {
    //     return this.getOptionsWithCode(this.heatmap_questions[this.selected1][this.selected2])
    //   }
    // },
    // heatmap_finished: function() {
    //   return this.selected1 && this.selected2 && (this.selected3 || this.options3.length === 0)
    // },
  },
  methods: {
    init: function() {
      // this.heatmap = this.$store.state.heatmap
      // this.heatmap_questions = this.$store.state.heatmpaQuestions
    },
    goto: function(name) {
      let path = '/be/' + name
      this.$store.commit('setActivePage', path)
      this.$router.push({ path: path }).catch(err => {})
    },
    // getOptionsWithCode: function(obj) {
    //   let options = []
    //   for (var i in obj) {
    //     if (obj[i].code) {
    //       options.push(obj[i])
    //     }
    //   }
    //   return options
    // },
    //
    // confirmHeatmap: function() {
    //   let data = {
    //     1: this.selected1,
    //     2: this.selected2,
    //     3: this.selected3,
    //   }
    //   this.$http.post('/be/heatmap_identification', { 'data': data }).then((response) => {
    //     this.heatmap = response.data
    //     this.$store.commit('setHeatmap', response.data)
    //     this.$store.dispatch('getRiskProfile', response.data)
    //     // this.setProgress()
    //
    //   })
    // },
    // clearSubOptions1: function(val) {
    //   this.selected2 = ''
    //   this.selected3 = ''
    // },
    // clearSubOptions2: function(val) {
    //   this.selected3 = ''
    // },

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
