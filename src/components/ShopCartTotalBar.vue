<template>
  <v-container pa-0 ma-0>
    <v-layout>
      <v-card style="width: 100%">
        <div style="margin-top: 10px; margin-left: 20px">
          <span style="font-size: 20px;">Cart Total :</span>
          <span style="font-size: 18px">Rs. 500.00</span>
        </div>
        <div style="margin-left: 20px">
          <span style="font-size: 20px">Total Items :</span>
          <span style="font-size: 18px">30</span>
        </div>
        <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 10px">
          <v-btn
            v-for="buttons in cartbuttons"
            :to="`${buttons.link}`"
            outline color="primary" medium>
            <v-icon style="margin-right: 10px;">{{buttons.icon}}</v-icon>
            {{buttons.title}}</v-btn>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
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
