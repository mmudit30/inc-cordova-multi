<template lang="html">
  <v-app>
    <titlebar :showbackarrow="true"></titlebar>
    <v-content>
      <productdetails style="margin-top: 55px;"/>
    </v-content>
    <v-footer>
      <v-btn :to="`${'/products/cart'}`"><bottomcart/></v-btn>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomcart from '@/components/BottomCart.vue'
import titlebar from '@/components/Titlebar.vue'
import searchbar from '@/components/SearchBar.vue'
import productdetails from '@/components/ProductDetails.vue'
export default {
  components:{
    titlebar,
    productdetails,
    bottomcart
  }
}
</script>

<style lang="css">
</style>
