
<template>
<div class="">
  <div class="col-lg-10 offset-lg-1 text-start">
    <h1 class="mt-5">
      What's Next?
    </h1>

    <p>

      Future-Fit’s mission is to chart a path toward a society which is
      <b>environmentally restorative, socially just and economically inclusive.</b>
      The UN Sustainable Development Goals (SDGs) offer a shared vision for the challenges that must be addressed as we work toward this future.
    </p>
    <p>
      By pursuing future-fitness, all businesses can make credible positive contributions toward the SDGs, while simultaneously working to ensure that they aren’t inadvertently undermining progress elsewhere.
    </p>

    <h3>
      To learn more consider:

    </h3>
    <div class="">

    </div>
    <h5 class="mt-3">
      Joining our <a target="_blank" href="https://futurefitbusiness.org/changemaker-community/">Changemaker community</a>
    </h5>

    <p>
      The Changemaker Community brings together sustainability and business professionals around the Future-Fit Business Benchmark. Through access to exclusive resources and practical tools, regular events and input from the Future-Fit team, members
      learn how they can play their part in transforming business. The Community is the space to connect and collaborate in pursuit of a flourishing future for all.
    </p>

    <div class="">

    </div>
    <h5 class="mt-3">
      Explore becoming a <a target="_blank" href="https://futurefitbusiness.org/become-a-pioneer/">Future-Fit Pioneer</a>
    </h5>

    <p>
      Pioneers recognise the need to become Future-Fit and disclose progress along the way. This tool is a pre-release version of an online Management Dashboard which is currently being developed to support users of the Future-Fit Business Benchmark.
    </p>

    <h5 class="mt-3">
      Get in touch.
    </h5>
    <p>
      For more information drop us a line at <b>{{$store.state.supportEmail}}</b>.
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
