<template>
  <button class="c-btn c-btn__buy">
    Купить

    <span  v-if="crystal"><img src="../../assets/crystals_7.png" alt="crystal"></span>
    <span class="color--green" v-else style="padding-right: 5px">$</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vButton",
  props: {
    crystal:{
      type: Boolean
    }
  }
}
</script>