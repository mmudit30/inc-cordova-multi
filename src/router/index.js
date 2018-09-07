import Vue from 'vue'
import Router from 'vue-router'
import BottomNavigation from '@/components/BottomNavigation.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Titlebar',
      component: BottomNavigation
    }
  ]
})
