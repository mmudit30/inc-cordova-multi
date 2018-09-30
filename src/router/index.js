import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home.vue'
import Products from '@/pages/products.vue'
import Shopcart from '@/pages/shopcart.vue'
import Productdetail from '@/pages/productdetail.vue'
import Login from '@/pages/LoginPage.vue'
import Useraccount from '@/pages/useraccount.vue'
import SuggestFeed from '@/pages/SuggestFeed.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/cart',
      name: 'ShopCart',
      component: Shopcart
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/product1',
      name: 'ProductDetail',
      component: Productdetail
    },
    {
      path: '/account',
      name: 'Useraccount',
      component: Useraccount
    },
    {
      path: '/account/feedback',
      name: 'suggestFeed',
      component: SuggestFeed
    }
  ]
})
