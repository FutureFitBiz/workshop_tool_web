
<template>
<div class="col-10 offset-1 h-100" style="position:fixed; top:0">
  <!-- <div v-if="currentSlide !== 1" class="col-4 offset-4 position-relative mt-5">
    <div class="progress" style="height: 1px;">
      <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
  </div> -->
  <div v-show="currentSlide === 1">
    <div class="row mt-5">
      <div class="col-5">
        <h1 class="mt-5" style="font-size: 5vw">
          Thank you for signing up!
          <!-- Start on the path towards being Futur/e-Fit -->
        </h1>
        <h1 class="mt-5 text-black-50" style="font-size: 3vw">
          We just need a couple of things to get you setup.
          <!-- Start on the path towards being Futur/e-Fit -->
        </h1>

      </div>
      <div class="col-6">
        <img style="max-width: 46vw;" src="@/assets/marginalia-ecology-care.png" alt="">
      </div>
      <div class="row text-center col-4 offset-4">
        <button @click="nextSlide()" type="button" class="btn btn-success btn-lg">
          Start
        </button>
      </div>
    </div>
  </div>

  <!-- <div v-if="currentSlide === 2" class="position-absolute top-50 w-100"> -->
  <!-- <div class=""> -->

  <!-- </div> -->

  <!-- </div> -->

  <div v-show="currentSlide === 2" class="">
    <div class="vertical-center text-center w-100">
      <input ref="input" class="w-100 big-form-font" placeholder="What's your Company name?" v-model="companyName" type="text" />
      <div class="mt-5">
        <button @click="back()" type="button" class="btn btn-light btn-lg me-2">
          <i class="bi bi-chevron-left "></i>
        </button>
        <button v-show="!companyName.length" disabled type="button" class="btn btn-light btn-lg">
          Next
        </button>
        <button v-show="companyName.length" @click="nextSlide()" type="button" class="btn btn-success btn-lg">
          Next
        </button>
      </div>
    </div>
  </div>


  <div v-show="currentSlide === 3" class="">
    <div class="vertical-center text-center w-100">
      <div class="big-form-font2 text-secondary">
        Describe your Company
      </div>

      <HeatmapDropdown class="mt-3" :xl="true" :onFinish="heatmapFinished" />

      <div class="mt-5">
        <button @click="back()" type="button" class="btn btn-light btn-lg me-2">
          <i class="bi bi-chevron-left "></i>
          <!-- Next -->
        </button>
        <button v-show="!heatmap" disabled type="button" class="btn btn-light btn-lg">
          Next
        </button>
        <button v-show="heatmap" @click="nextSlide()" type="button" class="btn btn-success btn-lg">
          Next
        </button>
      </div>
    </div>

  </div>

  <div v-show="currentSlide === 4" class="">
    <div class="vertical-center text-center w-100">
      <div class="big-form-font2 text-secondary">
        <b>Good to go!</b>
        We will use this information to setup some parts of the app
      </div>

      <div class="mt-4 text-secondary">
        <div class="row">
          <div class="col-6 sm-text-left"> Company Name</div>
          <div class="col-6 sm-text-right">{{companyName}} </div>
        </div>
        <div class="row mt-2">
          <div class="col-6 sm-text-left">Primary Business Activity</div>
          <div class="col-6 sm-text-right">{{heatmap}}</div>
        </div>


      </div>


      <div class="mt-5">
        <button @click="back()" type="button" class="btn btn-light btn-lg me-2">
          <i class="bi bi-chevron-left "></i>
        </button>
        <button @click="finish()" type="button" class="btn btn-success btn-lg">
          <span v-show="!saving">
            Get started
          </span>
          <div v-show="saving" class="rotate-slowly">
            <i class="bi bi-star-fill" width="16" height="16"></i>
          </div>
        </button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import HeatmapDropdown from '@/tool/components/HeatmapDropdown.vue'
export default {
  name: 'Intro',
  components: {
    HeatmapDropdown,
  },
  data: function() {
    return {
      companyName: '',
      heatmap: '',
      currentSlide: 1,
      slides: [1, 2, 3, 4],
      saving: false,
    }
  },

  methods: {
    goto: function(name) {
      this.$router.push({ path: name }).catch(err => {})
    },
    heatmapFinished: function(name) {
      this.heatmap = name
    },
    nextSlide: function() {
      this.currentSlide = this.currentSlide >= this.slides.length ? this.slides.length : this.currentSlide + 1
      if (this.currentSlide === 2) {
        this.focusInput()
      }
    },
    back: function() {
      this.currentSlide = this.currentSlide <= 1 ? 1 : this.currentSlide - 1
    },

    focusInput: function() {
      console.log(this.$refs)
      this.$nextTick(() => this.$refs.input.focus())
      // this.$refs.input.focus()
    },
    finish: function() {
      let data = {
        'heatmap': this.heatmap,
        'company_name': this.companyName
      }
      this.$http.post('/user/intro', data).then((response) => {
        this.$store.dispatch('finishIntro', response.data)
      })
    },
  }
}
</script>

<style scoped>
.vertical-container {
  height: 100%;
  position: absolute;
  width: 100%;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}


.big-form-font {
  font-size: 6vw;
  text-align: center;
  border: none;
  font-family: 'Calibri';
  outline: none;
  font-weight: 600;
  /* margin-top: 70px; */
}

.sm-text-left {
  font-size: 2.3vw;
  text-align: right;
  color: lightgrey;
}

.sm-text-right {
  font-size: 2.3vw;
  text-align: left;
}

.outline-none {
  outline: none;
}

.big-form-font2 {
  font-size: 4vw;
  font-family: 'Calibri';
}

.slide-4-text {
  font-size: 4vw;
  font-family: 'Calibri';
}

/* .blinking {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
} */
</style>
