<template>
  <v-layout>
    <v-flex>
      <v-bottom-nav
        height="90px"
        :value="true"
        fixed
        color="#f5f5f5">
        <v-icon style="font-size: 30px;" color="blue">shopping_cart</v-icon>
        <span class="cart_name">YOUR CART</span>
        <span class="cart_quantity">({{n}})</span>
      </v-bottom-nav>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        n: 10
      }
    }
  }
</script>

<style>
  .cart_name {
    color: #1e88e5;
    font-size: 30px;
    margin-left: 15px;
    margin-top: 22px;
  }
  .cart_quantity {
    color: #1e88e5;
    font-size: 28px;
    margin-left: 5px;
    margin-top: 24px;
  }
</style>
