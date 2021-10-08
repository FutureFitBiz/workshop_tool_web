
<template>
<div class="">
  <div class="col-lg-10 offset-lg-1 text-start">
    <h1 class="mt-5">
      About
    </h1>
    <p>
      This tool is a pre-release version of an online Management Dashboard which is currently being developed to support users of the Future-Fit Business Benchmark.
    </p>
    <p>
      This version is for use only in SDG workshops which are being run by the Future-Fit team.
    </p>
    <p>
      For more information on the Future-Fit Business Benchmark, or if you want to request ongoing access to this tool as it evolves, drop us a line at
      <b>{{$store.state.supportEmail}}</b>.
    </p>
  </div>

  <div class="row mt-5">
    <div class="col-7">
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Help',

  components: {},
  data: function() {
    return {

    }
  },
  computed: {},
  methods: {
    init: function() {},
    goto: function(name) {
      this.$router.push({ path: name }).catch(err => {})
    },
  }
}
</script>

<style >

</style>
