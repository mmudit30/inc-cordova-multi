<template>
  <v-layout>
    <v-flex class="prodlist">
      <v-list
        :to="`${product.link}`"
        v-for="product in product_list"
        :key="product.link"
        light>
          <productbar/>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  import productbar from './ProductBar.vue'
  export default {
    components: {
      productbar
    },
    data () {
      return {
        product_list: [
          {link: '/cart/product1'},
          {link: '/cart/product1'},
          {link: '/cart/product1'},
          {link: '/cart/product1'}
        ]
      }
    }
  }
</script>

<style>
  .prodlist {
    margin-bottom: 70px;
  }
</style>
