import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Products from '@/pages/products.vue'
import ShopCart from '@/pages/shopcart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart/shopcart',
      name: 'ShopCart',
      component: ShopCart
    }
  ]
})
