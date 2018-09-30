<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-bottom-nav
          :active.sync="bottomNav"
          height="100px"
          :value="true"
          fixed
          color="white">
          <v-btn
            :to="`${item.link}`"
            v-for="item in buttonitem"
            flat light color="primary">
              <span style="font-size: 18px;">{{item.title}}</span>
              <v-icon medium>{{item.icon}}</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {
        bottomNav: 'home',
        buttonitem: [
          {icon:'home',link:'/home',title:'Home'},
          {icon:'shopping_cart',link:'/products/cart',title:'Cart'},
          {icon:'account_circle',link:'/account',title:'Account'},
        ]
      }
    }
  }
</script>
<style media="screen">
  .btn-item {

  }
</style>
