import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Hello from '@/components/Hello.vue'
import signup from '@/components/Signup.vue'
=======
import Home from '@/pages/home.vue'
import Product from '@/pages/products.vue'
>>>>>>> upstream/master
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'signup',
      component: signup
=======
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Product',
      component: Product
>>>>>>> upstream/master
    }
  ]
})
