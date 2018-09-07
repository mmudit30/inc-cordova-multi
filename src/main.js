// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.use(Vuetify, {
  iconfont: 'mdi',
  icons: {
    'product': 'mdi-dropbox',
    'support': 'mdi-lifebuoy',
    'steam': 'mdi-steam-box',
    'pc': 'mdi-desktop-classic',
    'xbox': 'mdi-xbox',
    'playstation': 'mdi-playstation',
    'switch': 'mdi-nintendo-switch'
  }
})
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.use(Vuetify, {
  iconfont: 'fa4'
})
Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'cancel': 'fas fa-ban',
    'menu': 'fas fa-ellipsis-v'
  }
})
const MY_ICONS = {
  'complete': '',
  'cancel': '',
  'close': '',
  'delete': '', // delete (e.g. v-chip close)
  'clear': '',
  'success': '',
  'info': '',
  'warning': '',
  'error': '',
  'prev': '',
  'next': '',
  'checkboxOn': '',
  'checkboxOff': '',
  'checkboxIndeterminate': '',
  'delimiter': '', // for carousel
  'sort': '',
  'expand': '',
  'menu': '',
  'subgroup': '',
  'dropdown': '',
  'radioOn': '',
  'radioOff': '',
  'edit': ''
}

Vue.use(Vuetify, {
  icons: MY_ICONS
})
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
