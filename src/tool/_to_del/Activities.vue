<template>
<div class="container text-start offset-1 col-10 mt-5 mb-5">
  <!-- <Breadcrumb :crumbs="crumbs" /> -->

  <!-- <h3 class=" mt-5">Positive Pursuits </h3> -->
  <!-- <sup class="">&#8224;</sup>We generate the Impacts based on your answers in Setup & Identification as accurately as possible, however if a particular Impact does not make sense,
  you can mark it as not applicable (n/a), these Impacts will not show up in the final report. -->


  <h1 class="row mt-5">
    All Activities
  </h1>



  <table class="table mt-3">
    <thead>
      <tr>
        <!-- <th scope="col">#</th> -->
        <!-- <th scope="col"></th> -->
        <th scope="col">Name</th>
        <!-- <th scope="col">Positive Pursuit</th> -->
        <th scope="col">SDGs</th>
        <th scope="col"></th>
        <!-- <th scope="col"></th> -->
        <!-- <th scope="col">n/a<sup class="">&#8224;</sup> ({{product.na_impacts}})</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in $store.state.pp">
        <td v-if="deleting !== product.id">{{product.name}}</td>
        <!-- <td class=""><span v-if="$store.state.debugMode">{{item.option}} - </span>{{item.description}}</td> -->
        <!-- <td>{{item.pp}}</td> -->
        <td v-if="deleting !== product.id" class="">{{product.sdgs}}</td>

        <!-- <td class="">
          <div class="mt-1 form-check custom-checkbox">
            <input v-bind:id="item.id" :checked="!item.active" @change="enableDisableImpact($event)" type="checkbox" class="custom-control-input">
            <label :for="product.id" class="custom-control-label">
            </label>
          </div>
        </td> -->
        <td v-if="deleting !== product.id" @click="deleting = product.id" class="">
          <i class="bi bi-x-circle"></i>
        </td>
        <td v-if="deleting === product.id" class="">
        </td>
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

  <!-- <div v-if="$store.state.currentImpacts.length === 0" class="highlight mt-5" role="alert"> -->

  <!-- <h6 class="m-0">
      Please complete
      <router-link :to="{ path: `/pp/${this.$route.params.product_code}/setup` }" class="m-0 p-0">
        <a type="button" class="text-success"><u><b>Setup</b></u></a>
      </router-link>
      &
      <router-link :to="{ path: `/pp/${this.$route.params.product_code}/identification` }" class="m-0 p-0">
        <a type="button" class="text-success"><u><b>Identification</b></u></a>
      </router-link>

      to be assigned Impacts
    </h6> -->

  <!-- </div> -->

</div>
</template>

<script>
// import { findProduct } from '@/tool/utils/utils'
// import Breadcrumb from '@/tool/components/Breadcrumb'

export default {
  name: 'ppAll',
  data: function() {
    return {
      deleting: [],
      // product: {},
      // crumbs: []
    }
  },
  // components: {
  //   Breadcrumb,
  // },
  // watch: {
  //   '$route': 'getData'
  // },
  // created: function() {
  //   // this.getData()
  // },
  methods: {
    // product: function() {
    //   return this.$store.state.pp
    // }
  },
  methods: {
    // getData: function() {
    //   this.$store.dispatch('getProducts').then(() => {
    //     this.product = findProduct(this.$route.params.product_code)
    //     this.$http.get(`/product/${this.product.id}/impacts`).then((response) => {
    //       this.$store.commit('setImpacts', response.data)
    //     })
    //     this.crumbs = [{
    //         title: 'Positive Pursuits',
    //         path: 'pp'
    //       },
    //       {
    //         title: this.product.name,
    //         path: this.product.path,
    //       },
    //       {
    //         title: 'Impacts',
    //       },
    //     ]
    //   })
    // },
    deleteActivity: function(id) {
      this.$http.get(`product/delete/${id}`).then((response) => {
        this.$store.dispatch('getActivities')
      })
    },
  },
}
</script>
