
<template>
<div class="">
  <div class="vertical-center text-center w-100">
    <!-- <div class=""> -->
    <!-- {{heatmapQuestions}} -->
    <div class="mb-3">
      <select @change="clearAndCheck1" :class="{'form-select-lg': xl}" class="form-select  outline-none" v-model="selected1">
        <option disabled value="">Choose...</option>
        <option :value="option.code" v-for="option in options1">{{option.text}}</option>
      </select>
      <!-- <div class="invalid-feedback">Example invalid custom select feedback</div> -->
    </div>

    <div v-if="selected1" class="mb-3">
      <div class="mb-3">
      </div>
      <select @change="clearAndCheck2" :class="{'form-select-lg': xl}" class="form-select outline-none" v-model="selected2">
        <option disabled value="">Choose...</option>
        <option :disabled="option.unavailable" :value="option.code" v-for="option in options2">
          {{option.text}}
          <span v-if="option.unavailable">(Unavailable)</span>
        </option>
      </select>
      <div class="invalid-feedback">Example invalid custom select feedback</div>
    </div>

    <div v-if="selected1 && selected2 && options3.length" class="mb-3">
      <div class="mb-3">
      </div>
      <select :class="{'form-select-lg': xl}" @change="checkFinished" class="form-select outline-none" v-model="selected3">
        <option disabled value="">Choose...</option>
        <option :disabled="option.unavailable" :value="option.code" v-for="option in options3">
          {{option.text}}
          <span v-if="option.unavailable">(Unavailable)</span>
        </option>
      </select>
    </div>

    <!-- </div> -->

  </div>


</div>
</template>

<script>
export default {
  props: ['onFinish', 'xl'],
  name: 'HeatmapDropdown',
  components: {},
  data: function() {
    return {
      heatmap_complete: false,
      selected1: '',
      selected2: '',
      selected3: '',
    }
  },
  watch: {
    '$route': 'reset',
  },
  computed: {
    options2: function() {
      if (this.selected1) {
        let options = Object.values(this.getOptionsWithCode(this.heatmapQuestions[this.selected1]))
        return this.sortOptions(options)
        // return this.getOptionsWithCode(this.heatmapQuestions[this.selected1])
      }
    },
    options3: function() {
      if (this.selected1 && this.selected2) {
        let options = Object.values(this.getOptionsWithCode(this.heatmapQuestions[this.selected1][this.selected2]))
        return this.sortOptions(options)
      }
    },
    options1: function() {
      let options = Object.values(this.$store.state.heatmapQuestions)
      return this.sortOptions(options)
    },
    heatmapQuestions: function() {
      return this.$store.state.heatmapQuestions
    },
  },
  methods: {
    reset: function() {
      this.heatmap_complete = false
      this.selected1 = ''
      this.selected2 = ''
      this.selected3 = ''
      this.checkFinished()
    },
    checkFinished: function() {
      let name = ''
      // console.log('checking')
      let finished = this.selected1 && this.selected2 && (this.selected3 || this.options3.length === 0)
      if (finished) {
        if (this.selected3) {
          name = this.heatmapQuestions[this.selected1][this.selected2][this.selected3].heatmap
        } else {
          name = this.heatmapQuestions[this.selected1][this.selected2].heatmap
        }

      }
      this.onFinish(name)

    },
    getOptionsWithCode: function(obj) {
      let options = []
      for (var i in obj) {
        if (obj[i].code) {
          options.push(obj[i])
        }
      }
      options = this.sortOptions(options)
      // console.log(options)
      return options
    },
    sortOptions: function(options) {
      console.log(options)
      options.sort(function(a, b) {
        return a.text.localeCompare(b.text)
      })
      return options
    },
    clearAndCheck1: function() {
      this.selected2 = ''
      this.selected3 = ''
      this.checkFinished()
    },
    clearAndCheck2: function() {
      this.selected3 = ''
      this.checkFinished()
    },
  }
}
</script>

<style scoped>
</style>
