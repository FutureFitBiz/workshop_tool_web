
<template>
<div class="">
  <div class="col-lg-10 offset-lg-1 text-start">

    <h1 class="mt-5">
      Bug / Suggestion
    </h1>
    <p>
      Found a bug, or have a suggestion let us know! We are constantly trying to improve.
    </p>
    <p>
      <textarea v-model="bugtext" class="form-control" rows="3"></textarea>
    </p>

    <div v-show="saved" class="alert alert-success" role="alert">
      Saved, thanks for the submission!
    </div>

    <div @click="saveText" class="btn btn-success">
      Submit
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: 'Bug',
  components: {},
  data: function() {
    return {
      bugtext: '',
      saved: false,
    }
  },
  computed: {},
  methods: {
    init: function() {},
    goto: function(name) {
      this.$router.push({ path: name }).catch(err => {})
    },
    saveText: function() {
      // this.loading = true
      this.$http.post('bug', { text: this.bugtext }).then((response) => {
        this.saved = true
      })

    },
  }
}
</script>

<style >

</style>
