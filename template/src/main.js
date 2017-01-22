import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

require('./directives/actives.js')
require('./plugins/actives.js')

Vue.use( VueResource )

import App from './App.vue'
import Router from './routes/router'
import Store from './vuex/store'

sync(Store, Router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: Store
})
