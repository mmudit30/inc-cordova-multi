<template lang="html">
  <v-app>
    <titlebar :showbackarrow="true"></titlebar>
    <v-content style="margin-top: 55px">
      <productlist :showcartitems="true" :showproducts="false"/>
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
import productlist from '@/components/ProductList.vue'
export default {
  components:{
    titlebar,
    productlist,
    bottomnavigation
  }
}
</script>

<style lang="css">
</style>
