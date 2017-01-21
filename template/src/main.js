import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

require('./directives/actives.js')
require('./plugins/actives.js')

Vue.use( VueResource )

import App from './App.vue'
import RouteR from './routes/router'
import Store from './vuex/store'

sync(store, router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: Store
})

Vue.myGlobalMethod()
