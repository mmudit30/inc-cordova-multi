<template>
  <v-layout>
    <v-flex class="prodlist">
      <v-list
        :to="`${product.link}`"
        v-for="product in product_list"
        :key="product.link"
        light>
          <shopproductbar/>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  import shopproductbar from './ShopProductBar.vue'
  export default {
    components: {
      shopproductbar
    },
    data () {
      return {
        product_list: [
          {link: 'product1'},
          {link: 'product1'},
          {link: 'product1'},
          {link: 'product1'}
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
