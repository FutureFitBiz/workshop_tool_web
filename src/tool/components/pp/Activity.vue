<template>
<div class="container offset-1 col-10 mt-5 mb-5 text-start">
  <!-- <Breadcrumb :crumbs="crumbs" /> -->

  <!-- <h3 class=" mt-5">Positive Pursuits </h3> -->
  <!-- <sup class="">&#8224;</sup>We generate the Impacts based on your answers in Setup & Identification as accurately as possible, however if a particular Impact does not make sense,
  you can mark it as not applicable (n/a), these Impacts will not show up in the final report. -->

  <!-- {{product}} -->
  <div class="d-flex">
    <h1 class="row title-underline-pp">
      {{product.name}}
    </h1>

  </div>

  <!-- <h5 v-else class="row ">
    Loading
  </h5> -->

  <div class="row h5 mt-5">
    Your Activities Impacts
  </div>

  <table class="table mt-3">
    <thead>
      <tr>
        <th scope="col">Impact</th>
        <th scope="col">SDG targets</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody v-if="Object.keys(product).length">
      <tr v-if="product.impacts.length" v-for="impact in product.impacts">
        <td>{{impact.description}}</td>
        <td>{{impact.sdgs}}</td>

      </tr>
      <tr v-else>
        <td>No impacts</td>

      </tr>
    </tbody>
  </table>


</div>
</template>

<script>
export default {
  name: 'ppAll',
  data: function() {
    return {}
  },

  computed: {
    product: function() {
      let res = this.$store.state.pp[this.$route.params.product_code]
      return res ? res : {}
    }
  },
  methods: {},
}
</script>
