

<template>
<div class="text-start col-md-10 offset-md-1 col-xl-8 offset-xl-2 mt-5">
  <h3>Negative Risks</h3>

  <beSankey />

  <div class="row mt-4 p-2">
    <table class="table table-sm ">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Goal</th>
          <th scope="col">SDG Links</th>
          <th scope="col">Risk Level</th>
          <!-- <th scope="col">Goal Answers</th> -->
        </tr>
      </thead>
      <tbody>
        <tr @click="goto(`be/${item.code}`)" class="be-hover-home" v-for="item in $store.state.be">
          <td>{{item.code}}</td>
          <td>{{item.title}}</td>
          <td class="col-3"> {{item.sdgs}}</td>
          <td class="text-center">
            <span class="badge rounded-pill " :class="{
              'bg-danger': item.risk ==='High',
              'bg-warning': item.risk ==='Moderate',
              'bg-success': item.risk ==='Low',
              'bg-light': item.risk ==='Unlikely'
              }">
              {{item.risk}}
            </span>
          </td>
          <!-- <td>
            <span v-for="(stat, key) in item.stats">{{key}}:{{stat}} </span>
          </td> -->
        </tr>
      </tbody>
    </table>

  </div>

  <h3 class="mt-5">Positive Activites</h3>
  <ppSankey class="mt-3" />

  <table class="table mt-3 mb-5">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">SDGs</th>
        <th scope="col">SDG Targets</th>
      </tr>
    </thead>
    <tbody>
      <tr @click="goto(`pp/${product.code}`)" class="be-hover-home" v-for="product in $store.state.pp">
        <!-- {{product}} -->
        <td>{{product.name}}</td>
        <td class="">{{product.sdgs}}</td>
        <td class="">{{product.sdg_targets}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
import ppSankey from '@/tool/components/ppSankey'
import beSankey from '@/tool/components/beSankey'

export default {
  name: 'Login',
  data: function() {
    return {
      active: 'user'
    }
  },
  components: {
    ppSankey,
    beSankey,
  },
  created: function() {

  },
  methods: {
    goto: function(path) {
      this.$store.commit('setActivePage', path)
      this.$router.push({ path: path }).catch(err => {})
    },
  }
}
</script>
