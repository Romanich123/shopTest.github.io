<template>
  <div class="shop-wrapper__nav">
    <ul class="shop-wrapper__menu">
      <li class="shop-wrapper__item ">
        <router-link to="/" class="shop-wrapper__link typography__size--subtitle-2 typography__font--leksaBold ">Монстр Боксы</router-link>
      </li>
      <li class="shop-wrapper__item">
        <router-link to="/bank" class="shop-wrapper__link typography__size--subtitle-2 typography__font--leksaBold">Банк</router-link>
      </li>
      <li class="shop-wrapper__item">
        <router-link to="/boxes" class="shop-wrapper__link typography__size--subtitle-2 typography__font--leksaBold">Наборы</router-link>
      </li>
      <li class="shop-wrapper__item">
        <router-link to="/special" class="shop-wrapper__link typography__size--subtitle-2 typography__font--leksaBold">Спец<br>предложения</router-link>
      </li>
      <li class="shop-wrapper__item">
        <router-link to="/promo" class="shop-wrapper__link typography__size--subtitle-2 typography__font--leksaBold">Промо<br>коды</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
name: "NavShop"
}
</script>

<style scoped>

</style>