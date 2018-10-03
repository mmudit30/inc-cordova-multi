<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-bottom-nav
          height="110px"
          :value="true"
          fixed
          color="#f5f5f5">
            <v-btn
              v-for="buttons in cartbuttons"
              :to="`${buttons.link}`"
              flat light color="primary">
              <span style="font-size: 18px;">{{buttons.title}}</span>
              <v-icon medium>{{buttons.icon}}</v-icon>
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
      cartbuttons: [
        {icon: 'shopping_basket', link: '/products', title: 'Products'},
        {icon: 'payment', link: '/products/cart/checkout', title: 'Checkout'}
      ]
    }
  }
}
</script>

<style media="screen">
  .text_checkout {
    font-family: sans-serif;
    font-size: 18px;
    flex-wrap: wrap;
  }
</style>
