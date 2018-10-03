<template lang="html">
  <v-app>
    <titlebar :showbackarrow="true"></titlebar>
    <v-content style="margin-top: 55px">
      <shopcarttotalbar/>
      <productlistcart/>
    </v-content>
    <v-footer>
      <bottomnavigation/>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
import productlistcart from '@/components/ProductList_Cart.vue'
import shopcarttotalbar from '@/components/ShopCartTotalBar.vue'
export default {
  components:{
    titlebar,
    shopcarttotalbar,
    productlistcart,
    bottomnavigation
  }
}
</script>

<style lang="css">
</style>
