<template>
<div class="container text-left offset-1 col-10 mt-5 mb-5">
  <div class="row mt-5">
    <div class="col-10">
      <Breadcrumb :crumbs="crumbs" />
      <h1 class="float-left weight-100 mt-5">{{product.name}} </h1>
    </div>
    <div class="col-2">
      <router-link class="align-text-top ml-3" :to="{ path: `/pp/${this.$route.params.product_code}/edit` }">
        <button type="button" class="btn btn-light float-right ">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
            <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
          </svg>
        </button>
      </router-link>
    </div>
  </div>

  <div class="">
    <div class="row mt-2">
      <div class="col-3 weight-100"> Description </div>
      <div class="col-9"> {{product.description}}
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-3 weight-100"> Stage </div>
      <div class="col-9"> {{product.stage_name}} </div>
    </div>

    <div class="row mt-2">
      <div class="col-3 weight-100"> Revenue </div>
      <div class="col-9"> {{product.revenue_type == '0' ? 'N/A' : product.revenue | toCurrency}} </div>
    </div>

    <div class="row mt-2">
      <div class="col-3 weight-100"> Cost </div>
      <div class="col-9"> {{product.cost | toCurrency}} </div>
    </div>

    <div class="row mt-5">
      <div class="col-3 weight-100"> Positive Pursuits Progress </div>
      <div class="col-9">
        <span>{{product.completed_impacts}}/{{product.total_impacts}}</span>
      </div>
    </div>
  </div>

  <div v-show="!loading">
    <div v-show="product.has_facets && product.has_properties" class=" mt-5">
      <div class=" btn btn-outline-success" @click="goto(`/pp/${$route.params.product_code}/identification`)">
        View Positive Pursuits
      </div>
    </div>

    <div v-show="!product.has_facets || !product.has_properties" class="highlight mt-5" role="alert">

      <h6 class="m-0">
        Please complete
        <span v-if="!product.has_facets">
          <router-link :to="{ path: `/pp/${$route.params.product_code}/setup` }" class="m-0 p-0">
            <a type="button" class="text-success"><u><b>Setup</b></u></a>
          </router-link>
          <span v-if="!product.has_facets && !product.has_properties">
            &
          </span>
        </span>
        <span v-if="!product.has_properties">
          <router-link :to="{ path: `/pp/${$route.params.product_code}/identification` }" class="m-0 p-0">
            <a type="button" class="text-success"><u><b>Identification</b></u></a>
          </router-link>
        </span>

        to be assigned Impacts
      </h6>

    </div>

  </div>
</div>

</div>
</template>

<script>
import { findProduct } from '@/tool/utils/utils'
import Breadcrumb from '@/tool/components/Breadcrumb'

export default {
  name: 'Impacts',
  data: function() {
    return {
      product: {},
      actions: [],
      crumbs: [],
      loading: true,
    }
  },
  components: {
    Breadcrumb,
  },
  watch: {
    '$route': 'loadActions'
  },
  created: function() {
    this.loadActions()
  },
  methods: {
    goto: function(path) {
      this.$router.push({ path: path }).catch(err => {})
    },
    loadActions: function() {
      this.loading = true
      this.product = {}
      this.$store.dispatch('getProducts').then(() => {
        this.product = findProduct(this.$route.params.product_code)
        this.$http.get(`/product/${this.product.id}/impacts`).then((response) => {
          this.$store.commit('setImpacts', response.data)
        })
        this.crumbs = [{
            title: 'Positive Pursuits',
            path: 'pp'
          },
          {
            title: this.product.name,
          }
        ]
        this.loading = false
      })
    },
  },
}
</script>

<style>

</style>
