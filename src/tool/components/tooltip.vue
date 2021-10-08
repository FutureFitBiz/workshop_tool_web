
<template>
<div :ref="tooltipId()" class="">
  {{text}}
</div>
</template>


<script>
import { createPopper } from '@popperjs/core';
// const popcorn = document.querySelector('#popcorn');
// const tooltip = document.querySelector('#tooltip');


export default {
  props: ['text'],
  name: 'Tooltip',
  data: function() {
    return {
      company: {},
    }
  },
  created: function() {
    createPopper(popcorn, this.$refs[this.tooltipId()], {
      placement: 'top',
    })
  }

  methods: {
    getProfile: function() {

    },
    tooltipId: function uuidv4() {
      // return a js uuid
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    }



  }
</script>
