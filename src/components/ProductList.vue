<template>
  <v-layout>
    <v-flex class="prodlist">
      <v-list
        v-show="showproducts"
        :to="`${product.link}`"
        v-for="product in product_list"
        :key="product.link"
        light>
          <productbar/>
      </v-list>
      <v-list
        v-show="showcartitems"
        v-for="product in product_list"
        :key="product.link"
        light>
          <shopproductbar/>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  import productbar from './ProductBar.vue'
  import shopproductbar from './ShopProductBar.vue'
  export default {
    components: {
      productbar,
      shopproductbar
    },
    data () {
      return {
        product_list: [
          {link: 'product_1'},
          {link: 'product_2'},
          {link: 'product_3'},
          {link: 'product_4'}
        ]
      }
    },
    props: {
      showproducts: Boolean,
      showcartitems: Boolean
    }
  }
</script>

<style>
  .prodlist {
    margin-bottom: 80px;
  }
</style>
