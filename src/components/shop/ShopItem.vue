<template>
    <div class="product-grid__item" v-for="(item, index) in list" :key="index">
      <div class="product-grid__banner">
        <div class="product-grid__info">
          <img src="../../assets/coin-flat.svg" alt="coin">
          <p class="typography__font--bold">{{item.benefit}}</p>
        </div>

      </div>
      <div class="product-grid__header text-center">
        <img :src="item.url" :alt="item.nameItem">
      </div>
      <div class="product-grid__body">
        <div class="">
          <h3 class="typography__size--h3 color--white typography__font--bold">{{item.name}}</h3>
          <p class="typography__size--subtitle-3 typography__font--regular color--white">{{item.descr}}</p>
        </div>
      </div>
      <div class="product-grid__footer">
        <v-button :crystal="crystal">
          {{item.price}}
        </v-button>
      </div>
    </div>

</template>

<script>
import VButton from "../buttons/vButton.vue";
export default {
  name: "ShopItem",
  components: {VButton},
  props: {
    list: {
      type: Array,
      required: true
    },
    crystal: {
      type: Boolean
    }
  }
}
</script>

<style scoped>


</style>