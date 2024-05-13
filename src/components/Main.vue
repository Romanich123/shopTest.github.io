<template>
    <Header/>
    <main>
      <section class="shop-wrapper">
        <div class="container">
          <nav-shop/>
          <shop-template/>
        </div>
      </section>
    </main>
</template>

<script>
import Header from "./Header.vue";
import NavShop from "./shop/NavShop.vue";
import ShopTemplate from "./shop/ShopTemplate.vue";
export default {
  name: "Main",
  components: {ShopTemplate, NavShop, Header},
}
</script>

<style scoped>

</style>