import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/pages/products.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    }
  ]
})
