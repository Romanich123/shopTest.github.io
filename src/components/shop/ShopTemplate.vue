<template>
  <div class="shop-wrapper__content color__bg--dark">
    <div class="product-block">
      <h3 class="typography typography__size--h3 typography__font--leksaBold color--white text-center">Кристаллы Незера</h3>
      <div class="product-grid">
        <ShopItem :list="crystals" :crystal="false"/>
      </div>
    </div>
    <div class="product-block">
      <h3 class="typography typography__size--h3 typography__font--leksaBold color--white text-center">Монеты Незера</h3>
      <div class="product-grid">
        <ShopItem :list="coins" :crystal="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShopItem from "./ShopItem.vue";
export default {
  name: "ShopTemplate",
  components: {ShopItem},
  data() {
    return{
      crystals:[
        {
          name: 'x100',
          benefit: 'x500',
          price: '10',
          descr: 'Handful of coins',
          url:  require('../../assets/crystals_one.png'),
          nameItem: 'large crystals'
        },
        {
          name: 'x1500',
          benefit: 'x700',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_two.png'),
          nameItem: 'small crystals'
        },
        {
          name: 'x100',
          benefit: 'x500',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_three.png'),
          nameItem: 'small crystals'
        },
        {
          name: 'x100',
          benefit: 'x500',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_five.png'),
          nameItem: 'small crystals'
        },
        {
          name: 'x100',
          benefit: 'x500',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_six.png'),
          nameItem: 'small crystals'
        },
        {
          name: 'x550',
          benefit: 'x550',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_seven.png'),
          nameItem: 'medium crystals'
        },
        {
          name: 'x1500',
          benefit: 'x1500',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_eight.png'),
          nameItem: 'large crystals'
        },
        {
          name: 'x750',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/crystals_nine.png'),
          nameItem: 'big crystals'
        },
      ],
      coins: [
        {
          name: 'x250',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_1.png'),
          nameItem: 'small coins'
        },
        {
          name: 'x550',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_2.png'),
          nameItem: 'medium coins'
        },
        {
          name: 'x750',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_3.png'),
          nameItem: 'small coins'
        },
        {
          name: 'x1050',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_4.png'),
          nameItem: 'small coins'
        },
        {
          name: 'x1550',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_5.png'),
          nameItem: 'small coins'
        },
        {
          name: 'x2750',
          benefit: 'x1000',
          price: '10',
          descr: 'Handful of coins',
          url: require('../../assets/coins_6.png'),
          nameItem: 'small coins'
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>