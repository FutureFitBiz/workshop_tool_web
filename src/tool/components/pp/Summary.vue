
<template>
<div class="text-left mt-5 col-10 offset-1 col-xl-10 offset-xl-1">

  <div class="mt-5 text-start">
    <h1 class="title-underline-pp">
      Positive Activities
    </h1>

    <p>
    </p>

    <div class="">

    </div>


    <div class="accordion mt-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header w-100" id="headingOne">
          <button :class="{'collapsed': startCollapsed}" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            About
          </button>
        </h2>

        <div id="collapseOne" ref="infoCollapsepp" :class="{'show': !startCollapsed}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>
              There are many things companies can do — in particular through the goods and services they offer — to address global challenges head on, and so contribute positively to the SDGs.
            </p>
            <p>
              But real, meaningful results are few and far between, and it can be hard to spot them in a sea of eye-catching marketing claims, which often amount to little more than greenwashing.
            </p>
            <p>
              The Future-Fit Business Benchmark helps to address this issue, by defining the full range of outcomes which — when delivered — move us forward. We call these Positive Pursuits.
            </p>
            <p>
              In this section you can input any positive activity you are undertaking, and we’ll guide you through a series of questions to identify which SDGs it is most likely to be contributing to.
            </p>
            <p>
              You might start with a product which aims to address a key societal need, or perhaps with a philanthropic project which focuses on supporting communities near your operations.
            </p>
            <p>
              You can add any number of activities, and when you’re ready you can switch to viewing the relevant SDG links, to see how each one is helping to speed up our collective progress.
            </p>
            <p>
              Any claims of positive impact should be backed up by solid evidence. That’s beyond the scope of this workshop, but a future version of this tool will help you to gather such data.
            </p>
          </div>
        </div>
      </div>
    </div>

    <table v-if="Object.keys($store.state.pp).length" class="table mt-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">SDGs</th>
          <th scope="col">SDG Targets</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in $store.state.pp">
          <td>{{product.name}}</td>
          <td v-if="deleting !== product.id" class="">{{product.sdgs}}</td>
          <td v-if="deleting !== product.id" class="col-4">{{product.sdg_targets}}</td>
          <td v-if="deleting !== product.id" @click="deleting = product.id" class=""> <i class="bi bi-x-circle"></i> </td>
          <td v-if="deleting === product.id" class="">
            Are you sure?
            <div @click="deleting = ''" class="ms-2 btn btn-sm btn-outline-secondary">
              Cancel
            </div>
            <div @click="deleteActivity(product.id)" class="ms-2 btn btn-sm btn-danger">
              Delete Activity
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-100" v-show="Object.keys($store.state.pp).length === 0">
      <div class="d-grid col-6 mx-auto">
        <div @click="goto('/pp/new')" class="btn btn-outline-success m-3"> Add an activity </div>
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
  name: 'ppSummary',
  mounted: function() {
    this.startCollapsed = this.$store.state.pageVisited.pp
    this.$store.commit('setPageVisited', 'pp')
  },

  data: function() {
    return {
      deleting: [],
      clicked: false,
      startCollapsed: false
    }
  },

  computed: {},
  methods: {
    goto: function(path) {
      this.$router.push({ path: path }).catch(err => {})
    },

    deleteActivity: function(id) {
      this.$http.get(`product/delete/${id}`).then((response) => {
        this.$store.dispatch('getActivities')
      })
    },
  }
}
</script>

<style >
</style>
